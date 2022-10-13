"use strict";

import { Overview } from "./Overview.js";
import { Webview } from "./Webview.js";

export class Elements {
    static buttons = ['Annotation setup', 'Generate external tests', 'Generate internal tests'];

    static loadHtml(model){
        $("#base").load(jsPath + "/../html/problems.html", function() {
            Elements.loadView(model);
        });
    }
    
    //model is given and gets loaded out into html
    static loadView(model){
        $('#snippets').empty();

        var div = Overview.createDiv('btnDiv');
        Elements.buttons.forEach(command => {
            if (!Elements.buttonLoadCheck(command, model)) {
                if(command === 'Generate external tests'){
                    var button = Elements.createTestButton(command, command, true);

                }
                else if (command === 'Generate internal tests') {
                    var button = Elements.createTestButton(command, command);
                    
                }
                else{
                    var button = Elements.createButton(command, command);
                }

                div.append(button);
            }
        });
        document.getElementById('snippets').append(div);
    }

    //div in which the button is appended. and maybe id of what command the button sends
    static createButton(buttonText, command){
        var button = Overview.createButton(buttonText);
        button.id = command;
        button.onclick = function () {
            Elements.sendMessage(command);
        };

        return button;
    }

    //div in which the button is appended. and maybe id of what command the button sends
    static createTestButton(buttonText, command, bool){
        var button = Overview.createButton(buttonText);
        button.id = command;
        button.onclick = function () {
            Elements.sendTestMessage(command, bool);
        };

        return button;
    }

    static sendMessage(commandString){
        Webview.vscode.postMessage({
            command: commandString
        });
        console.log("message is sent");
    }

    static sendTestMessage(command, bool = false){
        Webview.vscode.postMessage({
            command: command,
            useExternal: bool
        });
    }

    static buttonLoadCheck(command, model){
        switch (command) {
            case 'Annotation setup':
                return Elements.check4Annotations(model);
                break;
        }
    }

    //if false is returned then a annotation is missing if true is returned everything is in order
    static check4ExternalAnnotations($class){
        if ($class === undefined) {
            return false;
        }
        else{
            if($class.externalSpecification === undefined){
                return false;
            }
            else {
                for (const [key, value] of Object.entries($class.methods)) {
                    if (value.externalSpecification === undefined) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    //if false is returned then a annotation is missing if true is returned everything is in order
    static check4InternalAnnotations($class){
        if ($class === undefined) {
            return false;
        }
        else{
            if($class.internalSpecification === undefined){
                return false;
            }
            else {
                for (const [key, value] of Object.entries($class.methods)) {
                    if (value.internalSpecification === undefined) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    //if false is returned then a annotation is missing if true is returned everything is in order
    static check4Annotations(model){
        if(!Elements.check4ExternalAnnotations(model.$class) || !Elements.check4InternalAnnotations(model.$class)){
            return false;
        }
        return true;
    }

}
