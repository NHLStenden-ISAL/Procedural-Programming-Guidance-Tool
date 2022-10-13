import { assert } from "console";
import { Range } from "vscode";
import { Attribute, Class, EntityType, Method } from "../../models/PGTDocument";

export enum DiagnosticCode {
    __ERROR_START__,
    OTHER_PARSER_ERROR, // Parser
    DUPLICATE_EXTERNAL, // Parser
    DUPLICATE_INTERNAL, // Parser
    DUPLICATE_ELEMENT, // Any spec: desc, represents, assignable, pure
    UNEXPECTED_EXTERNAL, // On private method
    UNEXPECTED_INTERNAL, // unused
    UNEXPECTED_ELEMENT, // Any spec
    UNEXPECTED_RULE_CONTENT, // pure
    INCOMPATIBLE_ELEMENT_COMBINATION, // Method spec: assignable, pure
    NAMELESS_SUBSPECIFICATION, // Subspecification
    MISSING_RULE_CONTENT, // desc, represents, assignable, ensures
    __ERROR_END__,

    __WARNING_START__,
    MULTIPLE_ATTRIBUTES, // Parser
    MULTIPLE_CLASSES, // Parser
    MODIFIED_EXTERNAL, // Methods, Classes, separate validator needed
    MISSING_EXTERNAL, // Public Methods, Classes, Attributes 
    MISSING_INTERNAL, // Methods, Classes, Attributes
    MISSING_ELEMENT, // Any spec
    __WARNING_END__,

    __HINT_START__,
    // No Hint Codes yet
    __HINT_END__,

    __INFO_START__,
    // No Info Codes yet
    __INFO_END__,
}

export const diagnosticMessages: Readonly<Record<number, (...args: any) => string>> = {
    [DiagnosticCode.DUPLICATE_EXTERNAL]: (type, name) => `An external specification has already been defined for ${type} \`${name}\`!`,
    [DiagnosticCode.DUPLICATE_INTERNAL]: (type, name) => `An internal specification has already been defined for ${type} \`${name}\`!`,
    
    [DiagnosticCode.DUPLICATE_ELEMENT]: (type, name, element) => `Only one \`${element}\` can be given for specification of ${type} \`${name}\`! Multi-line rules are supported, consider splitting `,

    [DiagnosticCode.UNEXPECTED_EXTERNAL]: (type, name) => `The ${type} \`${name}\` can not have an external specification!`,
    [DiagnosticCode.UNEXPECTED_ELEMENT]: (type, name, element) => `A \`${element}\` is not allowed in specification of ${type} \`${name}\`!`,

    [DiagnosticCode.MULTIPLE_ATTRIBUTES]: (name) => `Specification given for a declaration that declares multiple attributes! Assuming the first attribute, \`${name}\`, by default.`,
    [DiagnosticCode.MULTIPLE_CLASSES]: (name) => `Specifications are not supported for multiple classes in a single file! Assuming the first class \`${name}\` by default.`,

    [DiagnosticCode.MODIFIED_EXTERNAL]: (type, name) => `The external specification of the ${type} \`${name}\` has been modified!`,

    [DiagnosticCode.MISSING_EXTERNAL]: (type, name) => `An external specification is missing for ${type} \`${name}\`!`,
    [DiagnosticCode.MISSING_INTERNAL]: (type, name) => `An internal specification is missing for ${type} \`${name}\`!`,

    [DiagnosticCode.MISSING_ELEMENT]: (type, name, element) => `A \`${element}\` is missing for specification of ${type} \`${name}\`!`,
};

export enum DiagnosticSeverity {
    Error, Warning, Hint, Information
}

export function diagnosticSeverity(code: DiagnosticCode): DiagnosticSeverity {
    return code > DiagnosticCode.__INFO_START__    ? DiagnosticSeverity.Information :
           code > DiagnosticCode.__HINT_START__    ? DiagnosticSeverity.Hint        :
           code > DiagnosticCode.__WARNING_START__ ? DiagnosticSeverity.Warning     : DiagnosticSeverity.Error;
}

export class Diagnostic {

    public code: DiagnosticCode;
    public severity: DiagnosticSeverity;
    
    public range: Range;
    public message: string;

    public constructor(
        code: DiagnosticCode,
        severity: DiagnosticSeverity, 
        range: Range,
        message: string
    ) {
        this.code = code;
        this.severity = severity;
        this.range = range;
        this.message = message;
    }

}
