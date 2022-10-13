import assert = require("assert");
import * as vscode from "vscode";

export default abstract class WebviewController implements vscode.Disposable {

    protected panel: vscode.WebviewPanel | undefined;
    protected readonly disposables: vscode.Disposable[] = [];

    constructor(viewType: string, title: string, localResourceRoots: vscode.Uri[], onPanelDidDispose: (e: void) => any) {
        this.panel = vscode.window.createWebviewPanel(
            viewType, title,
            {
                viewColumn: vscode.ViewColumn.Beside,
                preserveFocus: true
            },
            {
                enableScripts: true,
                localResourceRoots: localResourceRoots
            }
        );
        
        this.panel.webview.onDidReceiveMessage(this.handleMessageFromWebview, this, this.disposables);
        this.panel.onDidDispose(() => { onPanelDidDispose(); this.dispose(); }, this, this.disposables);
    }

    public isOpen() {
        return this.panel !== undefined;
    }

    public isActive(): boolean {
        assert(this.isOpen());
        return this.panel!.active;
    }

    public isVisible(): boolean {
        assert(this.isOpen());
        return this.panel!.visible;
    }

    public reveal(viewColumn: vscode.ViewColumn = vscode.ViewColumn.Beside, preserveFocus: boolean = true): void {
        assert(this.isOpen());
        this.panel!.reveal(viewColumn, preserveFocus);
    }

    public dispose() {
        if (this.isOpen() === false) return;

        this.panel?.dispose();

        for (let disposable of this.disposables) {
            disposable.dispose();
        }

        this.panel = undefined;
    }

    protected sendMessageToWebview(message: any): Thenable<boolean> | undefined {
        assert(this.isOpen());
        return this.panel?.webview.postMessage(message);
    }

    protected abstract handleMessageFromWebview(message: any): any;

}