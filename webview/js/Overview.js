"use strict";

import { Webview } from "./Webview.js";

export class Overview {
    static externalCollapsed;
    static internalCollapsed;

    static loadHtml(model) {
        $("#overviewDiv").load(jsPath + "/../html/overview.html", function() {
            Overview.loadView(model);
        });

        Webview.externalCollapsed = false;
        Webview.internalCollapsed = false;
    }

    static loadView(model) {
        $('#externalBtnCollapse').empty();
        $('#internalBtnCollapse').empty();

        if (model.$class) {
            //initiates the loading of the view from the model
            Overview.loadExternal($("#externalBtnCollapse"), model.$class);
            Overview.loadInternal($("#internalBtnCollapse"), model.$class);
        }

        var buttons = ['externalBtn', 'internalBtn'];
    
        buttons.forEach(button => {
            $("#"+button).on( "click", function() {
                // $("#navigation").children().removeClass();
                
                switch (button) {
                    case "externalBtn":
                        Webview.externalCollapsed = (Webview.externalCollapsed === false) ? true : false;
                        break;
                    case "internalBtn":
                        Webview.internalCollapsed = (Webview.internalCollapsed === false) ? true : false;
                        break;
                    default:
                        break;
                }
            });
            
        });

        //add listeners for changing the height of the collapse divs
    }

    static loadExternal(div, $class) {
        var classDiv = Overview.createDiv("class");

        if($class.externalSpecification !== undefined){
            //add rule and subspecifications of the class
            this.addRule(classDiv, $class.externalSpecification.rules);
            this.addSub(classDiv, $class.externalSpecification.subspecifications);

            //add class name after annotations
            var classNameDiv = Overview.createDiv("className", $class.identifier);

            classNameDiv = Overview.addBold('Class: ', classNameDiv);

            classDiv.append(classNameDiv);
        }

        //create method div
        var methodDiv = Overview.createMethodDiv($class);

        //check if a button is needed
        if(classDiv.childElementCount !== 0 || methodDiv.childElementCount !== 0){
            Overview.createCollapseButton(document.getElementById("externalBtnCollapse"),
            document.getElementById('externalButton'));
            Overview.addCollapseListener(document.getElementById('externalBtn'), document.getElementById('internalBtn'));
        }

        //add everything to the classDiv
        classDiv.append(methodDiv);
        div.append(classDiv);
    }

    static loadInternal(div, $class) {
        var classDiv = Overview.createDiv("class");

        if($class.internalSpecification !== undefined) {
            //add rule and subspecifications of the class
            this.addRule(classDiv, $class.internalSpecification.rules);
            this.addSub(classDiv, $class.internalSpecification.subspecifications);

            //add class name
            var classNameDiv = Overview.createDiv("className", $class.identifier);

            classNameDiv = Overview.addBold('Class: ', classNameDiv);

            classDiv.append(classNameDiv);
        }

        //add attributes
        var attributeDiv = Overview.createAttributeDiv($class);

        //create method div
        var methodDiv = Overview.createMethodDiv($class, true);
        
        //check if a button is needed
        if(classDiv.childElementCount !== 0 || attributeDiv.childElementCount !== 0 || methodDiv.childElementCount !== 0){
            Overview.createCollapseButton(document.getElementById("internalBtnCollapse"),
                                            document.getElementById('internalButton'), true);
            Overview.addCollapseListener(document.getElementById('internalBtn'), document.getElementById('externalBtn'));
        }

        //add everything to the classDiv
        classDiv.append(attributeDiv);
        classDiv.append(methodDiv);
        div.append(classDiv);
    }

    static createDiv(name = "", textcontent = "") {
        var newDiv = document.createElement("div");
        newDiv.className = name;
        newDiv.textContent = textcontent;
        
        return newDiv;
    }

    static createSpan(name = "", textcontent = "") {
        var newDiv = document.createElement("span");
        newDiv.className = name;
        newDiv.textContent = textcontent;
        
        return newDiv;
    }

    static addBold(textcontent, div){
        div.innerHTML = "<span class='bold'>"+textcontent+"</span>"+ div.innerHTML;

        return div;
    }

    static addMethod(methodDiv, rules, subspecifications, key) {
        this.addRule(methodDiv, rules);
        this.addSub(methodDiv, subspecifications);

        //add method name after annotations
        var methodNameDiv = Overview.createDiv("methodName", key);

        methodNameDiv = Overview.addBold('Method: ', methodNameDiv);

        methodDiv.append(methodNameDiv);
    }

    static addAttribute(attributeDiv, rules, key){
        this.addRule(attributeDiv, rules);

        //add method name after annotations
        var attributeNameDiv = Overview.createDiv("attributeName", key);

        attributeNameDiv = Overview.addBold('Attribute: ', attributeNameDiv);

        attributeDiv.append(attributeNameDiv);
    }

    static addSub(div, subSpecification) {
        if (subSpecification) {
            for (const [key, value] of Object.entries(subSpecification)) {
                // adds a function thing/collapsable
                var subDiv = document.createElement("div");
                subDiv.className = "sub";
    
                try {
                    subDiv.textContent = value.description;
                } catch(e) {
                    subDiv.textContent = '';
                }
                
                this.addRule(subDiv, value.rules);
                div.append(subDiv);
            }
        }
        
    }

    static addRule(div, rules) {
        // check if rules is defined
        if (rules !== [] || rules !== undefined) {
            rules.forEach(rule => {
                var ruleDiv = document.createElement("div");
                ruleDiv.className = "rule";
                
                this.addKeyword(ruleDiv, rule.type);

                var contentSpan = document.createElement("span");
                contentSpan.className = "contentSpan";
                contentSpan.textContent = rule.content.join();

                ruleDiv.append(contentSpan);

                //add rule to given html element
                div.append(ruleDiv);
            });
        }

    }

    static addKeyword(div, rule) {
        var ruleSpan = document.createElement("span");
        ruleSpan.className = "ruleSpan";

        //switch with keyword shizzle so different part have different colors and stuff added to them
        switch (rule) {
            case "desc":
                ruleSpan.classList.add("description");
                ruleSpan.textContent = "@desc: ";
                div.className = "descriptionRule";
                break;
            case "inv":
                ruleSpan.classList.add("invariant");
                ruleSpan.textContent = "@inv: ";
                break;
            case "ensures":
                ruleSpan.classList.add("ensures");
                ruleSpan.textContent = "@ensures: ";
                break;
            case "requires":
                ruleSpan.classList.add("requires");
                ruleSpan.textContent = "@requires: ";
                break;
            case "represents":
                ruleSpan.classList.add("represents");
                ruleSpan.textContent = "@represents: ";
                break;
            case "assignable":
                ruleSpan.classList.add("assignable");
                ruleSpan.textContent = "@assignable: ";
                break;
            case "signals":
                ruleSpan.classList.add("signals");
                ruleSpan.textContent = "@signals: ";
                break;
            case "pure":
                ruleSpan.classList.add("pure");
                ruleSpan.textContent = "@pure";
                break;

            default:
                break;
        }
        div.appendChild(ruleSpan);   
    }

    static createCollapse(button, target){
        var targetId = button.id+"Collapse";

        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#"+targetId);

        target.classList.add("collapse");
    }

    static createButton(buttonText){
        var button = document.createElement("button");
        button.textContent = String(buttonText);
        button.classList.add("btnVS");
        
        return button;
    }

    //given div is the div where the button is added to
    static createCollapseButton(target, buttonDiv, internal = false) {
        if (internal) {
            if (!document.getElementById("internalBtn")) {
                //create collapse button
                var button = this.createButton("Internal view");
                button.id = "internalBtn";
                buttonDiv.append(button);
                this.createCollapse(button, target);
            }
            else {
                var target = document.getElementById("internalBtnCollapse");
            }
        }
        else if (!internal) {
            if (!document.getElementById("externalBtn")) {
                //create collapse button
                var button = this.createButton("External view");
                button.id = "externalBtn";
                buttonDiv.append(button);
                this.createCollapse(button, target);
            }
            else {
                var target = document.getElementById("externalBtnCollapse");
            }
        }
        return target;
    }

    static createAttributeDiv($class) {
        var attributeDiv = Overview.createDiv("attributes");

        //go through the attributes and add the annotations to attributes
        for (const [key, value] of Object.entries($class.attributes)) {
            if (value.internalSpecification) {
                Overview.addAttribute(attributeDiv, value.internalSpecification.rules, key);
            }
        }
        return attributeDiv;
    }

    static createMethodDiv($class, internal = false) {
        var methodDiv = Overview.createDiv("methods");

        //go through the methods and add the annotations to methodDiv
        for (const [key, value] of Object.entries($class.methods)) {
            if (value.internalSpecification && internal) {
                Overview.addMethod(methodDiv, value.internalSpecification.rules, value.internalSpecification.subspecifications, key);
            }
            else if (value.externalSpecification && !internal) {
                Overview.addMethod(methodDiv, value.externalSpecification.rules, value.externalSpecification.subspecifications, key);
            }
        }
        return methodDiv;
    }

    static addCollapseListener(targetButton, otherButton){
        $('#'+ targetButton.id).on( "click", function() {
            //the divs all the text is in. These get the styling because the div underneath loses the animation if the height is changed
            var targetDiv = document.getElementById(targetButton.id.substr(0, 8)+'Code');
            var otherDiv = document.getElementById(otherButton.id.substr(0, 8)+'Code');

            //the div with the annotations in of the targetButton
            var targetCollapse = document.getElementById(targetButton.id+'Collapse');

            //vars from the collapse buttons that show if a div is collapsed or not
            var targetShow = document.getElementById(targetButton.id).getAttribute('aria-expanded');
            var otherShow = document.getElementById(otherButton.id).getAttribute('aria-expanded');

            //if target is clicked, target isn't showing and other isn't showing. Remove maxHeight from target
            if(targetCollapse.classList.contains('collapsing') && targetShow === 'false' && otherShow === 'false'){
                targetDiv.classList.remove('maxHeight');
            }
            //if target is clicked and target isn't showing but other is showing. Make other maxHeight
            else if (targetCollapse.classList.contains('collapsing') && targetShow === 'false' && otherShow === 'true') {
                if (otherDiv.classList.contains('halfHeight')) {
                    otherDiv.classList.remove('halfHeight');
                    targetDiv.classList.remove('halfHeight');
                }
                otherDiv.classList.add('maxHeight');
            }
            //if target is clicked and other is showing. Make both halfHeight
            else if(targetCollapse.classList.contains('collapsing') && otherShow === 'true'){
                if(otherDiv.classList.contains('maxHeight')){
                    targetDiv.classList.remove('maxHeight');
                    otherDiv.classList.remove('maxHeight');
                }
                targetDiv.classList.add('halfHeight');
                otherDiv.classList.add('halfHeight');
            }
            //if target is clicked and either other isn't showing or otherShow is null. Make target maxHeight
            else if (targetCollapse.classList.contains('collapsing') && (otherShow === 'false' || otherShow === null)) {
                if(targetDiv.classList.contains('halfHeight')){
                    targetDiv.classList.remove('halfHeight');
                }
                targetDiv.classList.add('maxHeight');
            }
        });
            
    }

}
