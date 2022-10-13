"use strict";

import { Elements } from "./Elements.js";
import { Problems } from "./Problems.js";
import { Navigation } from "./Navigation.js";
import { Overview } from "./Overview.js";

export class Webview {
    static model = { errors: [], warnings: [], information: [], hints: [], $package: undefined, $class: undefined };
    static vscode;

    static initialize() {
        // this.model = ;
        Webview.vscode = acquireVsCodeApi();

        // Handle the message inside the webview
        window.addEventListener('message', event => {
            const message = event.data; // The JSON data our extension sent
            this.model = message.model;
            
            switch (window.page) {
                case "overview":
                case "problems":
                case "elements":
                    Overview.loadView(this.model);
                    Problems.loadView(this.model);
                    Elements.loadView(this.model);
                    break;
                default:
                    break;
            }
        });

        //if a button is clicked in navigation the html is changed to the corresponding page
        // document.getElementById('navigation').addEventListener('click', function (event){
        //     Webview.pageChange(event.target.id);
        // });
        
        Navigation.setButtons();

        Webview.sendRequest("requestModel");
        
        // Webview.pageChange('overview');
        Overview.loadHtml(this.model);
        Problems.loadHtml(this.model);
    }

    static pageChange(page) {
        switch (page) {
            case 'overview':
                window.page = 'overview';
                Overview.loadHtml(model);
                break;
            case 'problems':
                window.page = 'problems';
                Problems.loadHtml(model);
                break;
            // case 'elements':
            //     window.page = 'elements';
            //     Elements.loadHtml(model);
            //     break;
            default:
                break;
        }
    }

    static sendRequest(commandString){
        Webview.vscode.postMessage({
            command: commandString
        });
        console.log("message is sent");
    }
}

//start webview functionalities
Webview.initialize();