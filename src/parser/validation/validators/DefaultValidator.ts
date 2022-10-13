import { Position, Range } from "vscode";
import { AccessModifier, Attribute, Class, EntityType, Method, PGTCodeElement, PGTDocument, RuleType, ruleTypeMap, Specification, Subspecification } from "../../../models/PGTDocument";
import { Diagnostic, DiagnosticCode, diagnosticMessages, diagnosticSeverity } from "../PGTDiagnostic";
import { PGTDocumentValidator } from "../PGTDocumentValidator";

interface ValidatorOptions {
    allowedRuleTypes: Set<RuleType>;

    uniqueRuleTypes: Set<RuleType>;
    incompatibleRuleTypes: Map<RuleType, RuleType>;

    subsAllowed: boolean;
    subOptions?: ValidatorOptions;
}

export default class DefaultValidator implements PGTDocumentValidator {

    private static readonly options: Map<EntityType, ValidatorOptions> = new Map([
        [
            EntityType.Class,
            {
                allowedRuleTypes: new Set<RuleType>([
                    RuleType.Description, RuleType.Invariant
                ]),
                uniqueRuleTypes: new Set([
                    RuleType.Description
                ]),
                incompatibleRuleTypes: new Map([
                    // No incompatible rule types possible
                ]),
                subsAllowed: false
            }
        ],
        [
            EntityType.Attribute,
            {
                allowedRuleTypes: new Set<RuleType>([
                    RuleType.Description, RuleType.Represents
                ]),
                uniqueRuleTypes: new Set([
                    RuleType.Description, RuleType.Represents
                ]),
                incompatibleRuleTypes: new Map([
                    // No incompatible rule types possible
                ]),
                subsAllowed: false
            }
        ],
        [
            EntityType.Method,
            {
                allowedRuleTypes: new Set<RuleType>([
                    RuleType.Description, RuleType.Requires, RuleType.Ensures, RuleType.Assignable, RuleType.Pure
                ]),
                uniqueRuleTypes: new Set([
                    RuleType.Description, RuleType.Assignable, RuleType.Pure
                ]),
                incompatibleRuleTypes: new Map([
                    [RuleType.Assignable, RuleType.Pure]
                ]),
                subsAllowed: true,
                subOptions: {
                    allowedRuleTypes: new Set<RuleType>([
                        RuleType.Requires, RuleType.Ensures, RuleType.Signals, RuleType.Assignable, RuleType.Pure
                    ]),
                    uniqueRuleTypes: new Set([
                        RuleType.Signals, RuleType.Assignable, RuleType.Pure
                    ]),
                    incompatibleRuleTypes: new Map([
                        [RuleType.Signals, RuleType.Ensures],
                        [RuleType.Assignable, RuleType.Pure]
                    ]),
                    subsAllowed: false
                }
            }
        ]
    ]);

    private currentDocument?: PGTDocument;

    public validate(document: PGTDocument): boolean {
        this.currentDocument = document;
        if (this.currentDocument!.$class) {
            this.validateClass(this.currentDocument!.$class);
        }

        return this.currentDocument.isValid();
    }

    private validateClass($class: Class): void {
        this.checkForMissingOrUnexpectedSpecifications($class);

        if ($class.externalSpecification) {
            this.validateSpecification($class, $class.externalSpecification);
        }

        if ($class.internalSpecification) {
            this.validateSpecification($class, $class.internalSpecification);
        }

        for (let attribId in $class.attributes) {
            this.validateAttribute($class.attributes[attribId]);
        }

        for (let methodId in $class.methods) {
            this.validateMethod($class.methods[methodId]);
        }
    }

    private validateAttribute(attribute: Attribute): void {
        this.checkForMissingOrUnexpectedSpecifications(attribute);
        
        if (attribute.internalSpecification) {
            this.validateSpecification(attribute, attribute.internalSpecification);
        }
    }

    private validateMethod(method: Method): void {
        this.checkForMissingOrUnexpectedSpecifications(method);

        if (method.externalSpecification) {
            this.validateSpecification(method, method.externalSpecification);
        }

        if (method.internalSpecification) {
            this.validateSpecification(method, method.internalSpecification);
        }
    }

    private checkForMissingOrUnexpectedSpecifications(entity: PGTCodeElement) {
        const type: EntityType = this.determineEntityType(entity);

        if (type !== EntityType.Attribute) {
            if (entity.externalSpecification) {
                if (entity.accessModifier !== AccessModifier.Public) {
                    this.currentDocument!.attachDiagnostic(new Diagnostic(
                        DiagnosticCode.UNEXPECTED_EXTERNAL, diagnosticSeverity(DiagnosticCode.UNEXPECTED_EXTERNAL), entity.range!,
                        `The ${type} \`${entity.name}\` can not have an external specification!`
                    ));
                }
            } else {
                if (entity.accessModifier === AccessModifier.Public) {
                    this.currentDocument!.attachDiagnostic(new Diagnostic(
                        DiagnosticCode.MISSING_EXTERNAL, diagnosticSeverity(DiagnosticCode.MISSING_EXTERNAL), entity.range!,
                        `An external specification is missing for ${type} \`${entity.name}\`!`
                    ));
                }
            }
        }

        if (entity.internalSpecification === undefined) {
            this.currentDocument!.attachDiagnostic(new Diagnostic(
                DiagnosticCode.MISSING_INTERNAL, diagnosticSeverity(DiagnosticCode.MISSING_INTERNAL), entity.range!,
                `An internal specification is missing for ${type} \`${entity.name}\`!`
            ));
        }
    }

    private validateSpecification(owner: PGTCodeElement, specification: Specification) {
        const type: EntityType = specification.entityType!;
        const options: ValidatorOptions = DefaultValidator.options.get(type)!;
        const seenRuleTypes: Set<RuleType> = new Set();

        // Check for unexpected and duplicates
        for (let rule of specification.rules) {

            // Check for disallowed rules
            if (options.allowedRuleTypes.has(rule.type!) === false) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.UNEXPECTED_ELEMENT, diagnosticSeverity(DiagnosticCode.UNEXPECTED_ELEMENT), rule.range!,
                    `\`${rule.type}\` is not allowed in specification of ${type} \`${owner.name}\`!`
                ));
            }

            // Check for duplicates
            const isDuplicate = options.uniqueRuleTypes.has(rule.type!) && seenRuleTypes.has(rule.type!);
            if (isDuplicate) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.DUPLICATE_ELEMENT, diagnosticSeverity(DiagnosticCode.DUPLICATE_ELEMENT), rule.range!,
                    `Only one \`${rule.type}\` can be given for specification of ${type} \`${owner.name}\`!`
                ));
            }

            // Check for unexpected rule content
            if (rule.type === RuleType.Pure) {
                if (rule.content.length !== 0) {
                    this.currentDocument!.attachDiagnostic(new Diagnostic(
                        DiagnosticCode.UNEXPECTED_RULE_CONTENT, diagnosticSeverity(DiagnosticCode.UNEXPECTED_RULE_CONTENT), rule.range!,
                        `Content not allowed for \`pure\` in specification \`${owner.name}\`!`
                    ));
                }
            }

            seenRuleTypes.add(rule.type!);
        }

        // Check for missing rules
        // for (let ruleType of options.allowedRuleTypes) {
        //     if (seenRuleTypes.has(ruleType!) === false) {
        //         this.currentDocument!.attachDiagnostic(new Diagnostic(
        //             DiagnosticCode.MISSING_ELEMENT, diagnosticSeverity(DiagnosticCode.MISSING_ELEMENT), specification.range!,
        //             `\`${ruleType}\` is missing for specification of ${type} \`${owner.name}\`!`
        //         ));
        //     }   
        // }
        
        // Check for incompatible rule types
        for (const [ruleType, otherRuleType] of options.incompatibleRuleTypes) {
            if (seenRuleTypes.has(ruleType) && seenRuleTypes.has(otherRuleType)) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.INCOMPATIBLE_ELEMENT_COMBINATION, diagnosticSeverity(DiagnosticCode.INCOMPATIBLE_ELEMENT_COMBINATION), specification.range!,
                    `\`${ruleType}\` is not compatible with \`${otherRuleType}\` in specification of ${type} \`${owner.name}\`!`
                ));
            }
        }

        // Check subspecifications
        if (options.subsAllowed) {
            for (let subspecification of specification.subspecifications) {
                this.validateSubspecification(subspecification, options.subOptions!);
            }
        } else {
            if (specification.subspecifications.length !== 0) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.UNEXPECTED_ELEMENT, diagnosticSeverity(DiagnosticCode.UNEXPECTED_ELEMENT), specification.range!,
                    `Subspecifications are not allowed in specification of ${type} \`${owner.name}\`!`
                ));
            }
        }
    }

    private validateSubspecification(subspecification: Subspecification, options: ValidatorOptions) {
        const seenRuleTypes: Set<RuleType> = new Set();
        
        // Check for subspecification description
        if ((subspecification.description?.length ?? 0) === 0) {
            this.currentDocument!.attachDiagnostic(new Diagnostic(
                DiagnosticCode.NAMELESS_SUBSPECIFICATION, diagnosticSeverity(DiagnosticCode.NAMELESS_SUBSPECIFICATION), subspecification.range!,
                "Subspecifications must have a name following the \`@sub\` keyword!" 
            ));
        }

        // Check for unexpected and duplicates
        for (let rule of subspecification.rules) {
            // Check for disallowed rules
            if (options.allowedRuleTypes.has(rule.type!) === false) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.UNEXPECTED_ELEMENT, diagnosticSeverity(DiagnosticCode.UNEXPECTED_ELEMENT), rule.range!,
                    `\`${rule.type}\` is not allowed in subspecification \`${subspecification.description}\`!`
                ));
            }

            // Check for duplicates
            const isDuplicate = options.uniqueRuleTypes.has(rule.type!) && seenRuleTypes.has(rule.type!);
            if (isDuplicate) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.DUPLICATE_ELEMENT, diagnosticSeverity(DiagnosticCode.DUPLICATE_ELEMENT), rule.range!,
                    `Only one \`${rule.type}\` can be given for subspecification \`${subspecification.description}\`!`
                ));
            }

            // Check for unexpected rule content
            if (rule.type === RuleType.Pure) {
                if (rule.content.length !== 0) {
                    this.currentDocument!.attachDiagnostic(new Diagnostic(
                        DiagnosticCode.UNEXPECTED_RULE_CONTENT, diagnosticSeverity(DiagnosticCode.UNEXPECTED_RULE_CONTENT), rule.range!,
                        `Content not allowed for \`pure\` in subspecification \`${subspecification.description}\`!`
                    ));
                }
            }

            seenRuleTypes.add(rule.type!);
        }
        
        // Check for incompatible rule types
        for (const [ruleType, otherRuleType] of options.incompatibleRuleTypes) {
            if (seenRuleTypes.has(ruleType) && seenRuleTypes.has(otherRuleType)) {
                this.currentDocument!.attachDiagnostic(new Diagnostic(
                    DiagnosticCode.INCOMPATIBLE_ELEMENT_COMBINATION, diagnosticSeverity(DiagnosticCode.INCOMPATIBLE_ELEMENT_COMBINATION), subspecification.range!,
                    `\`${ruleType}\` is not compatible with \`${otherRuleType}\` in subspecification \`${subspecification.description}\`!`
                ));
            }
        }
    }

    private determineEntityType(entity: Class | Attribute | Method): EntityType {
        return entity instanceof Class     ? EntityType.Class     :
               entity instanceof Attribute ? EntityType.Attribute : EntityType.Method;
    }
    
}
