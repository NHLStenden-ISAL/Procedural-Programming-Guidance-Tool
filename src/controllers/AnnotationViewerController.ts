import * as path from "path";
import * as vscode from "vscode";
import { FileEditor } from "../editor/FileEditor";
import { jUnitTestGenerator } from "../generators/JUnitTestGenerator";
import { generateTestModel, PGTDocument } from "../models/PGTDocument";
import { pgtDocumentCache } from "../parser/PGTDocuments";
import debounce from "../utility/Debounce";
import WebviewController from "./WebviewController";

export default class AnnotationViewerController extends WebviewController {

    private static readonly PANEL_VIEWTYPE = "annotationViewer";
    private static readonly PANEL_TITLE = "Annotation Viewer";

    private readonly context: vscode.ExtensionContext;
    private latestEditor: vscode.TextEditor | undefined;

    constructor(context: vscode.ExtensionContext, onPanelDidDispose: (e: void) => any) {
        super(
            AnnotationViewerController.PANEL_VIEWTYPE,
            AnnotationViewerController.PANEL_TITLE,
            [
                vscode.Uri.file(path.join(context.extensionPath, 'webview', 'js')), 
                vscode.Uri.file(path.join(context.extensionPath, 'webview', 'html')),
                vscode.Uri.file(path.join(context.extensionPath, 'webview', 'css')),
            ],
            onPanelDidDispose
        );
        
        this.context = context;

        this.setWebviewContent();

        vscode.workspace.onDidChangeTextDocument(this.handleTextDocumentChange, this, this.disposables);
        vscode.window.onDidChangeActiveTextEditor(this.handleActiveEditorChange, this, this.disposables);
    }

    private setWebviewContent() {
        //add authorised paths for the javascript and css files
        const jsPath = this.panel!.webview.asWebviewUri(vscode.Uri.file(
            path.join(this.context.extensionPath, 'webview', 'js')
        ));
        const cssPath = this.panel!.webview.asWebviewUri(vscode.Uri.file(
            path.join(this.context.extensionPath, 'webview', 'css')
        ));

        //get instance of latest editor version
        this.latestEditor = vscode.window.activeTextEditor;

        const document = vscode.window.activeTextEditor?.document;
        let model = document ? pgtDocumentCache.getPGTDocument(document!) : PGTDocument.Empty;

        this.panel!.webview.html =
        `<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				
				<link rel="stylesheet" href="${cssPath}/bootstrap/css/bootstrap.min.css">
				<link rel="stylesheet" href="${cssPath}/style.css">

				<script src="${jsPath}/jquery-3.6.0.min.js"></script>
				<script src="${cssPath}/bootstrap/js/bootstrap.min.js"></script>
				
				<title>QPED webview</title>
			</head>
			<body>
				<script type="module">
					window.jsPath = "${jsPath}";
					window.page = 'overview';
				</script>
				<div class="container">
					<div class="col-xs-1-12">
						<div class="row">
							<div id="navigation">
								<button id="overview" class="btnVS" type="button">Overview</button>
								<button id="problems" class="btnVS" type="button">Problems</button>
								<!-- <button id="elements" class="btnVS" type="button">Elements</button> -->
							</div>
						</div>
						<div class="row">
							<div id="base">
                                <div id="overviewDiv">
                                </div>
                                <div id="problemsDiv" style="display: none;">
                                </div>
                            </div>
						</div>
					</div>
				</div>
				
				<script type="module" src="${jsPath}/Webview.js"></script>
			</body>
		</html>`;
    }

    private handleTextDocumentChange(event: vscode.TextDocumentChangeEvent) {
        this.sendModelUpdate();
    }

    private handleActiveEditorChange(newEditor: vscode.TextEditor | undefined) {
        if (newEditor !== undefined) {
            this.latestEditor = newEditor;
            this.sendModelUpdate();
        }
    }

    protected override handleMessageFromWebview(message: any) {
        if (this.latestEditor !== undefined) {
            switch (message.command) {
                case "Generate external tests":
                case "Generate internal tests":
                    const document = (pgtDocumentCache.getPGTDocument(this.latestEditor.document) as PGTDocument);
                    const useExternal = message.useExternal;
                    jUnitTestGenerator.generateTestsFor(document, useExternal);
                    break;
                case "requestModel":
                    this.sendModelUpdate();
                    break;
                default:
                    FileEditor.Insert(this.latestEditor, message.command);
                    break;
            }
        }
    }

    private sendModelUpdate = debounce(() => {
        const document = this.latestEditor?.document;
        const model = document ? pgtDocumentCache.getPGTDocument(document) : PGTDocument.Empty;
        this.sendMessageToWebview({ type: "updateModel", model: model });
    }, 250);

}
