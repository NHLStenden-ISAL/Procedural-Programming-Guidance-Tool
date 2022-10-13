// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import AnnotationViewerController from './controllers/AnnotationViewerController';

var annotationViewer: AnnotationViewerController | undefined = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let openWebviewCommmand = vscode.commands.registerCommand('procedural-guidance-tool.annotationviewer.open', () => {
		// If the Webview is already open, reveal it in the editor.
		if (annotationViewer) {
			annotationViewer.reveal();
		}
		else { // Else, create a new Webview
			annotationViewer = new AnnotationViewerController(context, () => {
				annotationViewer = undefined;
			});
		}
	});

	context.subscriptions.push(openWebviewCommmand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
