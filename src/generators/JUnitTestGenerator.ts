import { Class, Method, PGTDocument, Specification, Subspecification } from "../models/PGTDocument";
import { pascalCase, capitalizeFirst, indent, alphanumeric } from "../utility/Text";
import TestGenerator from "./TestGenerator";

import { homedir } from "os";

import * as fs from "fs";
import * as vscode from "vscode";

interface JUnitTestGeneratorConfig {

    outputDirectory: string;
    usePackageDeclaration: boolean;
    confirmOverwrite: boolean;
    imports: string[];
    staticImports: string[];
    insertSpaces: boolean;
    tabSize: number;

}

export default class JUnitTestGenerator implements TestGenerator {

    private static _instance?: JUnitTestGenerator;

    private static readonly TEST_DOCUMENT_TEMPLATE = ($package: string, imports: string, staticImports: string, $class: string) => {
return `${$package}

${imports}
${staticImports}
${$class}
`;
    };

    private static readonly TEST_CLASS_TEMPLATE = (className: string, todoComment: string, classBody: string) => {
return `public class ${className} {
${indent(todoComment, 1, JUnitTestGenerator.config.insertSpaces, JUnitTestGenerator.config.tabSize)}${indent(classBody, 1, JUnitTestGenerator.config.insertSpaces, JUnitTestGenerator.config.tabSize)}
}`;
    };

    private static readonly TEST_METHOD_TEMPLATE = (methodName: string, todoComment: string): string => {
return `@Test
public void ${methodName}() {
${indent(todoComment, 1, JUnitTestGenerator.config.insertSpaces, JUnitTestGenerator.config.tabSize)}
}`;
    };

    private static config: JUnitTestGeneratorConfig;

    private overloadCounter: Map<string, number> = new Map();

    public static get Instance() {
        return JUnitTestGenerator._instance ?? (JUnitTestGenerator._instance = new JUnitTestGenerator());
    }

    private constructor() {
        // TODO: Move Config to own class
        if (JUnitTestGenerator._instance === undefined) {
            JUnitTestGenerator.loadConfig();
            vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
                if (event.affectsConfiguration("PGT.testGenerator.jUnit")) {
                    JUnitTestGenerator.loadConfig();
                }
            }, this);
        }
    }

    private static loadConfig(): void {
        // TODO: Move Config to own class
        const config = vscode.workspace.getConfiguration("PGT.testGenerator.jUnit");

        JUnitTestGenerator.config = {
            outputDirectory: config.get("outputDirectory", "./src/test/java"),
            usePackageDeclaration: config.get("usePackageDeclaration", true),
            confirmOverwrite: config.get("confirmOverwrite", true),
            imports: config.get("imports", []),
            staticImports: config.get("staticImports", []),
            insertSpaces: config.get("insertSpaces", true),
            tabSize: config.get("tabSize", 4)
        };
    }

    public generateTestsFor(document: PGTDocument, useExternal: boolean = false) {
        try {
            this.tryGenerateTestsFor(document, useExternal);
        } catch (e) {
            const error = (e as { message?: string }).message ?? JSON.stringify(e);
            vscode.window.showErrorMessage(
                "Failed to generate tests!",
                { detail: error, modal: true }
            );
        }
    }

    public tryGenerateTestsFor(document: PGTDocument, useExternal: boolean = false): void {
        if (!document.isValid()) {
            throw Error('Document is invalid! Please check the problems page for errors!');
        } else if (document.$class === undefined) {
            throw Error('Can\'t generate tests for this document as it doesn\'t contain a class definition!');
        } else if (document.$package === undefined) {
            throw Error('Can\'t generate tests for this document as it doesn\'t contain a package declaration!');
        }

        // Generate Test Code
        const testCode = this.generateTestCode(document, useExternal);

        // Determine the output folder and create it if it doesn't exist
        const outputFolder = this.determineOutputFolder(document);
        if (!fs.existsSync(outputFolder.fsPath)) {
            fs.mkdirSync(outputFolder.fsPath, {recursive: true});
        }

        // Write Generated Test Code to file and ask to overwrite if file already exists
        const fileName = `${document.$class?.name}${useExternal ? "External" : "Internal"}Test.java`;
        const outputFile= vscode.Uri.joinPath(outputFolder, fileName);

        if (fs.existsSync(outputFile.fsPath) && JUnitTestGenerator.config.confirmOverwrite) {
            vscode.window.showWarningMessage(
                `Overwrite file '${fileName}'?`,
                { detail: `File '${outputFile.fsPath}\' already exists!\n\nDo you want to replace it?`, modal: true },
                "Yes", "No"
            ).then((value) => {
                if (value === "Yes") {
                    fs.writeFileSync(outputFile.fsPath, testCode);
                    vscode.window.showInformationMessage(`Successfully generated test code to '${outputFile.fsPath}'.`);
                }
            });
        } else {
            fs.writeFileSync(outputFile.fsPath, testCode);
            vscode.window.showInformationMessage(`Successfully generated test code to '${outputFile.fsPath}'.`);
        }
    }

    private determineOutputFolder(document: PGTDocument): vscode.Uri {
        let outputFolder = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri : vscode.Uri.file(homedir());
        outputFolder = vscode.Uri.joinPath(outputFolder, JUnitTestGenerator.config.outputDirectory);

        if (JUnitTestGenerator.config.usePackageDeclaration) {
            const $package = document.$package?.replace(/\./g, "/") ?? "";
            outputFolder = vscode.Uri.joinPath(outputFolder, $package);
        }

        return outputFolder;
    }

    private generateTestCode(document: PGTDocument, useExternal: boolean = false): string {
        const $package = this.generatePackage(document);

        const imports = this.generateImports(document);
        const staticImports = this.generateStaticImports();

        const testClass = this.generateTestClass(document.$class!, useExternal);

        return JUnitTestGenerator.TEST_DOCUMENT_TEMPLATE(
            $package, imports, staticImports, testClass
        );
    }

    private generatePackage(document: PGTDocument): string {
        return `package ${document.$package};`;
    }

    private generateImports(document: PGTDocument): string {
        let imports = "";
        for (let $import of JUnitTestGenerator.config.imports) {
            imports += `import ${$import};\n`;
        }

        return imports;
    }

    private generateStaticImports(): string {
        let staticImports = "";
        for (let staticImport of JUnitTestGenerator.config.staticImports) {
            staticImports += `import static ${staticImport};\n`;
        }

        return staticImports;
    }

    private generateTestClass($class: Class, useExternal: boolean): string {
        const testClassName = `${$class.name}${useExternal ? "External" : "Internal"}Test`;

        const specification = useExternal ? $class.externalSpecification : $class.internalSpecification;

        const todoComment = specification ? this.generateTodoComment(specification) : "";

        
        let testClassBody = "";
        this.resetOverloadCounter();
        for (let identifier in $class.methods) {
            testClassBody += this.generateTestMethods($class.methods[identifier], useExternal);
            this.incrementOverloadCount($class.methods[identifier].name!);
        }

        return JUnitTestGenerator.TEST_CLASS_TEMPLATE(
            testClassName, todoComment, testClassBody
        );
    }

    private generateTestMethods(method: Method, useExternal: boolean): string {
        let testMethods = "";

        const specification = useExternal ? method.externalSpecification : method.internalSpecification;

        if (specification) {
            testMethods = testMethods.concat("\n", this.generateTestMethod(method, specification), "\n");

            for (let identifier in specification.subspecifications) {
                testMethods = testMethods.concat(
                    "\n",
                    this.generateTestMethod(
                        method, specification.subspecifications[identifier]
                    ),
                    "\n"
                );
            }
        }

        return testMethods;
    }

    private generateTestMethod(method: Method, specification: Specification | Subspecification): string {
        const testMethodName = this.generateTestMethodName(method, specification);
        const todoComment = this.generateTodoComment(specification);

        return JUnitTestGenerator.TEST_METHOD_TEMPLATE(
            testMethodName, todoComment
        );
    }

    private generateTestMethodName(method: Method, specification: Specification | Subspecification): string {
        const methodName = method.isConstructor ? "Constructor" : capitalizeFirst(method.name!);
        const overloadAffix = this.getOverloadCount(method.name!) > 0 ? `Overload${this.getOverloadCount(method.name!)}` : "";
        const description = specification instanceof Subspecification ? `${pascalCase(alphanumeric(specification.description!))}` : "";

        const testMethodName = `test${methodName}${overloadAffix}${description}`;
        return testMethodName;
    }

    private generateTodoComment(specification: Specification | Subspecification) {
        let todoComment = "// TODO: Implement tests according to specification.\n";

        for (let rule of specification.rules) {
            todoComment += `// @${rule.type} ${rule.content.join(' ')}\n`;
        }

        return todoComment;
    }

    private getOverloadCount(methodName: string): number {
        return this.overloadCounter.get(methodName) ?? 0;
    }

    private incrementOverloadCount(methodName: string): void {
        this.overloadCounter.set(methodName, this.getOverloadCount(methodName) + 1);
    }

    private resetOverloadCounter(): void {
        this.overloadCounter.clear();
    }

}

export const jUnitTestGenerator = JUnitTestGenerator.Instance;
