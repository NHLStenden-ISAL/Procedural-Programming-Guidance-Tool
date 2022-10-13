// Generated from ./parser/src/PGTJavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PGTJavaParser`.
 */
export interface PGTJavaParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PGTJavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.globalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGlobalDeclaration?: (ctx: GlobalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.globalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGlobalDeclaration?: (ctx: GlobalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 */
	enterTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeTypeOrVoid`.
	 * @param ctx the parse tree
	 */
	exitTypeTypeOrVoid?: (ctx: TypeTypeOrVoidContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstDeclaration?: (ctx: ConstDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstDeclaration?: (ctx: ConstDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.interfaceCommonBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceCommonBodyDeclaration?: (ctx: InterfaceCommonBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.interfaceCommonBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceCommonBodyDeclaration?: (ctx: InterfaceCommonBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	enterReceiverParameter?: (ctx: ReceiverParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.receiverParameter`.
	 * @param ctx the parse tree
	 */
	exitReceiverParameter?: (ctx: ReceiverParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameter?: (ctx: LastFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameter?: (ctx: LastFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lambdaLVTIList`.
	 * @param ctx the parse tree
	 */
	enterLambdaLVTIList?: (ctx: LambdaLVTIListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lambdaLVTIList`.
	 * @param ctx the parse tree
	 */
	exitLambdaLVTIList?: (ctx: LambdaLVTIListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lambdaLVTIParameter`.
	 * @param ctx the parse tree
	 */
	enterLambdaLVTIParameter?: (ctx: LambdaLVTIParameterContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lambdaLVTIParameter`.
	 * @param ctx the parse tree
	 */
	exitLambdaLVTIParameter?: (ctx: LambdaLVTIParameterContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.altAnnotationQualifiedName`.
	 * @param ctx the parse tree
	 */
	enterAltAnnotationQualifiedName?: (ctx: AltAnnotationQualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.altAnnotationQualifiedName`.
	 * @param ctx the parse tree
	 */
	exitAltAnnotationQualifiedName?: (ctx: AltAnnotationQualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.moduleDirective`.
	 * @param ctx the parse tree
	 */
	enterModuleDirective?: (ctx: ModuleDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.moduleDirective`.
	 * @param ctx the parse tree
	 */
	exitModuleDirective?: (ctx: ModuleDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.requiresModifier`.
	 * @param ctx the parse tree
	 */
	enterRequiresModifier?: (ctx: RequiresModifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.requiresModifier`.
	 * @param ctx the parse tree
	 */
	exitRequiresModifier?: (ctx: RequiresModifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.recordDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRecordDeclaration?: (ctx: RecordDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.recordDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRecordDeclaration?: (ctx: RecordDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.recordHeader`.
	 * @param ctx the parse tree
	 */
	enterRecordHeader?: (ctx: RecordHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.recordHeader`.
	 * @param ctx the parse tree
	 */
	exitRecordHeader?: (ctx: RecordHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.recordComponentList`.
	 * @param ctx the parse tree
	 */
	enterRecordComponentList?: (ctx: RecordComponentListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.recordComponentList`.
	 * @param ctx the parse tree
	 */
	exitRecordComponentList?: (ctx: RecordComponentListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.recordComponent`.
	 * @param ctx the parse tree
	 */
	enterRecordComponent?: (ctx: RecordComponentContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.recordComponent`.
	 * @param ctx the parse tree
	 */
	exitRecordComponent?: (ctx: RecordComponentContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.recordBody`.
	 * @param ctx the parse tree
	 */
	enterRecordBody?: (ctx: RecordBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.recordBody`.
	 * @param ctx the parse tree
	 */
	exitRecordBody?: (ctx: RecordBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.localTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalTypeDeclaration?: (ctx: LocalTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.localTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalTypeDeclaration?: (ctx: LocalTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpression?: (ctx: SwitchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpression?: (ctx: SwitchExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.switchLabeledRule`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabeledRule?: (ctx: SwitchLabeledRuleContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.switchLabeledRule`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabeledRule?: (ctx: SwitchLabeledRuleContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.guardedPattern`.
	 * @param ctx the parse tree
	 */
	enterGuardedPattern?: (ctx: GuardedPatternContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.guardedPattern`.
	 * @param ctx the parse tree
	 */
	exitGuardedPattern?: (ctx: GuardedPatternContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.switchRuleOutcome`.
	 * @param ctx the parse tree
	 */
	enterSwitchRuleOutcome?: (ctx: SwitchRuleOutcomeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.switchRuleOutcome`.
	 * @param ctx the parse tree
	 */
	exitSwitchRuleOutcome?: (ctx: SwitchRuleOutcomeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classType`.
	 * @param ctx the parse tree
	 */
	enterClassType?: (ctx: ClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classType`.
	 * @param ctx the parse tree
	 */
	exitClassType?: (ctx: ClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	enterInnerCreator?: (ctx: InnerCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	exitInnerCreator?: (ctx: InnerCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeType`.
	 * @param ctx the parse tree
	 */
	enterTypeType?: (ctx: TypeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeType`.
	 * @param ctx the parse tree
	 */
	exitTypeType?: (ctx: TypeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	enterSuperSuffix?: (ctx: SuperSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	exitSuperSuffix?: (ctx: SuperSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.specificationElement`.
	 * @param ctx the parse tree
	 */
	enterSpecificationElement?: (ctx: SpecificationElementContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.specificationElement`.
	 * @param ctx the parse tree
	 */
	exitSpecificationElement?: (ctx: SpecificationElementContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.subspecification`.
	 * @param ctx the parse tree
	 */
	enterSubspecification?: (ctx: SubspecificationContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.subspecification`.
	 * @param ctx the parse tree
	 */
	exitSubspecification?: (ctx: SubspecificationContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.subspecificationDescription`.
	 * @param ctx the parse tree
	 */
	enterSubspecificationDescription?: (ctx: SubspecificationDescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.subspecificationDescription`.
	 * @param ctx the parse tree
	 */
	exitSubspecificationDescription?: (ctx: SubspecificationDescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.subspecificationBody`.
	 * @param ctx the parse tree
	 */
	enterSubspecificationBody?: (ctx: SubspecificationBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.subspecificationBody`.
	 * @param ctx the parse tree
	 */
	exitSubspecificationBody?: (ctx: SubspecificationBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.subspecificationElement`.
	 * @param ctx the parse tree
	 */
	enterSubspecificationElement?: (ctx: SubspecificationElementContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.subspecificationElement`.
	 * @param ctx the parse tree
	 */
	exitSubspecificationElement?: (ctx: SubspecificationElementContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.specificationRule`.
	 * @param ctx the parse tree
	 */
	enterSpecificationRule?: (ctx: SpecificationRuleContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.specificationRule`.
	 * @param ctx the parse tree
	 */
	exitSpecificationRule?: (ctx: SpecificationRuleContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.specificationRuleType`.
	 * @param ctx the parse tree
	 */
	enterSpecificationRuleType?: (ctx: SpecificationRuleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.specificationRuleType`.
	 * @param ctx the parse tree
	 */
	exitSpecificationRuleType?: (ctx: SpecificationRuleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.specificationRuleContent`.
	 * @param ctx the parse tree
	 */
	enterSpecificationRuleContent?: (ctx: SpecificationRuleContentContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.specificationRuleContent`.
	 * @param ctx the parse tree
	 */
	exitSpecificationRuleContent?: (ctx: SpecificationRuleContentContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.freeformLine`.
	 * @param ctx the parse tree
	 */
	enterFreeformLine?: (ctx: FreeformLineContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.freeformLine`.
	 * @param ctx the parse tree
	 */
	exitFreeformLine?: (ctx: FreeformLineContext) => void;

	/**
	 * Enter a parse tree produced by `PGTJavaParser.freeformLineContent`.
	 * @param ctx the parse tree
	 */
	enterFreeformLineContent?: (ctx: FreeformLineContentContext) => void;
	/**
	 * Exit a parse tree produced by `PGTJavaParser.freeformLineContent`.
	 * @param ctx the parse tree
	 */
	exitFreeformLineContent?: (ctx: FreeformLineContentContext) => void;
}

