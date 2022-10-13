lexer grammar PGTLexer;

PGT_START: '/**' Star* -> pushMode(PGT_MODE);

mode PGT_MODE;

PGT_SKIP_SPACE: Space+ -> skip;
PGT_SKIP_NEWLINE: Newline Space* Star* -> skip;

PGT_TAG: '@';

PGT_DESC:        'desc'          -> pushMode(PGT_FREEFORM_MODE);
PGT_INV:         'inv'           -> pushMode(PGT_FREEFORM_MODE);
PGT_REPRESENTS:  'represents'    -> pushMode(PGT_FREEFORM_MODE);
PGT_SUB:         'sub'           -> pushMode(PGT_FREEFORM_MODE);
PGT_REQUIRES:    'requires'      -> pushMode(PGT_FREEFORM_MODE);
PGT_ENSURES:     'ensures'       -> pushMode(PGT_FREEFORM_MODE);
PGT_SIGNALS:     'signals'       -> pushMode(PGT_FREEFORM_MODE);
PGT_ASSIGNABLE: 'assignable'   -> pushMode(PGT_FREEFORM_MODE);
PGT_PURE:        'pure'          -> pushMode(PGT_FREEFORM_MODE);

PGT_BRACE_OPEN:  '{';
PGT_BRACE_CLOSE: '}';

PGT_END: (Newline Space* Star* | Star*) '*/' -> popMode;

mode PGT_FREEFORM_MODE;

PGT_FREEFORM_TEXT: ~[\r\n\t @{}*]+;

PGT_FREEFORM_SPACE: Space+;
PGT_FREEFORM_NEWLINE: Space* Newline Space* Star* Space*;

PGT_FREEFORM_STAR: Star;

PGT_FREEFORM_SWITCH_TAG:         '@' -> popMode, type(PGT_TAG);
PGT_FREEFORM_SWITCH_BRACE_OPEN:  '{' -> popMode, type(PGT_BRACE_OPEN);
PGT_FREEFORM_SWITCH_BRACE_CLOSE: '}' -> popMode, type(PGT_BRACE_CLOSE);

PGT_FREEFORM_END: (Space* Newline Space* Star* Space* | Star*) '*/' -> popMode, popMode, type(PGT_END);

fragment Space: [ \t];
fragment Newline: '\r'? '\n';
fragment Whitespace: Space | Newline;

fragment Star: '*';
