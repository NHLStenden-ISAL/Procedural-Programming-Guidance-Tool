import { CharStreams, CommonTokenStream, ParserRuleContext, Token } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import assert = require("assert");
import { Diagnostic, Position, Range } from "vscode";
import { AccessModifier, Attribute, Class, EntityType, Method, PGTDocument, RuleType, ruleTypeMap, Specification, SpecificationRule, Subspecification, ViewType } from "../models/PGTDocument";
import DefaultValidator from "./validation/validators/DefaultValidator";
import { PGTJavaLexer } from "./PGTJavaLexer";
import { CompilationUnitContext, ClassDeclarationContext, MethodDeclarationContext, SpecificationContext, SubspecificationContext, SpecificationRuleContext, PGTJavaParser, FieldDeclarationContext, ClassBodyDeclarationContext, GlobalDeclarationContext, ConstructorDeclarationContext, SpecificationElementContext, SubspecificationElementContext } from "./PGTJavaParser";
import { PGTJavaParserVisitor } from "./PGTJavaParserVisitor";

class VisitorResult<Type> {
    
    errors: Diagnostic[] = [];
    warnings: Diagnostic[] = [];
    information: Diagnostic[] = [];
    hints: Diagnostic[] = [];

    value: Type;

    constructor(value: Type) {
        this.value = value;
    }

}

abstract class BaseVisitor<Result> implements ParseTreeVisitor<Result> {

    public visit(tree: ParseTree): Result {
        return tree.accept(this);
    }

    public visitChildren(node: RuleNode): Result {
        throw new Error("Method not implemented.");
    }

    public visitTerminal(node: TerminalNode): Result {
        throw new Error("Method not implemented.");
    }

    public visitErrorNode(node: ErrorNode): Result {
        throw new Error("Method not implemented.");
    }

}

class CompilationUnitVisitor extends BaseVisitor<PGTDocument> implements PGTJavaParserVisitor<PGTDocument> {

    public visitCompilationUnit(ctx: CompilationUnitContext): PGTDocument {
        const document = new PGTDocument();

        document.$package = ctx.packageDeclaration()?.qualifiedName().text;

        const classVisitor = new ClassVisitor();
        for (let globalDecl of ctx.globalDeclaration()) {
            if (globalDecl.typeDeclaration()?.classDeclaration()) {
                if (document.$class === undefined) {
                    document.$class = globalDecl.accept(classVisitor);
                } else {
                    // TODO: Add error to result
                    console.log("Error: multiple class definitions not supported");
                    break;
                }
            }
        }

        return document;
    }
    
}

class ClassVisitor extends BaseVisitor<Class> implements PGTJavaParserVisitor<Class> {

    public visitGlobalDeclaration(ctx: GlobalDeclarationContext): Class {
        assert(ctx.typeDeclaration()?.classDeclaration() !== undefined, "Error: Can't visit a GlobalDeclaration that doesn't contain a ClassDeclaration!");
        
        const $class = ctx.typeDeclaration()!.classDeclaration()!.accept(this);
        $class.range = extractRange(ctx);

        $class.accessModifier = this.determineAccessModifier(ctx);

        const specVisitor = new SpecificationVisitor();
        for (let specification of ctx.specification()) {
            if ($class.externalSpecification === undefined) {
                $class.externalSpecification = specification.accept(specVisitor);
                $class.externalSpecification.viewType = ViewType.External;
                $class.externalSpecification.entityType = EntityType.Class;
            } else {
                // TODO: Add Error to result
                console.log("Error: external specification already defined!");
                break;
            }
        }

        return $class;
    }

    public visitClassDeclaration(ctx: ClassDeclarationContext): Class {
        const $class = new Class();
        $class.identifier = ctx.identifier().text;
        $class.name = ctx.identifier().IDENTIFIER()?.text;

        const specVisitor = new SpecificationVisitor();
        if (ctx.classBody().specification()) {
            $class.internalSpecification = ctx.classBody().specification()!.accept(specVisitor);
            $class.internalSpecification.viewType = ViewType.Internal;
            $class.internalSpecification.entityType = EntityType.Class;
        }

        $class.bodyRange = extractRange(ctx.classBody());

        const methodVisitor = new MethodVisitor();
        const attributeVisitor = new AttributeVisitor();
        ctx.classBody().classBodyDeclaration().forEach((classBodyDecl) => {
            if (classBodyDecl.memberDeclaration()?.methodDeclaration() || classBodyDecl.memberDeclaration()?.constructorDeclaration()) {
                const method = classBodyDecl.accept(methodVisitor);
                $class.methods[method.identifier!] = method;
            } else if (classBodyDecl.memberDeclaration()?.fieldDeclaration()) {
                const attribute = classBodyDecl.accept(attributeVisitor);
                $class.attributes[attribute.identifier!] = attribute;
            }
        });

        return $class;
    }

    private determineAccessModifier(ctx: GlobalDeclarationContext): AccessModifier {
        for (let modifier of ctx.classOrInterfaceModifier()) {
            if (modifier.PUBLIC()) {
                return AccessModifier.Public;
            } else if (modifier.PROTECTED()) {
                return AccessModifier.Protected;
            } else if (modifier.PRIVATE()) {
                return AccessModifier.Private;
            }
        }

        return AccessModifier.Private;
    }

}

class AttributeVisitor extends BaseVisitor<Attribute> implements PGTJavaParserVisitor<Attribute> {

    public visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): Attribute {
        assert(ctx.memberDeclaration()?.fieldDeclaration() !== undefined, "Error: Can't visit a ClassBodyDeclaration that doesn't contain a FieldDeclaration!");

        const attribute = ctx.memberDeclaration()!.fieldDeclaration()!.accept(this);
        attribute.range = extractRange(ctx);

        attribute.accessModifier = this.determineAccessModifier(ctx);

        const specVisitor = new SpecificationVisitor();
        for (let specification of ctx.specification()) {
            if (attribute.internalSpecification === undefined) {
                attribute.internalSpecification = specification.accept(specVisitor);
                attribute.internalSpecification.viewType = ViewType.Internal;
                attribute.internalSpecification.entityType = EntityType.Attribute;
            } else {
                // TODO: Add Error to result
                console.log("Error: internal specification already defined!");
                break;
            }
        }

        return attribute;
    }

    public visitFieldDeclaration(ctx: FieldDeclarationContext): Attribute {
        const attribute = new Attribute();
        attribute.identifier = ctx.variableDeclarators().variableDeclarator()[0]?.variableDeclaratorId().text;
        attribute.name = attribute.identifier;

        if (ctx.variableDeclarators().variableDeclarator().length > 1) {
            // TODO: Add Error to result
            console.log("Error: specifications may only be added to field declarations declaring a single field!");
        }

        return attribute;
    }

    private determineAccessModifier(ctx: ClassBodyDeclarationContext): AccessModifier {
        for (let modifier of ctx.modifier()) {
            if (modifier.classOrInterfaceModifier()?.PUBLIC()) {
                return AccessModifier.Public;
            } else if (modifier.classOrInterfaceModifier()?.PROTECTED()) {
                return AccessModifier.Protected;
            } else if (modifier.classOrInterfaceModifier()?.PRIVATE()) {
                return AccessModifier.Private;
            }
        }

        return AccessModifier.Private;
    }

}

class MethodVisitor extends BaseVisitor<Method> implements PGTJavaParserVisitor<Method> {

    public visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): Method {
        assert((ctx.memberDeclaration()?.methodDeclaration() !== undefined) || (ctx.memberDeclaration()?.constructorDeclaration() !== undefined),
               "Error: Can't visit a ClassBodyDeclaration that doesn't contain a Method- or ConstructorDeclaration!");
        
        const memberDeclaration = (ctx.memberDeclaration()!.methodDeclaration() ?? ctx.memberDeclaration()!.constructorDeclaration())!;

        const method = memberDeclaration.accept(this);
        method.range = extractRange(ctx);

        method.accessModifier = this.determineAccessModifier(ctx);

        const specVisitor = new SpecificationVisitor();
        for (let specification of ctx.specification()) {
            if (method.externalSpecification === undefined) {
                method.externalSpecification = specification.accept(specVisitor);
                method.externalSpecification.viewType = ViewType.External;
                method.externalSpecification.entityType = EntityType.Method;
            } else {
                // TODO: Add Error to result
                console.log("Error: external specification already defined!");
                break;
            }
        }

        return method;
    }

    public visitMethodDeclaration(ctx: MethodDeclarationContext): Method {
        let method = new Method();
        method.identifier = ctx.identifier().text + ctx.formalParameters().text;
        method.name = ctx.identifier().text;

        method.isConstructor = false;

        method.bodyRange = extractRange(ctx.methodBody());

        const specVisitor = new SpecificationVisitor();
        for (let specification of (ctx.methodBody().block()?.specification() ?? [])) {
            if (method.internalSpecification === undefined) {
                method.internalSpecification = specification.accept(specVisitor);
                method.internalSpecification.viewType = ViewType.Internal;
                method.internalSpecification.entityType = EntityType.Method;
            } else {
                // TODO: Add Error to result
                console.log("Error: internal specification already defined!");
                break;
            }
        }

        return method;
    }

    public visitConstructorDeclaration(ctx: ConstructorDeclarationContext): Method {
        let method = new Method();
        method.identifier = ctx.identifier().text + ctx.formalParameters().text;
        method.name = ctx.identifier().text;

        method.isConstructor = true;

        method.bodyRange = extractRange(ctx._constructorBody);

        const specVisitor = new SpecificationVisitor();
        for (let specification of (ctx._constructorBody.specification() ?? [])) {
            if (method.internalSpecification === undefined) {
                method.internalSpecification = specification.accept(specVisitor);
                method.internalSpecification.viewType = ViewType.Internal;
                method.internalSpecification.entityType = EntityType.Method;
            } else {
                // TODO: Add Error to result
                console.log("Error: internal specification already defined!");
                break;
            }
        }

        return method;
    }

    private determineAccessModifier(ctx: ClassBodyDeclarationContext): AccessModifier {
        for (let modifier of ctx.modifier()) {
            if (modifier.classOrInterfaceModifier()?.PUBLIC()) {
                return AccessModifier.Public;
            } else if (modifier.classOrInterfaceModifier()?.PROTECTED()) {
                return AccessModifier.Protected;
            } else if (modifier.classOrInterfaceModifier()?.PRIVATE()) {
                return AccessModifier.Private;
            }
        }

        return AccessModifier.Private;
    }

}

class SpecificationVisitor extends BaseVisitor<Specification> implements PGTJavaParserVisitor<Specification> {

    public visitSpecification(ctx: SpecificationContext): Specification {
        let specification = new Specification();
        specification.range = extractRange(ctx);

        const ruleVisitor = new SpecificationRuleVisitor();
        const subVisitor = new SubspecificationVisitor();
        ctx.specificationElement().forEach((element) => {
            if (element.specificationRule()) {
                specification.rules.push(element.accept(ruleVisitor));
            } else if (element.subspecification()) {
                specification.subspecifications.push(element.accept(subVisitor));
            }
        });

        return specification;
    }

}

class SubspecificationVisitor extends BaseVisitor<Subspecification> implements PGTJavaParserVisitor<Subspecification> {

    public visitSpecificationElement(ctx: SpecificationElementContext): Subspecification {
        assert(ctx.subspecification() !== undefined, "Error: Can't visit a SpecificationElement that doesn't contain a Subspecification!");

        const subspecification = ctx.subspecification()!.accept(this);
        subspecification.range = extractRange(ctx);

        return subspecification;
    }

    public visitSubspecification(ctx: SubspecificationContext): Subspecification {
        let subspecification = new Subspecification();
        subspecification.description = ctx.subspecificationDescription().freeformLine()._content.text;

        const ruleVisitor = new SpecificationRuleVisitor();
        ctx.subspecificationBody().subspecificationElement().forEach((element) => {
            if (element.specificationRule()) {
                subspecification.rules.push(element.accept(ruleVisitor));
            }
        });

        return subspecification;
    }

}

class SpecificationRuleVisitor extends BaseVisitor<SpecificationRule> implements PGTJavaParserVisitor<SpecificationRule> {

    public visitSpecificationElement(ctx: SpecificationElementContext): SpecificationRule {
        assert(ctx.specificationRule() !== undefined, "Error: Can't visit a SpecificationElement that doesn't contain a SpecificationRule!");

        const rule = ctx.specificationRule()!.accept(this);
        rule.range = extractRange(ctx);

        return rule;
    }

    public visitSubspecificationElement(ctx: SubspecificationElementContext): SpecificationRule {
        assert(ctx.specificationRule() !== undefined, "Error: Can't visit a SubspecificationElement that doesn't contain a SpecificationRule!");

        const rule = ctx.specificationRule()!.accept(this);
        rule.range = extractRange(ctx);

        return rule;
    }

    public visitSpecificationRule(ctx: SpecificationRuleContext): SpecificationRule {
        let rule = new SpecificationRule();
        rule.type = ruleTypeMap[ctx.specificationRuleType().text];

        for (let line of ctx.specificationRuleContent().freeformLine()) {
            if (line._content.text !== '') {
                rule.content.push(line._content.text);
            }
        }

        return rule;
    }

}

function extractRange(ctx: ParserRuleContext): Range {
    const startToken = ctx.start;
    const stopToken = ctx.stop ?? ctx.start;

    return new Range(
        extractPositionStart(startToken), extractPositionEnd(stopToken)
    );
}

function extractPositionStart(token: Token): Position {
    return new Position(
        (token.line - 1), token.charPositionInLine
    );
}

function extractPositionEnd(token: Token): Position {
    const lines = token.text?.split(/\r\n|\r|\n/) ?? [""];
    const lineOffset = lines.length - 1;
    const charOffset = lines[lines.length - 1].length > 0 ? (lines[lines.length - 1].length - 1) : 0;

    return new Position(
        (token.line - 1) + lineOffset,
        lineOffset === 0 ? token.charPositionInLine + charOffset : charOffset
    );
}

export function parseDocument(text: string): PGTDocument {
    const inputStream = CharStreams.fromString(text);
    const lexer = new PGTJavaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PGTJavaParser(tokenStream);
    
    //for testing webview uncomment this
    parser.removeErrorListeners();
    lexer.removeErrorListeners();
    ///////////////////////////////////

    const tree = parser.compilationUnit();

    let document: PGTDocument = new PGTDocument();
    try {
        const visitor = new CompilationUnitVisitor();
        document = visitor.visit(tree);
    } catch (object) {
        console.log("Caught one!");
        console.log(object);
    }

    const validator = new DefaultValidator();
    validator.validate(document);

    return document;
}
