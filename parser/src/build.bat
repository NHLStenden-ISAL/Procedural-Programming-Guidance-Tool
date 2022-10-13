@echo OFF

echo Generating lexer code...
java org.antlr.v4.Tool .\PGTJavaLexer.g4

echo Generating parser code...
java org.antlr.v4.Tool .\PGTJavaParser.g4

echo Compiling code...
javac --release 8 PGTJava*.java

echo Done!