// Generated from ./parser/src/PGTJavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CompilationUnitContext } from "./PGTJavaParser";
import { PackageDeclarationContext } from "./PGTJavaParser";
import { ImportDeclarationContext } from "./PGTJavaParser";
import { GlobalDeclarationContext } from "./PGTJavaParser";
import { TypeDeclarationContext } from "./PGTJavaParser";
import { ModifierContext } from "./PGTJavaParser";
import { ClassOrInterfaceModifierContext } from "./PGTJavaParser";
import { VariableModifierContext } from "./PGTJavaParser";
import { ClassDeclarationContext } from "./PGTJavaParser";
import { TypeParametersContext } from "./PGTJavaParser";
import { TypeParameterContext } from "./PGTJavaParser";
import { TypeBoundContext } from "./PGTJavaParser";
import { EnumDeclarationContext } from "./PGTJavaParser";
import { EnumConstantsContext } from "./PGTJavaParser";
import { EnumConstantContext } from "./PGTJavaParser";
import { EnumBodyDeclarationsContext } from "./PGTJavaParser";
import { InterfaceDeclarationContext } from "./PGTJavaParser";
import { ClassBodyContext } from "./PGTJavaParser";
import { InterfaceBodyContext } from "./PGTJavaParser";
import { ClassBodyDeclarationContext } from "./PGTJavaParser";
import { MemberDeclarationContext } from "./PGTJavaParser";
import { MethodDeclarationContext } from "./PGTJavaParser";
import { MethodBodyContext } from "./PGTJavaParser";
import { TypeTypeOrVoidContext } from "./PGTJavaParser";
import { GenericMethodDeclarationContext } from "./PGTJavaParser";
import { GenericConstructorDeclarationContext } from "./PGTJavaParser";
import { ConstructorDeclarationContext } from "./PGTJavaParser";
import { FieldDeclarationContext } from "./PGTJavaParser";
import { InterfaceBodyDeclarationContext } from "./PGTJavaParser";
import { InterfaceMemberDeclarationContext } from "./PGTJavaParser";
import { ConstDeclarationContext } from "./PGTJavaParser";
import { ConstantDeclaratorContext } from "./PGTJavaParser";
import { InterfaceMethodDeclarationContext } from "./PGTJavaParser";
import { InterfaceMethodModifierContext } from "./PGTJavaParser";
import { GenericInterfaceMethodDeclarationContext } from "./PGTJavaParser";
import { InterfaceCommonBodyDeclarationContext } from "./PGTJavaParser";
import { VariableDeclaratorsContext } from "./PGTJavaParser";
import { VariableDeclaratorContext } from "./PGTJavaParser";
import { VariableDeclaratorIdContext } from "./PGTJavaParser";
import { VariableInitializerContext } from "./PGTJavaParser";
import { ArrayInitializerContext } from "./PGTJavaParser";
import { ClassOrInterfaceTypeContext } from "./PGTJavaParser";
import { TypeArgumentContext } from "./PGTJavaParser";
import { QualifiedNameListContext } from "./PGTJavaParser";
import { FormalParametersContext } from "./PGTJavaParser";
import { ReceiverParameterContext } from "./PGTJavaParser";
import { FormalParameterListContext } from "./PGTJavaParser";
import { FormalParameterContext } from "./PGTJavaParser";
import { LastFormalParameterContext } from "./PGTJavaParser";
import { LambdaLVTIListContext } from "./PGTJavaParser";
import { LambdaLVTIParameterContext } from "./PGTJavaParser";
import { QualifiedNameContext } from "./PGTJavaParser";
import { LiteralContext } from "./PGTJavaParser";
import { IntegerLiteralContext } from "./PGTJavaParser";
import { FloatLiteralContext } from "./PGTJavaParser";
import { AltAnnotationQualifiedNameContext } from "./PGTJavaParser";
import { AnnotationContext } from "./PGTJavaParser";
import { ElementValuePairsContext } from "./PGTJavaParser";
import { ElementValuePairContext } from "./PGTJavaParser";
import { ElementValueContext } from "./PGTJavaParser";
import { ElementValueArrayInitializerContext } from "./PGTJavaParser";
import { AnnotationTypeDeclarationContext } from "./PGTJavaParser";
import { AnnotationTypeBodyContext } from "./PGTJavaParser";
import { AnnotationTypeElementDeclarationContext } from "./PGTJavaParser";
import { AnnotationTypeElementRestContext } from "./PGTJavaParser";
import { AnnotationMethodOrConstantRestContext } from "./PGTJavaParser";
import { AnnotationMethodRestContext } from "./PGTJavaParser";
import { AnnotationConstantRestContext } from "./PGTJavaParser";
import { DefaultValueContext } from "./PGTJavaParser";
import { ModuleDeclarationContext } from "./PGTJavaParser";
import { ModuleBodyContext } from "./PGTJavaParser";
import { ModuleDirectiveContext } from "./PGTJavaParser";
import { RequiresModifierContext } from "./PGTJavaParser";
import { RecordDeclarationContext } from "./PGTJavaParser";
import { RecordHeaderContext } from "./PGTJavaParser";
import { RecordComponentListContext } from "./PGTJavaParser";
import { RecordComponentContext } from "./PGTJavaParser";
import { RecordBodyContext } from "./PGTJavaParser";
import { BlockContext } from "./PGTJavaParser";
import { BlockStatementContext } from "./PGTJavaParser";
import { LocalVariableDeclarationContext } from "./PGTJavaParser";
import { IdentifierContext } from "./PGTJavaParser";
import { LocalTypeDeclarationContext } from "./PGTJavaParser";
import { StatementContext } from "./PGTJavaParser";
import { CatchClauseContext } from "./PGTJavaParser";
import { CatchTypeContext } from "./PGTJavaParser";
import { FinallyBlockContext } from "./PGTJavaParser";
import { ResourceSpecificationContext } from "./PGTJavaParser";
import { ResourcesContext } from "./PGTJavaParser";
import { ResourceContext } from "./PGTJavaParser";
import { SwitchBlockStatementGroupContext } from "./PGTJavaParser";
import { SwitchLabelContext } from "./PGTJavaParser";
import { ForControlContext } from "./PGTJavaParser";
import { ForInitContext } from "./PGTJavaParser";
import { EnhancedForControlContext } from "./PGTJavaParser";
import { ParExpressionContext } from "./PGTJavaParser";
import { ExpressionListContext } from "./PGTJavaParser";
import { MethodCallContext } from "./PGTJavaParser";
import { ExpressionContext } from "./PGTJavaParser";
import { PatternContext } from "./PGTJavaParser";
import { LambdaExpressionContext } from "./PGTJavaParser";
import { LambdaParametersContext } from "./PGTJavaParser";
import { LambdaBodyContext } from "./PGTJavaParser";
import { PrimaryContext } from "./PGTJavaParser";
import { SwitchExpressionContext } from "./PGTJavaParser";
import { SwitchLabeledRuleContext } from "./PGTJavaParser";
import { GuardedPatternContext } from "./PGTJavaParser";
import { SwitchRuleOutcomeContext } from "./PGTJavaParser";
import { ClassTypeContext } from "./PGTJavaParser";
import { CreatorContext } from "./PGTJavaParser";
import { CreatedNameContext } from "./PGTJavaParser";
import { InnerCreatorContext } from "./PGTJavaParser";
import { ArrayCreatorRestContext } from "./PGTJavaParser";
import { ClassCreatorRestContext } from "./PGTJavaParser";
import { ExplicitGenericInvocationContext } from "./PGTJavaParser";
import { TypeArgumentsOrDiamondContext } from "./PGTJavaParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./PGTJavaParser";
import { NonWildcardTypeArgumentsContext } from "./PGTJavaParser";
import { TypeListContext } from "./PGTJavaParser";
import { TypeTypeContext } from "./PGTJavaParser";
import { PrimitiveTypeContext } from "./PGTJavaParser";
import { TypeArgumentsContext } from "./PGTJavaParser";
import { SuperSuffixContext } from "./PGTJavaParser";
import { ExplicitGenericInvocationSuffixContext } from "./PGTJavaParser";
import { ArgumentsContext } from "./PGTJavaParser";
import { SpecificationContext } from "./PGTJavaParser";
import { SpecificationElementContext } from "./PGTJavaParser";
import { SubspecificationContext } from "./PGTJavaParser";
import { SubspecificationDescriptionContext } from "./PGTJavaParser";
import { SubspecificationBodyContext } from "./PGTJavaParser";
import { SubspecificationElementContext } from "./PGTJavaParser";
import { SpecificationRuleContext } from "./PGTJavaParser";
import { SpecificationRuleTypeContext } from "./PGTJavaParser";
import { SpecificationRuleContentContext } from "./PGTJavaParser";
import { FreeformLineContext } from "./PGTJavaParser";
import { FreeformLineContentContext } from "./PGTJavaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PGTJavaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PGTJavaParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PGTJavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.globalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalDeclaration?: (ctx: GlobalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.interfaceCommonBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceCommonBodyDeclaration?: (ctx: InterfaceCommonBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.receiverParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiverParameter?: (ctx: ReceiverParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lambdaLVTIList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaLVTIList?: (ctx: LambdaLVTIListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lambdaLVTIParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaLVTIParameter?: (ctx: LambdaLVTIParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.altAnnotationQualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAltAnnotationQualifiedName?: (ctx: AltAnnotationQualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclaration?: (ctx: ModuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.moduleDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDirective?: (ctx: ModuleDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.requiresModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiresModifier?: (ctx: RequiresModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.recordDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordDeclaration?: (ctx: RecordDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.recordHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordHeader?: (ctx: RecordHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.recordComponentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordComponentList?: (ctx: RecordComponentListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.recordComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordComponent?: (ctx: RecordComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.recordBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordBody?: (ctx: RecordBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.localTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTypeDeclaration?: (ctx: LocalTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.switchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpression?: (ctx: SwitchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.switchLabeledRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabeledRule?: (ctx: SwitchLabeledRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.guardedPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuardedPattern?: (ctx: GuardedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.switchRuleOutcome`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchRuleOutcome?: (ctx: SwitchRuleOutcomeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.innerCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerCreator?: (ctx: InnerCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeType?: (ctx: TypeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.superSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification?: (ctx: SpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.specificationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationElement?: (ctx: SpecificationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.subspecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspecification?: (ctx: SubspecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.subspecificationDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspecificationDescription?: (ctx: SubspecificationDescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.subspecificationBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspecificationBody?: (ctx: SubspecificationBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.subspecificationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspecificationElement?: (ctx: SubspecificationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.specificationRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationRule?: (ctx: SpecificationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.specificationRuleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationRuleType?: (ctx: SpecificationRuleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.specificationRuleContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationRuleContent?: (ctx: SpecificationRuleContentContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.freeformLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreeformLine?: (ctx: FreeformLineContext) => Result;

	/**
	 * Visit a parse tree produced by `PGTJavaParser.freeformLineContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreeformLineContent?: (ctx: FreeformLineContentContext) => Result;
}

