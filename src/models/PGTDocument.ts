import { Range } from 'vscode';
import { Diagnostic, DiagnosticSeverity } from '../parser/validation/PGTDiagnostic';

export enum RuleType {
    Description  = "desc",
    Invariant    = "inv",
    Ensures      = "ensures",
    Requires     = "requires",
    Represents   = "represents",
    Assignable  = "assignable",
    Signals      = "signals",
    Pure         = "pure",
}

export enum EntityType {
    Method = "method",
    Attribute = "attribute",
    Class  = "class",
}

export enum ViewType {
    External = "external",
    Internal = "internal",
}

export enum AccessModifier {
    Public = "public",
    Protected = "protected",
    Private = "private",
}

export const ruleTypeMap: Readonly<Record<string, RuleType>> = {
    "desc":        RuleType.Description,
    "inv":         RuleType.Invariant,
    "represents":  RuleType.Represents,
    "requires":    RuleType.Requires,
    "ensures":     RuleType.Ensures,
    "signals":     RuleType.Signals,
    "assignable": RuleType.Assignable,
    "pure":        RuleType.Pure
};

export abstract class PGTDocumentElement {

    public range?: Range;

}

export abstract class PGTCodeElement extends PGTDocumentElement {

    public accessModifier?: AccessModifier;
    public identifier?: string;
    public name?: string;

    public internalSpecification?: Specification;
    public externalSpecification?: Specification;

}

export class SpecificationRule extends PGTDocumentElement {

    public type?: RuleType;
    public content: string[] = [];

}

export class Subspecification extends PGTDocumentElement {

    public description?: string;
    public rules: SpecificationRule[] = [];

}

export class Specification extends PGTDocumentElement {

    public viewType?: ViewType;
    public entityType?: EntityType;

    public rules: SpecificationRule[] = [];
    public subspecifications: Subspecification[] = [];

}

export class Method extends PGTCodeElement {

    public isConstructor: boolean = false;

    public bodyRange?: Range;

}

export class Attribute extends PGTCodeElement {

    // Intentionally empty.

}

export class Class extends PGTCodeElement {

    public attributes: Record<string, Attribute> = {};
    public methods: Record<string, Method> = {};

    public bodyRange?: Range;

}

export class PGTDocument {

    public static get Empty() {
        return new PGTDocument();
    }

    public errors: Diagnostic[] = [];
    public warnings: Diagnostic[] = [];
    public information: Diagnostic[] = [];
    public hints: Diagnostic[] = [];

    public $package?: string;

    public $class?: Class;

    public attachDiagnostic(diagnostic: Diagnostic): void {
        const diagnostics = diagnostic.severity === DiagnosticSeverity.Error   ? this.errors   :
                            diagnostic.severity === DiagnosticSeverity.Warning ? this.warnings :
                            diagnostic.severity === DiagnosticSeverity.Hint    ? this.hints    : this.information;

        diagnostics.push(diagnostic);
    }

    public isValid(): boolean {
        return (this.errors.length === 0);
    }

}

export function generateTestModel(): PGTDocument {
    let document = new PGTDocument();
    document.$class = {
        identifier: "Program",
        externalSpecification: {
            viewType: ViewType.External,
            entityType: EntityType.Class,
            rules: [
                {
                    type: RuleType.Description,
                    content: [ "The class description", "On two lines." ]
                },
                {
                    type: RuleType.Invariant,
                    content: [ "Invariant" ]
                }
            ],
            subspecifications: []
        },
        internalSpecification: {
            viewType: ViewType.Internal,
            entityType: EntityType.Class,
            rules: [
                {
                    type: RuleType.Description,
                    content: [ "The description of the internal specification." ]
                },
                {
                    type: RuleType.Represents,
                    content: [ "A = B" ]
                }
            ],
            subspecifications: []
        },
        attributes: {
            "anAttribute": {
                identifier: "anAttribute",
                internalSpecification: {
                    viewType: ViewType.Internal,
                    entityType: EntityType.Attribute,
                    rules: [
                        {
                            type: RuleType.Invariant,
                            content: [ "The invariant" ]
                        },
                        {
                            type: RuleType.Represents,
                            content: [ "A representation" ]
                        }
                    ],
                    subspecifications: []
                }
            }
        },
        methods: {
            "main(String[]args)": {
                identifier: "main(String[]args)",
                isConstructor: false,
                externalSpecification: {
                    viewType: ViewType.External,
                    entityType: EntityType.Method,
                    rules: [
                        {
                            type: RuleType.Description,
                            content: [ "The internal method description." ]
                        },
                    ],
                    subspecifications: [
                        {
                            description: "Happy Path",
                            rules: [
                                {
                                    type: RuleType.Requires,
                                    content: [ "A != B" ]
                                },
                                {
                                    type: RuleType.Ensures,
                                    content: [ "A == B" ]
                                }
                            ]
                        }
                    ]
                },
                internalSpecification: {
                    viewType: ViewType.Internal,
                    entityType: EntityType.Method,
                    rules: [
                        {
                            type: RuleType.Description,
                            content: [ "The method description." ]
                        },
                    ],
                    subspecifications: [
                        {
                            description: "Happy Path",
                            rules: [
                                {
                                    type: RuleType.Requires,
                                    content: [ "A != B" ]
                                },
                                {
                                    type: RuleType.Ensures,
                                    content: [ "A == B" ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    };

    return document;
}