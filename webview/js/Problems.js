"use strict";

import { Elements } from "./Elements.js";
import { Overview } from "./Overview.js";

export class Problems {

    static loadHtml(model){
        $("#problemsDiv").load(jsPath + "/../html/problems.html", function() {
            Elements.loadView(model);
            Problems.loadView(model);
            Overview.loadView(model);
        });
    }
    
    //model is given and gets loaded out into html
    static loadView(model){
        $('#errors').empty();

        var problemsArray = Problems.createArray(model);

        //go through all properties of the model with these names
        const problems = ['Errors', 'Warnings', 'Information', 'Hints'];
        for (let i = 0; i < problems.length; i++) {
            if(problemsArray[i].length !== 0){
                Problems.loadSubCollection($("#errors"), problemsArray[i], problems[i]);
            }
        }
        
    }

    //creates the problem div and loads the problem out
    static addProblem(div, message){
        var errorDiv = Overview.createDiv("error", message);
        div.append(errorDiv);
    }

    static createArray(model){
        var collection = [];
        for (const property of Object.entries(model)) {
            var sub = [];
            //go through all diagnostic props
            switch (property[0].toString()) {
                case 'errors':
                case 'warnings':
                case 'information':
                case 'hints':
                    for (const [key, entry] of Object.entries(property[1])) {
                        var range = entry.range[0];
        
                        sub.push([range, entry.message]);
                    }
                    collection.push(sub);
                    break;
                default:
                    break;
            }
        }
        return collection;
    }

    static loadSubCollection(div, sub, category){
        //add a header element
        var categoryName = document.createElement('h3');
        categoryName.textContent = category;
        div.append(categoryName);

        //put messages inside div to color them
        var categoryDiv = Overview.createDiv(category);

        for(const entry of Object.entries(sub)){
            var line = entry[1][0].line + 1;
            var col = entry[1][0].character + 1;
            var string = entry[1][1] +" [Ln "+ line +", Col "+ col +"]";

            this.addProblem(categoryDiv, string);
        }
        div.append(categoryDiv);
    }

}
