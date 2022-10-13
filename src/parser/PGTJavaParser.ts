// Generated from ./parser/src/PGTJavaParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PGTJavaParserListener } from "./PGTJavaParserListener";
import { PGTJavaParserVisitor } from "./PGTJavaParserVisitor";


export class PGTJavaParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly MODULE = 51;
	public static readonly OPEN = 52;
	public static readonly REQUIRES = 53;
	public static readonly EXPORTS = 54;
	public static readonly OPENS = 55;
	public static readonly TO = 56;
	public static readonly USES = 57;
	public static readonly PROVIDES = 58;
	public static readonly WITH = 59;
	public static readonly TRANSITIVE = 60;
	public static readonly VAR = 61;
	public static readonly YIELD = 62;
	public static readonly RECORD = 63;
	public static readonly SEALED = 64;
	public static readonly PERMITS = 65;
	public static readonly NON_SEALED = 66;
	public static readonly DECIMAL_LITERAL = 67;
	public static readonly HEX_LITERAL = 68;
	public static readonly OCT_LITERAL = 69;
	public static readonly BINARY_LITERAL = 70;
	public static readonly FLOAT_LITERAL = 71;
	public static readonly HEX_FLOAT_LITERAL = 72;
	public static readonly BOOL_LITERAL = 73;
	public static readonly CHAR_LITERAL = 74;
	public static readonly STRING_LITERAL = 75;
	public static readonly TEXT_BLOCK = 76;
	public static readonly NULL_LITERAL = 77;
	public static readonly LPAREN = 78;
	public static readonly RPAREN = 79;
	public static readonly LBRACE = 80;
	public static readonly RBRACE = 81;
	public static readonly LBRACK = 82;
	public static readonly RBRACK = 83;
	public static readonly SEMI = 84;
	public static readonly COMMA = 85;
	public static readonly DOT = 86;
	public static readonly ASSIGN = 87;
	public static readonly GT = 88;
	public static readonly LT = 89;
	public static readonly BANG = 90;
	public static readonly TILDE = 91;
	public static readonly QUESTION = 92;
	public static readonly COLON = 93;
	public static readonly EQUAL = 94;
	public static readonly LE = 95;
	public static readonly GE = 96;
	public static readonly NOTEQUAL = 97;
	public static readonly AND = 98;
	public static readonly OR = 99;
	public static readonly INC = 100;
	public static readonly DEC = 101;
	public static readonly ADD = 102;
	public static readonly SUB = 103;
	public static readonly MUL = 104;
	public static readonly DIV = 105;
	public static readonly BITAND = 106;
	public static readonly BITOR = 107;
	public static readonly CARET = 108;
	public static readonly MOD = 109;
	public static readonly ADD_ASSIGN = 110;
	public static readonly SUB_ASSIGN = 111;
	public static readonly MUL_ASSIGN = 112;
	public static readonly DIV_ASSIGN = 113;
	public static readonly AND_ASSIGN = 114;
	public static readonly OR_ASSIGN = 115;
	public static readonly XOR_ASSIGN = 116;
	public static readonly MOD_ASSIGN = 117;
	public static readonly LSHIFT_ASSIGN = 118;
	public static readonly RSHIFT_ASSIGN = 119;
	public static readonly URSHIFT_ASSIGN = 120;
	public static readonly ARROW = 121;
	public static readonly COLONCOLON = 122;
	public static readonly AT = 123;
	public static readonly ELLIPSIS = 124;
	public static readonly WS = 125;
	public static readonly COMMENT = 126;
	public static readonly LINE_COMMENT = 127;
	public static readonly IDENTIFIER = 128;
	public static readonly PGT_START = 129;
	public static readonly PGT_SKIP_SPACE = 130;
	public static readonly PGT_SKIP_NEWLINE = 131;
	public static readonly PGT_TAG = 132;
	public static readonly PGT_DESC = 133;
	public static readonly PGT_INV = 134;
	public static readonly PGT_REPRESENTS = 135;
	public static readonly PGT_SUB = 136;
	public static readonly PGT_REQUIRES = 137;
	public static readonly PGT_ENSURES = 138;
	public static readonly PGT_SIGNALS = 139;
	public static readonly PGT_ASSIGNABLE = 140;
	public static readonly PGT_PURE = 141;
	public static readonly PGT_BRACE_OPEN = 142;
	public static readonly PGT_BRACE_CLOSE = 143;
	public static readonly PGT_END = 144;
	public static readonly PGT_FREEFORM_TEXT = 145;
	public static readonly PGT_FREEFORM_SPACE = 146;
	public static readonly PGT_FREEFORM_NEWLINE = 147;
	public static readonly PGT_FREEFORM_STAR = 148;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_globalDeclaration = 3;
	public static readonly RULE_typeDeclaration = 4;
	public static readonly RULE_modifier = 5;
	public static readonly RULE_classOrInterfaceModifier = 6;
	public static readonly RULE_variableModifier = 7;
	public static readonly RULE_classDeclaration = 8;
	public static readonly RULE_typeParameters = 9;
	public static readonly RULE_typeParameter = 10;
	public static readonly RULE_typeBound = 11;
	public static readonly RULE_enumDeclaration = 12;
	public static readonly RULE_enumConstants = 13;
	public static readonly RULE_enumConstant = 14;
	public static readonly RULE_enumBodyDeclarations = 15;
	public static readonly RULE_interfaceDeclaration = 16;
	public static readonly RULE_classBody = 17;
	public static readonly RULE_interfaceBody = 18;
	public static readonly RULE_classBodyDeclaration = 19;
	public static readonly RULE_memberDeclaration = 20;
	public static readonly RULE_methodDeclaration = 21;
	public static readonly RULE_methodBody = 22;
	public static readonly RULE_typeTypeOrVoid = 23;
	public static readonly RULE_genericMethodDeclaration = 24;
	public static readonly RULE_genericConstructorDeclaration = 25;
	public static readonly RULE_constructorDeclaration = 26;
	public static readonly RULE_fieldDeclaration = 27;
	public static readonly RULE_interfaceBodyDeclaration = 28;
	public static readonly RULE_interfaceMemberDeclaration = 29;
	public static readonly RULE_constDeclaration = 30;
	public static readonly RULE_constantDeclarator = 31;
	public static readonly RULE_interfaceMethodDeclaration = 32;
	public static readonly RULE_interfaceMethodModifier = 33;
	public static readonly RULE_genericInterfaceMethodDeclaration = 34;
	public static readonly RULE_interfaceCommonBodyDeclaration = 35;
	public static readonly RULE_variableDeclarators = 36;
	public static readonly RULE_variableDeclarator = 37;
	public static readonly RULE_variableDeclaratorId = 38;
	public static readonly RULE_variableInitializer = 39;
	public static readonly RULE_arrayInitializer = 40;
	public static readonly RULE_classOrInterfaceType = 41;
	public static readonly RULE_typeArgument = 42;
	public static readonly RULE_qualifiedNameList = 43;
	public static readonly RULE_formalParameters = 44;
	public static readonly RULE_receiverParameter = 45;
	public static readonly RULE_formalParameterList = 46;
	public static readonly RULE_formalParameter = 47;
	public static readonly RULE_lastFormalParameter = 48;
	public static readonly RULE_lambdaLVTIList = 49;
	public static readonly RULE_lambdaLVTIParameter = 50;
	public static readonly RULE_qualifiedName = 51;
	public static readonly RULE_literal = 52;
	public static readonly RULE_integerLiteral = 53;
	public static readonly RULE_floatLiteral = 54;
	public static readonly RULE_altAnnotationQualifiedName = 55;
	public static readonly RULE_annotation = 56;
	public static readonly RULE_elementValuePairs = 57;
	public static readonly RULE_elementValuePair = 58;
	public static readonly RULE_elementValue = 59;
	public static readonly RULE_elementValueArrayInitializer = 60;
	public static readonly RULE_annotationTypeDeclaration = 61;
	public static readonly RULE_annotationTypeBody = 62;
	public static readonly RULE_annotationTypeElementDeclaration = 63;
	public static readonly RULE_annotationTypeElementRest = 64;
	public static readonly RULE_annotationMethodOrConstantRest = 65;
	public static readonly RULE_annotationMethodRest = 66;
	public static readonly RULE_annotationConstantRest = 67;
	public static readonly RULE_defaultValue = 68;
	public static readonly RULE_moduleDeclaration = 69;
	public static readonly RULE_moduleBody = 70;
	public static readonly RULE_moduleDirective = 71;
	public static readonly RULE_requiresModifier = 72;
	public static readonly RULE_recordDeclaration = 73;
	public static readonly RULE_recordHeader = 74;
	public static readonly RULE_recordComponentList = 75;
	public static readonly RULE_recordComponent = 76;
	public static readonly RULE_recordBody = 77;
	public static readonly RULE_block = 78;
	public static readonly RULE_blockStatement = 79;
	public static readonly RULE_localVariableDeclaration = 80;
	public static readonly RULE_identifier = 81;
	public static readonly RULE_localTypeDeclaration = 82;
	public static readonly RULE_statement = 83;
	public static readonly RULE_catchClause = 84;
	public static readonly RULE_catchType = 85;
	public static readonly RULE_finallyBlock = 86;
	public static readonly RULE_resourceSpecification = 87;
	public static readonly RULE_resources = 88;
	public static readonly RULE_resource = 89;
	public static readonly RULE_switchBlockStatementGroup = 90;
	public static readonly RULE_switchLabel = 91;
	public static readonly RULE_forControl = 92;
	public static readonly RULE_forInit = 93;
	public static readonly RULE_enhancedForControl = 94;
	public static readonly RULE_parExpression = 95;
	public static readonly RULE_expressionList = 96;
	public static readonly RULE_methodCall = 97;
	public static readonly RULE_expression = 98;
	public static readonly RULE_pattern = 99;
	public static readonly RULE_lambdaExpression = 100;
	public static readonly RULE_lambdaParameters = 101;
	public static readonly RULE_lambdaBody = 102;
	public static readonly RULE_primary = 103;
	public static readonly RULE_switchExpression = 104;
	public static readonly RULE_switchLabeledRule = 105;
	public static readonly RULE_guardedPattern = 106;
	public static readonly RULE_switchRuleOutcome = 107;
	public static readonly RULE_classType = 108;
	public static readonly RULE_creator = 109;
	public static readonly RULE_createdName = 110;
	public static readonly RULE_innerCreator = 111;
	public static readonly RULE_arrayCreatorRest = 112;
	public static readonly RULE_classCreatorRest = 113;
	public static readonly RULE_explicitGenericInvocation = 114;
	public static readonly RULE_typeArgumentsOrDiamond = 115;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 116;
	public static readonly RULE_nonWildcardTypeArguments = 117;
	public static readonly RULE_typeList = 118;
	public static readonly RULE_typeType = 119;
	public static readonly RULE_primitiveType = 120;
	public static readonly RULE_typeArguments = 121;
	public static readonly RULE_superSuffix = 122;
	public static readonly RULE_explicitGenericInvocationSuffix = 123;
	public static readonly RULE_arguments = 124;
	public static readonly RULE_specification = 125;
	public static readonly RULE_specificationElement = 126;
	public static readonly RULE_subspecification = 127;
	public static readonly RULE_subspecificationDescription = 128;
	public static readonly RULE_subspecificationBody = 129;
	public static readonly RULE_subspecificationElement = 130;
	public static readonly RULE_specificationRule = 131;
	public static readonly RULE_specificationRuleType = 132;
	public static readonly RULE_specificationRuleContent = 133;
	public static readonly RULE_freeformLine = 134;
	public static readonly RULE_freeformLineContent = 135;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "globalDeclaration", 
		"typeDeclaration", "modifier", "classOrInterfaceModifier", "variableModifier", 
		"classDeclaration", "typeParameters", "typeParameter", "typeBound", "enumDeclaration", 
		"enumConstants", "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", 
		"classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration", 
		"methodDeclaration", "methodBody", "typeTypeOrVoid", "genericMethodDeclaration", 
		"genericConstructorDeclaration", "constructorDeclaration", "fieldDeclaration", 
		"interfaceBodyDeclaration", "interfaceMemberDeclaration", "constDeclaration", 
		"constantDeclarator", "interfaceMethodDeclaration", "interfaceMethodModifier", 
		"genericInterfaceMethodDeclaration", "interfaceCommonBodyDeclaration", 
		"variableDeclarators", "variableDeclarator", "variableDeclaratorId", "variableInitializer", 
		"arrayInitializer", "classOrInterfaceType", "typeArgument", "qualifiedNameList", 
		"formalParameters", "receiverParameter", "formalParameterList", "formalParameter", 
		"lastFormalParameter", "lambdaLVTIList", "lambdaLVTIParameter", "qualifiedName", 
		"literal", "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
		"annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "moduleDeclaration", 
		"moduleBody", "moduleDirective", "requiresModifier", "recordDeclaration", 
		"recordHeader", "recordComponentList", "recordComponent", "recordBody", 
		"block", "blockStatement", "localVariableDeclaration", "identifier", "localTypeDeclaration", 
		"statement", "catchClause", "catchType", "finallyBlock", "resourceSpecification", 
		"resources", "resource", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"forInit", "enhancedForControl", "parExpression", "expressionList", "methodCall", 
		"expression", "pattern", "lambdaExpression", "lambdaParameters", "lambdaBody", 
		"primary", "switchExpression", "switchLabeledRule", "guardedPattern", 
		"switchRuleOutcome", "classType", "creator", "createdName", "innerCreator", 
		"arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", "typeArgumentsOrDiamond", 
		"nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", "typeList", 
		"typeType", "primitiveType", "typeArguments", "superSuffix", "explicitGenericInvocationSuffix", 
		"arguments", "specification", "specificationElement", "subspecification", 
		"subspecificationDescription", "subspecificationBody", "subspecificationElement", 
		"specificationRule", "specificationRuleType", "specificationRuleContent", 
		"freeformLine", "freeformLineContent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
		"'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'", 
		"'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'", 
		"'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'", 
		"'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'", 
		"'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'", 
		"'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'", 
		"'transient'", "'try'", "'void'", "'volatile'", "'while'", "'module'", 
		"'open'", undefined, "'exports'", "'opens'", "'to'", "'uses'", "'provides'", 
		"'with'", "'transitive'", "'var'", "'yield'", "'record'", "'sealed'", 
		"'permits'", "'non-sealed'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'null'", 
		"'('", "')'", undefined, undefined, "'['", "']'", "';'", "','", "'.'", 
		"'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", 
		"'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
		"'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", undefined, "'...'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'desc'", "'inv'", "'represents'", "'sub'", undefined, "'ensures'", 
		"'signals'", "'assignable'", "'pure'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH", 
		"CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
		"ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", 
		"IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", 
		"SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", 
		"TRY", "VOID", "VOLATILE", "WHILE", "MODULE", "OPEN", "REQUIRES", "EXPORTS", 
		"OPENS", "TO", "USES", "PROVIDES", "WITH", "TRANSITIVE", "VAR", "YIELD", 
		"RECORD", "SEALED", "PERMITS", "NON_SEALED", "DECIMAL_LITERAL", "HEX_LITERAL", 
		"OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "TEXT_BLOCK", "NULL_LITERAL", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
		"LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
		"DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
		"MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
		"LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", 
		"AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER", "PGT_START", 
		"PGT_SKIP_SPACE", "PGT_SKIP_NEWLINE", "PGT_TAG", "PGT_DESC", "PGT_INV", 
		"PGT_REPRESENTS", "PGT_SUB", "PGT_REQUIRES", "PGT_ENSURES", "PGT_SIGNALS", 
		"PGT_ASSIGNABLE", "PGT_PURE", "PGT_BRACE_OPEN", "PGT_BRACE_CLOSE", "PGT_END", 
		"PGT_FREEFORM_TEXT", "PGT_FREEFORM_SPACE", "PGT_FREEFORM_NEWLINE", "PGT_FREEFORM_STAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PGTJavaParser._LITERAL_NAMES, PGTJavaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PGTJavaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PGTJavaParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return PGTJavaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PGTJavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PGTJavaParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PGTJavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.state = 290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 272;
					this.packageDeclaration();
					}
					break;
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.IMPORT) {
					{
					{
					this.state = 275;
					this.importDeclaration();
					}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.SEMI - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PGTJavaParser.AT - 123)) | (1 << (PGTJavaParser.IDENTIFIER - 123)) | (1 << (PGTJavaParser.PGT_START - 123)))) !== 0)) {
					{
					{
					this.state = 281;
					this.globalDeclaration();
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.moduleDeclaration();
				this.state = 288;
				this.match(PGTJavaParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PGTJavaParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 292;
				this.annotation();
				}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 298;
			this.match(PGTJavaParser.PACKAGE);
			this.state = 299;
			this.qualifiedName();
			this.state = 300;
			this.match(PGTJavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PGTJavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.match(PGTJavaParser.IMPORT);
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.STATIC) {
				{
				this.state = 303;
				this.match(PGTJavaParser.STATIC);
				}
			}

			this.state = 306;
			this.qualifiedName();
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.DOT) {
				{
				this.state = 307;
				this.match(PGTJavaParser.DOT);
				this.state = 308;
				this.match(PGTJavaParser.MUL);
				}
			}

			this.state = 311;
			this.match(PGTJavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalDeclaration(): GlobalDeclarationContext {
		let _localctx: GlobalDeclarationContext = new GlobalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PGTJavaParser.RULE_globalDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.ABSTRACT:
			case PGTJavaParser.CLASS:
			case PGTJavaParser.ENUM:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.INTERFACE:
			case PGTJavaParser.PRIVATE:
			case PGTJavaParser.PROTECTED:
			case PGTJavaParser.PUBLIC:
			case PGTJavaParser.STATIC:
			case PGTJavaParser.STRICTFP:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.NON_SEALED:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
			case PGTJavaParser.PGT_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.PGT_START) {
					{
					{
					this.state = 313;
					this.specification();
					}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 319;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 325;
				this.typeDeclaration();
				}
				break;
			case PGTJavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PGTJavaParser.RULE_typeDeclaration);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.classDeclaration();
				}
				break;
			case PGTJavaParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.enumDeclaration();
				}
				break;
			case PGTJavaParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 331;
				this.interfaceDeclaration();
				}
				break;
			case PGTJavaParser.AT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 332;
				this.annotationTypeDeclaration();
				}
				break;
			case PGTJavaParser.RECORD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 333;
				this.recordDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PGTJavaParser.RULE_modifier);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.ABSTRACT:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.PRIVATE:
			case PGTJavaParser.PROTECTED:
			case PGTJavaParser.PUBLIC:
			case PGTJavaParser.STATIC:
			case PGTJavaParser.STRICTFP:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.NON_SEALED:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.classOrInterfaceModifier();
				}
				break;
			case PGTJavaParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this.match(PGTJavaParser.NATIVE);
				}
				break;
			case PGTJavaParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 338;
				this.match(PGTJavaParser.SYNCHRONIZED);
				}
				break;
			case PGTJavaParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 339;
				this.match(PGTJavaParser.TRANSIENT);
				}
				break;
			case PGTJavaParser.VOLATILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 340;
				this.match(PGTJavaParser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PGTJavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 343;
				this.annotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(PGTJavaParser.PUBLIC);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 345;
				this.match(PGTJavaParser.PROTECTED);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
				this.match(PGTJavaParser.PRIVATE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 347;
				this.match(PGTJavaParser.STATIC);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 348;
				this.match(PGTJavaParser.ABSTRACT);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 349;
				this.match(PGTJavaParser.FINAL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 350;
				this.match(PGTJavaParser.STRICTFP);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 351;
				this.match(PGTJavaParser.SEALED);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 352;
				this.match(PGTJavaParser.NON_SEALED);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PGTJavaParser.RULE_variableModifier);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.match(PGTJavaParser.FINAL);
				}
				break;
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PGTJavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(PGTJavaParser.CLASS);
			this.state = 360;
			this.identifier();
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LT) {
				{
				this.state = 361;
				this.typeParameters();
				}
			}

			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.EXTENDS) {
				{
				this.state = 364;
				this.match(PGTJavaParser.EXTENDS);
				this.state = 365;
				this.typeType();
				}
			}

			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.IMPLEMENTS) {
				{
				this.state = 368;
				this.match(PGTJavaParser.IMPLEMENTS);
				this.state = 369;
				this.typeList();
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.PERMITS) {
				{
				this.state = 372;
				this.match(PGTJavaParser.PERMITS);
				this.state = 373;
				this.typeList();
				}
			}

			this.state = 376;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PGTJavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(PGTJavaParser.LT);
			this.state = 379;
			this.typeParameter();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 380;
				this.match(PGTJavaParser.COMMA);
				this.state = 381;
				this.typeParameter();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
			this.match(PGTJavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PGTJavaParser.RULE_typeParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 389;
					this.annotation();
					}
					}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 395;
			this.identifier();
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.EXTENDS) {
				{
				this.state = 396;
				this.match(PGTJavaParser.EXTENDS);
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 397;
						this.annotation();
						}
						}
					}
					this.state = 402;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
				this.state = 403;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PGTJavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.typeType();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.BITAND) {
				{
				{
				this.state = 407;
				this.match(PGTJavaParser.BITAND);
				this.state = 408;
				this.typeType();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PGTJavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(PGTJavaParser.ENUM);
			this.state = 415;
			this.identifier();
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.IMPLEMENTS) {
				{
				this.state = 416;
				this.match(PGTJavaParser.IMPLEMENTS);
				this.state = 417;
				this.typeList();
				}
			}

			this.state = 420;
			this.match(PGTJavaParser.LBRACE);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				this.state = 421;
				this.enumConstants();
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.COMMA) {
				{
				this.state = 424;
				this.match(PGTJavaParser.COMMA);
				}
			}

			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.SEMI) {
				{
				this.state = 427;
				this.enumBodyDeclarations();
				}
			}

			this.state = 430;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PGTJavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.enumConstant();
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 433;
					this.match(PGTJavaParser.COMMA);
					this.state = 434;
					this.enumConstant();
					}
					}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PGTJavaParser.RULE_enumConstant);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.annotation();
					}
					}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 446;
			this.identifier();
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LPAREN) {
				{
				this.state = 447;
				this.arguments();
				}
			}

			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LBRACE) {
				{
				this.state = 450;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PGTJavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(PGTJavaParser.SEMI);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.TRANSIENT - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.VOLATILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PGTJavaParser.AT - 123)) | (1 << (PGTJavaParser.IDENTIFIER - 123)) | (1 << (PGTJavaParser.PGT_START - 123)))) !== 0)) {
				{
				{
				this.state = 454;
				this.classBodyDeclaration();
				}
				}
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PGTJavaParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(PGTJavaParser.INTERFACE);
			this.state = 461;
			this.identifier();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LT) {
				{
				this.state = 462;
				this.typeParameters();
				}
			}

			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.EXTENDS) {
				{
				this.state = 465;
				this.match(PGTJavaParser.EXTENDS);
				this.state = 466;
				this.typeList();
				}
			}

			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.PERMITS) {
				{
				this.state = 469;
				this.match(PGTJavaParser.PERMITS);
				this.state = 470;
				this.typeList();
				}
			}

			this.state = 473;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PGTJavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(PGTJavaParser.LBRACE);
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 476;
				this.specification();
				}
				break;
			}
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.TRANSIENT - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.VOLATILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PGTJavaParser.AT - 123)) | (1 << (PGTJavaParser.IDENTIFIER - 123)) | (1 << (PGTJavaParser.PGT_START - 123)))) !== 0)) {
				{
				{
				this.state = 479;
				this.classBodyDeclaration();
				}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 485;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PGTJavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(PGTJavaParser.LBRACE);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.DEFAULT) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.TRANSIENT - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.VOLATILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 488;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 494;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PGTJavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.STATIC) {
					{
					this.state = 497;
					this.match(PGTJavaParser.STATIC);
					}
				}

				this.state = 500;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.PGT_START) {
					{
					{
					this.state = 501;
					this.specification();
					}
					}
					this.state = 506;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 510;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 507;
						this.modifier();
						}
						}
					}
					this.state = 512;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 513;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PGTJavaParser.RULE_memberDeclaration);
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 516;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 519;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 520;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 521;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 522;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 523;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 524;
				this.enumDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 525;
				this.recordDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PGTJavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.typeTypeOrVoid();
			this.state = 529;
			this.identifier();
			this.state = 530;
			this.formalParameters();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.LBRACK) {
				{
				{
				this.state = 531;
				this.match(PGTJavaParser.LBRACK);
				this.state = 532;
				this.match(PGTJavaParser.RBRACK);
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.THROWS) {
				{
				this.state = 538;
				this.match(PGTJavaParser.THROWS);
				this.state = 539;
				this.qualifiedNameList();
				}
			}

			this.state = 542;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PGTJavaParser.RULE_methodBody);
		try {
			this.state = 546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 544;
				this.block();
				}
				break;
			case PGTJavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 545;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		let _localctx: TypeTypeOrVoidContext = new TypeTypeOrVoidContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PGTJavaParser.RULE_typeTypeOrVoid);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.typeType();
				}
				break;
			case PGTJavaParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				this.match(PGTJavaParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PGTJavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.typeParameters();
			this.state = 553;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PGTJavaParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.typeParameters();
			this.state = 556;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PGTJavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.identifier();
			this.state = 559;
			this.formalParameters();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.THROWS) {
				{
				this.state = 560;
				this.match(PGTJavaParser.THROWS);
				this.state = 561;
				this.qualifiedNameList();
				}
			}

			this.state = 564;
			_localctx._constructorBody = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PGTJavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.typeType();
			this.state = 567;
			this.variableDeclarators();
			this.state = 568;
			this.match(PGTJavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PGTJavaParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.ABSTRACT:
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.CLASS:
			case PGTJavaParser.DEFAULT:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.ENUM:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.INTERFACE:
			case PGTJavaParser.LONG:
			case PGTJavaParser.NATIVE:
			case PGTJavaParser.PRIVATE:
			case PGTJavaParser.PROTECTED:
			case PGTJavaParser.PUBLIC:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.STATIC:
			case PGTJavaParser.STRICTFP:
			case PGTJavaParser.SYNCHRONIZED:
			case PGTJavaParser.TRANSIENT:
			case PGTJavaParser.VOID:
			case PGTJavaParser.VOLATILE:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.NON_SEALED:
			case PGTJavaParser.LT:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 570;
						this.modifier();
						}
						}
					}
					this.state = 575;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 576;
				this.interfaceMemberDeclaration();
				}
				break;
			case PGTJavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PGTJavaParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 582;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 583;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 584;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 585;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 586;
				this.enumDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 587;
				this.recordDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PGTJavaParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.typeType();
			this.state = 591;
			this.constantDeclarator();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 592;
				this.match(PGTJavaParser.COMMA);
				this.state = 593;
				this.constantDeclarator();
				}
				}
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 599;
			this.match(PGTJavaParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PGTJavaParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.identifier();
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.LBRACK) {
				{
				{
				this.state = 602;
				this.match(PGTJavaParser.LBRACK);
				this.state = 603;
				this.match(PGTJavaParser.RBRACK);
				}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 609;
			this.match(PGTJavaParser.ASSIGN);
			this.state = 610;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PGTJavaParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 612;
					this.interfaceMethodModifier();
					}
					}
				}
				this.state = 617;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 618;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PGTJavaParser.RULE_interfaceMethodModifier);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.annotation();
				}
				break;
			case PGTJavaParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.match(PGTJavaParser.PUBLIC);
				}
				break;
			case PGTJavaParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 622;
				this.match(PGTJavaParser.ABSTRACT);
				}
				break;
			case PGTJavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 623;
				this.match(PGTJavaParser.DEFAULT);
				}
				break;
			case PGTJavaParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 624;
				this.match(PGTJavaParser.STATIC);
				}
				break;
			case PGTJavaParser.STRICTFP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 625;
				this.match(PGTJavaParser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PGTJavaParser.RULE_genericInterfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.ABSTRACT || _la === PGTJavaParser.DEFAULT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (PGTJavaParser.PUBLIC - 35)) | (1 << (PGTJavaParser.STATIC - 35)) | (1 << (PGTJavaParser.STRICTFP - 35)) | (1 << (PGTJavaParser.MODULE - 35)) | (1 << (PGTJavaParser.OPEN - 35)) | (1 << (PGTJavaParser.REQUIRES - 35)) | (1 << (PGTJavaParser.EXPORTS - 35)) | (1 << (PGTJavaParser.OPENS - 35)) | (1 << (PGTJavaParser.TO - 35)) | (1 << (PGTJavaParser.USES - 35)) | (1 << (PGTJavaParser.PROVIDES - 35)) | (1 << (PGTJavaParser.WITH - 35)) | (1 << (PGTJavaParser.TRANSITIVE - 35)) | (1 << (PGTJavaParser.VAR - 35)) | (1 << (PGTJavaParser.YIELD - 35)) | (1 << (PGTJavaParser.RECORD - 35)) | (1 << (PGTJavaParser.SEALED - 35)) | (1 << (PGTJavaParser.PERMITS - 35)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 628;
				this.interfaceMethodModifier();
				}
				}
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 634;
			this.typeParameters();
			this.state = 635;
			this.interfaceCommonBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		let _localctx: InterfaceCommonBodyDeclarationContext = new InterfaceCommonBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PGTJavaParser.RULE_interfaceCommonBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 637;
					this.annotation();
					}
					}
				}
				this.state = 642;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 643;
			this.typeTypeOrVoid();
			this.state = 644;
			this.identifier();
			this.state = 645;
			this.formalParameters();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.LBRACK) {
				{
				{
				this.state = 646;
				this.match(PGTJavaParser.LBRACK);
				this.state = 647;
				this.match(PGTJavaParser.RBRACK);
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.THROWS) {
				{
				this.state = 653;
				this.match(PGTJavaParser.THROWS);
				this.state = 654;
				this.qualifiedNameList();
				}
			}

			this.state = 657;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PGTJavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.variableDeclarator();
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 660;
				this.match(PGTJavaParser.COMMA);
				this.state = 661;
				this.variableDeclarator();
				}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, PGTJavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.variableDeclaratorId();
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.ASSIGN) {
				{
				this.state = 668;
				this.match(PGTJavaParser.ASSIGN);
				this.state = 669;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, PGTJavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.identifier();
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.LBRACK) {
				{
				{
				this.state = 673;
				this.match(PGTJavaParser.LBRACK);
				this.state = 674;
				this.match(PGTJavaParser.RBRACK);
				}
				}
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, PGTJavaParser.RULE_variableInitializer);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.arrayInitializer();
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.NEW:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.SUPER:
			case PGTJavaParser.SWITCH:
			case PGTJavaParser.THIS:
			case PGTJavaParser.VOID:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.DECIMAL_LITERAL:
			case PGTJavaParser.HEX_LITERAL:
			case PGTJavaParser.OCT_LITERAL:
			case PGTJavaParser.BINARY_LITERAL:
			case PGTJavaParser.FLOAT_LITERAL:
			case PGTJavaParser.HEX_FLOAT_LITERAL:
			case PGTJavaParser.BOOL_LITERAL:
			case PGTJavaParser.CHAR_LITERAL:
			case PGTJavaParser.STRING_LITERAL:
			case PGTJavaParser.TEXT_BLOCK:
			case PGTJavaParser.NULL_LITERAL:
			case PGTJavaParser.LPAREN:
			case PGTJavaParser.LT:
			case PGTJavaParser.BANG:
			case PGTJavaParser.TILDE:
			case PGTJavaParser.INC:
			case PGTJavaParser.DEC:
			case PGTJavaParser.ADD:
			case PGTJavaParser.SUB:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, PGTJavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(PGTJavaParser.LBRACE);
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LBRACE - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 685;
				this.variableInitializer();
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 686;
						this.match(PGTJavaParser.COMMA);
						this.state = 687;
						this.variableInitializer();
						}
						}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.COMMA) {
					{
					this.state = 693;
					this.match(PGTJavaParser.COMMA);
					}
				}

				}
			}

			this.state = 698;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, PGTJavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.identifier();
			this.state = 702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 701;
				this.typeArguments();
				}
				break;
			}
			this.state = 711;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 704;
					this.match(PGTJavaParser.DOT);
					this.state = 705;
					this.identifier();
					this.state = 707;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						this.state = 706;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 713;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, PGTJavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 714;
				this.typeType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
					{
					{
					this.state = 715;
					this.annotation();
					}
					}
					this.state = 720;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 721;
				this.match(PGTJavaParser.QUESTION);
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.EXTENDS || _la === PGTJavaParser.SUPER) {
					{
					this.state = 722;
					_la = this._input.LA(1);
					if (!(_la === PGTJavaParser.EXTENDS || _la === PGTJavaParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 723;
					this.typeType();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, PGTJavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.qualifiedName();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 729;
				this.match(PGTJavaParser.COMMA);
				this.state = 730;
				this.qualifiedName();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, PGTJavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.match(PGTJavaParser.LPAREN);
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 737;
					this.receiverParameter();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 740;
				this.receiverParameter();
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.COMMA) {
					{
					this.state = 741;
					this.match(PGTJavaParser.COMMA);
					this.state = 742;
					this.formalParameterList();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 745;
					this.formalParameterList();
					}
				}

				}
				break;
			}
			this.state = 750;
			this.match(PGTJavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, PGTJavaParser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.typeType();
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 753;
				this.identifier();
				this.state = 754;
				this.match(PGTJavaParser.DOT);
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 761;
			this.match(PGTJavaParser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, PGTJavaParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.formalParameter();
				this.state = 768;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 764;
						this.match(PGTJavaParser.COMMA);
						this.state = 765;
						this.formalParameter();
						}
						}
					}
					this.state = 770;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
				}
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.COMMA) {
					{
					this.state = 771;
					this.match(PGTJavaParser.COMMA);
					this.state = 772;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 775;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, PGTJavaParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 778;
					this.variableModifier();
					}
					}
				}
				this.state = 783;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			this.state = 784;
			this.typeType();
			this.state = 785;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, PGTJavaParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 787;
					this.variableModifier();
					}
					}
				}
				this.state = 792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 793;
			this.typeType();
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 794;
				this.annotation();
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this.match(PGTJavaParser.ELLIPSIS);
			this.state = 801;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIList(): LambdaLVTIListContext {
		let _localctx: LambdaLVTIListContext = new LambdaLVTIListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, PGTJavaParser.RULE_lambdaLVTIList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.lambdaLVTIParameter();
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 804;
				this.match(PGTJavaParser.COMMA);
				this.state = 805;
				this.lambdaLVTIParameter();
				}
				}
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaLVTIParameter(): LambdaLVTIParameterContext {
		let _localctx: LambdaLVTIParameterContext = new LambdaLVTIParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, PGTJavaParser.RULE_lambdaLVTIParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 811;
					this.variableModifier();
					}
					}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			}
			this.state = 817;
			this.match(PGTJavaParser.VAR);
			this.state = 818;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, PGTJavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.identifier();
			this.state = 825;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 821;
					this.match(PGTJavaParser.DOT);
					this.state = 822;
					this.identifier();
					}
					}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, PGTJavaParser.RULE_literal);
		try {
			this.state = 835;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.DECIMAL_LITERAL:
			case PGTJavaParser.HEX_LITERAL:
			case PGTJavaParser.OCT_LITERAL:
			case PGTJavaParser.BINARY_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 828;
				this.integerLiteral();
				}
				break;
			case PGTJavaParser.FLOAT_LITERAL:
			case PGTJavaParser.HEX_FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 829;
				this.floatLiteral();
				}
				break;
			case PGTJavaParser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 830;
				this.match(PGTJavaParser.CHAR_LITERAL);
				}
				break;
			case PGTJavaParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 831;
				this.match(PGTJavaParser.STRING_LITERAL);
				}
				break;
			case PGTJavaParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 832;
				this.match(PGTJavaParser.BOOL_LITERAL);
				}
				break;
			case PGTJavaParser.NULL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 833;
				this.match(PGTJavaParser.NULL_LITERAL);
				}
				break;
			case PGTJavaParser.TEXT_BLOCK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 834;
				this.match(PGTJavaParser.TEXT_BLOCK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, PGTJavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			_la = this._input.LA(1);
			if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (PGTJavaParser.DECIMAL_LITERAL - 67)) | (1 << (PGTJavaParser.HEX_LITERAL - 67)) | (1 << (PGTJavaParser.OCT_LITERAL - 67)) | (1 << (PGTJavaParser.BINARY_LITERAL - 67)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatLiteral(): FloatLiteralContext {
		let _localctx: FloatLiteralContext = new FloatLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, PGTJavaParser.RULE_floatLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			_la = this._input.LA(1);
			if (!(_la === PGTJavaParser.FLOAT_LITERAL || _la === PGTJavaParser.HEX_FLOAT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
		let _localctx: AltAnnotationQualifiedNameContext = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, PGTJavaParser.RULE_altAnnotationQualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 841;
				this.identifier();
				this.state = 842;
				this.match(PGTJavaParser.DOT);
				}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 849;
			this.match(PGTJavaParser.AT);
			this.state = 850;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, PGTJavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 852;
				this.match(PGTJavaParser.AT);
				this.state = 853;
				this.qualifiedName();
				}
				break;

			case 2:
				{
				this.state = 854;
				this.altAnnotationQualifiedName();
				}
				break;
			}
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LPAREN) {
				{
				this.state = 857;
				this.match(PGTJavaParser.LPAREN);
				this.state = 860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 858;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 859;
					this.elementValue();
					}
					break;
				}
				this.state = 862;
				this.match(PGTJavaParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, PGTJavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.elementValuePair();
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 866;
				this.match(PGTJavaParser.COMMA);
				this.state = 867;
				this.elementValuePair();
				}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, PGTJavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.identifier();
			this.state = 874;
			this.match(PGTJavaParser.ASSIGN);
			this.state = 875;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, PGTJavaParser.RULE_elementValue);
		try {
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 877;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 878;
				this.annotation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 879;
				this.elementValueArrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, PGTJavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.match(PGTJavaParser.LBRACE);
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LBRACE - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 883;
				this.elementValue();
				this.state = 888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 884;
						this.match(PGTJavaParser.COMMA);
						this.state = 885;
						this.elementValue();
						}
						}
					}
					this.state = 890;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				}
			}

			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.COMMA) {
				{
				this.state = 893;
				this.match(PGTJavaParser.COMMA);
				}
			}

			this.state = 896;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, PGTJavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.match(PGTJavaParser.AT);
			this.state = 899;
			this.match(PGTJavaParser.INTERFACE);
			this.state = 900;
			this.identifier();
			this.state = 901;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, PGTJavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.match(PGTJavaParser.LBRACE);
			this.state = 907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.TRANSIENT - 33)) | (1 << (PGTJavaParser.VOLATILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.SEMI - 65)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				{
				this.state = 904;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 910;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, PGTJavaParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 920;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.ABSTRACT:
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.CLASS:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.ENUM:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.INTERFACE:
			case PGTJavaParser.LONG:
			case PGTJavaParser.NATIVE:
			case PGTJavaParser.PRIVATE:
			case PGTJavaParser.PROTECTED:
			case PGTJavaParser.PUBLIC:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.STATIC:
			case PGTJavaParser.STRICTFP:
			case PGTJavaParser.SYNCHRONIZED:
			case PGTJavaParser.TRANSIENT:
			case PGTJavaParser.VOLATILE:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.NON_SEALED:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 915;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 912;
						this.modifier();
						}
						}
					}
					this.state = 917;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				}
				this.state = 918;
				this.annotationTypeElementRest();
				}
				break;
			case PGTJavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 919;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, PGTJavaParser.RULE_annotationTypeElementRest);
		try {
			this.state = 946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.typeType();
				this.state = 923;
				this.annotationMethodOrConstantRest();
				this.state = 924;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 926;
				this.classDeclaration();
				this.state = 928;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 927;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 930;
				this.interfaceDeclaration();
				this.state = 932;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 931;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 934;
				this.enumDeclaration();
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 935;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 938;
				this.annotationTypeDeclaration();
				this.state = 940;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 939;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 942;
				this.recordDeclaration();
				this.state = 944;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 943;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, PGTJavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 948;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 949;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, PGTJavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.identifier();
			this.state = 953;
			this.match(PGTJavaParser.LPAREN);
			this.state = 954;
			this.match(PGTJavaParser.RPAREN);
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.DEFAULT) {
				{
				this.state = 955;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, PGTJavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, PGTJavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.match(PGTJavaParser.DEFAULT);
			this.state = 961;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, PGTJavaParser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.OPEN) {
				{
				this.state = 963;
				this.match(PGTJavaParser.OPEN);
				}
			}

			this.state = 966;
			this.match(PGTJavaParser.MODULE);
			this.state = 967;
			this.qualifiedName();
			this.state = 968;
			this.moduleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, PGTJavaParser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(PGTJavaParser.LBRACE);
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (PGTJavaParser.REQUIRES - 53)) | (1 << (PGTJavaParser.EXPORTS - 53)) | (1 << (PGTJavaParser.OPENS - 53)) | (1 << (PGTJavaParser.USES - 53)) | (1 << (PGTJavaParser.PROVIDES - 53)))) !== 0)) {
				{
				{
				this.state = 971;
				this.moduleDirective();
				}
				}
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 977;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let _localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, PGTJavaParser.RULE_moduleDirective);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1015;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.REQUIRES:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 979;
				this.match(PGTJavaParser.REQUIRES);
				this.state = 983;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 980;
						this.requiresModifier();
						}
						}
					}
					this.state = 985;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				}
				this.state = 986;
				this.qualifiedName();
				this.state = 987;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			case PGTJavaParser.EXPORTS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 989;
				this.match(PGTJavaParser.EXPORTS);
				this.state = 990;
				this.qualifiedName();
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.TO) {
					{
					this.state = 991;
					this.match(PGTJavaParser.TO);
					this.state = 992;
					this.qualifiedName();
					}
				}

				this.state = 995;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			case PGTJavaParser.OPENS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 997;
				this.match(PGTJavaParser.OPENS);
				this.state = 998;
				this.qualifiedName();
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.TO) {
					{
					this.state = 999;
					this.match(PGTJavaParser.TO);
					this.state = 1000;
					this.qualifiedName();
					}
				}

				this.state = 1003;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			case PGTJavaParser.USES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1005;
				this.match(PGTJavaParser.USES);
				this.state = 1006;
				this.qualifiedName();
				this.state = 1007;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			case PGTJavaParser.PROVIDES:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1009;
				this.match(PGTJavaParser.PROVIDES);
				this.state = 1010;
				this.qualifiedName();
				this.state = 1011;
				this.match(PGTJavaParser.WITH);
				this.state = 1012;
				this.qualifiedName();
				this.state = 1013;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let _localctx: RequiresModifierContext = new RequiresModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, PGTJavaParser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1017;
			_la = this._input.LA(1);
			if (!(_la === PGTJavaParser.STATIC || _la === PGTJavaParser.TRANSITIVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let _localctx: RecordDeclarationContext = new RecordDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, PGTJavaParser.RULE_recordDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(PGTJavaParser.RECORD);
			this.state = 1020;
			this.identifier();
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LT) {
				{
				this.state = 1021;
				this.typeParameters();
				}
			}

			this.state = 1024;
			this.recordHeader();
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.IMPLEMENTS) {
				{
				this.state = 1025;
				this.match(PGTJavaParser.IMPLEMENTS);
				this.state = 1026;
				this.typeList();
				}
			}

			this.state = 1029;
			this.recordBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordHeader(): RecordHeaderContext {
		let _localctx: RecordHeaderContext = new RecordHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, PGTJavaParser.RULE_recordHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(PGTJavaParser.LPAREN);
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
				{
				this.state = 1032;
				this.recordComponentList();
				}
			}

			this.state = 1035;
			this.match(PGTJavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponentList(): RecordComponentListContext {
		let _localctx: RecordComponentListContext = new RecordComponentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, PGTJavaParser.RULE_recordComponentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this.recordComponent();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 1038;
				this.match(PGTJavaParser.COMMA);
				this.state = 1039;
				this.recordComponent();
				}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordComponent(): RecordComponentContext {
		let _localctx: RecordComponentContext = new RecordComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, PGTJavaParser.RULE_recordComponent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.typeType();
			this.state = 1046;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordBody(): RecordBodyContext {
		let _localctx: RecordBodyContext = new RecordBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, PGTJavaParser.RULE_recordBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.match(PGTJavaParser.LBRACE);
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.ENUM) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.TRANSIENT - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.VOLATILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (PGTJavaParser.AT - 123)) | (1 << (PGTJavaParser.IDENTIFIER - 123)) | (1 << (PGTJavaParser.PGT_START - 123)))) !== 0)) {
				{
				{
				this.state = 1049;
				this.classBodyDeclaration();
				}
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1055;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, PGTJavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(PGTJavaParser.LBRACE);
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.ASSERT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BREAK) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.CONTINUE) | (1 << PGTJavaParser.DO) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.FOR) | (1 << PGTJavaParser.IF) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.RETURN - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SUPER - 33)) | (1 << (PGTJavaParser.SWITCH - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.THIS - 33)) | (1 << (PGTJavaParser.THROW - 33)) | (1 << (PGTJavaParser.TRY - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.WHILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_LITERAL - 65)) | (1 << (PGTJavaParser.OCT_LITERAL - 65)) | (1 << (PGTJavaParser.BINARY_LITERAL - 65)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.BOOL_LITERAL - 65)) | (1 << (PGTJavaParser.CHAR_LITERAL - 65)) | (1 << (PGTJavaParser.STRING_LITERAL - 65)) | (1 << (PGTJavaParser.TEXT_BLOCK - 65)) | (1 << (PGTJavaParser.NULL_LITERAL - 65)) | (1 << (PGTJavaParser.LPAREN - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)) | (1 << (PGTJavaParser.BANG - 65)) | (1 << (PGTJavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (PGTJavaParser.INC - 100)) | (1 << (PGTJavaParser.DEC - 100)) | (1 << (PGTJavaParser.ADD - 100)) | (1 << (PGTJavaParser.SUB - 100)) | (1 << (PGTJavaParser.AT - 100)) | (1 << (PGTJavaParser.IDENTIFIER - 100)) | (1 << (PGTJavaParser.PGT_START - 100)))) !== 0)) {
				{
				this.state = 1060;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.PGT_START:
					{
					this.state = 1058;
					this.specification();
					}
					break;
				case PGTJavaParser.ABSTRACT:
				case PGTJavaParser.ASSERT:
				case PGTJavaParser.BOOLEAN:
				case PGTJavaParser.BREAK:
				case PGTJavaParser.BYTE:
				case PGTJavaParser.CHAR:
				case PGTJavaParser.CLASS:
				case PGTJavaParser.CONTINUE:
				case PGTJavaParser.DO:
				case PGTJavaParser.DOUBLE:
				case PGTJavaParser.FINAL:
				case PGTJavaParser.FLOAT:
				case PGTJavaParser.FOR:
				case PGTJavaParser.IF:
				case PGTJavaParser.INT:
				case PGTJavaParser.INTERFACE:
				case PGTJavaParser.LONG:
				case PGTJavaParser.NEW:
				case PGTJavaParser.PRIVATE:
				case PGTJavaParser.PROTECTED:
				case PGTJavaParser.PUBLIC:
				case PGTJavaParser.RETURN:
				case PGTJavaParser.SHORT:
				case PGTJavaParser.STATIC:
				case PGTJavaParser.STRICTFP:
				case PGTJavaParser.SUPER:
				case PGTJavaParser.SWITCH:
				case PGTJavaParser.SYNCHRONIZED:
				case PGTJavaParser.THIS:
				case PGTJavaParser.THROW:
				case PGTJavaParser.TRY:
				case PGTJavaParser.VOID:
				case PGTJavaParser.WHILE:
				case PGTJavaParser.MODULE:
				case PGTJavaParser.OPEN:
				case PGTJavaParser.REQUIRES:
				case PGTJavaParser.EXPORTS:
				case PGTJavaParser.OPENS:
				case PGTJavaParser.TO:
				case PGTJavaParser.USES:
				case PGTJavaParser.PROVIDES:
				case PGTJavaParser.WITH:
				case PGTJavaParser.TRANSITIVE:
				case PGTJavaParser.VAR:
				case PGTJavaParser.YIELD:
				case PGTJavaParser.RECORD:
				case PGTJavaParser.SEALED:
				case PGTJavaParser.PERMITS:
				case PGTJavaParser.NON_SEALED:
				case PGTJavaParser.DECIMAL_LITERAL:
				case PGTJavaParser.HEX_LITERAL:
				case PGTJavaParser.OCT_LITERAL:
				case PGTJavaParser.BINARY_LITERAL:
				case PGTJavaParser.FLOAT_LITERAL:
				case PGTJavaParser.HEX_FLOAT_LITERAL:
				case PGTJavaParser.BOOL_LITERAL:
				case PGTJavaParser.CHAR_LITERAL:
				case PGTJavaParser.STRING_LITERAL:
				case PGTJavaParser.TEXT_BLOCK:
				case PGTJavaParser.NULL_LITERAL:
				case PGTJavaParser.LPAREN:
				case PGTJavaParser.LBRACE:
				case PGTJavaParser.SEMI:
				case PGTJavaParser.LT:
				case PGTJavaParser.BANG:
				case PGTJavaParser.TILDE:
				case PGTJavaParser.INC:
				case PGTJavaParser.DEC:
				case PGTJavaParser.ADD:
				case PGTJavaParser.SUB:
				case PGTJavaParser.AT:
				case PGTJavaParser.IDENTIFIER:
					{
					this.state = 1059;
					this.blockStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1065;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, PGTJavaParser.RULE_blockStatement);
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1067;
				this.localVariableDeclaration();
				this.state = 1068;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1070;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1071;
				this.localTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, PGTJavaParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1077;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1074;
					this.variableModifier();
					}
					}
				}
				this.state = 1079;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			}
			this.state = 1088;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
				this.typeType();
				this.state = 1081;
				this.variableDeclarators();
				}
				break;

			case 2:
				{
				this.state = 1083;
				this.match(PGTJavaParser.VAR);
				this.state = 1084;
				this.identifier();
				this.state = 1085;
				this.match(PGTJavaParser.ASSIGN);
				this.state = 1086;
				this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, PGTJavaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTypeDeclaration(): LocalTypeDeclarationContext {
		let _localctx: LocalTypeDeclarationContext = new LocalTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, PGTJavaParser.RULE_localTypeDeclaration);
		try {
			let _alt: number;
			this.state = 1104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.ABSTRACT:
			case PGTJavaParser.CLASS:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.INTERFACE:
			case PGTJavaParser.PRIVATE:
			case PGTJavaParser.PROTECTED:
			case PGTJavaParser.PUBLIC:
			case PGTJavaParser.STATIC:
			case PGTJavaParser.STRICTFP:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.NON_SEALED:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1095;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1092;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 1097;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				}
				this.state = 1101;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.CLASS:
					{
					this.state = 1098;
					this.classDeclaration();
					}
					break;
				case PGTJavaParser.INTERFACE:
					{
					this.state = 1099;
					this.interfaceDeclaration();
					}
					break;
				case PGTJavaParser.RECORD:
					{
					this.state = 1100;
					this.recordDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case PGTJavaParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1103;
				this.match(PGTJavaParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, PGTJavaParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1106;
				_localctx._blockLabel = this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1107;
				this.match(PGTJavaParser.ASSERT);
				this.state = 1108;
				this.expression(0);
				this.state = 1111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.COLON) {
					{
					this.state = 1109;
					this.match(PGTJavaParser.COLON);
					this.state = 1110;
					this.expression(0);
					}
				}

				this.state = 1113;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1115;
				this.match(PGTJavaParser.IF);
				this.state = 1116;
				this.parExpression();
				this.state = 1117;
				this.statement();
				this.state = 1120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.match(PGTJavaParser.ELSE);
					this.state = 1119;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1122;
				this.match(PGTJavaParser.FOR);
				this.state = 1123;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1124;
				this.forControl();
				this.state = 1125;
				this.match(PGTJavaParser.RPAREN);
				this.state = 1126;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1128;
				this.match(PGTJavaParser.WHILE);
				this.state = 1129;
				this.parExpression();
				this.state = 1130;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1132;
				this.match(PGTJavaParser.DO);
				this.state = 1133;
				this.statement();
				this.state = 1134;
				this.match(PGTJavaParser.WHILE);
				this.state = 1135;
				this.parExpression();
				this.state = 1136;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1138;
				this.match(PGTJavaParser.TRY);
				this.state = 1139;
				this.block();
				this.state = 1149;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.CATCH:
					{
					this.state = 1141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1140;
						this.catchClause();
						}
						}
						this.state = 1143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === PGTJavaParser.CATCH);
					this.state = 1146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PGTJavaParser.FINALLY) {
						{
						this.state = 1145;
						this.finallyBlock();
						}
					}

					}
					break;
				case PGTJavaParser.FINALLY:
					{
					this.state = 1148;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1151;
				this.match(PGTJavaParser.TRY);
				this.state = 1152;
				this.resourceSpecification();
				this.state = 1153;
				this.block();
				this.state = 1157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.CATCH) {
					{
					{
					this.state = 1154;
					this.catchClause();
					}
					}
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.FINALLY) {
					{
					this.state = 1160;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1163;
				this.match(PGTJavaParser.SWITCH);
				this.state = 1164;
				this.parExpression();
				this.state = 1165;
				this.match(PGTJavaParser.LBRACE);
				this.state = 1169;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1166;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 1171;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.CASE || _la === PGTJavaParser.DEFAULT) {
					{
					{
					this.state = 1172;
					this.switchLabel();
					}
					}
					this.state = 1177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1178;
				this.match(PGTJavaParser.RBRACE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1180;
				this.match(PGTJavaParser.SYNCHRONIZED);
				this.state = 1181;
				this.parExpression();
				this.state = 1182;
				this.block();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1184;
				this.match(PGTJavaParser.RETURN);
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1185;
					this.expression(0);
					}
				}

				this.state = 1188;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1189;
				this.match(PGTJavaParser.THROW);
				this.state = 1190;
				this.expression(0);
				this.state = 1191;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1193;
				this.match(PGTJavaParser.BREAK);
				this.state = 1195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 1194;
					this.identifier();
					}
				}

				this.state = 1197;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1198;
				this.match(PGTJavaParser.CONTINUE);
				this.state = 1200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 1199;
					this.identifier();
					}
				}

				this.state = 1202;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1203;
				this.match(PGTJavaParser.YIELD);
				this.state = 1204;
				this.expression(0);
				this.state = 1205;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1207;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1208;
				_localctx._statementExpression = this.expression(0);
				this.state = 1209;
				this.match(PGTJavaParser.SEMI);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1211;
				this.switchExpression();
				this.state = 1213;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1212;
					this.match(PGTJavaParser.SEMI);
					}
					break;
				}
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1215;
				_localctx._identifierLabel = this.identifier();
				this.state = 1216;
				this.match(PGTJavaParser.COLON);
				this.state = 1217;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, PGTJavaParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1221;
			this.match(PGTJavaParser.CATCH);
			this.state = 1222;
			this.match(PGTJavaParser.LPAREN);
			this.state = 1226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1223;
					this.variableModifier();
					}
					}
				}
				this.state = 1228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 1229;
			this.catchType();
			this.state = 1230;
			this.identifier();
			this.state = 1231;
			this.match(PGTJavaParser.RPAREN);
			this.state = 1232;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, PGTJavaParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.qualifiedName();
			this.state = 1239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.BITOR) {
				{
				{
				this.state = 1235;
				this.match(PGTJavaParser.BITOR);
				this.state = 1236;
				this.qualifiedName();
				}
				}
				this.state = 1241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, PGTJavaParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.match(PGTJavaParser.FINALLY);
			this.state = 1243;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, PGTJavaParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.match(PGTJavaParser.LPAREN);
			this.state = 1246;
			this.resources();
			this.state = 1248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.SEMI) {
				{
				this.state = 1247;
				this.match(PGTJavaParser.SEMI);
				}
			}

			this.state = 1250;
			this.match(PGTJavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, PGTJavaParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.resource();
			this.state = 1257;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1253;
					this.match(PGTJavaParser.SEMI);
					this.state = 1254;
					this.resource();
					}
					}
				}
				this.state = 1259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, PGTJavaParser.RULE_resource);
		try {
			let _alt: number;
			this.state = 1277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1260;
						this.variableModifier();
						}
						}
					}
					this.state = 1265;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				}
				this.state = 1271;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
				case 1:
					{
					this.state = 1266;
					this.classOrInterfaceType();
					this.state = 1267;
					this.variableDeclaratorId();
					}
					break;

				case 2:
					{
					this.state = 1269;
					this.match(PGTJavaParser.VAR);
					this.state = 1270;
					this.identifier();
					}
					break;
				}
				this.state = 1273;
				this.match(PGTJavaParser.ASSIGN);
				this.state = 1274;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1276;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, PGTJavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1279;
				this.switchLabel();
				}
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PGTJavaParser.CASE || _la === PGTJavaParser.DEFAULT);
			this.state = 1285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1284;
				this.blockStatement();
				}
				}
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.ASSERT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BREAK) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.CONTINUE) | (1 << PGTJavaParser.DO) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.FOR) | (1 << PGTJavaParser.IF) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.RETURN - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SUPER - 33)) | (1 << (PGTJavaParser.SWITCH - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.THIS - 33)) | (1 << (PGTJavaParser.THROW - 33)) | (1 << (PGTJavaParser.TRY - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.WHILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_LITERAL - 65)) | (1 << (PGTJavaParser.OCT_LITERAL - 65)) | (1 << (PGTJavaParser.BINARY_LITERAL - 65)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.BOOL_LITERAL - 65)) | (1 << (PGTJavaParser.CHAR_LITERAL - 65)) | (1 << (PGTJavaParser.STRING_LITERAL - 65)) | (1 << (PGTJavaParser.TEXT_BLOCK - 65)) | (1 << (PGTJavaParser.NULL_LITERAL - 65)) | (1 << (PGTJavaParser.LPAREN - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)) | (1 << (PGTJavaParser.BANG - 65)) | (1 << (PGTJavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (PGTJavaParser.INC - 100)) | (1 << (PGTJavaParser.DEC - 100)) | (1 << (PGTJavaParser.ADD - 100)) | (1 << (PGTJavaParser.SUB - 100)) | (1 << (PGTJavaParser.AT - 100)) | (1 << (PGTJavaParser.IDENTIFIER - 100)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, PGTJavaParser.RULE_switchLabel);
		try {
			this.state = 1300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1289;
				this.match(PGTJavaParser.CASE);
				this.state = 1295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
				case 1:
					{
					this.state = 1290;
					_localctx._constantExpression = this.expression(0);
					}
					break;

				case 2:
					{
					this.state = 1291;
					_localctx._enumConstantName = this.match(PGTJavaParser.IDENTIFIER);
					}
					break;

				case 3:
					{
					this.state = 1292;
					this.typeType();
					this.state = 1293;
					_localctx._varName = this.identifier();
					}
					break;
				}
				this.state = 1297;
				this.match(PGTJavaParser.COLON);
				}
				break;
			case PGTJavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1298;
				this.match(PGTJavaParser.DEFAULT);
				this.state = 1299;
				this.match(PGTJavaParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, PGTJavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1302;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1303;
					this.forInit();
					}
				}

				this.state = 1306;
				this.match(PGTJavaParser.SEMI);
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1307;
					this.expression(0);
					}
				}

				this.state = 1310;
				this.match(PGTJavaParser.SEMI);
				this.state = 1312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1311;
					_localctx._forUpdate = this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, PGTJavaParser.RULE_forInit);
		try {
			this.state = 1318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1316;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1317;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, PGTJavaParser.RULE_enhancedForControl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1320;
					this.variableModifier();
					}
					}
				}
				this.state = 1325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			}
			this.state = 1328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1326;
				this.typeType();
				}
				break;

			case 2:
				{
				this.state = 1327;
				this.match(PGTJavaParser.VAR);
				}
				break;
			}
			this.state = 1330;
			this.variableDeclaratorId();
			this.state = 1331;
			this.match(PGTJavaParser.COLON);
			this.state = 1332;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, PGTJavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this.match(PGTJavaParser.LPAREN);
			this.state = 1335;
			this.expression(0);
			this.state = 1336;
			this.match(PGTJavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, PGTJavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1338;
			this.expression(0);
			this.state = 1343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 1339;
				this.match(PGTJavaParser.COMMA);
				this.state = 1340;
				this.expression(0);
				}
				}
				this.state = 1345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, PGTJavaParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 1365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1346;
				this.identifier();
				this.state = 1347;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1348;
					this.expressionList();
					}
				}

				this.state = 1351;
				this.match(PGTJavaParser.RPAREN);
				}
				break;
			case PGTJavaParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1353;
				this.match(PGTJavaParser.THIS);
				this.state = 1354;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1355;
					this.expressionList();
					}
				}

				this.state = 1358;
				this.match(PGTJavaParser.RPAREN);
				}
				break;
			case PGTJavaParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1359;
				this.match(PGTJavaParser.SUPER);
				this.state = 1360;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
					{
					this.state = 1361;
					this.expressionList();
					}
				}

				this.state = 1364;
				this.match(PGTJavaParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 196;
		this.enterRecursionRule(_localctx, 196, PGTJavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1368;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1369;
				this.methodCall();
				}
				break;

			case 3:
				{
				this.state = 1370;
				this.match(PGTJavaParser.NEW);
				this.state = 1371;
				this.creator();
				}
				break;

			case 4:
				{
				this.state = 1372;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1373;
						this.annotation();
						}
						}
					}
					this.state = 1378;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				}
				this.state = 1379;
				this.typeType();
				this.state = 1384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.BITAND) {
					{
					{
					this.state = 1380;
					this.match(PGTJavaParser.BITAND);
					this.state = 1381;
					this.typeType();
					}
					}
					this.state = 1386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1387;
				this.match(PGTJavaParser.RPAREN);
				this.state = 1388;
				this.expression(22);
				}
				break;

			case 5:
				{
				this.state = 1390;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (PGTJavaParser.INC - 100)) | (1 << (PGTJavaParser.DEC - 100)) | (1 << (PGTJavaParser.ADD - 100)) | (1 << (PGTJavaParser.SUB - 100)))) !== 0))) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1391;
				this.expression(20);
				}
				break;

			case 6:
				{
				this.state = 1392;
				_localctx._prefix = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.BANG || _la === PGTJavaParser.TILDE)) {
					_localctx._prefix = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1393;
				this.expression(19);
				}
				break;

			case 7:
				{
				this.state = 1394;
				this.lambdaExpression();
				}
				break;

			case 8:
				{
				this.state = 1395;
				this.switchExpression();
				}
				break;

			case 9:
				{
				this.state = 1396;
				this.typeType();
				this.state = 1397;
				this.match(PGTJavaParser.COLONCOLON);
				this.state = 1403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.MODULE:
				case PGTJavaParser.OPEN:
				case PGTJavaParser.REQUIRES:
				case PGTJavaParser.EXPORTS:
				case PGTJavaParser.OPENS:
				case PGTJavaParser.TO:
				case PGTJavaParser.USES:
				case PGTJavaParser.PROVIDES:
				case PGTJavaParser.WITH:
				case PGTJavaParser.TRANSITIVE:
				case PGTJavaParser.VAR:
				case PGTJavaParser.YIELD:
				case PGTJavaParser.RECORD:
				case PGTJavaParser.SEALED:
				case PGTJavaParser.PERMITS:
				case PGTJavaParser.LT:
				case PGTJavaParser.IDENTIFIER:
					{
					this.state = 1399;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PGTJavaParser.LT) {
						{
						this.state = 1398;
						this.typeArguments();
						}
					}

					this.state = 1401;
					this.identifier();
					}
					break;
				case PGTJavaParser.NEW:
					{
					this.state = 1402;
					this.match(PGTJavaParser.NEW);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				{
				this.state = 1405;
				this.classType();
				this.state = 1406;
				this.match(PGTJavaParser.COLONCOLON);
				this.state = 1408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.LT) {
					{
					this.state = 1407;
					this.typeArguments();
					}
				}

				this.state = 1410;
				this.match(PGTJavaParser.NEW);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1497;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1495;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1414;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1415;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (PGTJavaParser.MUL - 104)) | (1 << (PGTJavaParser.DIV - 104)) | (1 << (PGTJavaParser.MOD - 104)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1416;
						this.expression(19);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1417;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1418;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PGTJavaParser.ADD || _la === PGTJavaParser.SUB)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1419;
						this.expression(18);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1420;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1428;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
						case 1:
							{
							this.state = 1421;
							this.match(PGTJavaParser.LT);
							this.state = 1422;
							this.match(PGTJavaParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1423;
							this.match(PGTJavaParser.GT);
							this.state = 1424;
							this.match(PGTJavaParser.GT);
							this.state = 1425;
							this.match(PGTJavaParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1426;
							this.match(PGTJavaParser.GT);
							this.state = 1427;
							this.match(PGTJavaParser.GT);
							}
							break;
						}
						this.state = 1430;
						this.expression(17);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1431;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1432;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (PGTJavaParser.GT - 88)) | (1 << (PGTJavaParser.LT - 88)) | (1 << (PGTJavaParser.LE - 88)) | (1 << (PGTJavaParser.GE - 88)))) !== 0))) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1433;
						this.expression(16);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1434;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1435;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PGTJavaParser.EQUAL || _la === PGTJavaParser.NOTEQUAL)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1436;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1437;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1438;
						_localctx._bop = this.match(PGTJavaParser.BITAND);
						this.state = 1439;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1440;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1441;
						_localctx._bop = this.match(PGTJavaParser.CARET);
						this.state = 1442;
						this.expression(12);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1443;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1444;
						_localctx._bop = this.match(PGTJavaParser.BITOR);
						this.state = 1445;
						this.expression(11);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1446;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1447;
						_localctx._bop = this.match(PGTJavaParser.AND);
						this.state = 1448;
						this.expression(10);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1449;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1450;
						_localctx._bop = this.match(PGTJavaParser.OR);
						this.state = 1451;
						this.expression(9);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1452;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1453;
						_localctx._bop = this.match(PGTJavaParser.QUESTION);
						this.state = 1454;
						this.expression(0);
						this.state = 1455;
						this.match(PGTJavaParser.COLON);
						this.state = 1456;
						this.expression(7);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1458;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1459;
						_localctx._bop = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (PGTJavaParser.ASSIGN - 87)) | (1 << (PGTJavaParser.ADD_ASSIGN - 87)) | (1 << (PGTJavaParser.SUB_ASSIGN - 87)) | (1 << (PGTJavaParser.MUL_ASSIGN - 87)) | (1 << (PGTJavaParser.DIV_ASSIGN - 87)) | (1 << (PGTJavaParser.AND_ASSIGN - 87)) | (1 << (PGTJavaParser.OR_ASSIGN - 87)) | (1 << (PGTJavaParser.XOR_ASSIGN - 87)) | (1 << (PGTJavaParser.MOD_ASSIGN - 87)) | (1 << (PGTJavaParser.LSHIFT_ASSIGN - 87)))) !== 0) || _la === PGTJavaParser.RSHIFT_ASSIGN || _la === PGTJavaParser.URSHIFT_ASSIGN)) {
							_localctx._bop = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1460;
						this.expression(6);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1461;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1462;
						_localctx._bop = this.match(PGTJavaParser.DOT);
						this.state = 1474;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
						case 1:
							{
							this.state = 1463;
							this.identifier();
							}
							break;

						case 2:
							{
							this.state = 1464;
							this.methodCall();
							}
							break;

						case 3:
							{
							this.state = 1465;
							this.match(PGTJavaParser.THIS);
							}
							break;

						case 4:
							{
							this.state = 1466;
							this.match(PGTJavaParser.NEW);
							this.state = 1468;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === PGTJavaParser.LT) {
								{
								this.state = 1467;
								this.nonWildcardTypeArguments();
								}
							}

							this.state = 1470;
							this.innerCreator();
							}
							break;

						case 5:
							{
							this.state = 1471;
							this.match(PGTJavaParser.SUPER);
							this.state = 1472;
							this.superSuffix();
							}
							break;

						case 6:
							{
							this.state = 1473;
							this.explicitGenericInvocation();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1476;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1477;
						this.match(PGTJavaParser.LBRACK);
						this.state = 1478;
						this.expression(0);
						this.state = 1479;
						this.match(PGTJavaParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1481;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1482;
						_localctx._postfix = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PGTJavaParser.INC || _la === PGTJavaParser.DEC)) {
							_localctx._postfix = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1483;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1484;
						_localctx._bop = this.match(PGTJavaParser.INSTANCEOF);
						this.state = 1487;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
						case 1:
							{
							this.state = 1485;
							this.typeType();
							}
							break;

						case 2:
							{
							this.state = 1486;
							this.pattern();
							}
							break;
						}
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_expression);
						this.state = 1489;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1490;
						this.match(PGTJavaParser.COLONCOLON);
						this.state = 1492;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === PGTJavaParser.LT) {
							{
							this.state = 1491;
							this.typeArguments();
							}
						}

						this.state = 1494;
						this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, PGTJavaParser.RULE_pattern);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1500;
					this.variableModifier();
					}
					}
				}
				this.state = 1505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
			}
			this.state = 1506;
			this.typeType();
			this.state = 1510;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1507;
					this.annotation();
					}
					}
				}
				this.state = 1512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			}
			this.state = 1513;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, PGTJavaParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			this.lambdaParameters();
			this.state = 1516;
			this.match(PGTJavaParser.ARROW);
			this.state = 1517;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, PGTJavaParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 1541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1519;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1520;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 1521;
					this.formalParameterList();
					}
				}

				this.state = 1524;
				this.match(PGTJavaParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1525;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1526;
				this.identifier();
				this.state = 1531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.COMMA) {
					{
					{
					this.state = 1527;
					this.match(PGTJavaParser.COMMA);
					this.state = 1528;
					this.identifier();
					}
					}
					this.state = 1533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1534;
				this.match(PGTJavaParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1536;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.FINAL || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
					{
					this.state = 1537;
					this.lambdaLVTIList();
					}
				}

				this.state = 1540;
				this.match(PGTJavaParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, PGTJavaParser.RULE_lambdaBody);
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.NEW:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.SUPER:
			case PGTJavaParser.SWITCH:
			case PGTJavaParser.THIS:
			case PGTJavaParser.VOID:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.DECIMAL_LITERAL:
			case PGTJavaParser.HEX_LITERAL:
			case PGTJavaParser.OCT_LITERAL:
			case PGTJavaParser.BINARY_LITERAL:
			case PGTJavaParser.FLOAT_LITERAL:
			case PGTJavaParser.HEX_FLOAT_LITERAL:
			case PGTJavaParser.BOOL_LITERAL:
			case PGTJavaParser.CHAR_LITERAL:
			case PGTJavaParser.STRING_LITERAL:
			case PGTJavaParser.TEXT_BLOCK:
			case PGTJavaParser.NULL_LITERAL:
			case PGTJavaParser.LPAREN:
			case PGTJavaParser.LT:
			case PGTJavaParser.BANG:
			case PGTJavaParser.TILDE:
			case PGTJavaParser.INC:
			case PGTJavaParser.DEC:
			case PGTJavaParser.ADD:
			case PGTJavaParser.SUB:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1543;
				this.expression(0);
				}
				break;
			case PGTJavaParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1544;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, PGTJavaParser.RULE_primary);
		try {
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1547;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1548;
				this.expression(0);
				this.state = 1549;
				this.match(PGTJavaParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1551;
				this.match(PGTJavaParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1552;
				this.match(PGTJavaParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1553;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1554;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1555;
				this.typeTypeOrVoid();
				this.state = 1556;
				this.match(PGTJavaParser.DOT);
				this.state = 1557;
				this.match(PGTJavaParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1559;
				this.nonWildcardTypeArguments();
				this.state = 1563;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.SUPER:
				case PGTJavaParser.MODULE:
				case PGTJavaParser.OPEN:
				case PGTJavaParser.REQUIRES:
				case PGTJavaParser.EXPORTS:
				case PGTJavaParser.OPENS:
				case PGTJavaParser.TO:
				case PGTJavaParser.USES:
				case PGTJavaParser.PROVIDES:
				case PGTJavaParser.WITH:
				case PGTJavaParser.TRANSITIVE:
				case PGTJavaParser.VAR:
				case PGTJavaParser.YIELD:
				case PGTJavaParser.RECORD:
				case PGTJavaParser.SEALED:
				case PGTJavaParser.PERMITS:
				case PGTJavaParser.IDENTIFIER:
					{
					this.state = 1560;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case PGTJavaParser.THIS:
					{
					this.state = 1561;
					this.match(PGTJavaParser.THIS);
					this.state = 1562;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let _localctx: SwitchExpressionContext = new SwitchExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, PGTJavaParser.RULE_switchExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1567;
			this.match(PGTJavaParser.SWITCH);
			this.state = 1568;
			this.parExpression();
			this.state = 1569;
			this.match(PGTJavaParser.LBRACE);
			this.state = 1573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.CASE || _la === PGTJavaParser.DEFAULT) {
				{
				{
				this.state = 1570;
				this.switchLabeledRule();
				}
				}
				this.state = 1575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1576;
			this.match(PGTJavaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabeledRule(): SwitchLabeledRuleContext {
		let _localctx: SwitchLabeledRuleContext = new SwitchLabeledRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, PGTJavaParser.RULE_switchLabeledRule);
		let _la: number;
		try {
			this.state = 1589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1578;
				this.match(PGTJavaParser.CASE);
				this.state = 1582;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1579;
					this.expressionList();
					}
					break;

				case 2:
					{
					this.state = 1580;
					this.match(PGTJavaParser.NULL_LITERAL);
					}
					break;

				case 3:
					{
					this.state = 1581;
					this.guardedPattern(0);
					}
					break;
				}
				this.state = 1584;
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.COLON || _la === PGTJavaParser.ARROW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1585;
				this.switchRuleOutcome();
				}
				break;
			case PGTJavaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1586;
				this.match(PGTJavaParser.DEFAULT);
				this.state = 1587;
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.COLON || _la === PGTJavaParser.ARROW)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1588;
				this.switchRuleOutcome();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public guardedPattern(): GuardedPatternContext;
	public guardedPattern(_p: number): GuardedPatternContext;
	// @RuleVersion(0)
	public guardedPattern(_p?: number): GuardedPatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: GuardedPatternContext = new GuardedPatternContext(this._ctx, _parentState);
		let _prevctx: GuardedPatternContext = _localctx;
		let _startState: number = 212;
		this.enterRecursionRule(_localctx, 212, PGTJavaParser.RULE_guardedPattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.LPAREN:
				{
				this.state = 1592;
				this.match(PGTJavaParser.LPAREN);
				this.state = 1593;
				this.guardedPattern(0);
				this.state = 1594;
				this.match(PGTJavaParser.RPAREN);
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FINAL:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				{
				this.state = 1599;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1596;
						this.variableModifier();
						}
						}
					}
					this.state = 1601;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
				}
				this.state = 1602;
				this.typeType();
				this.state = 1606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1603;
						this.annotation();
						}
						}
					}
					this.state = 1608;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
				}
				this.state = 1609;
				this.identifier();
				this.state = 1614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1610;
						this.match(PGTJavaParser.AND);
						this.state = 1611;
						this.expression(0);
						}
						}
					}
					this.state = 1616;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new GuardedPatternContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PGTJavaParser.RULE_guardedPattern);
					this.state = 1619;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1620;
					this.match(PGTJavaParser.AND);
					this.state = 1621;
					this.expression(0);
					}
					}
				}
				this.state = 1626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		let _localctx: SwitchRuleOutcomeContext = new SwitchRuleOutcomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, PGTJavaParser.RULE_switchRuleOutcome);
		let _la: number;
		try {
			this.state = 1634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1627;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.ABSTRACT) | (1 << PGTJavaParser.ASSERT) | (1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BREAK) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.CLASS) | (1 << PGTJavaParser.CONTINUE) | (1 << PGTJavaParser.DO) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FINAL) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.FOR) | (1 << PGTJavaParser.IF) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.INTERFACE) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (PGTJavaParser.PRIVATE - 33)) | (1 << (PGTJavaParser.PROTECTED - 33)) | (1 << (PGTJavaParser.PUBLIC - 33)) | (1 << (PGTJavaParser.RETURN - 33)) | (1 << (PGTJavaParser.SHORT - 33)) | (1 << (PGTJavaParser.STATIC - 33)) | (1 << (PGTJavaParser.STRICTFP - 33)) | (1 << (PGTJavaParser.SUPER - 33)) | (1 << (PGTJavaParser.SWITCH - 33)) | (1 << (PGTJavaParser.SYNCHRONIZED - 33)) | (1 << (PGTJavaParser.THIS - 33)) | (1 << (PGTJavaParser.THROW - 33)) | (1 << (PGTJavaParser.TRY - 33)) | (1 << (PGTJavaParser.VOID - 33)) | (1 << (PGTJavaParser.WHILE - 33)) | (1 << (PGTJavaParser.MODULE - 33)) | (1 << (PGTJavaParser.OPEN - 33)) | (1 << (PGTJavaParser.REQUIRES - 33)) | (1 << (PGTJavaParser.EXPORTS - 33)) | (1 << (PGTJavaParser.OPENS - 33)) | (1 << (PGTJavaParser.TO - 33)) | (1 << (PGTJavaParser.USES - 33)) | (1 << (PGTJavaParser.PROVIDES - 33)) | (1 << (PGTJavaParser.WITH - 33)) | (1 << (PGTJavaParser.TRANSITIVE - 33)) | (1 << (PGTJavaParser.VAR - 33)) | (1 << (PGTJavaParser.YIELD - 33)) | (1 << (PGTJavaParser.RECORD - 33)) | (1 << (PGTJavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (PGTJavaParser.PERMITS - 65)) | (1 << (PGTJavaParser.NON_SEALED - 65)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_LITERAL - 65)) | (1 << (PGTJavaParser.OCT_LITERAL - 65)) | (1 << (PGTJavaParser.BINARY_LITERAL - 65)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (PGTJavaParser.BOOL_LITERAL - 65)) | (1 << (PGTJavaParser.CHAR_LITERAL - 65)) | (1 << (PGTJavaParser.STRING_LITERAL - 65)) | (1 << (PGTJavaParser.TEXT_BLOCK - 65)) | (1 << (PGTJavaParser.NULL_LITERAL - 65)) | (1 << (PGTJavaParser.LPAREN - 65)) | (1 << (PGTJavaParser.LBRACE - 65)) | (1 << (PGTJavaParser.SEMI - 65)) | (1 << (PGTJavaParser.LT - 65)) | (1 << (PGTJavaParser.BANG - 65)) | (1 << (PGTJavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (PGTJavaParser.INC - 100)) | (1 << (PGTJavaParser.DEC - 100)) | (1 << (PGTJavaParser.ADD - 100)) | (1 << (PGTJavaParser.SUB - 100)) | (1 << (PGTJavaParser.AT - 100)) | (1 << (PGTJavaParser.IDENTIFIER - 100)))) !== 0)) {
					{
					{
					this.state = 1628;
					this.blockStatement();
					}
					}
					this.state = 1633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, PGTJavaParser.RULE_classType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1636;
				this.classOrInterfaceType();
				this.state = 1637;
				this.match(PGTJavaParser.DOT);
				}
				break;
			}
			this.state = 1644;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1641;
					this.annotation();
					}
					}
				}
				this.state = 1646;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			}
			this.state = 1647;
			this.identifier();
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LT) {
				{
				this.state = 1648;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, PGTJavaParser.RULE_creator);
		try {
			this.state = 1660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1651;
				this.nonWildcardTypeArguments();
				this.state = 1652;
				this.createdName();
				this.state = 1653;
				this.classCreatorRest();
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1655;
				this.createdName();
				this.state = 1658;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case PGTJavaParser.LBRACK:
					{
					this.state = 1656;
					this.arrayCreatorRest();
					}
					break;
				case PGTJavaParser.LPAREN:
					{
					this.state = 1657;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, PGTJavaParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1677;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1662;
				this.identifier();
				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.LT) {
					{
					this.state = 1663;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.DOT) {
					{
					{
					this.state = 1666;
					this.match(PGTJavaParser.DOT);
					this.state = 1667;
					this.identifier();
					this.state = 1669;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === PGTJavaParser.LT) {
						{
						this.state = 1668;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1676;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, PGTJavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1679;
			this.identifier();
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.LT) {
				{
				this.state = 1680;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1683;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, PGTJavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.match(PGTJavaParser.LBRACK);
			this.state = 1713;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.RBRACK:
				{
				this.state = 1686;
				this.match(PGTJavaParser.RBRACK);
				this.state = 1691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PGTJavaParser.LBRACK) {
					{
					{
					this.state = 1687;
					this.match(PGTJavaParser.LBRACK);
					this.state = 1688;
					this.match(PGTJavaParser.RBRACK);
					}
					}
					this.state = 1693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1694;
				this.arrayInitializer();
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.NEW:
			case PGTJavaParser.SHORT:
			case PGTJavaParser.SUPER:
			case PGTJavaParser.SWITCH:
			case PGTJavaParser.THIS:
			case PGTJavaParser.VOID:
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.DECIMAL_LITERAL:
			case PGTJavaParser.HEX_LITERAL:
			case PGTJavaParser.OCT_LITERAL:
			case PGTJavaParser.BINARY_LITERAL:
			case PGTJavaParser.FLOAT_LITERAL:
			case PGTJavaParser.HEX_FLOAT_LITERAL:
			case PGTJavaParser.BOOL_LITERAL:
			case PGTJavaParser.CHAR_LITERAL:
			case PGTJavaParser.STRING_LITERAL:
			case PGTJavaParser.TEXT_BLOCK:
			case PGTJavaParser.NULL_LITERAL:
			case PGTJavaParser.LPAREN:
			case PGTJavaParser.LT:
			case PGTJavaParser.BANG:
			case PGTJavaParser.TILDE:
			case PGTJavaParser.INC:
			case PGTJavaParser.DEC:
			case PGTJavaParser.ADD:
			case PGTJavaParser.SUB:
			case PGTJavaParser.AT:
			case PGTJavaParser.IDENTIFIER:
				{
				this.state = 1695;
				this.expression(0);
				this.state = 1696;
				this.match(PGTJavaParser.RBRACK);
				this.state = 1703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1697;
						this.match(PGTJavaParser.LBRACK);
						this.state = 1698;
						this.expression(0);
						this.state = 1699;
						this.match(PGTJavaParser.RBRACK);
						}
						}
					}
					this.state = 1705;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
				}
				this.state = 1710;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1706;
						this.match(PGTJavaParser.LBRACK);
						this.state = 1707;
						this.match(PGTJavaParser.RBRACK);
						}
						}
					}
					this.state = 1712;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, PGTJavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1715;
			this.arguments();
			this.state = 1717;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1716;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, PGTJavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1719;
			this.nonWildcardTypeArguments();
			this.state = 1720;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, PGTJavaParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1722;
				this.match(PGTJavaParser.LT);
				this.state = 1723;
				this.match(PGTJavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1724;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, PGTJavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1730;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1727;
				this.match(PGTJavaParser.LT);
				this.state = 1728;
				this.match(PGTJavaParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1729;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, PGTJavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1732;
			this.match(PGTJavaParser.LT);
			this.state = 1733;
			this.typeList();
			this.state = 1734;
			this.match(PGTJavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, PGTJavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1736;
			this.typeType();
			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 1737;
				this.match(PGTJavaParser.COMMA);
				this.state = 1738;
				this.typeType();
				}
				}
				this.state = 1743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, PGTJavaParser.RULE_typeType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1744;
					this.annotation();
					}
					}
				}
				this.state = 1749;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			}
			this.state = 1752;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.IDENTIFIER:
				{
				this.state = 1750;
				this.classOrInterfaceType();
				}
				break;
			case PGTJavaParser.BOOLEAN:
			case PGTJavaParser.BYTE:
			case PGTJavaParser.CHAR:
			case PGTJavaParser.DOUBLE:
			case PGTJavaParser.FLOAT:
			case PGTJavaParser.INT:
			case PGTJavaParser.LONG:
			case PGTJavaParser.SHORT:
				{
				this.state = 1751;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1764;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PGTJavaParser.MODULE - 51)) | (1 << (PGTJavaParser.OPEN - 51)) | (1 << (PGTJavaParser.REQUIRES - 51)) | (1 << (PGTJavaParser.EXPORTS - 51)) | (1 << (PGTJavaParser.OPENS - 51)) | (1 << (PGTJavaParser.TO - 51)) | (1 << (PGTJavaParser.USES - 51)) | (1 << (PGTJavaParser.PROVIDES - 51)) | (1 << (PGTJavaParser.WITH - 51)) | (1 << (PGTJavaParser.TRANSITIVE - 51)) | (1 << (PGTJavaParser.VAR - 51)) | (1 << (PGTJavaParser.YIELD - 51)) | (1 << (PGTJavaParser.RECORD - 51)) | (1 << (PGTJavaParser.SEALED - 51)) | (1 << (PGTJavaParser.PERMITS - 51)))) !== 0) || _la === PGTJavaParser.AT || _la === PGTJavaParser.IDENTIFIER) {
						{
						{
						this.state = 1754;
						this.annotation();
						}
						}
						this.state = 1759;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1760;
					this.match(PGTJavaParser.LBRACK);
					this.state = 1761;
					this.match(PGTJavaParser.RBRACK);
					}
					}
				}
				this.state = 1766;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, PGTJavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1767;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG))) !== 0) || _la === PGTJavaParser.SHORT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, PGTJavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1769;
			this.match(PGTJavaParser.LT);
			this.state = 1770;
			this.typeArgument();
			this.state = 1775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.COMMA) {
				{
				{
				this.state = 1771;
				this.match(PGTJavaParser.COMMA);
				this.state = 1772;
				this.typeArgument();
				}
				}
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1778;
			this.match(PGTJavaParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, PGTJavaParser.RULE_superSuffix);
		let _la: number;
		try {
			this.state = 1789;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1780;
				this.arguments();
				}
				break;
			case PGTJavaParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1781;
				this.match(PGTJavaParser.DOT);
				this.state = 1783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PGTJavaParser.LT) {
					{
					this.state = 1782;
					this.typeArguments();
					}
				}

				this.state = 1785;
				this.identifier();
				this.state = 1787;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1786;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, PGTJavaParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1796;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1791;
				this.match(PGTJavaParser.SUPER);
				this.state = 1792;
				this.superSuffix();
				}
				break;
			case PGTJavaParser.MODULE:
			case PGTJavaParser.OPEN:
			case PGTJavaParser.REQUIRES:
			case PGTJavaParser.EXPORTS:
			case PGTJavaParser.OPENS:
			case PGTJavaParser.TO:
			case PGTJavaParser.USES:
			case PGTJavaParser.PROVIDES:
			case PGTJavaParser.WITH:
			case PGTJavaParser.TRANSITIVE:
			case PGTJavaParser.VAR:
			case PGTJavaParser.YIELD:
			case PGTJavaParser.RECORD:
			case PGTJavaParser.SEALED:
			case PGTJavaParser.PERMITS:
			case PGTJavaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1793;
				this.identifier();
				this.state = 1794;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, PGTJavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1798;
			this.match(PGTJavaParser.LPAREN);
			this.state = 1800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PGTJavaParser.BOOLEAN) | (1 << PGTJavaParser.BYTE) | (1 << PGTJavaParser.CHAR) | (1 << PGTJavaParser.DOUBLE) | (1 << PGTJavaParser.FLOAT) | (1 << PGTJavaParser.INT) | (1 << PGTJavaParser.LONG) | (1 << PGTJavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (PGTJavaParser.SHORT - 37)) | (1 << (PGTJavaParser.SUPER - 37)) | (1 << (PGTJavaParser.SWITCH - 37)) | (1 << (PGTJavaParser.THIS - 37)) | (1 << (PGTJavaParser.VOID - 37)) | (1 << (PGTJavaParser.MODULE - 37)) | (1 << (PGTJavaParser.OPEN - 37)) | (1 << (PGTJavaParser.REQUIRES - 37)) | (1 << (PGTJavaParser.EXPORTS - 37)) | (1 << (PGTJavaParser.OPENS - 37)) | (1 << (PGTJavaParser.TO - 37)) | (1 << (PGTJavaParser.USES - 37)) | (1 << (PGTJavaParser.PROVIDES - 37)) | (1 << (PGTJavaParser.WITH - 37)) | (1 << (PGTJavaParser.TRANSITIVE - 37)) | (1 << (PGTJavaParser.VAR - 37)) | (1 << (PGTJavaParser.YIELD - 37)) | (1 << (PGTJavaParser.RECORD - 37)) | (1 << (PGTJavaParser.SEALED - 37)) | (1 << (PGTJavaParser.PERMITS - 37)) | (1 << (PGTJavaParser.DECIMAL_LITERAL - 37)) | (1 << (PGTJavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (PGTJavaParser.OCT_LITERAL - 69)) | (1 << (PGTJavaParser.BINARY_LITERAL - 69)) | (1 << (PGTJavaParser.FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (PGTJavaParser.BOOL_LITERAL - 69)) | (1 << (PGTJavaParser.CHAR_LITERAL - 69)) | (1 << (PGTJavaParser.STRING_LITERAL - 69)) | (1 << (PGTJavaParser.TEXT_BLOCK - 69)) | (1 << (PGTJavaParser.NULL_LITERAL - 69)) | (1 << (PGTJavaParser.LPAREN - 69)) | (1 << (PGTJavaParser.LT - 69)) | (1 << (PGTJavaParser.BANG - 69)) | (1 << (PGTJavaParser.TILDE - 69)) | (1 << (PGTJavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (PGTJavaParser.DEC - 101)) | (1 << (PGTJavaParser.ADD - 101)) | (1 << (PGTJavaParser.SUB - 101)) | (1 << (PGTJavaParser.AT - 101)) | (1 << (PGTJavaParser.IDENTIFIER - 101)))) !== 0)) {
				{
				this.state = 1799;
				this.expressionList();
				}
			}

			this.state = 1802;
			this.match(PGTJavaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let _localctx: SpecificationContext = new SpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, PGTJavaParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1804;
			this.match(PGTJavaParser.PGT_START);
			this.state = 1808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.PGT_TAG) {
				{
				{
				this.state = 1805;
				this.specificationElement();
				}
				}
				this.state = 1810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1811;
			_la = this._input.LA(1);
			if (!(_la === PGTJavaParser.EOF || _la === PGTJavaParser.PGT_END)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificationElement(): SpecificationElementContext {
		let _localctx: SpecificationElementContext = new SpecificationElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, PGTJavaParser.RULE_specificationElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			this.match(PGTJavaParser.PGT_TAG);
			this.state = 1816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PGTJavaParser.PGT_DESC:
			case PGTJavaParser.PGT_INV:
			case PGTJavaParser.PGT_REPRESENTS:
			case PGTJavaParser.PGT_REQUIRES:
			case PGTJavaParser.PGT_ENSURES:
			case PGTJavaParser.PGT_SIGNALS:
			case PGTJavaParser.PGT_ASSIGNABLE:
			case PGTJavaParser.PGT_PURE:
				{
				this.state = 1814;
				this.specificationRule();
				}
				break;
			case PGTJavaParser.PGT_SUB:
				{
				this.state = 1815;
				this.subspecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspecification(): SubspecificationContext {
		let _localctx: SubspecificationContext = new SubspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, PGTJavaParser.RULE_subspecification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
			this.match(PGTJavaParser.PGT_SUB);
			this.state = 1819;
			this.subspecificationDescription();
			this.state = 1820;
			this.subspecificationBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspecificationDescription(): SubspecificationDescriptionContext {
		let _localctx: SubspecificationDescriptionContext = new SubspecificationDescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, PGTJavaParser.RULE_subspecificationDescription);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			this.freeformLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspecificationBody(): SubspecificationBodyContext {
		let _localctx: SubspecificationBodyContext = new SubspecificationBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, PGTJavaParser.RULE_subspecificationBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			this.match(PGTJavaParser.PGT_BRACE_OPEN);
			this.state = 1828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PGTJavaParser.PGT_TAG) {
				{
				{
				this.state = 1825;
				this.subspecificationElement();
				}
				}
				this.state = 1830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1831;
			this.match(PGTJavaParser.PGT_BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspecificationElement(): SubspecificationElementContext {
		let _localctx: SubspecificationElementContext = new SubspecificationElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, PGTJavaParser.RULE_subspecificationElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.match(PGTJavaParser.PGT_TAG);
			{
			this.state = 1834;
			this.specificationRule();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificationRule(): SpecificationRuleContext {
		let _localctx: SpecificationRuleContext = new SpecificationRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, PGTJavaParser.RULE_specificationRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			this.specificationRuleType();
			this.state = 1837;
			this.specificationRuleContent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificationRuleType(): SpecificationRuleTypeContext {
		let _localctx: SpecificationRuleTypeContext = new SpecificationRuleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, PGTJavaParser.RULE_specificationRuleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1839;
			_la = this._input.LA(1);
			if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (PGTJavaParser.PGT_DESC - 133)) | (1 << (PGTJavaParser.PGT_INV - 133)) | (1 << (PGTJavaParser.PGT_REPRESENTS - 133)) | (1 << (PGTJavaParser.PGT_REQUIRES - 133)) | (1 << (PGTJavaParser.PGT_ENSURES - 133)) | (1 << (PGTJavaParser.PGT_SIGNALS - 133)) | (1 << (PGTJavaParser.PGT_ASSIGNABLE - 133)) | (1 << (PGTJavaParser.PGT_PURE - 133)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificationRuleContent(): SpecificationRuleContentContext {
		let _localctx: SpecificationRuleContentContext = new SpecificationRuleContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, PGTJavaParser.RULE_specificationRuleContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (PGTJavaParser.PGT_FREEFORM_TEXT - 145)) | (1 << (PGTJavaParser.PGT_FREEFORM_SPACE - 145)) | (1 << (PGTJavaParser.PGT_FREEFORM_NEWLINE - 145)) | (1 << (PGTJavaParser.PGT_FREEFORM_STAR - 145)))) !== 0)) {
				{
				{
				this.state = 1841;
				this.freeformLine();
				}
				}
				this.state = 1846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public freeformLine(): FreeformLineContext {
		let _localctx: FreeformLineContext = new FreeformLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, PGTJavaParser.RULE_freeformLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PGTJavaParser.PGT_FREEFORM_SPACE || _la === PGTJavaParser.PGT_FREEFORM_NEWLINE) {
				{
				this.state = 1847;
				_localctx._leadingWhitespace = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.PGT_FREEFORM_SPACE || _la === PGTJavaParser.PGT_FREEFORM_NEWLINE)) {
					_localctx._leadingWhitespace = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1850;
			_localctx._content = this.freeformLineContent();
			this.state = 1852;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				{
				this.state = 1851;
				_localctx._trailingWhitespace = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.PGT_FREEFORM_SPACE || _la === PGTJavaParser.PGT_FREEFORM_NEWLINE)) {
					_localctx._trailingWhitespace = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public freeformLineContent(): FreeformLineContentContext {
		let _localctx: FreeformLineContentContext = new FreeformLineContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, PGTJavaParser.RULE_freeformLineContent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1854;
			_la = this._input.LA(1);
			if (!(_la === PGTJavaParser.PGT_FREEFORM_TEXT || _la === PGTJavaParser.PGT_FREEFORM_STAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 1858;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1855;
						_la = this._input.LA(1);
						if (!(((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (PGTJavaParser.PGT_FREEFORM_TEXT - 145)) | (1 << (PGTJavaParser.PGT_FREEFORM_SPACE - 145)) | (1 << (PGTJavaParser.PGT_FREEFORM_STAR - 145)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 1860;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
				}
				this.state = 1861;
				_la = this._input.LA(1);
				if (!(_la === PGTJavaParser.PGT_FREEFORM_TEXT || _la === PGTJavaParser.PGT_FREEFORM_STAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 98:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 106:
			return this.guardedPattern_sempred(_localctx as GuardedPatternContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 15);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);

		case 9:
			return this.precpred(this._ctx, 8);

		case 10:
			return this.precpred(this._ctx, 7);

		case 11:
			return this.precpred(this._ctx, 6);

		case 12:
			return this.precpred(this._ctx, 26);

		case 13:
			return this.precpred(this._ctx, 25);

		case 14:
			return this.precpred(this._ctx, 21);

		case 15:
			return this.precpred(this._ctx, 14);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private guardedPattern_sempred(_localctx: GuardedPatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x96\u074B\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x03\x02\x05\x02\u0114\n\x02" +
		"\x03\x02\x07\x02\u0117\n\x02\f\x02\x0E\x02\u011A\v\x02\x03\x02\x07\x02" +
		"\u011D\n\x02\f\x02\x0E\x02\u0120\v\x02\x03\x02\x03\x02\x03\x02\x05\x02" +
		"\u0125\n\x02\x03\x03\x07\x03\u0128\n\x03\f\x03\x0E\x03\u012B\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\u0133\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\u0138\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\u013D" +
		"\n\x05\f\x05\x0E\x05\u0140\v\x05\x03\x05\x07\x05\u0143\n\x05\f\x05\x0E" +
		"\x05\u0146\v\x05\x03\x05\x03\x05\x05\x05\u014A\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u0151\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u0158\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0164\n\b\x03\t\x03\t\x05\t\u0168\n\t\x03\n\x03" +
		"\n\x03\n\x05\n\u016D\n\n\x03\n\x03\n\x05\n\u0171\n\n\x03\n\x03\n\x05\n" +
		"\u0175\n\n\x03\n\x03\n\x05\n\u0179\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\u0181\n\v\f\v\x0E\v\u0184\v\v\x03\v\x03\v\x03\f\x07\f\u0189\n" +
		"\f\f\f\x0E\f\u018C\v\f\x03\f\x03\f\x03\f\x07\f\u0191\n\f\f\f\x0E\f\u0194" +
		"\v\f\x03\f\x05\f\u0197\n\f\x03\r\x03\r\x03\r\x07\r\u019C\n\r\f\r\x0E\r" +
		"\u019F\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01A5\n\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u01A9\n\x0E\x03\x0E\x05\x0E\u01AC\n\x0E\x03\x0E\x05\x0E" +
		"\u01AF\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01B6\n\x0F" +
		"\f\x0F\x0E\x0F\u01B9\v\x0F\x03\x10\x07\x10\u01BC\n\x10\f\x10\x0E\x10\u01BF" +
		"\v\x10\x03\x10\x03\x10\x05\x10\u01C3\n\x10\x03\x10\x05\x10\u01C6\n\x10" +
		"\x03\x11\x03\x11\x07\x11\u01CA\n\x11\f\x11\x0E\x11\u01CD\v\x11\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u01D2\n\x12\x03\x12\x03\x12\x05\x12\u01D6\n\x12" +
		"\x03\x12\x03\x12\x05\x12\u01DA\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05" +
		"\x13\u01E0\n\x13\x03\x13\x07\x13\u01E3\n\x13\f\x13\x0E\x13\u01E6\v\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u01EC\n\x14\f\x14\x0E\x14\u01EF" +
		"\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01F5\n\x15\x03\x15\x03" +
		"\x15\x07\x15\u01F9\n\x15\f\x15\x0E\x15\u01FC\v\x15\x03\x15\x07\x15\u01FF" +
		"\n\x15\f\x15\x0E\x15\u0202\v\x15\x03\x15\x05\x15\u0205\n\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0211\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0218" +
		"\n\x17\f\x17\x0E\x17\u021B\v\x17\x03\x17\x03\x17\x05\x17\u021F\n\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0225\n\x18\x03\x19\x03\x19\x05\x19" +
		"\u0229\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0235\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x07\x1E\u023E\n\x1E\f\x1E\x0E\x1E\u0241\v\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u0245\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u024F\n\x1F\x03 \x03 \x03 \x03 \x07" +
		" \u0255\n \f \x0E \u0258\v \x03 \x03 \x03!\x03!\x03!\x07!\u025F\n!\f!" +
		"\x0E!\u0262\v!\x03!\x03!\x03!\x03\"\x07\"\u0268\n\"\f\"\x0E\"\u026B\v" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0275\n#\x03$\x07$\u0278" +
		"\n$\f$\x0E$\u027B\v$\x03$\x03$\x03$\x03%\x07%\u0281\n%\f%\x0E%\u0284\v" +
		"%\x03%\x03%\x03%\x03%\x03%\x07%\u028B\n%\f%\x0E%\u028E\v%\x03%\x03%\x05" +
		"%\u0292\n%\x03%\x03%\x03&\x03&\x03&\x07&\u0299\n&\f&\x0E&\u029C\v&\x03" +
		"\'\x03\'\x03\'\x05\'\u02A1\n\'\x03(\x03(\x03(\x07(\u02A6\n(\f(\x0E(\u02A9" +
		"\v(\x03)\x03)\x05)\u02AD\n)\x03*\x03*\x03*\x03*\x07*\u02B3\n*\f*\x0E*" +
		"\u02B6\v*\x03*\x05*\u02B9\n*\x05*\u02BB\n*\x03*\x03*\x03+\x03+\x05+\u02C1" +
		"\n+\x03+\x03+\x03+\x05+\u02C6\n+\x07+\u02C8\n+\f+\x0E+\u02CB\v+\x03,\x03" +
		",\x07,\u02CF\n,\f,\x0E,\u02D2\v,\x03,\x03,\x03,\x05,\u02D7\n,\x05,\u02D9" +
		"\n,\x03-\x03-\x03-\x07-\u02DE\n-\f-\x0E-\u02E1\v-\x03.\x03.\x05.\u02E5" +
		"\n.\x03.\x03.\x03.\x05.\u02EA\n.\x03.\x05.\u02ED\n.\x05.\u02EF\n.\x03" +
		".\x03.\x03/\x03/\x03/\x03/\x07/\u02F7\n/\f/\x0E/\u02FA\v/\x03/\x03/\x03" +
		"0\x030\x030\x070\u0301\n0\f0\x0E0\u0304\v0\x030\x030\x050\u0308\n0\x03" +
		"0\x050\u030B\n0\x031\x071\u030E\n1\f1\x0E1\u0311\v1\x031\x031\x031\x03" +
		"2\x072\u0317\n2\f2\x0E2\u031A\v2\x032\x032\x072\u031E\n2\f2\x0E2\u0321" +
		"\v2\x032\x032\x032\x033\x033\x033\x073\u0329\n3\f3\x0E3\u032C\v3\x034" +
		"\x074\u032F\n4\f4\x0E4\u0332\v4\x034\x034\x034\x035\x035\x035\x075\u033A" +
		"\n5\f5\x0E5\u033D\v5\x036\x036\x036\x036\x036\x036\x036\x056\u0346\n6" +
		"\x037\x037\x038\x038\x039\x039\x039\x079\u034F\n9\f9\x0E9\u0352\v9\x03" +
		"9\x039\x039\x03:\x03:\x03:\x05:\u035A\n:\x03:\x03:\x03:\x05:\u035F\n:" +
		"\x03:\x05:\u0362\n:\x03;\x03;\x03;\x07;\u0367\n;\f;\x0E;\u036A\v;\x03" +
		"<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u0373\n=\x03>\x03>\x03>\x03>\x07" +
		">\u0379\n>\f>\x0E>\u037C\v>\x05>\u037E\n>\x03>\x05>\u0381\n>\x03>\x03" +
		">\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x07@\u038C\n@\f@\x0E@\u038F\v@\x03" +
		"@\x03@\x03A\x07A\u0394\nA\fA\x0EA\u0397\vA\x03A\x03A\x05A\u039B\nA\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x05B\u03A3\nB\x03B\x03B\x05B\u03A7\nB\x03B" +
		"\x03B\x05B\u03AB\nB\x03B\x03B\x05B\u03AF\nB\x03B\x03B\x05B\u03B3\nB\x05" +
		"B\u03B5\nB\x03C\x03C\x05C\u03B9\nC\x03D\x03D\x03D\x03D\x05D\u03BF\nD\x03" +
		"E\x03E\x03F\x03F\x03F\x03G\x05G\u03C7\nG\x03G\x03G\x03G\x03G\x03H\x03" +
		"H\x07H\u03CF\nH\fH\x0EH\u03D2\vH\x03H\x03H\x03I\x03I\x07I\u03D8\nI\fI" +
		"\x0EI\u03DB\vI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u03E4\nI\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x05I\u03EC\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x05I\u03FA\nI\x03J\x03J\x03K\x03K\x03K\x05" +
		"K\u0401\nK\x03K\x03K\x03K\x05K\u0406\nK\x03K\x03K\x03L\x03L\x05L\u040C" +
		"\nL\x03L\x03L\x03M\x03M\x03M\x07M\u0413\nM\fM\x0EM\u0416\vM\x03N\x03N" +
		"\x03N\x03O\x03O\x07O\u041D\nO\fO\x0EO\u0420\vO\x03O\x03O\x03P\x03P\x03" +
		"P\x07P\u0427\nP\fP\x0EP\u042A\vP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x05" +
		"Q\u0433\nQ\x03R\x07R\u0436\nR\fR\x0ER\u0439\vR\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x05R\u0443\nR\x03S\x03S\x03T\x07T\u0448\nT\fT\x0ET\u044B" +
		"\vT\x03T\x03T\x03T\x05T\u0450\nT\x03T\x05T\u0453\nT\x03U\x03U\x03U\x03" +
		"U\x03U\x05U\u045A\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u0463\nU" +
		"\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x03U\x03U\x06U\u0478\nU\rU\x0EU\u0479\x03U\x05U\u047D" +
		"\nU\x03U\x05U\u0480\nU\x03U\x03U\x03U\x03U\x07U\u0486\nU\fU\x0EU\u0489" +
		"\vU\x03U\x05U\u048C\nU\x03U\x03U\x03U\x03U\x07U\u0492\nU\fU\x0EU\u0495" +
		"\vU\x03U\x07U\u0498\nU\fU\x0EU\u049B\vU\x03U\x03U\x03U\x03U\x03U\x03U" +
		"\x03U\x03U\x05U\u04A5\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u04AE" +
		"\nU\x03U\x03U\x03U\x05U\u04B3\nU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03U\x03U\x05U\u04C0\nU\x03U\x03U\x03U\x03U\x05U\u04C6\nU\x03V" +
		"\x03V\x03V\x07V\u04CB\nV\fV\x0EV\u04CE\vV\x03V\x03V\x03V\x03V\x03V\x03" +
		"W\x03W\x03W\x07W\u04D8\nW\fW\x0EW\u04DB\vW\x03X\x03X\x03X\x03Y\x03Y\x03" +
		"Y\x05Y\u04E3\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x07Z\u04EA\nZ\fZ\x0EZ\u04ED\v" +
		"Z\x03[\x07[\u04F0\n[\f[\x0E[\u04F3\v[\x03[\x03[\x03[\x03[\x03[\x05[\u04FA" +
		"\n[\x03[\x03[\x03[\x03[\x05[\u0500\n[\x03\\\x06\\\u0503\n\\\r\\\x0E\\" +
		"\u0504\x03\\\x06\\\u0508\n\\\r\\\x0E\\\u0509\x03]\x03]\x03]\x03]\x03]" +
		"\x03]\x05]\u0512\n]\x03]\x03]\x03]\x05]\u0517\n]\x03^\x03^\x05^\u051B" +
		"\n^\x03^\x03^\x05^\u051F\n^\x03^\x03^\x05^\u0523\n^\x05^\u0525\n^\x03" +
		"_\x03_\x05_\u0529\n_\x03`\x07`\u052C\n`\f`\x0E`\u052F\v`\x03`\x03`\x05" +
		"`\u0533\n`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x07" +
		"b\u0540\nb\fb\x0Eb\u0543\vb\x03c\x03c\x03c\x05c\u0548\nc\x03c\x03c\x03" +
		"c\x03c\x03c\x05c\u054F\nc\x03c\x03c\x03c\x03c\x05c\u0555\nc\x03c\x05c" +
		"\u0558\nc\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x07d\u0561\nd\fd\x0Ed\u0564" +
		"\vd\x03d\x03d\x03d\x07d\u0569\nd\fd\x0Ed\u056C\vd\x03d\x03d\x03d\x03d" +
		"\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u057A\nd\x03d\x03d\x05d" +
		"\u057E\nd\x03d\x03d\x03d\x05d\u0583\nd\x03d\x03d\x05d\u0587\nd\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u0597" +
		"\nd\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u05BF\nd\x03" +
		"d\x03d\x03d\x03d\x05d\u05C5\nd\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x05d\u05D2\nd\x03d\x03d\x03d\x05d\u05D7\nd\x03d\x07d" +
		"\u05DA\nd\fd\x0Ed\u05DD\vd\x03e\x07e\u05E0\ne\fe\x0Ee\u05E3\ve\x03e\x03" +
		"e\x07e\u05E7\ne\fe\x0Ee\u05EA\ve\x03e\x03e\x03f\x03f\x03f\x03f\x03g\x03" +
		"g\x03g\x05g\u05F5\ng\x03g\x03g\x03g\x03g\x03g\x07g\u05FC\ng\fg\x0Eg\u05FF" +
		"\vg\x03g\x03g\x03g\x03g\x05g\u0605\ng\x03g\x05g\u0608\ng\x03h\x03h\x05" +
		"h\u060C\nh\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03" +
		"i\x03i\x03i\x03i\x03i\x05i\u061E\ni\x05i\u0620\ni\x03j\x03j\x03j\x03j" +
		"\x07j\u0626\nj\fj\x0Ej\u0629\vj\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u0631" +
		"\nk\x03k\x03k\x03k\x03k\x03k\x05k\u0638\nk\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x07l\u0640\nl\fl\x0El\u0643\vl\x03l\x03l\x07l\u0647\nl\fl\x0El\u064A" +
		"\vl\x03l\x03l\x03l\x07l\u064F\nl\fl\x0El\u0652\vl\x05l\u0654\nl\x03l\x03" +
		"l\x03l\x07l\u0659\nl\fl\x0El\u065C\vl\x03m\x03m\x07m\u0660\nm\fm\x0Em" +
		"\u0663\vm\x05m\u0665\nm\x03n\x03n\x03n\x05n\u066A\nn\x03n\x07n\u066D\n" +
		"n\fn\x0En\u0670\vn\x03n\x03n\x05n\u0674\nn\x03o\x03o\x03o\x03o\x03o\x03" +
		"o\x03o\x05o\u067D\no\x05o\u067F\no\x03p\x03p\x05p\u0683\np\x03p\x03p\x03" +
		"p\x05p\u0688\np\x07p\u068A\np\fp\x0Ep\u068D\vp\x03p\x05p\u0690\np\x03" +
		"q\x03q\x05q\u0694\nq\x03q\x03q\x03r\x03r\x03r\x03r\x07r\u069C\nr\fr\x0E" +
		"r\u069F\vr\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x07r\u06A8\nr\fr\x0Er\u06AB" +
		"\vr\x03r\x03r\x07r\u06AF\nr\fr\x0Er\u06B2\vr\x05r\u06B4\nr\x03s\x03s\x05" +
		"s\u06B8\ns\x03t\x03t\x03t\x03u\x03u\x03u\x05u\u06C0\nu\x03v\x03v\x03v" +
		"\x05v\u06C5\nv\x03w\x03w\x03w\x03w\x03x\x03x\x03x\x07x\u06CE\nx\fx\x0E" +
		"x\u06D1\vx\x03y\x07y\u06D4\ny\fy\x0Ey\u06D7\vy\x03y\x03y\x05y\u06DB\n" +
		"y\x03y\x07y\u06DE\ny\fy\x0Ey\u06E1\vy\x03y\x03y\x07y\u06E5\ny\fy\x0Ey" +
		"\u06E8\vy\x03z\x03z\x03{\x03{\x03{\x03{\x07{\u06F0\n{\f{\x0E{\u06F3\v" +
		"{\x03{\x03{\x03|\x03|\x03|\x05|\u06FA\n|\x03|\x03|\x05|\u06FE\n|\x05|" +
		"\u0700\n|\x03}\x03}\x03}\x03}\x03}\x05}\u0707\n}\x03~\x03~\x05~\u070B" +
		"\n~\x03~\x03~\x03\x7F\x03\x7F\x07\x7F\u0711\n\x7F\f\x7F\x0E\x7F\u0714" +
		"\v\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u071B\n\x80\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x07\x83\u0725" +
		"\n\x83\f\x83\x0E\x83\u0728\v\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84" +
		"\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x07\x87\u0735\n\x87\f" +
		"\x87\x0E\x87\u0738\v\x87\x03\x88\x05\x88\u073B\n\x88\x03\x88\x03\x88\x05" +
		"\x88\u073F\n\x88\x03\x89\x03\x89\x07\x89\u0743\n\x89\f\x89\x0E\x89\u0746" +
		"\v\x89\x03\x89\x05\x89\u0749\n\x89\x03\x89\x02\x02\x04\xC6\xD6\x8A\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
		"\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02" +
		"\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02" +
		"\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\x02\x16\x04\x02\x13\x13**\x03\x02EH\x03\x02I" +
		"J\x04\x02((>>\x04\x025C\x82\x82\x03\x02fi\x03\x02\\]\x04\x02jkoo\x03\x02" +
		"hi\x04\x02Z[ab\x04\x02``cc\x04\x02YYpz\x03\x02fg\x04\x02__{{\n\x02\x05" +
		"\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x03\x03\x92\x92\x04" +
		"\x02\x87\x89\x8B\x8F\x03\x02\x94\x95\x04\x02\x93\x93\x96\x96\x04\x02\x93" +
		"\x94\x96\x96\x02\u0813\x02\u0124\x03\x02\x02\x02\x04\u0129\x03\x02\x02" +
		"\x02\x06\u0130\x03\x02\x02\x02\b\u0149\x03\x02\x02\x02\n\u0150\x03\x02" +
		"\x02\x02\f\u0157\x03\x02\x02\x02\x0E\u0163\x03\x02\x02\x02\x10\u0167\x03" +
		"\x02\x02\x02\x12\u0169\x03\x02\x02\x02\x14\u017C\x03\x02\x02\x02\x16\u018A" +
		"\x03\x02\x02\x02\x18\u0198\x03\x02\x02\x02\x1A\u01A0\x03\x02\x02\x02\x1C" +
		"\u01B2\x03\x02\x02\x02\x1E\u01BD\x03\x02\x02\x02 \u01C7\x03\x02\x02\x02" +
		"\"\u01CE\x03\x02\x02\x02$\u01DD\x03\x02\x02\x02&\u01E9\x03\x02\x02\x02" +
		"(\u0204\x03\x02\x02\x02*\u0210\x03\x02\x02\x02,\u0212\x03\x02\x02\x02" +
		".\u0224\x03\x02\x02\x020\u0228\x03\x02\x02\x022\u022A\x03\x02\x02\x02" +
		"4\u022D\x03\x02\x02\x026\u0230\x03\x02\x02\x028\u0238\x03\x02\x02\x02" +
		":\u0244\x03\x02\x02\x02<\u024E\x03\x02\x02\x02>\u0250\x03\x02\x02\x02" +
		"@\u025B\x03\x02\x02\x02B\u0269\x03\x02\x02\x02D\u0274\x03\x02\x02\x02" +
		"F\u0279\x03\x02\x02\x02H\u0282\x03\x02\x02\x02J\u0295\x03\x02\x02\x02" +
		"L\u029D\x03\x02\x02\x02N\u02A2\x03\x02\x02\x02P\u02AC\x03\x02\x02\x02" +
		"R\u02AE\x03\x02\x02\x02T\u02BE\x03\x02\x02\x02V\u02D8\x03\x02\x02\x02" +
		"X\u02DA\x03\x02\x02\x02Z\u02E2\x03\x02\x02\x02\\\u02F2\x03\x02\x02\x02" +
		"^\u030A\x03\x02\x02\x02`\u030F\x03\x02\x02\x02b\u0318\x03\x02\x02\x02" +
		"d\u0325\x03\x02\x02\x02f\u0330\x03\x02\x02\x02h\u0336\x03\x02\x02\x02" +
		"j\u0345\x03\x02\x02\x02l\u0347\x03\x02\x02\x02n\u0349\x03\x02\x02\x02" +
		"p\u0350\x03\x02\x02\x02r\u0359\x03\x02\x02\x02t\u0363\x03\x02\x02\x02" +
		"v\u036B\x03\x02\x02\x02x\u0372\x03\x02\x02\x02z\u0374\x03\x02\x02\x02" +
		"|\u0384\x03\x02\x02\x02~\u0389\x03\x02\x02\x02\x80\u039A\x03\x02\x02\x02" +
		"\x82\u03B4\x03\x02\x02\x02\x84\u03B8\x03\x02\x02\x02\x86\u03BA\x03\x02" +
		"\x02\x02\x88\u03C0\x03\x02\x02\x02\x8A\u03C2\x03\x02\x02\x02\x8C\u03C6" +
		"\x03\x02\x02\x02\x8E\u03CC\x03\x02\x02\x02\x90\u03F9\x03\x02\x02\x02\x92" +
		"\u03FB\x03\x02\x02\x02\x94\u03FD\x03\x02\x02\x02\x96\u0409\x03\x02\x02" +
		"\x02\x98\u040F\x03\x02\x02\x02\x9A\u0417\x03\x02\x02\x02\x9C\u041A\x03" +
		"\x02\x02\x02\x9E\u0423\x03\x02\x02\x02\xA0\u0432\x03\x02\x02\x02\xA2\u0437" +
		"\x03\x02\x02\x02\xA4\u0444\x03\x02\x02\x02\xA6\u0452\x03\x02\x02\x02\xA8" +
		"\u04C5\x03\x02\x02\x02\xAA\u04C7\x03\x02\x02\x02\xAC\u04D4\x03\x02\x02" +
		"\x02\xAE\u04DC\x03\x02\x02\x02\xB0\u04DF\x03\x02\x02\x02\xB2\u04E6\x03" +
		"\x02\x02\x02\xB4\u04FF\x03\x02\x02\x02\xB6\u0502";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\xB8\u0516\x03\x02\x02\x02\xBA\u0524\x03\x02\x02\x02\xBC" +
		"\u0528\x03\x02\x02\x02\xBE\u052D\x03\x02\x02\x02\xC0\u0538\x03\x02\x02" +
		"\x02\xC2\u053C\x03\x02\x02\x02\xC4\u0557\x03\x02\x02\x02\xC6\u0586\x03" +
		"\x02\x02\x02\xC8\u05E1\x03\x02\x02\x02\xCA\u05ED\x03\x02\x02\x02\xCC\u0607" +
		"\x03\x02\x02\x02\xCE\u060B\x03\x02\x02\x02\xD0\u061F\x03\x02\x02\x02\xD2" +
		"\u0621\x03\x02\x02\x02\xD4\u0637\x03\x02\x02\x02\xD6\u0653\x03\x02\x02" +
		"\x02\xD8\u0664\x03\x02\x02\x02\xDA\u0669\x03\x02\x02\x02\xDC\u067E\x03" +
		"\x02\x02\x02\xDE\u068F\x03\x02\x02\x02\xE0\u0691\x03\x02\x02\x02\xE2\u0697" +
		"\x03\x02\x02\x02\xE4\u06B5\x03\x02\x02\x02\xE6\u06B9\x03\x02\x02\x02\xE8" +
		"\u06BF\x03\x02\x02\x02\xEA\u06C4\x03\x02\x02\x02\xEC\u06C6\x03\x02\x02" +
		"\x02\xEE\u06CA\x03\x02\x02\x02\xF0\u06D5\x03\x02\x02\x02\xF2\u06E9\x03" +
		"\x02\x02\x02\xF4\u06EB\x03\x02\x02\x02\xF6\u06FF\x03\x02\x02\x02\xF8\u0706" +
		"\x03\x02\x02\x02\xFA\u0708\x03\x02\x02\x02\xFC\u070E\x03\x02\x02\x02\xFE" +
		"\u0717\x03\x02\x02\x02\u0100\u071C\x03\x02\x02\x02\u0102\u0720\x03\x02" +
		"\x02\x02\u0104\u0722\x03\x02\x02\x02\u0106\u072B\x03\x02\x02\x02\u0108" +
		"\u072E\x03\x02\x02\x02\u010A\u0731\x03\x02\x02\x02\u010C\u0736\x03\x02" +
		"\x02\x02\u010E\u073A\x03\x02\x02\x02\u0110\u0740\x03\x02\x02\x02\u0112" +
		"\u0114\x05\x04\x03\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02" +
		"\x02\x02\u0114\u0118\x03\x02\x02\x02\u0115\u0117\x05\x06\x04\x02\u0116" +
		"\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02" +
		"\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011E\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011B\u011D\x05\b\x05\x02\u011C\u011B\x03\x02\x02" +
		"\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F" +
		"\x03\x02\x02\x02\u011F\u0125\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0121\u0122\x05\x8CG\x02\u0122\u0123\x07\x02\x02\x03\u0123\u0125\x03" +
		"\x02\x02\x02\u0124\u0113\x03\x02\x02\x02\u0124\u0121\x03\x02\x02\x02\u0125" +
		"\x03\x03\x02\x02\x02\u0126\u0128\x05r:\x02\u0127\u0126\x03\x02\x02\x02" +
		"\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03" +
		"\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C" +
		"\u012D\x07\"\x02\x02\u012D\u012E\x05h5\x02\u012E\u012F\x07V\x02\x02\u012F" +
		"\x05\x03\x02\x02\x02\u0130\u0132\x07\x1B\x02\x02\u0131\u0133\x07(\x02" +
		"\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134" +
		"\x03\x02\x02\x02\u0134\u0137\x05h5\x02\u0135\u0136\x07X\x02\x02\u0136" +
		"\u0138\x07j\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02" +
		"\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x07V\x02\x02\u013A\x07\x03" +
		"\x02\x02\x02\u013B\u013D\x05\xFC\x7F\x02\u013C\u013B\x03\x02\x02\x02\u013D" +
		"\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02" +
		"\x02\x02\u013F\u0144\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141" +
		"\u0143\x05\x0E\b\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02" +
		"\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147" +
		"\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u014A\x05\n\x06\x02" +
		"\u0148\u014A\x07V\x02\x02\u0149\u013E\x03\x02\x02\x02\u0149\u0148\x03" +
		"\x02\x02\x02\u014A\t\x03\x02\x02\x02\u014B\u0151\x05\x12\n\x02\u014C\u0151" +
		"\x05\x1A\x0E\x02\u014D\u0151\x05\"\x12\x02\u014E\u0151\x05|?\x02\u014F" +
		"\u0151\x05\x94K\x02\u0150\u014B\x03\x02\x02\x02\u0150\u014C\x03\x02\x02" +
		"\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u014F" +
		"\x03\x02\x02\x02\u0151\v\x03\x02\x02\x02\u0152\u0158\x05\x0E\b\x02\u0153" +
		"\u0158\x07 \x02\x02\u0154\u0158\x07,\x02\x02\u0155\u0158\x070\x02\x02" +
		"\u0156\u0158\x073\x02\x02\u0157\u0152\x03\x02\x02\x02\u0157\u0153\x03" +
		"\x02\x02\x02\u0157\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0158\r\x03\x02\x02\x02\u0159\u0164\x05r:\x02\u015A" +
		"\u0164\x07%\x02\x02\u015B\u0164\x07$\x02\x02\u015C\u0164\x07#\x02\x02" +
		"\u015D\u0164\x07(\x02\x02\u015E\u0164\x07\x03\x02\x02\u015F\u0164\x07" +
		"\x14\x02\x02\u0160\u0164\x07)\x02\x02\u0161\u0164\x07B\x02\x02\u0162\u0164" +
		"\x07D\x02\x02\u0163\u0159\x03\x02\x02\x02\u0163\u015A\x03\x02\x02\x02" +
		"\u0163\u015B\x03\x02\x02\x02\u0163\u015C\x03\x02\x02\x02\u0163\u015D\x03" +
		"\x02\x02\x02\u0163\u015E\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0163" +
		"\u0160\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0162\x03\x02" +
		"\x02\x02\u0164\x0F\x03\x02\x02\x02\u0165\u0168\x07\x14\x02\x02\u0166\u0168" +
		"\x05r:\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168" +
		"\x11\x03\x02\x02\x02\u0169\u016A\x07\v\x02\x02\u016A\u016C\x05\xA4S\x02" +
		"\u016B\u016D\x05\x14\v\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03" +
		"\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E\u016F\x07\x13\x02\x02\u016F" +
		"\u0171\x05\xF0y\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02" +
		"\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0173\x07\x1A\x02\x02\u0173\u0175" +
		"\x05\xEEx\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175\u0178\x03\x02\x02\x02\u0176\u0177\x07C\x02\x02\u0177\u0179\x05" +
		"\xEEx\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u017B\x05$\x13\x02\u017B\x13\x03\x02\x02" +
		"\x02\u017C\u017D\x07[\x02\x02\u017D\u0182\x05\x16\f\x02\u017E\u017F\x07" +
		"W\x02\x02\u017F\u0181\x05\x16\f\x02\u0180\u017E\x03\x02\x02\x02\u0181" +
		"\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02" +
		"\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185" +
		"\u0186\x07Z\x02\x02\u0186\x15\x03\x02\x02\x02\u0187\u0189\x05r:\x02\u0188" +
		"\u0187\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188\x03\x02" +
		"\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x03\x02\x02\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018D\u0196\x05\xA4S\x02\u018E\u0192\x07\x13\x02" +
		"\x02\u018F\u0191\x05r:\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03" +
		"\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"\u0195\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0197\x05\x18" +
		"\r\x02\u0196\u018E\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\x17" +
		"\x03\x02\x02\x02\u0198\u019D\x05\xF0y\x02\u0199\u019A\x07l\x02\x02\u019A" +
		"\u019C\x05\xF0y\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019F\x03\x02\x02" +
		"\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\x19" +
		"\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1\x07\x12\x02\x02" +
		"\u01A1\u01A4\x05\xA4S\x02\u01A2\u01A3\x07\x1A\x02\x02\u01A3\u01A5\x05" +
		"\xEEx\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A8\x07R\x02\x02\u01A7\u01A9\x05\x1C\x0F" +
		"\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB" +
		"\x03\x02\x02\x02\u01AA\u01AC\x07W\x02\x02\u01AB\u01AA\x03\x02\x02\x02" +
		"\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AF\x05" +
		" \x11\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
		"\u01B0\x03\x02\x02\x02\u01B0\u01B1\x07S\x02\x02\u01B1\x1B\x03\x02\x02" +
		"\x02\u01B2\u01B7\x05\x1E\x10\x02\u01B3\u01B4\x07W\x02\x02\u01B4\u01B6" +
		"\x05\x1E\x10\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02" +
		"\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\x1D\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BC\x05r:\x02\u01BB\u01BA" +
		"\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02" +
		"\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BD\x03" +
		"\x02\x02\x02\u01C0\u01C2\x05\xA4S\x02\u01C1\u01C3\x05\xFA~\x02\u01C2\u01C1" +
		"\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02" +
		"\u01C4\u01C6\x05$\x13\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03" +
		"\x02\x02\x02\u01C6\x1F\x03\x02\x02\x02\u01C7\u01CB\x07V\x02\x02\u01C8" +
		"\u01CA\x05(\x15\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02" +
		"\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC!\x03" +
		"\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x07\x1E\x02\x02\u01CF" +
		"\u01D1\x05\xA4S\x02\u01D0\u01D2\x05\x14\v\x02\u01D1\u01D0\x03\x02\x02" +
		"\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D4" +
		"\x07\x13\x02\x02\u01D4\u01D6\x05\xEEx\x02\u01D5\u01D3\x03\x02\x02\x02" +
		"\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D8\x07" +
		"C\x02\x02\u01D8\u01DA\x05\xEEx\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA" +
		"\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x05&\x14\x02" +
		"\u01DC#\x03\x02\x02\x02\u01DD\u01DF\x07R\x02\x02\u01DE\u01E0\x05\xFC\x7F" +
		"\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E4" +
		"\x03\x02\x02\x02\u01E1\u01E3\x05(\x15\x02\u01E2\u01E1\x03\x02\x02\x02" +
		"\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03" +
		"\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7" +
		"\u01E8\x07S\x02\x02\u01E8%\x03\x02\x02\x02\u01E9\u01ED\x07R\x02\x02\u01EA" +
		"\u01EC\x05:\x1E\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02" +
		"\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0" +
		"\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F1\x07S\x02\x02" +
		"\u01F1\'\x03\x02\x02\x02\u01F2\u0205\x07V\x02\x02\u01F3\u01F5\x07(\x02" +
		"\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6" +
		"\x03\x02\x02\x02\u01F6\u0205\x05\x9EP\x02\u01F7\u01F9\x05\xFC\x7F\x02" +
		"\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03" +
		"\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u0200\x03\x02\x02\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FD\u01FF\x05\f\x07\x02\u01FE\u01FD\x03\x02\x02" +
		"\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201" +
		"\x03\x02\x02\x02\u0201\u0203\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02" +
		"\u0203\u0205\x05*\x16\x02\u0204\u01F2\x03\x02\x02\x02\u0204\u01F4\x03" +
		"\x02\x02\x02\u0204\u01FA\x03\x02\x02\x02\u0205)\x03\x02\x02\x02\u0206" +
		"\u0211\x05,\x17\x02\u0207\u0211\x052\x1A\x02\u0208\u0211\x058\x1D\x02" +
		"\u0209\u0211\x056\x1C\x02\u020A\u0211\x054\x1B\x02\u020B\u0211\x05\"\x12" +
		"\x02\u020C\u0211\x05|?\x02\u020D\u0211\x05\x12\n\x02\u020E\u0211\x05\x1A" +
		"\x0E\x02\u020F\u0211\x05\x94K\x02\u0210\u0206\x03\x02\x02\x02\u0210\u0207" +
		"\x03\x02\x02\x02\u0210\u0208\x03\x02\x02\x02\u0210\u0209\x03\x02\x02\x02" +
		"\u0210\u020A\x03\x02\x02\x02\u0210\u020B\x03\x02\x02\x02\u0210\u020C\x03" +
		"\x02\x02\x02\u0210\u020D\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210" +
		"\u020F\x03\x02\x02\x02\u0211+\x03\x02\x02\x02\u0212\u0213\x050\x19\x02" +
		"\u0213\u0214\x05\xA4S\x02\u0214\u0219\x05Z.\x02\u0215\u0216\x07T\x02\x02" +
		"\u0216\u0218\x07U\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u021B\x03" +
		"\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"\u021E\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021D\x07/\x02" +
		"\x02\u021D\u021F\x05X-\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03" +
		"\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x05.\x18\x02\u0221" +
		"-\x03\x02\x02\x02\u0222\u0225\x05\x9EP\x02\u0223\u0225\x07V\x02\x02\u0224" +
		"\u0222\x03\x02\x02\x02\u0224\u0223\x03\x02\x02\x02\u0225/\x03\x02\x02" +
		"\x02\u0226\u0229\x05\xF0y\x02\u0227\u0229\x072\x02\x02\u0228\u0226\x03" +
		"\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u02291\x03\x02\x02\x02\u022A" +
		"\u022B\x05\x14\v\x02\u022B\u022C\x05,\x17\x02\u022C3\x03\x02\x02\x02\u022D" +
		"\u022E\x05\x14\v\x02\u022E\u022F\x056\x1C\x02\u022F5\x03\x02\x02\x02\u0230" +
		"\u0231\x05\xA4S\x02\u0231\u0234\x05Z.\x02\u0232\u0233\x07/\x02\x02\u0233" +
		"\u0235\x05X-\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x05\x9EP\x02\u02377\x03\x02\x02" +
		"\x02\u0238\u0239\x05\xF0y\x02\u0239\u023A\x05J&\x02\u023A\u023B\x07V\x02" +
		"\x02\u023B9\x03\x02\x02\x02\u023C\u023E\x05\f\x07\x02\u023D\u023C\x03" +
		"\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241\u023F\x03\x02" +
		"\x02\x02\u0242\u0245\x05<\x1F\x02\u0243\u0245\x07V\x02\x02\u0244\u023F" +
		"\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245;\x03\x02\x02\x02\u0246" +
		"\u024F\x05> \x02\u0247\u024F\x05B\"\x02\u0248\u024F\x05F$\x02\u0249\u024F" +
		"\x05\"\x12\x02\u024A\u024F\x05|?\x02\u024B\u024F\x05\x12\n\x02\u024C\u024F" +
		"\x05\x1A\x0E\x02\u024D\u024F\x05\x94K\x02\u024E\u0246\x03\x02\x02\x02" +
		"\u024E\u0247\x03\x02\x02\x02\u024E\u0248\x03\x02\x02\x02\u024E\u0249\x03" +
		"\x02\x02\x02\u024E\u024A\x03\x02\x02\x02\u024E\u024B\x03\x02\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024E\u024D\x03\x02\x02\x02\u024F=\x03\x02\x02" +
		"\x02\u0250\u0251\x05\xF0y\x02\u0251\u0256\x05@!\x02\u0252\u0253\x07W\x02" +
		"\x02\u0253\u0255\x05@!\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0258\x03" +
		"\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257" +
		"\u0259\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u025A\x07V\x02" +
		"\x02\u025A?\x03\x02\x02\x02\u025B\u0260\x05\xA4S\x02\u025C\u025D\x07T" +
		"\x02\x02\u025D\u025F\x07U\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0262" +
		"\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02" +
		"\u0261\u0263\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0264\x07" +
		"Y\x02\x02\u0264\u0265\x05P)\x02\u0265A\x03\x02\x02\x02\u0266\u0268\x05" +
		"D#\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267" +
		"\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03\x02\x02\x02" +
		"\u026B\u0269\x03\x02\x02\x02\u026C\u026D\x05H%\x02\u026DC\x03\x02\x02" +
		"\x02\u026E\u0275\x05r:\x02\u026F\u0275\x07%\x02\x02\u0270\u0275\x07\x03" +
		"\x02\x02\u0271\u0275\x07\x0E\x02\x02\u0272\u0275\x07(\x02\x02\u0273\u0275" +
		"\x07)\x02\x02\u0274\u026E\x03\x02\x02\x02\u0274\u026F\x03\x02\x02\x02" +
		"\u0274\u0270\x03\x02\x02\x02\u0274\u0271\x03\x02\x02\x02\u0274\u0272\x03" +
		"\x02\x02\x02\u0274\u0273\x03\x02\x02\x02\u0275E\x03\x02\x02\x02\u0276" +
		"\u0278\x05D#\x02\u0277\u0276\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02" +
		"\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03" +
		"\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u027D\x05\x14\v\x02\u027D" +
		"\u027E\x05H%\x02\u027EG\x03\x02\x02\x02\u027F\u0281\x05r:\x02\u0280\u027F" +
		"\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02" +
		"\u0282\u0283\x03\x02\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284\u0282\x03" +
		"\x02\x02\x02\u0285\u0286\x050\x19\x02\u0286\u0287\x05\xA4S\x02\u0287\u028C" +
		"\x05Z.\x02\u0288\u0289\x07T\x02\x02\u0289\u028B\x07U\x02\x02\u028A\u0288" +
		"\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u0291\x03\x02\x02\x02\u028E\u028C\x03" +
		"\x02\x02\x02\u028F\u0290\x07/\x02\x02\u0290\u0292\x05X-\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02" +
		"\u0293\u0294\x05.\x18\x02\u0294I\x03\x02\x02\x02\u0295\u029A\x05L\'\x02" +
		"\u0296\u0297\x07W\x02\x02\u0297\u0299\x05L\'\x02\u0298\u0296\x03\x02\x02" +
		"\x02\u0299\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B" +
		"\x03\x02\x02\x02\u029BK\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D" +
		"\u02A0\x05N(\x02\u029E\u029F\x07Y\x02\x02\u029F\u02A1\x05P)\x02\u02A0" +
		"\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1M\x03\x02\x02" +
		"\x02\u02A2\u02A7\x05\xA4S\x02\u02A3\u02A4\x07T\x02\x02\u02A4\u02A6\x07" +
		"U\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7" +
		"\u02A5\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8O\x03\x02\x02" +
		"\x02\u02A9\u02A7\x03\x02\x02\x02\u02AA\u02AD\x05R*\x02\u02AB\u02AD\x05" +
		"\xC6d\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD" +
		"Q\x03\x02\x02\x02\u02AE\u02BA\x07R\x02\x02\u02AF\u02B4\x05P)\x02\u02B0" +
		"\u02B1\x07W\x02\x02\u02B1\u02B3\x05P)\x02\u02B2\u02B0\x03\x02\x02\x02" +
		"\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03" +
		"\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7" +
		"\u02B9\x07W\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02" +
		"\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA\u02AF\x03\x02\x02\x02\u02BA\u02BB" +
		"\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x07S\x02\x02" +
		"\u02BDS\x03\x02\x02\x02\u02BE\u02C0\x05\xA4S\x02\u02BF\u02C1\x05\xF4{" +
		"\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C9" +
		"\x03\x02\x02\x02\u02C2\u02C3\x07X\x02\x02\u02C3\u02C5\x05\xA4S\x02\u02C4" +
		"\u02C6\x05\xF4{\x02\u02C5\u02C4\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02" +
		"\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C2\x03\x02\x02\x02\u02C8\u02CB" +
		"\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CAU\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02D9\x05\xF0" +
		"y\x02\u02CD\u02CF\x05r:\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D2\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
		"\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D6\x07^\x02" +
		"\x02\u02D4\u02D5\t\x02\x02\x02\u02D5\u02D7\x05\xF0y\x02\u02D6\u02D4\x03" +
		"\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8" +
		"\u02CC\x03\x02\x02\x02\u02D8\u02D0\x03\x02\x02\x02\u02D9W\x03\x02\x02" +
		"\x02\u02DA\u02DF\x05h5\x02\u02DB\u02DC\x07W\x02\x02\u02DC\u02DE\x05h5" +
		"\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF\u02DD" +
		"\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0Y\x03\x02\x02\x02\u02E1" +
		"\u02DF\x03\x02\x02\x02\u02E2\u02EE\x07P\x02\x02\u02E3\u02E5\x05\\/\x02" +
		"\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02EF\x03" +
		"\x02\x02\x02\u02E6\u02E9\x05\\/\x02\u02E7\u02E8\x07W\x02\x02\u02E8\u02EA" +
		"\x05^0\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
		"\u02EF\x03\x02\x02\x02\u02EB\u02ED\x05^0\x02\u02EC\u02EB\x03\x02\x02\x02" +
		"\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02\x02\x02\u02EE\u02E4\x03" +
		"\x02\x02\x02\u02EE\u02E6\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF" +
		"\u02F0\x03\x02\x02\x02\u02F0\u02F1\x07Q\x02\x02\u02F1[\x03\x02\x02\x02" +
		"\u02F2\u02F8\x05\xF0y\x02\u02F3\u02F4\x05\xA4S\x02\u02F4\u02F5\x07X\x02" +
		"\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F3\x03\x02\x02\x02\u02F7\u02FA" +
		"\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02" +
		"\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\x07" +
		"-\x02\x02\u02FC]\x03\x02\x02\x02\u02FD\u0302\x05`1\x02\u02FE\u02FF\x07" +
		"W\x02\x02\u02FF\u0301\x05`1\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u0304" +
		"\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02" +
		"\u0303\u0307\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0306\x07" +
		"W\x02\x02\u0306\u0308\x05b2\x02\u0307\u0305\x03\x02\x02\x02\u0307\u0308" +
		"\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u030B\x05b2\x02\u030A" +
		"\u02FD\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B_\x03\x02\x02" +
		"\x02\u030C\u030E\x05\x10\t\x02\u030D\u030C\x03\x02\x02\x02\u030E\u0311" +
		"\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02" +
		"\u0310\u0312\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0313\x05" +
		"\xF0y\x02\u0313\u0314\x05N(\x02\u0314a\x03\x02\x02\x02\u0315\u0317\x05" +
		"\x10\t\x02\u0316\u0315\x03\x02\x02\x02\u0317\u031A\x03\x02\x02\x02\u0318" +
		"\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031B\x03\x02" +
		"\x02\x02\u031A\u0318\x03\x02\x02\x02\u031B\u031F\x05\xF0y\x02\u031C\u031E" +
		"\x05r:\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F" +
		"\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02" +
		"\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x07~\x02\x02\u0323\u0324" +
		"\x05N(\x02\u0324c\x03\x02\x02\x02\u0325\u032A\x05f4\x02\u0326\u0327\x07" +
		"W\x02\x02\u0327\u0329\x05f4\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032C" +
		"\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02" +
		"\u032Be\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032D\u032F\x05\x10" +
		"\t\x02\u032E\u032D\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330\u032E" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02" +
		"\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x07?\x02\x02\u0334\u0335\x05" +
		"\xA4S\x02\u0335g\x03\x02\x02\x02\u0336\u033B\x05\xA4S\x02\u0337\u0338" +
		"\x07X\x02\x02\u0338\u033A\x05\xA4S\x02\u0339\u0337\x03\x02\x02\x02\u033A" +
		"\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02" +
		"\x02\x02\u033Ci\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E\u0346" +
		"\x05l7\x02\u033F\u0346\x05n8\x02\u0340\u0346\x07L\x02\x02\u0341\u0346" +
		"\x07M\x02\x02\u0342\u0346\x07K\x02\x02\u0343\u0346\x07O\x02\x02\u0344" +
		"\u0346\x07N\x02\x02\u0345\u033E\x03\x02\x02\x02\u0345\u033F\x03\x02\x02" +
		"\x02\u0345\u0340\x03\x02\x02\x02\u0345\u0341\x03\x02\x02\x02\u0345\u0342" +
		"\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0344\x03\x02\x02\x02" +
		"\u0346k\x03\x02\x02\x02\u0347\u0348\t\x03\x02\x02\u0348m\x03\x02\x02\x02" +
		"\u0349\u034A\t\x04\x02\x02\u034Ao\x03\x02\x02\x02\u034B\u034C\x05\xA4" +
		"S\x02\u034C\u034D\x07X\x02\x02\u034D\u034F\x03\x02\x02\x02\u034E\u034B" +
		"\x03\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02" +
		"\u0350\u0351\x03\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0350\x03" +
		"\x02\x02\x02\u0353\u0354\x07}\x02\x02\u0354\u0355\x05\xA4S\x02\u0355q" +
		"\x03\x02\x02\x02\u0356\u0357\x07}\x02\x02\u0357\u035A\x05h5\x02\u0358" +
		"\u035A\x05p9\x02\u0359\u0356\x03\x02\x02\x02\u0359\u0358\x03\x02\x02\x02" +
		"\u035A\u0361\x03\x02\x02\x02\u035B\u035E\x07P\x02\x02\u035C\u035F\x05" +
		"t;\x02\u035D\u035F\x05x=\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035D\x03" +
		"\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360" +
		"\u0362\x07Q\x02\x02\u0361\u035B\x03\x02\x02\x02\u0361\u0362\x03\x02\x02" +
		"\x02\u0362s\x03\x02\x02\x02\u0363\u0368\x05v<\x02\u0364\u0365\x07W\x02" +
		"\x02\u0365\u0367\x05v<\x02\u0366\u0364\x03\x02\x02\x02\u0367\u036A\x03" +
		"\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369" +
		"u\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036C\x05\xA4S\x02" +
		"\u036C\u036D\x07Y\x02\x02\u036D\u036E\x05x=\x02\u036Ew\x03\x02\x02\x02" +
		"\u036F\u0373\x05\xC6d\x02\u0370\u0373\x05r:\x02\u0371\u0373\x05z>\x02" +
		"\u0372\u036F\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0372\u0371\x03" +
		"\x02\x02\x02\u0373y\x03\x02\x02\x02\u0374\u037D\x07R\x02\x02\u0375\u037A" +
		"\x05x=\x02\u0376\u0377\x07W\x02\x02\u0377\u0379\x05x=\x02\u0378\u0376" +
		"\x03\x02\x02\x02\u0379\u037C\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02" +
		"\u037A\u037B\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03" +
		"\x02\x02\x02\u037D\u0375\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E" +
		"\u0380\x03\x02\x02\x02\u037F\u0381\x07W\x02\x02\u0380\u037F\x03\x02\x02" +
		"\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0383" +
		"\x07S\x02\x02\u0383{\x03\x02\x02\x02\u0384\u0385\x07}\x02\x02\u0385\u0386" +
		"\x07\x1E\x02\x02\u0386\u0387\x05\xA4S\x02\u0387\u0388\x05~@\x02\u0388" +
		"}\x03\x02\x02\x02\u0389\u038D\x07R\x02\x02\u038A\u038C\x05\x80A\x02\u038B" +
		"\u038A\x03\x02\x02\x02\u038C\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02" +
		"\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u0390\x03\x02\x02\x02\u038F" +
		"\u038D\x03\x02\x02\x02\u0390\u0391\x07S\x02\x02\u0391\x7F\x03\x02\x02" +
		"\x02\u0392\u0394\x05\f\x07\x02\u0393\u0392\x03\x02\x02\x02\u0394\u0397" +
		"\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02" +
		"\u0396\u0398\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0398\u039B\x05" +
		"\x82B\x02\u0399\u039B\x07V";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u039A\u0395\x03\x02\x02\x02\u039A\u0399\x03\x02\x02\x02\u039B" +
		"\x81\x03\x02\x02\x02\u039C\u039D\x05\xF0y\x02\u039D\u039E\x05\x84C\x02" +
		"\u039E\u039F\x07V\x02\x02\u039F\u03B5\x03\x02\x02\x02\u03A0\u03A2\x05" +
		"\x12\n\x02\u03A1\u03A3\x07V\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A2" +
		"\u03A3\x03\x02\x02\x02\u03A3\u03B5\x03\x02\x02\x02\u03A4\u03A6\x05\"\x12" +
		"\x02\u03A5\u03A7\x07V\x02\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7" +
		"\x03\x02\x02\x02\u03A7\u03B5\x03\x02\x02\x02\u03A8\u03AA\x05\x1A\x0E\x02" +
		"\u03A9\u03AB\x07V\x02\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03" +
		"\x02\x02\x02\u03AB\u03B5\x03\x02\x02\x02\u03AC\u03AE\x05|?\x02\u03AD\u03AF" +
		"\x07V\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02" +
		"\u03AF\u03B5\x03\x02\x02\x02\u03B0\u03B2\x05\x94K\x02\u03B1\u03B3\x07" +
		"V\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B5\x03\x02\x02\x02\u03B4\u039C\x03\x02\x02\x02\u03B4\u03A0\x03\x02" +
		"\x02\x02\u03B4\u03A4\x03\x02\x02\x02\u03B4\u03A8\x03\x02\x02\x02\u03B4" +
		"\u03AC\x03\x02\x02\x02\u03B4\u03B0\x03\x02\x02\x02\u03B5\x83\x03\x02\x02" +
		"\x02\u03B6\u03B9\x05\x86D\x02\u03B7\u03B9\x05\x88E\x02\u03B8\u03B6\x03" +
		"\x02\x02\x02\u03B8\u03B7\x03\x02\x02\x02\u03B9\x85\x03\x02\x02\x02\u03BA" +
		"\u03BB\x05\xA4S\x02\u03BB\u03BC\x07P\x02\x02\u03BC\u03BE\x07Q\x02\x02" +
		"\u03BD\u03BF\x05\x8AF\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE\u03BF\x03" +
		"\x02\x02\x02\u03BF\x87\x03\x02\x02\x02\u03C0\u03C1\x05J&\x02\u03C1\x89" +
		"\x03\x02\x02\x02\u03C2\u03C3\x07\x0E\x02\x02\u03C3\u03C4\x05x=\x02\u03C4" +
		"\x8B\x03\x02\x02\x02\u03C5\u03C7\x076\x02\x02\u03C6\u03C5\x03\x02\x02" +
		"\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9" +
		"\x075\x02\x02\u03C9\u03CA\x05h5\x02\u03CA\u03CB\x05\x8EH\x02\u03CB\x8D" +
		"\x03\x02\x02\x02\u03CC\u03D0\x07R\x02\x02\u03CD\u03CF\x05\x90I\x02\u03CE" +
		"\u03CD\x03\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02" +
		"\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2" +
		"\u03D0\x03\x02\x02\x02\u03D3\u03D4\x07S\x02\x02\u03D4\x8F\x03\x02\x02" +
		"\x02\u03D5\u03D9\x077\x02\x02\u03D6\u03D8\x05\x92J\x02\u03D7\u03D6\x03" +
		"\x02\x02\x02\u03D8\u03DB\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03D9" +
		"\u03DA\x03\x02\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03D9\x03\x02" +
		"\x02\x02\u03DC\u03DD\x05h5\x02\u03DD\u03DE\x07V\x02\x02\u03DE\u03FA\x03" +
		"\x02\x02\x02\u03DF\u03E0\x078\x02\x02\u03E0\u03E3\x05h5\x02\u03E1\u03E2" +
		"\x07:\x02\x02\u03E2\u03E4\x05h5\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3" +
		"\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x07V\x02" +
		"\x02\u03E6\u03FA\x03\x02\x02\x02\u03E7\u03E8\x079\x02\x02\u03E8\u03EB" +
		"\x05h5\x02\u03E9\u03EA\x07:\x02\x02\u03EA\u03EC\x05h5\x02\u03EB\u03E9" +
		"\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02" +
		"\u03ED\u03EE\x07V\x02\x02\u03EE\u03FA\x03\x02\x02\x02\u03EF\u03F0\x07" +
		";\x02\x02\u03F0\u03F1\x05h5\x02\u03F1\u03F2\x07V\x02\x02\u03F2\u03FA\x03" +
		"\x02\x02\x02\u03F3\u03F4\x07<\x02\x02\u03F4\u03F5\x05h5\x02\u03F5\u03F6" +
		"\x07=\x02\x02\u03F6\u03F7\x05h5\x02\u03F7\u03F8\x07V\x02\x02\u03F8\u03FA" +
		"\x03\x02\x02\x02\u03F9\u03D5\x03\x02\x02\x02\u03F9\u03DF\x03\x02\x02\x02" +
		"\u03F9\u03E7\x03\x02\x02\x02\u03F9\u03EF\x03\x02\x02\x02\u03F9\u03F3\x03" +
		"\x02\x02\x02\u03FA\x91\x03\x02\x02\x02\u03FB\u03FC\t\x05\x02\x02\u03FC" +
		"\x93\x03\x02\x02\x02\u03FD\u03FE\x07A\x02\x02\u03FE\u0400\x05\xA4S\x02" +
		"\u03FF\u0401\x05\x14\v\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03" +
		"\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0405\x05\x96L\x02\u0403" +
		"\u0404\x07\x1A\x02\x02\u0404\u0406\x05\xEEx\x02\u0405\u0403\x03\x02\x02" +
		"\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0408" +
		"\x05\x9CO\x02\u0408\x95\x03\x02\x02\x02\u0409\u040B\x07P\x02\x02\u040A" +
		"\u040C\x05\x98M\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02" +
		"\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040E\x07Q\x02\x02\u040E\x97\x03" +
		"\x02\x02\x02\u040F\u0414\x05\x9AN\x02\u0410\u0411\x07W\x02\x02\u0411\u0413" +
		"\x05\x9AN\x02\u0412\u0410\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02" +
		"\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\x99\x03" +
		"\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0418\x05\xF0y\x02\u0418" +
		"\u0419\x05\xA4S\x02\u0419\x9B\x03\x02\x02\x02\u041A\u041E\x07R\x02\x02" +
		"\u041B\u041D\x05(\x15\x02\u041C\u041B\x03\x02\x02\x02\u041D\u0420\x03" +
		"\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F" +
		"\u0421\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0422\x07S\x02" +
		"\x02\u0422\x9D\x03\x02\x02\x02\u0423\u0428\x07R\x02\x02\u0424\u0427\x05" +
		"\xFC\x7F\x02\u0425\u0427\x05\xA0Q\x02\u0426\u0424\x03\x02\x02\x02\u0426" +
		"\u0425\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02" +
		"\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042B\x03\x02\x02\x02\u042A" +
		"\u0428\x03\x02\x02\x02\u042B\u042C\x07S\x02\x02\u042C\x9F\x03\x02\x02" +
		"\x02\u042D\u042E\x05\xA2R\x02\u042E\u042F\x07V\x02\x02\u042F\u0433\x03" +
		"\x02\x02\x02\u0430\u0433\x05\xA8U\x02\u0431\u0433\x05\xA6T\x02\u0432\u042D" +
		"\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0431\x03\x02\x02\x02" +
		"\u0433\xA1\x03\x02\x02\x02\u0434\u0436\x05\x10\t\x02\u0435\u0434\x03\x02" +
		"\x02\x02\u0436\u0439\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u0442\x03\x02\x02\x02\u0439\u0437\x03\x02" +
		"\x02\x02\u043A\u043B\x05\xF0y\x02\u043B\u043C\x05J&\x02\u043C\u0443\x03" +
		"\x02\x02\x02\u043D\u043E\x07?\x02\x02\u043E\u043F\x05\xA4S\x02\u043F\u0440" +
		"\x07Y\x02\x02\u0440\u0441\x05\xC6d\x02\u0441\u0443\x03\x02\x02\x02\u0442" +
		"\u043A\x03\x02\x02\x02\u0442\u043D\x03\x02\x02\x02\u0443\xA3\x03\x02\x02" +
		"\x02\u0444\u0445\t\x06\x02\x02\u0445\xA5\x03\x02\x02\x02\u0446\u0448\x05" +
		"\x0E\b\x02\u0447\u0446\x03\x02\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449" +
		"\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044F\x03\x02" +
		"\x02\x02\u044B\u0449\x03\x02\x02\x02\u044C\u0450\x05\x12\n\x02\u044D\u0450" +
		"\x05\"\x12\x02\u044E\u0450\x05\x94K\x02\u044F\u044C\x03\x02\x02\x02\u044F" +
		"\u044D\x03\x02\x02\x02\u044F\u044E\x03\x02\x02\x02\u0450\u0453\x03\x02" +
		"\x02\x02\u0451\u0453\x07V\x02\x02\u0452\u0449\x03\x02\x02\x02\u0452\u0451" +
		"\x03\x02\x02\x02\u0453\xA7\x03\x02\x02\x02\u0454\u04C6\x05\x9EP\x02\u0455" +
		"\u0456\x07\x04\x02\x02\u0456\u0459\x05\xC6d\x02\u0457\u0458\x07_\x02\x02" +
		"\u0458\u045A\x05\xC6d\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03" +
		"\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045C\x07V\x02\x02\u045C" +
		"\u04C6\x03\x02\x02\x02\u045D\u045E\x07\x18\x02\x02\u045E\u045F\x05\xC0" +
		"a\x02\u045F\u0462\x05\xA8U\x02\u0460\u0461\x07\x11\x02\x02\u0461\u0463" +
		"\x05\xA8U\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02" +
		"\u0463\u04C6\x03\x02\x02\x02\u0464\u0465\x07\x17\x02\x02\u0465\u0466\x07" +
		"P\x02\x02\u0466\u0467\x05\xBA^\x02\u0467\u0468\x07Q\x02\x02\u0468\u0469" +
		"\x05\xA8U\x02\u0469\u04C6\x03\x02\x02\x02\u046A\u046B\x074\x02\x02\u046B" +
		"\u046C\x05\xC0a\x02\u046C\u046D\x05\xA8U\x02\u046D\u04C6\x03\x02\x02\x02" +
		"\u046E\u046F\x07\x0F\x02\x02\u046F\u0470\x05\xA8U\x02\u0470\u0471\x07" +
		"4\x02\x02\u0471\u0472\x05\xC0a\x02\u0472\u0473\x07V\x02\x02\u0473\u04C6" +
		"\x03\x02\x02\x02\u0474\u0475\x071\x02\x02\u0475\u047F\x05\x9EP\x02\u0476" +
		"\u0478\x05\xAAV\x02\u0477\u0476\x03\x02\x02\x02\u0478\u0479\x03\x02\x02" +
		"\x02\u0479\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047C" +
		"\x03\x02\x02\x02\u047B\u047D\x05\xAEX\x02\u047C\u047B\x03\x02\x02\x02" +
		"\u047C\u047D\x03\x02\x02\x02\u047D\u0480\x03\x02\x02\x02\u047E\u0480\x05" +
		"\xAEX\x02\u047F\u0477\x03\x02\x02\x02\u047F\u047E\x03\x02\x02\x02\u0480" +
		"\u04C6\x03\x02\x02\x02\u0481\u0482\x071\x02\x02\u0482\u0483\x05\xB0Y\x02" +
		"\u0483\u0487\x05\x9EP\x02\u0484\u0486\x05\xAAV\x02\u0485\u0484\x03\x02" +
		"\x02\x02\u0486\u0489\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487" +
		"\u0488\x03\x02\x02\x02\u0488\u048B\x03\x02\x02\x02\u0489\u0487\x03\x02" +
		"\x02\x02\u048A\u048C\x05\xAEX\x02\u048B\u048A\x03\x02\x02\x02\u048B\u048C" +
		"\x03\x02\x02\x02\u048C\u04C6\x03\x02\x02\x02\u048D\u048E\x07+\x02\x02" +
		"\u048E\u048F\x05\xC0a\x02\u048F\u0493\x07R\x02\x02\u0490\u0492\x05\xB6" +
		"\\\x02\u0491\u0490\x03\x02\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0491" +
		"\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0499\x03\x02\x02\x02" +
		"\u0495\u0493\x03\x02\x02\x02\u0496\u0498\x05\xB8]\x02\u0497\u0496\x03" +
		"\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02\u0499" +
		"\u049A\x03\x02\x02\x02\u049A\u049C\x03\x02\x02\x02\u049B\u0499\x03\x02" +
		"\x02\x02\u049C\u049D\x07S\x02\x02\u049D\u04C6\x03\x02\x02\x02\u049E\u049F" +
		"\x07,\x02\x02\u049F\u04A0\x05\xC0a\x02\u04A0\u04A1\x05\x9EP\x02\u04A1" +
		"\u04C6\x03\x02\x02\x02\u04A2\u04A4\x07&\x02\x02\u04A3\u04A5\x05\xC6d\x02" +
		"\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A6\x03" +
		"\x02\x02\x02\u04A6\u04C6\x07V\x02\x02\u04A7\u04A8\x07.\x02\x02\u04A8\u04A9" +
		"\x05\xC6d\x02\u04A9\u04AA\x07V\x02\x02\u04AA\u04C6\x03\x02\x02\x02\u04AB" +
		"\u04AD\x07\x06\x02\x02\u04AC\u04AE\x05\xA4S\x02\u04AD\u04AC\x03\x02\x02" +
		"\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04C6" +
		"\x07V\x02\x02\u04B0\u04B2\x07\r\x02\x02\u04B1\u04B3\x05\xA4S\x02\u04B2" +
		"\u04B1\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B4\x03\x02" +
		"\x02\x02\u04B4\u04C6\x07V\x02\x02\u04B5\u04B6\x07@\x02\x02\u04B6\u04B7" +
		"\x05\xC6d\x02\u04B7\u04B8\x07V\x02\x02\u04B8\u04C6\x03\x02\x02\x02\u04B9" +
		"\u04C6\x07V\x02\x02\u04BA\u04BB\x05\xC6d\x02\u04BB\u04BC\x07V\x02\x02" +
		"\u04BC\u04C6\x03\x02\x02\x02\u04BD\u04BF\x05\xD2j\x02\u04BE\u04C0\x07" +
		"V\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0" +
		"\u04C6\x03\x02\x02\x02\u04C1\u04C2\x05\xA4S\x02\u04C2\u04C3\x07_\x02\x02" +
		"\u04C3\u04C4\x05\xA8U\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5\u0454\x03" +
		"\x02\x02\x02\u04C5\u0455\x03\x02\x02\x02\u04C5\u045D\x03\x02\x02\x02\u04C5" +
		"\u0464\x03\x02\x02\x02\u04C5\u046A\x03\x02\x02\x02\u04C5\u046E\x03\x02" +
		"\x02\x02\u04C5\u0474\x03\x02\x02\x02\u04C5\u0481\x03\x02\x02\x02\u04C5" +
		"\u048D\x03\x02\x02\x02\u04C5\u049E\x03\x02\x02\x02\u04C5\u04A2\x03\x02" +
		"\x02\x02\u04C5\u04A7\x03\x02\x02\x02\u04C5\u04AB\x03\x02\x02\x02\u04C5" +
		"\u04B0\x03\x02\x02\x02\u04C5\u04B5\x03\x02\x02\x02\u04C5\u04B9\x03\x02" +
		"\x02\x02\u04C5\u04BA\x03\x02\x02\x02\u04C5\u04BD\x03\x02\x02\x02\u04C5" +
		"\u04C1\x03\x02\x02\x02\u04C6\xA9\x03\x02\x02\x02\u04C7\u04C8\x07\t\x02" +
		"\x02\u04C8\u04CC\x07P\x02\x02\u04C9\u04CB\x05\x10\t\x02\u04CA\u04C9\x03" +
		"\x02\x02\x02\u04CB\u04CE\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CC" +
		"\u04CD\x03\x02\x02\x02\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04CC\x03\x02" +
		"\x02\x02\u04CF\u04D0\x05\xACW\x02\u04D0\u04D1\x05\xA4S\x02\u04D1\u04D2" +
		"\x07Q\x02\x02\u04D2\u04D3\x05\x9EP\x02\u04D3\xAB\x03\x02\x02\x02\u04D4" +
		"\u04D9\x05h5\x02\u04D5\u04D6\x07m\x02\x02\u04D6\u04D8\x05h5\x02\u04D7" +
		"\u04D5\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02" +
		"\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\xAD\x03\x02\x02\x02\u04DB\u04D9" +
		"\x03\x02\x02\x02\u04DC\u04DD\x07\x15\x02\x02\u04DD\u04DE\x05\x9EP\x02" +
		"\u04DE\xAF\x03\x02\x02\x02\u04DF\u04E0\x07P\x02\x02\u04E0\u04E2\x05\xB2" +
		"Z\x02\u04E1\u04E3\x07V\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E2\u04E3" +
		"\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E5\x07Q\x02\x02" +
		"\u04E5\xB1\x03\x02\x02\x02\u04E6\u04EB\x05\xB4[\x02\u04E7\u04E8\x07V\x02" +
		"\x02\u04E8\u04EA\x05\xB4[\x02\u04E9\u04E7\x03\x02\x02\x02\u04EA\u04ED" +
		"\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02" +
		"\u04EC\xB3\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u04F0\x05" +
		"\x10\t\x02\u04EF\u04EE\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02\u04F1" +
		"\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F9\x03\x02" +
		"\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F5\x05T+\x02\u04F5\u04F6" +
		"\x05N(\x02\u04F6\u04FA\x03\x02\x02\x02\u04F7\u04F8\x07?\x02\x02\u04F8" +
		"\u04FA\x05\xA4S\x02\u04F9\u04F4\x03\x02\x02\x02\u04F9\u04F7\x03\x02\x02" +
		"\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u04FC\x07Y\x02\x02\u04FC\u04FD" +
		"\x05\xC6d\x02\u04FD\u0500\x03\x02\x02\x02\u04FE\u0500\x05\xA4S\x02\u04FF" +
		"\u04F1\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02\x02\u0500\xB5\x03\x02\x02" +
		"\x02\u0501\u0503\x05\xB8]\x02\u0502\u0501\x03\x02\x02\x02\u0503\u0504" +
		"\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02" +
		"\u0505\u0507\x03\x02\x02\x02\u0506\u0508\x05\xA0Q\x02\u0507\u0506\x03" +
		"\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509" +
		"\u050A\x03\x02\x02\x02\u050A\xB7\x03\x02\x02\x02\u050B\u0511\x07\b\x02" +
		"\x02\u050C\u0512\x05\xC6d\x02\u050D\u0512\x07\x82\x02\x02\u050E\u050F" +
		"\x05\xF0y\x02\u050F\u0510\x05\xA4S\x02\u0510\u0512\x03\x02\x02\x02\u0511" +
		"\u050C\x03\x02\x02\x02\u0511\u050D\x03\x02\x02\x02\u0511\u050E\x03\x02" +
		"\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0517\x07_\x02\x02\u0514\u0515" +
		"\x07\x0E\x02\x02\u0515\u0517\x07_\x02\x02\u0516\u050B\x03\x02\x02\x02" +
		"\u0516\u0514\x03\x02\x02\x02\u0517\xB9\x03\x02\x02\x02\u0518\u0525\x05" +
		"\xBE`\x02\u0519\u051B\x05\xBC_\x02\u051A\u0519\x03\x02\x02\x02\u051A\u051B" +
		"\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051E\x07V\x02\x02" +
		"\u051D\u051F\x05\xC6d\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F\x03" +
		"\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0522\x07V\x02\x02\u0521" +
		"\u0523\x05\xC2b\x02\u0522\u0521\x03\x02\x02\x02\u0522\u0523\x03\x02\x02" +
		"\x02\u0523\u0525\x03\x02\x02\x02\u0524\u0518\x03\x02\x02\x02\u0524\u051A" +
		"\x03\x02\x02\x02\u0525\xBB\x03\x02\x02\x02\u0526\u0529\x05\xA2R\x02\u0527" +
		"\u0529\x05\xC2b\x02\u0528\u0526\x03\x02\x02\x02\u0528\u0527\x03\x02\x02" +
		"\x02\u0529\xBD\x03\x02\x02\x02\u052A\u052C\x05\x10\t\x02\u052B\u052A\x03" +
		"\x02\x02\x02\u052C\u052F\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052D" +
		"\u052E\x03\x02\x02\x02\u052E\u0532\x03\x02\x02\x02\u052F\u052D\x03\x02" +
		"\x02\x02\u0530\u0533\x05\xF0y\x02\u0531\u0533\x07?\x02\x02\u0532\u0530" +
		"\x03\x02\x02\x02\u0532\u0531\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02" +
		"\u0534\u0535\x05N(\x02\u0535\u0536\x07_\x02\x02\u0536\u0537\x05\xC6d\x02" +
		"\u0537\xBF\x03\x02\x02\x02\u0538\u0539\x07P\x02\x02\u0539\u053A\x05\xC6" +
		"d\x02\u053A\u053B\x07Q\x02\x02\u053B\xC1\x03\x02\x02\x02\u053C\u0541\x05" +
		"\xC6d\x02\u053D\u053E\x07W\x02\x02\u053E\u0540\x05\xC6d\x02\u053F\u053D" +
		"\x03\x02\x02\x02\u0540\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02" +
		"\u0541\u0542\x03\x02\x02\x02\u0542\xC3\x03\x02\x02\x02\u0543\u0541\x03" +
		"\x02\x02\x02\u0544\u0545\x05\xA4S\x02\u0545\u0547\x07P\x02\x02\u0546\u0548" +
		"\x05\xC2b\x02\u0547\u0546\x03\x02\x02\x02\u0547\u0548\x03\x02\x02\x02" +
		"\u0548\u0549\x03\x02\x02\x02\u0549\u054A\x07Q\x02\x02\u054A\u0558\x03" +
		"\x02\x02\x02\u054B\u054C\x07-\x02\x02\u054C\u054E\x07P\x02\x02\u054D\u054F" +
		"\x05\xC2b\x02\u054E\u054D\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02" +
		"\u054F\u0550\x03\x02\x02\x02\u0550\u0558\x07Q\x02\x02\u0551\u0552\x07" +
		"*\x02\x02\u0552\u0554\x07P\x02\x02\u0553\u0555\x05\xC2b\x02\u0554\u0553" +
		"\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02" +
		"\u0556\u0558\x07Q\x02\x02\u0557\u0544\x03\x02\x02\x02\u0557\u054B\x03" +
		"\x02\x02\x02\u0557\u0551\x03\x02\x02\x02\u0558\xC5\x03\x02\x02\x02\u0559" +
		"\u055A\bd\x01\x02\u055A\u0587\x05\xD0i\x02\u055B\u0587\x05\xC4c\x02\u055C" +
		"\u055D\x07!\x02\x02\u055D\u0587\x05\xDCo\x02\u055E\u0562\x07P\x02\x02" +
		"\u055F\u0561\x05r:\x02\u0560\u055F\x03\x02\x02\x02\u0561\u0564\x03\x02" +
		"\x02\x02\u0562\u0560\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563" +
		"\u0565\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0565\u056A\x05\xF0" +
		"y\x02\u0566\u0567\x07l\x02\x02\u0567\u0569\x05\xF0y\x02\u0568\u0566\x03" +
		"\x02\x02\x02\u0569\u056C\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A" +
		"\u056B\x03\x02\x02\x02\u056B\u056D\x03\x02\x02\x02\u056C\u056A\x03\x02" +
		"\x02\x02\u056D\u056E\x07Q\x02\x02\u056E\u056F\x05\xC6d\x18\u056F\u0587" +
		"\x03\x02\x02\x02\u0570\u0571\t\x07\x02\x02\u0571\u0587\x05\xC6d\x16\u0572" +
		"\u0573\t\b\x02\x02\u0573\u0587\x05\xC6d\x15\u0574\u0587\x05\xCAf\x02\u0575" +
		"\u0587\x05\xD2j\x02\u0576\u0577\x05\xF0y\x02\u0577\u057D\x07|\x02\x02" +
		"\u0578\u057A\x05\xF4{\x02\u0579\u0578\x03\x02\x02\x02\u0579\u057A\x03" +
		"\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u057E\x05\xA4S\x02\u057C" +
		"\u057E\x07!\x02\x02\u057D\u0579\x03\x02\x02\x02\u057D\u057C\x03\x02\x02" +
		"\x02\u057E\u0587\x03\x02\x02\x02\u057F\u0580\x05\xDAn\x02\u0580\u0582" +
		"\x07|\x02\x02\u0581\u0583\x05\xF4{\x02\u0582\u0581\x03\x02\x02\x02\u0582" +
		"\u0583\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\u0585\x07!\x02" +
		"\x02\u0585\u0587\x03\x02\x02\x02\u0586\u0559\x03\x02\x02\x02\u0586\u055B" +
		"\x03\x02\x02\x02\u0586\u055C\x03\x02\x02\x02\u0586\u055E\x03\x02\x02\x02" +
		"\u0586\u0570\x03\x02\x02\x02\u0586\u0572\x03\x02\x02\x02\u0586\u0574\x03" +
		"\x02\x02\x02\u0586\u0575\x03\x02\x02\x02\u0586\u0576\x03\x02\x02\x02\u0586" +
		"\u057F\x03\x02\x02\x02\u0587\u05DB\x03\x02\x02\x02\u0588\u0589\f\x14\x02" +
		"\x02\u0589\u058A\t\t\x02\x02\u058A\u05DA\x05\xC6d\x15\u058B\u058C\f\x13" +
		"\x02\x02\u058C\u058D\t\n\x02\x02\u058D\u05DA\x05\xC6d\x14\u058E\u0596" +
		"\f\x12\x02\x02\u058F\u0590\x07[\x02\x02\u0590\u0597\x07[\x02\x02\u0591" +
		"\u0592\x07Z\x02\x02\u0592\u0593\x07Z\x02\x02\u0593\u0597\x07Z\x02\x02" +
		"\u0594\u0595\x07Z\x02\x02\u0595\u0597\x07Z\x02\x02\u0596\u058F\x03\x02" +
		"\x02\x02\u0596\u0591\x03\x02\x02\x02\u0596\u0594\x03\x02\x02\x02\u0597" +
		"\u0598\x03\x02\x02\x02\u0598\u05DA\x05\xC6d\x13\u0599\u059A\f\x11\x02" +
		"\x02\u059A\u059B\t\v\x02\x02\u059B\u05DA\x05\xC6d\x12\u059C\u059D\f\x0F" +
		"\x02\x02\u059D\u059E\t\f\x02\x02\u059E\u05DA\x05\xC6d\x10\u059F\u05A0" +
		"\f\x0E\x02\x02\u05A0\u05A1\x07l\x02\x02\u05A1\u05DA\x05\xC6d\x0F\u05A2" +
		"\u05A3\f\r\x02\x02\u05A3\u05A4\x07n\x02\x02\u05A4\u05DA\x05\xC6d\x0E\u05A5" +
		"\u05A6\f\f\x02\x02\u05A6\u05A7\x07m\x02\x02\u05A7\u05DA\x05\xC6d\r\u05A8" +
		"\u05A9\f\v\x02\x02\u05A9\u05AA\x07d\x02\x02\u05AA\u05DA\x05\xC6d\f\u05AB" +
		"\u05AC\f\n\x02\x02\u05AC\u05AD\x07e\x02\x02\u05AD\u05DA\x05\xC6d\v\u05AE" +
		"\u05AF\f\t\x02\x02\u05AF\u05B0\x07^\x02\x02\u05B0\u05B1\x05\xC6d\x02\u05B1" +
		"\u05B2\x07_\x02\x02\u05B2\u05B3\x05\xC6d\t\u05B3\u05DA\x03\x02\x02\x02" +
		"\u05B4\u05B5\f\b\x02\x02\u05B5\u05B6\t\r\x02\x02\u05B6\u05DA\x05\xC6d" +
		"\b\u05B7\u05B8\f\x1C\x02\x02\u05B8\u05C4\x07X\x02\x02\u05B9\u05C5\x05" +
		"\xA4S\x02\u05BA\u05C5\x05\xC4c\x02\u05BB\u05C5\x07-\x02\x02\u05BC\u05BE" +
		"\x07!\x02\x02\u05BD\u05BF\x05\xECw\x02\u05BE\u05BD\x03\x02\x02\x02\u05BE" +
		"\u05BF\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C5\x05\xE0" +
		"q\x02\u05C1\u05C2\x07*\x02\x02\u05C2\u05C5\x05\xF6|\x02\u05C3\u05C5\x05" +
		"\xE6t\x02\u05C4\u05B9\x03\x02\x02\x02\u05C4\u05BA\x03\x02\x02\x02\u05C4" +
		"\u05BB\x03\x02\x02\x02\u05C4\u05BC\x03\x02\x02\x02\u05C4\u05C1\x03\x02" +
		"\x02\x02\u05C4\u05C3\x03\x02\x02\x02\u05C5\u05DA\x03\x02\x02\x02\u05C6" +
		"\u05C7\f\x1B\x02\x02\u05C7\u05C8\x07T\x02\x02\u05C8\u05C9\x05\xC6d\x02" +
		"\u05C9\u05CA\x07U\x02\x02\u05CA\u05DA\x03\x02\x02\x02\u05CB\u05CC\f\x17" +
		"\x02\x02\u05CC\u05DA\t\x0E\x02\x02\u05CD\u05CE\f\x10\x02\x02\u05CE\u05D1" +
		"\x07\x1C\x02\x02\u05CF\u05D2\x05\xF0y\x02\u05D0\u05D2\x05\xC8e\x02\u05D1" +
		"\u05CF\x03\x02\x02\x02\u05D1\u05D0\x03\x02\x02\x02\u05D2\u05DA\x03\x02" +
		"\x02\x02\u05D3\u05D4\f\x05\x02\x02\u05D4\u05D6\x07|\x02\x02\u05D5\u05D7" +
		"\x05\xF4{\x02\u05D6\u05D5\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02" +
		"\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05DA\x05\xA4S\x02\u05D9\u0588\x03" +
		"\x02\x02\x02\u05D9\u058B\x03\x02\x02\x02\u05D9\u058E\x03\x02\x02\x02\u05D9" +
		"\u0599\x03\x02\x02\x02\u05D9\u059C\x03\x02\x02\x02\u05D9\u059F\x03\x02" +
		"\x02\x02\u05D9\u05A2\x03\x02\x02\x02\u05D9\u05A5\x03\x02\x02\x02\u05D9" +
		"\u05A8\x03\x02\x02\x02\u05D9\u05AB\x03\x02\x02\x02\u05D9\u05AE\x03\x02" +
		"\x02\x02\u05D9\u05B4\x03\x02\x02\x02\u05D9\u05B7\x03\x02\x02\x02\u05D9" +
		"\u05C6\x03\x02\x02\x02\u05D9\u05CB\x03\x02\x02\x02\u05D9\u05CD\x03\x02" +
		"\x02\x02\u05D9\u05D3\x03\x02\x02\x02\u05DA\u05DD\x03\x02\x02\x02\u05DB" +
		"\u05D9\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC\xC7\x03\x02\x02" +
		"\x02\u05DD\u05DB\x03\x02\x02\x02\u05DE\u05E0\x05\x10\t\x02\u05DF\u05DE" +
		"\x03\x02\x02\x02\u05E0\u05E3\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02" +
		"\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E4\x03\x02\x02\x02\u05E3\u05E1\x03" +
		"\x02\x02\x02\u05E4\u05E8\x05\xF0y\x02\u05E5\u05E7\x05r:\x02\u05E6\u05E5" +
		"\x03\x02\x02\x02\u05E7\u05EA\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02" +
		"\u05E8\u05E9\x03\x02\x02\x02\u05E9\u05EB\x03\x02\x02\x02\u05EA\u05E8\x03" +
		"\x02\x02\x02\u05EB\u05EC\x05\xA4S\x02\u05EC\xC9\x03\x02\x02\x02\u05ED" +
		"\u05EE\x05\xCCg\x02\u05EE\u05EF\x07{\x02\x02\u05EF\u05F0\x05\xCEh\x02" +
		"\u05F0\xCB\x03\x02\x02\x02\u05F1\u0608\x05\xA4S\x02\u05F2\u05F4\x07P\x02" +
		"\x02\u05F3\u05F5\x05^0\x02\u05F4\u05F3\x03\x02\x02\x02\u05F4\u05F5\x03" +
		"\x02\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u0608\x07Q\x02\x02\u05F7" +
		"\u05F8\x07P\x02\x02\u05F8\u05FD\x05\xA4S\x02\u05F9\u05FA\x07W\x02\x02" +
		"\u05FA\u05FC\x05\xA4S\x02\u05FB\u05F9\x03\x02\x02\x02\u05FC\u05FF\x03" +
		"\x02\x02\x02\u05FD\u05FB\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02\x02\u05FE" +
		"\u0600\x03\x02\x02\x02\u05FF\u05FD\x03\x02\x02\x02\u0600\u0601\x07Q\x02" +
		"\x02\u0601\u0608\x03\x02\x02\x02\u0602\u0604\x07P\x02\x02\u0603\u0605" +
		"\x05d3\x02\u0604\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605" +
		"\u0606\x03\x02\x02\x02\u0606\u0608\x07Q\x02\x02\u0607\u05F1\x03\x02\x02" +
		"\x02\u0607\u05F2\x03\x02\x02\x02\u0607\u05F7\x03\x02\x02\x02\u0607\u0602" +
		"\x03\x02\x02\x02\u0608\xCD\x03\x02\x02\x02\u0609\u060C\x05\xC6d\x02\u060A" +
		"\u060C\x05\x9EP\x02\u060B\u0609\x03\x02\x02\x02\u060B\u060A\x03\x02\x02" +
		"\x02\u060C\xCF\x03\x02\x02\x02\u060D\u060E\x07P\x02\x02\u060E\u060F\x05" +
		"\xC6d\x02\u060F\u0610\x07Q\x02\x02\u0610\u0620\x03\x02\x02\x02\u0611\u0620" +
		"\x07-\x02\x02\u0612\u0620\x07*\x02\x02\u0613\u0620\x05j6\x02\u0614\u0620" +
		"\x05\xA4S\x02\u0615\u0616\x050\x19\x02\u0616\u0617\x07X\x02\x02\u0617" +
		"\u0618\x07\v\x02\x02\u0618\u0620\x03\x02\x02\x02\u0619\u061D\x05\xECw" +
		"\x02\u061A\u061E\x05\xF8}\x02\u061B\u061C\x07-\x02\x02\u061C\u061E\x05" +
		"\xFA~\x02\u061D\u061A\x03\x02\x02\x02\u061D\u061B\x03\x02\x02\x02\u061E" +
		"\u0620\x03\x02\x02\x02\u061F\u060D\x03\x02\x02\x02\u061F\u0611\x03\x02" +
		"\x02\x02\u061F\u0612\x03\x02\x02\x02\u061F\u0613\x03\x02\x02\x02\u061F" +
		"\u0614\x03\x02\x02\x02\u061F\u0615\x03\x02\x02\x02\u061F\u0619\x03\x02" +
		"\x02\x02\u0620\xD1\x03\x02\x02\x02\u0621\u0622\x07+\x02\x02\u0622\u0623" +
		"\x05\xC0a\x02\u0623\u0627\x07R\x02\x02\u0624\u0626\x05\xD4k\x02\u0625" +
		"\u0624\x03\x02\x02\x02\u0626\u0629\x03\x02\x02\x02\u0627\u0625\x03\x02" +
		"\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062A\x03\x02\x02\x02\u0629" +
		"\u0627\x03\x02\x02\x02\u062A\u062B\x07S\x02\x02\u062B\xD3\x03\x02\x02" +
		"\x02\u062C\u0630\x07\b\x02\x02\u062D\u0631\x05\xC2b\x02\u062E\u0631\x07" +
		"O\x02\x02\u062F\u0631\x05\xD6l\x02\u0630\u062D\x03\x02\x02\x02\u0630\u062E" +
		"\x03\x02\x02\x02\u0630\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02" +
		"\u0632\u0633\t\x0F\x02\x02\u0633\u0638\x05\xD8m\x02\u0634\u0635\x07\x0E" +
		"\x02\x02\u0635\u0636\t\x0F\x02\x02\u0636\u0638\x05\xD8m\x02\u0637\u062C" +
		"\x03\x02\x02\x02\u0637\u0634\x03\x02\x02\x02\u0638\xD5\x03\x02\x02\x02" +
		"\u0639\u063A\bl\x01\x02\u063A\u063B\x07P\x02\x02\u063B\u063C\x05\xD6l" +
		"\x02\u063C\u063D\x07Q\x02\x02\u063D\u0654\x03\x02\x02\x02\u063E\u0640" +
		"\x05\x10\t\x02\u063F\u063E\x03\x02\x02\x02\u0640\u0643\x03\x02\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u0641\u063F\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642\u0644\x03" +
		"\x02\x02\x02\u0643\u0641\x03\x02\x02\x02\u0644\u0648\x05\xF0y\x02\u0645" +
		"\u0647\x05r:\x02\u0646\u0645\x03\x02\x02\x02\u0647\u064A\x03\x02\x02\x02" +
		"\u0648\u0646\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u064B\x03" +
		"\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064B\u0650\x05\xA4S\x02\u064C" +
		"\u064D\x07d\x02\x02\u064D\u064F\x05\xC6d\x02\u064E\u064C\x03\x02\x02\x02" +
		"\u064F\u0652\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0650\u0651\x03" +
		"\x02\x02\x02\u0651\u0654\x03\x02\x02\x02\u0652\u0650\x03\x02\x02\x02\u0653" +
		"\u0639\x03\x02\x02\x02\u0653\u0641\x03\x02\x02\x02\u0654\u065A\x03\x02" +
		"\x02\x02\u0655\u0656\f\x03\x02\x02\u0656\u0657\x07d\x02\x02\u0657\u0659" +
		"\x05\xC6d\x02\u0658\u0655\x03\x02\x02\x02\u0659\u065C\x03\x02\x02\x02" +
		"\u065A\u0658\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\xD7\x03" +
		"\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065D\u0665\x05\x9EP\x02\u065E" +
		"\u0660\x05\xA0Q\x02\u065F\u065E\x03\x02\x02\x02\u0660\u0663\x03\x02\x02" +
		"\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0665" +
		"\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02\u0664\u065D\x03\x02\x02\x02" +
		"\u0664\u0661\x03\x02\x02\x02\u0665\xD9\x03\x02\x02\x02\u0666\u0667\x05" +
		"T+\x02\u0667\u0668\x07X\x02\x02\u0668\u066A\x03\x02\x02\x02\u0669\u0666" +
		"\x03\x02\x02\x02\u0669\u066A\x03\x02\x02\x02\u066A\u066E\x03\x02\x02\x02" +
		"\u066B\u066D\x05r:\x02\u066C\u066B\x03\x02\x02\x02\u066D\u0670\x03\x02" +
		"\x02\x02\u066E\u066C\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F" +
		"\u0671\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0671\u0673\x05\xA4" +
		"S\x02\u0672\u0674\x05\xF4{\x02\u0673\u0672\x03\x02\x02\x02\u0673\u0674" +
		"\x03\x02\x02\x02\u0674\xDB\x03\x02\x02\x02\u0675\u0676\x05\xECw\x02\u0676" +
		"\u0677\x05\xDEp\x02\u0677\u0678\x05\xE4s\x02\u0678\u067F\x03\x02\x02\x02" +
		"\u0679\u067C\x05\xDEp\x02\u067A\u067D\x05\xE2r\x02\u067B\u067D\x05\xE4" +
		"s\x02\u067C\u067A\x03\x02\x02\x02\u067C\u067B\x03\x02\x02\x02\u067D\u067F" +
		"\x03\x02\x02\x02\u067E\u0675\x03\x02\x02\x02\u067E\u0679\x03\x02\x02\x02" +
		"\u067F\xDD\x03\x02\x02\x02\u0680\u0682\x05\xA4S\x02\u0681\u0683\x05\xE8" +
		"u\x02\u0682\u0681\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u068B" +
		"\x03\x02\x02\x02\u0684\u0685\x07X\x02\x02\u0685\u0687\x05\xA4S\x02\u0686" +
		"\u0688\x05\xE8u\x02\u0687\u0686\x03\x02\x02\x02\u0687\u0688\x03\x02\x02" +
		"\x02\u0688\u068A\x03\x02\x02\x02\u0689\u0684\x03\x02\x02\x02\u068A\u068D" +
		"\x03\x02\x02\x02\u068B\u0689\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02" +
		"\u068C\u0690\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02\u068E\u0690\x05" +
		"\xF2z\x02\u068F\u0680\x03\x02\x02\x02\u068F\u068E\x03\x02\x02\x02\u0690" +
		"\xDF\x03\x02\x02\x02\u0691\u0693\x05\xA4S\x02\u0692\u0694\x05\xEAv\x02" +
		"\u0693\u0692\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x03" +
		"\x02\x02\x02\u0695\u0696\x05\xE4s\x02\u0696\xE1\x03\x02\x02\x02\u0697" +
		"\u06B3\x07T\x02\x02\u0698\u069D\x07U\x02\x02\u0699\u069A\x07T\x02\x02" +
		"\u069A\u069C\x07U\x02\x02\u069B\u0699\x03\x02\x02\x02\u069C\u069F\x03" +
		"\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069D\u069E\x03\x02\x02\x02\u069E" +
		"\u06A0\x03\x02\x02\x02\u069F\u069D\x03\x02\x02\x02\u06A0\u06B4\x05R*\x02" +
		"\u06A1\u06A2\x05\xC6d\x02\u06A2\u06A9\x07U\x02\x02\u06A3\u06A4\x07T\x02" +
		"\x02\u06A4\u06A5\x05\xC6d\x02\u06A5\u06A6\x07U\x02\x02\u06A6\u06A8\x03" +
		"\x02\x02\x02\u06A7\u06A3\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9" +
		"\u06A7\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06B0\x03\x02" +
		"\x02\x02\u06AB\u06A9\x03\x02\x02\x02\u06AC\u06AD\x07T\x02\x02\u06AD\u06AF" +
		"\x07U\x02\x02\u06AE\u06AC\x03\x02\x02\x02\u06AF\u06B2\x03\x02\x02\x02" +
		"\u06B0\u06AE\x03\x02\x02\x02\u06B0\u06B1\x03\x02\x02\x02\u06B1\u06B4\x03" +
		"\x02\x02\x02\u06B2\u06B0\x03\x02\x02\x02\u06B3\u0698\x03\x02\x02\x02\u06B3" +
		"\u06A1\x03\x02\x02\x02\u06B4\xE3\x03\x02\x02\x02\u06B5\u06B7\x05\xFA~" +
		"\x02\u06B6\u06B8\x05$\x13\x02\u06B7\u06B6\x03\x02\x02\x02\u06B7\u06B8" +
		"\x03\x02\x02\x02\u06B8\xE5\x03\x02\x02\x02\u06B9\u06BA\x05\xECw\x02\u06BA" +
		"\u06BB\x05\xF8}\x02\u06BB\xE7\x03\x02\x02\x02\u06BC\u06BD\x07[\x02\x02" +
		"\u06BD\u06C0\x07Z\x02\x02\u06BE\u06C0\x05\xF4{\x02\u06BF\u06BC\x03\x02" +
		"\x02\x02\u06BF\u06BE\x03\x02\x02\x02\u06C0\xE9\x03\x02\x02\x02\u06C1\u06C2" +
		"\x07[\x02\x02\u06C2\u06C5\x07Z\x02\x02\u06C3\u06C5\x05\xECw\x02\u06C4" +
		"\u06C1\x03\x02\x02\x02\u06C4\u06C3\x03\x02\x02\x02\u06C5\xEB\x03\x02\x02" +
		"\x02\u06C6\u06C7\x07[\x02\x02\u06C7\u06C8\x05\xEEx\x02\u06C8\u06C9\x07" +
		"Z\x02\x02\u06C9\xED\x03\x02\x02\x02\u06CA\u06CF\x05\xF0y\x02\u06CB\u06CC" +
		"\x07W\x02\x02\u06CC\u06CE\x05\xF0y\x02\u06CD\u06CB\x03\x02\x02\x02\u06CE" +
		"\u06D1\x03\x02\x02\x02\u06CF\u06CD\x03\x02\x02\x02\u06CF\u06D0\x03\x02" +
		"\x02\x02\u06D0\xEF\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D2\u06D4" +
		"\x05r:\x02\u06D3\u06D2\x03\x02\x02\x02\u06D4\u06D7\x03\x02\x02\x02\u06D5" +
		"\u06D3\x03\x02\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06DA\x03\x02" +
		"\x02\x02\u06D7\u06D5\x03\x02\x02\x02\u06D8\u06DB\x05T+\x02\u06D9\u06DB" +
		"\x05\xF2z\x02\u06DA\u06D8\x03\x02\x02\x02\u06DA\u06D9\x03\x02\x02\x02" +
		"\u06DB\u06E6\x03\x02\x02\x02\u06DC\u06DE\x05r:\x02\u06DD\u06DC\x03\x02" +
		"\x02\x02\u06DE\u06E1\x03\x02\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06DF" +
		"\u06E0\x03\x02\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06DF\x03\x02" +
		"\x02\x02\u06E2\u06E3\x07T\x02\x02\u06E3\u06E5\x07U\x02\x02\u06E4\u06DF" +
		"\x03\x02\x02\x02\u06E5\u06E8\x03\x02\x02\x02\u06E6\u06E4\x03\x02\x02\x02" +
		"\u06E6\u06E7\x03\x02\x02\x02\u06E7\xF1\x03\x02\x02\x02\u06E8\u06E6\x03" +
		"\x02\x02\x02\u06E9\u06EA\t\x10\x02\x02\u06EA\xF3\x03\x02\x02\x02\u06EB" +
		"\u06EC\x07[\x02\x02\u06EC\u06F1\x05V,\x02\u06ED\u06EE\x07W\x02\x02\u06EE" +
		"\u06F0\x05V,\x02\u06EF\u06ED\x03\x02\x02\x02\u06F0\u06F3\x03\x02\x02\x02" +
		"\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2\u06F4\x03" +
		"\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F4\u06F5\x07Z\x02\x02\u06F5" +
		"\xF5\x03\x02\x02\x02\u06F6\u0700\x05\xFA~\x02\u06F7\u06F9\x07X\x02\x02" +
		"\u06F8\u06FA\x05\xF4{\x02\u06F9\u06F8\x03\x02\x02\x02\u06F9\u06FA\x03" +
		"\x02\x02\x02\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06FD\x05\xA4S\x02\u06FC" +
		"\u06FE\x05\xFA~\x02\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02" +
		"\x02\u06FE\u0700\x03\x02\x02\x02\u06FF\u06F6\x03\x02\x02\x02\u06FF\u06F7" +
		"\x03\x02\x02\x02\u0700\xF7\x03\x02\x02\x02\u0701\u0702\x07*\x02\x02\u0702" +
		"\u0707\x05\xF6|\x02\u0703\u0704\x05\xA4S\x02\u0704\u0705\x05\xFA~\x02" +
		"\u0705\u0707\x03\x02\x02\x02\u0706\u0701\x03\x02\x02\x02\u0706\u0703\x03" +
		"\x02\x02\x02\u0707\xF9\x03\x02\x02\x02\u0708\u070A\x07P\x02\x02\u0709" +
		"\u070B\x05\xC2b\x02\u070A\u0709\x03\x02\x02\x02\u070A\u070B\x03\x02\x02" +
		"\x02\u070B\u070C\x03\x02\x02\x02\u070C\u070D\x07Q\x02\x02\u070D\xFB\x03" +
		"\x02\x02\x02\u070E\u0712\x07\x83\x02\x02\u070F\u0711\x05\xFE\x80\x02\u0710" +
		"\u070F\x03\x02\x02\x02\u0711\u0714\x03\x02\x02\x02\u0712\u0710\x03\x02" +
		"\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713\u0715\x03\x02\x02\x02\u0714" +
		"\u0712\x03\x02\x02\x02\u0715\u0716\t\x11\x02\x02\u0716\xFD\x03\x02\x02" +
		"\x02\u0717\u071A\x07\x86\x02\x02\u0718\u071B\x05\u0108\x85\x02\u0719\u071B" +
		"\x05\u0100\x81\x02\u071A\u0718\x03\x02\x02\x02\u071A\u0719\x03\x02\x02" +
		"\x02\u071B\xFF\x03\x02\x02\x02\u071C\u071D\x07\x8A\x02\x02\u071D\u071E" +
		"\x05\u0102\x82\x02\u071E\u071F\x05\u0104\x83\x02\u071F\u0101\x03\x02\x02" +
		"\x02\u0720\u0721\x05\u010E\x88\x02\u0721\u0103\x03\x02\x02\x02\u0722\u0726" +
		"\x07\x90\x02\x02\u0723\u0725\x05\u0106\x84\x02\u0724\u0723\x03\x02\x02" +
		"\x02\u0725\u0728\x03\x02\x02\x02\u0726\u0724\x03\x02\x02\x02\u0726\u0727" +
		"\x03\x02\x02\x02\u0727\u0729\x03\x02\x02\x02\u0728\u0726\x03\x02\x02\x02" +
		"\u0729\u072A\x07\x91\x02\x02\u072A\u0105\x03\x02\x02\x02\u072B\u072C\x07" +
		"\x86\x02\x02\u072C\u072D\x05\u0108\x85\x02\u072D\u0107\x03\x02\x02\x02" +
		"\u072E\u072F\x05\u010A\x86\x02\u072F\u0730\x05\u010C\x87\x02\u0730\u0109" +
		"\x03\x02\x02\x02\u0731\u0732\t\x12\x02\x02\u0732\u010B\x03\x02\x02\x02" +
		"\u0733\u0735\x05\u010E\x88\x02\u0734\u0733\x03\x02\x02\x02\u0735\u0738" +
		"\x03\x02\x02\x02\u0736\u0734\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02" +
		"\u0737\u010D\x03\x02\x02\x02\u0738\u0736\x03\x02\x02\x02\u0739\u073B\t" +
		"\x13\x02\x02\u073A\u0739\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B" +
		"\u073C\x03\x02\x02\x02\u073C\u073E\x05\u0110\x89\x02\u073D\u073F\t\x13" +
		"\x02\x02\u073E\u073D\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F" +
		"\u010F\x03\x02\x02\x02\u0740\u0748\t\x14\x02\x02\u0741\u0743\t\x15\x02" +
		"\x02\u0742\u0741\x03\x02\x02\x02\u0743\u0746\x03\x02\x02\x02\u0744\u0742" +
		"\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0747\x03\x02\x02\x02" +
		"\u0746\u0744\x03\x02\x02\x02\u0747\u0749\t\x14\x02\x02\u0748\u0744\x03" +
		"\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749\u0111\x03\x02\x02\x02\xEA" +
		"\u0113\u0118\u011E\u0124\u0129\u0132\u0137\u013E\u0144\u0149\u0150\u0157" +
		"\u0163\u0167\u016C\u0170\u0174\u0178\u0182\u018A\u0192\u0196\u019D\u01A4" +
		"\u01A8\u01AB\u01AE\u01B7\u01BD\u01C2\u01C5\u01CB\u01D1\u01D5\u01D9\u01DF" +
		"\u01E4\u01ED\u01F4\u01FA\u0200\u0204\u0210\u0219\u021E\u0224\u0228\u0234" +
		"\u023F\u0244\u024E\u0256\u0260\u0269\u0274\u0279\u0282\u028C\u0291\u029A" +
		"\u02A0\u02A7\u02AC\u02B4\u02B8\u02BA\u02C0\u02C5\u02C9\u02D0\u02D6\u02D8" +
		"\u02DF\u02E4\u02E9\u02EC\u02EE\u02F8\u0302\u0307\u030A\u030F\u0318\u031F" +
		"\u032A\u0330\u033B\u0345\u0350\u0359\u035E\u0361\u0368\u0372\u037A\u037D" +
		"\u0380\u038D\u0395\u039A\u03A2\u03A6\u03AA\u03AE\u03B2\u03B4\u03B8\u03BE" +
		"\u03C6\u03D0\u03D9\u03E3\u03EB\u03F9\u0400\u0405\u040B\u0414\u041E\u0426" +
		"\u0428\u0432\u0437\u0442\u0449\u044F\u0452\u0459\u0462\u0479\u047C\u047F" +
		"\u0487\u048B\u0493\u0499\u04A4\u04AD\u04B2\u04BF\u04C5\u04CC\u04D9\u04E2" +
		"\u04EB\u04F1\u04F9\u04FF\u0504\u0509\u0511\u0516\u051A\u051E\u0522\u0524" +
		"\u0528\u052D\u0532\u0541\u0547\u054E\u0554\u0557\u0562\u056A\u0579\u057D" +
		"\u0582\u0586\u0596\u05BE\u05C4\u05D1\u05D6\u05D9\u05DB\u05E1\u05E8\u05F4" +
		"\u05FD\u0604\u0607\u060B\u061D\u061F\u0627\u0630\u0637\u0641\u0648\u0650" +
		"\u0653\u065A\u0661\u0664\u0669\u066E\u0673\u067C\u067E\u0682\u0687\u068B" +
		"\u068F\u0693\u069D\u06A9\u06B0\u06B3\u06B7\u06BF\u06C4\u06CF\u06D5\u06DA" +
		"\u06DF\u06E6\u06F1\u06F9\u06FD\u06FF\u0706\u070A\u0712\u071A\u0726\u0736" +
		"\u073A\u073E\u0744\u0748";
	public static readonly _serializedATN: string = Utils.join(
		[
			PGTJavaParser._serializedATNSegment0,
			PGTJavaParser._serializedATNSegment1,
			PGTJavaParser._serializedATNSegment2,
			PGTJavaParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PGTJavaParser.__ATN) {
			PGTJavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PGTJavaParser._serializedATN));
		}

		return PGTJavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public globalDeclaration(): GlobalDeclarationContext[];
	public globalDeclaration(i: number): GlobalDeclarationContext;
	public globalDeclaration(i?: number): GlobalDeclarationContext | GlobalDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GlobalDeclarationContext);
		} else {
			return this.getRuleContext(i, GlobalDeclarationContext);
		}
	}
	public moduleDeclaration(): ModuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclarationContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(PGTJavaParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(PGTJavaParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalDeclarationContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public specification(): SpecificationContext[];
	public specification(i: number): SpecificationContext;
	public specification(i?: number): SpecificationContext | SpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecificationContext);
		} else {
			return this.getRuleContext(i, SpecificationContext);
		}
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_globalDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterGlobalDeclaration) {
			listener.enterGlobalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitGlobalDeclaration) {
			listener.exitGlobalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitGlobalDeclaration) {
			return visitor.visitGlobalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TRANSIENT, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VOLATILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_modifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.FINAL, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STRICTFP, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEALED, 0); }
	public NON_SEALED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NON_SEALED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(PGTJavaParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXTENDS, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext[];
	public typeList(i: number): TypeListContext;
	public typeList(i?: number): TypeListContext | TypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext(i, TypeListContext);
		}
	}
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PERMITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(PGTJavaParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(PGTJavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.BITAND);
		} else {
			return this.getToken(PGTJavaParser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(PGTJavaParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(PGTJavaParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXTENDS, 0); }
	public typeList(): TypeListContext[];
	public typeList(i: number): TypeListContext;
	public typeList(i?: number): TypeListContext | TypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeListContext);
		} else {
			return this.getRuleContext(i, TypeListContext);
		}
	}
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PERMITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public specification(): SpecificationContext | undefined {
		return this.tryGetRuleContext(0, SpecificationContext);
	}
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public specification(): SpecificationContext[];
	public specification(i: number): SpecificationContext;
	public specification(i?: number): SpecificationContext | SpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecificationContext);
		} else {
			return this.getRuleContext(i, SpecificationContext);
		}
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeOrVoidContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeTypeOrVoid; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeTypeOrVoid) {
			listener.enterTypeTypeOrVoid(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeTypeOrVoid) {
			listener.exitTypeTypeOrVoid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeTypeOrVoid) {
			return visitor.visitTypeTypeOrVoid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_genericConstructorDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterGenericConstructorDeclaration) {
			listener.enterGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitGenericConstructorDeclaration) {
			listener.exitGenericConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) {
			return visitor.visitGenericConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public _constructorBody!: BlockContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceBodyDeclaration) {
			listener.enterInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceBodyDeclaration) {
			listener.exitInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceMemberDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(PGTJavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PUBLIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ABSTRACT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DEFAULT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STATIC, 0); }
	public STRICTFP(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STRICTFP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceMethodModifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
		return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterGenericInterfaceMethodDeclaration) {
			listener.enterGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitGenericInterfaceMethodDeclaration) {
			listener.exitGenericInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) {
			return visitor.visitGenericInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceCommonBodyDeclarationContext extends ParserRuleContext {
	public typeTypeOrVoid(): TypeTypeOrVoidContext {
		return this.getRuleContext(0, TypeTypeOrVoidContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_interfaceCommonBodyDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInterfaceCommonBodyDeclaration) {
			listener.enterInterfaceCommonBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInterfaceCommonBodyDeclaration) {
			listener.exitInterfaceCommonBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInterfaceCommonBodyDeclaration) {
			return visitor.visitInterfaceCommonBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.DOT);
		} else {
			return this.getToken(PGTJavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.QUESTION, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COMMA, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public THIS(): TerminalNode { return this.getToken(PGTJavaParser.THIS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.DOT);
		} else {
			return this.getToken(PGTJavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_receiverParameter; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterReceiverParameter) {
			listener.enterReceiverParameter(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitReceiverParameter) {
			listener.exitReceiverParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(PGTJavaParser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lastFormalParameter; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLastFormalParameter) {
			listener.enterLastFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLastFormalParameter) {
			listener.exitLastFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaLVTIListContext extends ParserRuleContext {
	public lambdaLVTIParameter(): LambdaLVTIParameterContext[];
	public lambdaLVTIParameter(i: number): LambdaLVTIParameterContext;
	public lambdaLVTIParameter(i?: number): LambdaLVTIParameterContext | LambdaLVTIParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LambdaLVTIParameterContext);
		} else {
			return this.getRuleContext(i, LambdaLVTIParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lambdaLVTIList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLambdaLVTIList) {
			listener.enterLambdaLVTIList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLambdaLVTIList) {
			listener.exitLambdaLVTIList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaLVTIList) {
			return visitor.visitLambdaLVTIList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaLVTIParameterContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(PGTJavaParser.VAR, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lambdaLVTIParameter; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLambdaLVTIParameter) {
			listener.enterLambdaLVTIParameter(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLambdaLVTIParameter) {
			listener.exitLambdaLVTIParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaLVTIParameter) {
			return visitor.visitLambdaLVTIParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.DOT);
		} else {
			return this.getToken(PGTJavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatLiteral(): FloatLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatLiteralContext);
	}
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CHAR_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BOOL_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NULL_LITERAL, 0); }
	public TEXT_BLOCK(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TEXT_BLOCK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_literal; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DECIMAL_LITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.HEX_LITERAL, 0); }
	public OCT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OCT_LITERAL, 0); }
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BINARY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatLiteralContext extends ParserRuleContext {
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.FLOAT_LITERAL, 0); }
	public HEX_FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.HEX_FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_floatLiteral; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltAnnotationQualifiedNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(PGTJavaParser.AT, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.DOT);
		} else {
			return this.getToken(PGTJavaParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_altAnnotationQualifiedName; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAltAnnotationQualifiedName) {
			listener.enterAltAnnotationQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAltAnnotationQualifiedName) {
			listener.exitAltAnnotationQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAltAnnotationQualifiedName) {
			return visitor.visitAltAnnotationQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, AltAnnotationQualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotation; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(PGTJavaParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(PGTJavaParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(PGTJavaParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationTypeDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationTypeBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationTypeElementRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationTypeElementRest) {
			listener.enterAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationTypeElementRest) {
			listener.exitAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) {
			listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) {
			listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationMethodRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationMethodRest) {
			listener.enterAnnotationMethodRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationMethodRest) {
			listener.exitAnnotationMethodRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_annotationConstantRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterAnnotationConstantRest) {
			listener.enterAnnotationConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitAnnotationConstantRest) {
			listener.exitAnnotationConstantRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(PGTJavaParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public MODULE(): TerminalNode { return this.getToken(PGTJavaParser.MODULE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public moduleBody(): ModuleBodyContext {
		return this.getRuleContext(0, ModuleBodyContext);
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OPEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_moduleDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitModuleDeclaration) {
			return visitor.visitModuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public moduleDirective(): ModuleDirectiveContext[];
	public moduleDirective(i: number): ModuleDirectiveContext;
	public moduleDirective(i?: number): ModuleDirectiveContext | ModuleDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDirectiveContext);
		} else {
			return this.getRuleContext(i, ModuleDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitModuleBody) {
			return visitor.visitModuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.REQUIRES, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(PGTJavaParser.SEMI, 0); }
	public requiresModifier(): RequiresModifierContext[];
	public requiresModifier(i: number): RequiresModifierContext;
	public requiresModifier(i?: number): RequiresModifierContext | RequiresModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiresModifierContext);
		} else {
			return this.getRuleContext(i, RequiresModifierContext);
		}
	}
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXPORTS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TO, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OPENS, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.USES, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PROVIDES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_moduleDirective; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterModuleDirective) {
			listener.enterModuleDirective(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitModuleDirective) {
			listener.exitModuleDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitModuleDirective) {
			return visitor.visitModuleDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TRANSITIVE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.STATIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_requiresModifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRequiresModifier) {
			listener.enterRequiresModifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRequiresModifier) {
			listener.exitRequiresModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRequiresModifier) {
			return visitor.visitRequiresModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	public RECORD(): TerminalNode { return this.getToken(PGTJavaParser.RECORD, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public recordHeader(): RecordHeaderContext {
		return this.getRuleContext(0, RecordHeaderContext);
	}
	public recordBody(): RecordBodyContext {
		return this.getRuleContext(0, RecordBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_recordDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRecordDeclaration) {
			listener.enterRecordDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRecordDeclaration) {
			listener.exitRecordDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRecordDeclaration) {
			return visitor.visitRecordDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordHeaderContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public recordComponentList(): RecordComponentListContext | undefined {
		return this.tryGetRuleContext(0, RecordComponentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_recordHeader; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRecordHeader) {
			listener.enterRecordHeader(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRecordHeader) {
			listener.exitRecordHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRecordHeader) {
			return visitor.visitRecordHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentListContext extends ParserRuleContext {
	public recordComponent(): RecordComponentContext[];
	public recordComponent(i: number): RecordComponentContext;
	public recordComponent(i?: number): RecordComponentContext | RecordComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordComponentContext);
		} else {
			return this.getRuleContext(i, RecordComponentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_recordComponentList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRecordComponentList) {
			listener.enterRecordComponentList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRecordComponentList) {
			listener.exitRecordComponentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRecordComponentList) {
			return visitor.visitRecordComponentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_recordComponent; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRecordComponent) {
			listener.enterRecordComponent(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRecordComponent) {
			listener.exitRecordComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRecordComponent) {
			return visitor.visitRecordComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_recordBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterRecordBody) {
			listener.enterRecordBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitRecordBody) {
			listener.exitRecordBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitRecordBody) {
			return visitor.visitRecordBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public specification(): SpecificationContext[];
	public specification(i: number): SpecificationContext;
	public specification(i?: number): SpecificationContext | SpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecificationContext);
		} else {
			return this.getRuleContext(i, SpecificationContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_block; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public localTypeDeclaration(): LocalTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorsContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VAR, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IDENTIFIER, 0); }
	public MODULE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MODULE, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OPEN, 0); }
	public REQUIRES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.REQUIRES, 0); }
	public EXPORTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EXPORTS, 0); }
	public OPENS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OPENS, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TO, 0); }
	public USES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.USES, 0); }
	public PROVIDES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PROVIDES, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.WITH, 0); }
	public TRANSITIVE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TRANSITIVE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.YIELD, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEALED, 0); }
	public PERMITS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PERMITS, 0); }
	public RECORD(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RECORD, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_identifier; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public recordDeclaration(): RecordDeclarationContext | undefined {
		return this.tryGetRuleContext(0, RecordDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_localTypeDeclaration; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLocalTypeDeclaration) {
			listener.enterLocalTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLocalTypeDeclaration) {
			listener.exitLocalTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLocalTypeDeclaration) {
			return visitor.visitLocalTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _blockLabel!: BlockContext;
	public _statementExpression!: ExpressionContext;
	public _identifierLabel!: IdentifierContext;
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COLON, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DO, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RBRACE, 0); }
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SYNCHRONIZED, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BREAK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CONTINUE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.YIELD, 0); }
	public switchExpression(): SwitchExpressionContext | undefined {
		return this.tryGetRuleContext(0, SwitchExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_statement; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(PGTJavaParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.BITOR);
		} else {
			return this.getToken(PGTJavaParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_catchType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(PGTJavaParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_resourceSpecification; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.SEMI);
		} else {
			return this.getToken(PGTJavaParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_resources; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VAR, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_resource; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public _constantExpression!: ExpressionContext;
	public _enumConstantName!: Token;
	public _varName!: IdentifierContext;
	public CASE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CASE, 0); }
	public COLON(): TerminalNode { return this.getToken(PGTJavaParser.COLON, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.IDENTIFIER, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public _forUpdate!: ExpressionListContext;
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.SEMI);
		} else {
			return this.getToken(PGTJavaParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_forControl; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_forInit; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(PGTJavaParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.VAR, 0); }
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _prefix!: Token;
	public _bop!: Token;
	public _postfix!: Token;
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public methodCall(): MethodCallContext | undefined {
		return this.tryGetRuleContext(0, MethodCallContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NEW, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RBRACK, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.BITAND);
		} else {
			return this.getToken(PGTJavaParser.BITAND, i);
		}
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MOD, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LT);
		} else {
			return this.getToken(PGTJavaParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.GT);
		} else {
			return this.getToken(PGTJavaParser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.INSTANCEOF, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NOTEQUAL, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.QUESTION, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.MOD_ASSIGN, 0); }
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public switchExpression(): SwitchExpressionContext | undefined {
		return this.tryGetRuleContext(0, SwitchExpressionContext);
	}
	public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COLONCOLON, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_expression; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_pattern; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(PGTJavaParser.ARROW, 0); }
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	public lambdaLVTIList(): LambdaLVTIListContext | undefined {
		return this.tryGetRuleContext(0, LambdaLVTIListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lambdaParameters; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_lambdaBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeTypeOrVoid(): TypeTypeOrVoidContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CLASS, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_primary; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(PGTJavaParser.SWITCH, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(PGTJavaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(PGTJavaParser.RBRACE, 0); }
	public switchLabeledRule(): SwitchLabeledRuleContext[];
	public switchLabeledRule(i: number): SwitchLabeledRuleContext;
	public switchLabeledRule(i?: number): SwitchLabeledRuleContext | SwitchLabeledRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabeledRuleContext);
		} else {
			return this.getRuleContext(i, SwitchLabeledRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_switchExpression; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpression) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabeledRuleContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CASE, 0); }
	public switchRuleOutcome(): SwitchRuleOutcomeContext {
		return this.getRuleContext(0, SwitchRuleOutcomeContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.ARROW, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.COLON, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.NULL_LITERAL, 0); }
	public guardedPattern(): GuardedPatternContext | undefined {
		return this.tryGetRuleContext(0, GuardedPatternContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_switchLabeledRule; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSwitchLabeledRule) {
			listener.enterSwitchLabeledRule(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSwitchLabeledRule) {
			listener.exitSwitchLabeledRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabeledRule) {
			return visitor.visitSwitchLabeledRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GuardedPatternContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LPAREN, 0); }
	public guardedPattern(): GuardedPatternContext | undefined {
		return this.tryGetRuleContext(0, GuardedPatternContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.RPAREN, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.AND);
		} else {
			return this.getToken(PGTJavaParser.AND, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_guardedPattern; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterGuardedPattern) {
			listener.enterGuardedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitGuardedPattern) {
			listener.exitGuardedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitGuardedPattern) {
			return visitor.visitGuardedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchRuleOutcomeContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_switchRuleOutcome; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSwitchRuleOutcome) {
			listener.enterSwitchRuleOutcome(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSwitchRuleOutcome) {
			listener.exitSwitchRuleOutcome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSwitchRuleOutcome) {
			return visitor.visitSwitchRuleOutcome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOT, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_creator; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.DOT);
		} else {
			return this.getToken(PGTJavaParser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_createdName; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_innerCreator; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterInnerCreator) {
			listener.enterInnerCreator(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitInnerCreator) {
			listener.exitInnerCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_explicitGenericInvocation; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterExplicitGenericInvocation) {
			listener.enterExplicitGenericInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitExplicitGenericInvocation) {
			listener.exitExplicitGenericInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
			listener.enterNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
			listener.exitNonWildcardTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
			return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(PGTJavaParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(PGTJavaParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeList; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.LBRACK);
		} else {
			return this.getToken(PGTJavaParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.RBRACK);
		} else {
			return this.getToken(PGTJavaParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BOOLEAN, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.LONG, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(PGTJavaParser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(PGTJavaParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.COMMA);
		} else {
			return this.getToken(PGTJavaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_superSuffix; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSuperSuffix) {
			listener.enterSuperSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSuperSuffix) {
			listener.exitSuperSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) {
			return visitor.visitSuperSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) {
			listener.enterExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) {
			listener.exitExplicitGenericInvocationSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) {
			return visitor.visitExplicitGenericInvocationSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(PGTJavaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(PGTJavaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_arguments; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationContext extends ParserRuleContext {
	public PGT_START(): TerminalNode { return this.getToken(PGTJavaParser.PGT_START, 0); }
	public PGT_END(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_END, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.EOF, 0); }
	public specificationElement(): SpecificationElementContext[];
	public specificationElement(i: number): SpecificationElementContext;
	public specificationElement(i?: number): SpecificationElementContext | SpecificationElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecificationElementContext);
		} else {
			return this.getRuleContext(i, SpecificationElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_specification; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSpecification) {
			listener.enterSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSpecification) {
			listener.exitSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSpecification) {
			return visitor.visitSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationElementContext extends ParserRuleContext {
	public PGT_TAG(): TerminalNode { return this.getToken(PGTJavaParser.PGT_TAG, 0); }
	public specificationRule(): SpecificationRuleContext | undefined {
		return this.tryGetRuleContext(0, SpecificationRuleContext);
	}
	public subspecification(): SubspecificationContext | undefined {
		return this.tryGetRuleContext(0, SubspecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_specificationElement; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSpecificationElement) {
			listener.enterSpecificationElement(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSpecificationElement) {
			listener.exitSpecificationElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSpecificationElement) {
			return visitor.visitSpecificationElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspecificationContext extends ParserRuleContext {
	public PGT_SUB(): TerminalNode { return this.getToken(PGTJavaParser.PGT_SUB, 0); }
	public subspecificationDescription(): SubspecificationDescriptionContext {
		return this.getRuleContext(0, SubspecificationDescriptionContext);
	}
	public subspecificationBody(): SubspecificationBodyContext {
		return this.getRuleContext(0, SubspecificationBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_subspecification; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSubspecification) {
			listener.enterSubspecification(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSubspecification) {
			listener.exitSubspecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSubspecification) {
			return visitor.visitSubspecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspecificationDescriptionContext extends ParserRuleContext {
	public freeformLine(): FreeformLineContext {
		return this.getRuleContext(0, FreeformLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_subspecificationDescription; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSubspecificationDescription) {
			listener.enterSubspecificationDescription(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSubspecificationDescription) {
			listener.exitSubspecificationDescription(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSubspecificationDescription) {
			return visitor.visitSubspecificationDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspecificationBodyContext extends ParserRuleContext {
	public PGT_BRACE_OPEN(): TerminalNode { return this.getToken(PGTJavaParser.PGT_BRACE_OPEN, 0); }
	public PGT_BRACE_CLOSE(): TerminalNode { return this.getToken(PGTJavaParser.PGT_BRACE_CLOSE, 0); }
	public subspecificationElement(): SubspecificationElementContext[];
	public subspecificationElement(i: number): SubspecificationElementContext;
	public subspecificationElement(i?: number): SubspecificationElementContext | SubspecificationElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubspecificationElementContext);
		} else {
			return this.getRuleContext(i, SubspecificationElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_subspecificationBody; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSubspecificationBody) {
			listener.enterSubspecificationBody(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSubspecificationBody) {
			listener.exitSubspecificationBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSubspecificationBody) {
			return visitor.visitSubspecificationBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspecificationElementContext extends ParserRuleContext {
	public PGT_TAG(): TerminalNode { return this.getToken(PGTJavaParser.PGT_TAG, 0); }
	public specificationRule(): SpecificationRuleContext | undefined {
		return this.tryGetRuleContext(0, SpecificationRuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_subspecificationElement; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSubspecificationElement) {
			listener.enterSubspecificationElement(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSubspecificationElement) {
			listener.exitSubspecificationElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSubspecificationElement) {
			return visitor.visitSubspecificationElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationRuleContext extends ParserRuleContext {
	public specificationRuleType(): SpecificationRuleTypeContext {
		return this.getRuleContext(0, SpecificationRuleTypeContext);
	}
	public specificationRuleContent(): SpecificationRuleContentContext {
		return this.getRuleContext(0, SpecificationRuleContentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_specificationRule; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSpecificationRule) {
			listener.enterSpecificationRule(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSpecificationRule) {
			listener.exitSpecificationRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSpecificationRule) {
			return visitor.visitSpecificationRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationRuleTypeContext extends ParserRuleContext {
	public PGT_DESC(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_DESC, 0); }
	public PGT_INV(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_INV, 0); }
	public PGT_REPRESENTS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_REPRESENTS, 0); }
	public PGT_REQUIRES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_REQUIRES, 0); }
	public PGT_ENSURES(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_ENSURES, 0); }
	public PGT_SIGNALS(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_SIGNALS, 0); }
	public PGT_ASSIGNABLE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_ASSIGNABLE, 0); }
	public PGT_PURE(): TerminalNode | undefined { return this.tryGetToken(PGTJavaParser.PGT_PURE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_specificationRuleType; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSpecificationRuleType) {
			listener.enterSpecificationRuleType(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSpecificationRuleType) {
			listener.exitSpecificationRuleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSpecificationRuleType) {
			return visitor.visitSpecificationRuleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationRuleContentContext extends ParserRuleContext {
	public freeformLine(): FreeformLineContext[];
	public freeformLine(i: number): FreeformLineContext;
	public freeformLine(i?: number): FreeformLineContext | FreeformLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FreeformLineContext);
		} else {
			return this.getRuleContext(i, FreeformLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_specificationRuleContent; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterSpecificationRuleContent) {
			listener.enterSpecificationRuleContent(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitSpecificationRuleContent) {
			listener.exitSpecificationRuleContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitSpecificationRuleContent) {
			return visitor.visitSpecificationRuleContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FreeformLineContext extends ParserRuleContext {
	public _leadingWhitespace!: Token;
	public _content!: FreeformLineContentContext;
	public _trailingWhitespace!: Token;
	public freeformLineContent(): FreeformLineContentContext {
		return this.getRuleContext(0, FreeformLineContentContext);
	}
	public PGT_FREEFORM_SPACE(): TerminalNode[];
	public PGT_FREEFORM_SPACE(i: number): TerminalNode;
	public PGT_FREEFORM_SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.PGT_FREEFORM_SPACE);
		} else {
			return this.getToken(PGTJavaParser.PGT_FREEFORM_SPACE, i);
		}
	}
	public PGT_FREEFORM_NEWLINE(): TerminalNode[];
	public PGT_FREEFORM_NEWLINE(i: number): TerminalNode;
	public PGT_FREEFORM_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.PGT_FREEFORM_NEWLINE);
		} else {
			return this.getToken(PGTJavaParser.PGT_FREEFORM_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_freeformLine; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFreeformLine) {
			listener.enterFreeformLine(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFreeformLine) {
			listener.exitFreeformLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFreeformLine) {
			return visitor.visitFreeformLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FreeformLineContentContext extends ParserRuleContext {
	public PGT_FREEFORM_TEXT(): TerminalNode[];
	public PGT_FREEFORM_TEXT(i: number): TerminalNode;
	public PGT_FREEFORM_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.PGT_FREEFORM_TEXT);
		} else {
			return this.getToken(PGTJavaParser.PGT_FREEFORM_TEXT, i);
		}
	}
	public PGT_FREEFORM_STAR(): TerminalNode[];
	public PGT_FREEFORM_STAR(i: number): TerminalNode;
	public PGT_FREEFORM_STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.PGT_FREEFORM_STAR);
		} else {
			return this.getToken(PGTJavaParser.PGT_FREEFORM_STAR, i);
		}
	}
	public PGT_FREEFORM_SPACE(): TerminalNode[];
	public PGT_FREEFORM_SPACE(i: number): TerminalNode;
	public PGT_FREEFORM_SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PGTJavaParser.PGT_FREEFORM_SPACE);
		} else {
			return this.getToken(PGTJavaParser.PGT_FREEFORM_SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PGTJavaParser.RULE_freeformLineContent; }
	// @Override
	public enterRule(listener: PGTJavaParserListener): void {
		if (listener.enterFreeformLineContent) {
			listener.enterFreeformLineContent(this);
		}
	}
	// @Override
	public exitRule(listener: PGTJavaParserListener): void {
		if (listener.exitFreeformLineContent) {
			listener.exitFreeformLineContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PGTJavaParserVisitor<Result>): Result {
		if (visitor.visitFreeformLineContent) {
			return visitor.visitFreeformLineContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


