parser grammar PGTParser;

options { tokenVocab=PGTLexer; }

specification
    :   PGT_START
        specificationElement*
        (PGT_END | EOF)
    ;

specificationElement: PGT_TAG (specificationRule | subspecification);

subspecification: PGT_SUB subspecificationDescription subspecificationBody;

subspecificationDescription: freeformLine;

subspecificationBody
    :   PGT_BRACE_OPEN
        subspecificationElement*
        PGT_BRACE_CLOSE
    ;

subspecificationElement: PGT_TAG (specificationRule /* | no alternatives yet */);

specificationRule: specificationRuleType specificationRuleContent;

specificationRuleType
    :   PGT_DESC
    |   PGT_INV
    |   PGT_REPRESENTS
    |   PGT_REQUIRES
    |   PGT_ENSURES
    |   PGT_SIGNALS
    |   PGT_ASSIGNABLE
    |   PGT_PURE
    ;

specificationRuleContent: freeformLine*;

freeformLine
    :   leadingWhitespace=(PGT_FREEFORM_SPACE | PGT_FREEFORM_NEWLINE)?
        content=freeformLineContent
        trailingWhitespace=(PGT_FREEFORM_SPACE | PGT_FREEFORM_NEWLINE)?
    ;

freeformLineContent
    :   (PGT_FREEFORM_TEXT | PGT_FREEFORM_STAR)
        (   (PGT_FREEFORM_TEXT | PGT_FREEFORM_STAR | PGT_FREEFORM_SPACE)* 
            (PGT_FREEFORM_TEXT | PGT_FREEFORM_STAR)
        )?
    ;