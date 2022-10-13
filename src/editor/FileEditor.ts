import { window, Position, TextEditor, TextEditorEdit } from "vscode";
import { Class, PGTDocument } from "../models/PGTDocument";
import { pgtDocumentCache } from "../parser/PGTDocuments";
import { Immutable } from "../utility/Immutable";

export class FileEditor {

    private static editArray: [string, Position, Boolean][] = [];

    private static annotationStart: string = '/**\r\n';
    private static annotationEnd: string = ' */';
    private static lineBreak: string = '\r\n';
    private static description: string = ' * @desc ';
    private static subspecification: string = ' * @sub ';
    private static ensures: string = ' * @ensures ';
    private static requires: string = ' * @requires ';
    private static represents: string = ' * @represents ';
    private static invariant: string = ' * @inv ';

    public static Insert(editor: TextEditor, command: string){
        let model = pgtDocumentCache.getPGTDocument(editor.document);
        let annotation = '';

        switch (command) {
            case 'Annotation setup':
                if (model.$class !== undefined && model.$class.range !== undefined) {
                    //check for complete external specification
                    FileEditor.fullExternalSpecification(model.$class, annotation);
                    FileEditor.fullInternalSpecification(model.$class, annotation, editor);
                }
                break;
        }
        FileEditor.insertEdits(editor);

    }

    private static fullInternalSpecification($class: Immutable<Class>, annotation: string, editor:TextEditor) {
        let internalAttribute = FileEditor.lineBreak + FileEditor.annotationStart + FileEditor.represents +
            'test text' + FileEditor.lineBreak + FileEditor.annotationEnd + FileEditor.lineBreak;
        let internalMethod = FileEditor.lineBreak + FileEditor.annotationStart + FileEditor.subspecification + 'happy path {'+ FileEditor.lineBreak +
            FileEditor.ensures + FileEditor.lineBreak + FileEditor.requires + FileEditor.lineBreak + ' * }'
             + FileEditor.lineBreak + FileEditor.annotationEnd + FileEditor.lineBreak;
    
        if ($class.internalSpecification === undefined && $class.range !== undefined) {
            annotation = FileEditor.lineBreak + FileEditor.annotationStart + FileEditor.description +
                'test text for testing tests with text' + FileEditor.lineBreak + FileEditor.annotationEnd;

            FileEditor.addEdit(annotation, new Position($class.bodyRange!.start.line, $class.bodyRange!.start.character+1));
            
            FileEditor.addAttributes($class, internalAttribute);

            FileEditor.addMethods($class, internalMethod, true);
        }
        else if($class.internalSpecification !== undefined){
            FileEditor.addAttributes($class, internalAttribute);

            FileEditor.addMethods($class, internalMethod, true);
        }
    }

    private static fullExternalSpecification($class: Immutable<Class>, annotation: string) {
        let externalMethod = FileEditor.lineBreak + FileEditor.annotationStart + FileEditor.subspecification + 'happy path {'+ FileEditor.lineBreak +
            FileEditor.ensures + FileEditor.lineBreak + FileEditor.requires + FileEditor.lineBreak + ' * } ' + FileEditor.lineBreak + FileEditor.annotationEnd;

        if ($class.externalSpecification === undefined) {
            annotation = FileEditor.annotationStart + FileEditor.description +
                'test text for testing tests with text' + FileEditor.lineBreak + FileEditor.annotationEnd + FileEditor.lineBreak;

            if ($class.range !== undefined && $class.identifier !== undefined) {
                FileEditor.addEdit(annotation, new Position($class.range.start.line, 0));
            }

            if($class.range !== undefined){
                FileEditor.addMethods($class, externalMethod);
            }
        }
        else if ($class.externalSpecification !== undefined){
            FileEditor.addMethods($class, externalMethod);
        }

    }

    private static addAttributes($class: Immutable<Class>, annotation: string) {
        if ($class !== undefined) {
            for (const [key, value] of Object.entries($class.attributes)) {
                if (value.range !== undefined && value.internalSpecification === undefined) {
                    var newPos = new Position(value.range.start.line, value.range.start.character);
                    
                    FileEditor.addEdit(annotation, newPos);
                }
            }
        }

    }

    private static addMethods($class: Immutable<Class>, annotation: string, internal:boolean = false) {
        var index = undefined;

        if ($class !== undefined) {
            for (const [key, value] of Object.entries($class.methods)) {
                if (value.range !== undefined && (value.externalSpecification === undefined || value.internalSpecification === undefined)) {
                    
                    //line adjustments are needed so it is put before or after the position. Otherwise it will add them inbetween characters
                    if(value.accessModifier === 'public' && value.externalSpecification === undefined && !internal){
                        index = new Position(value.range.start.line-1, value.range.start.character);
                        FileEditor.addEdit(annotation, index);
                    }
                    else if(value.internalSpecification === undefined && (value.accessModifier === 'public' || value.accessModifier === 'protected' || value.accessModifier === 'private') && internal){
                        if (value.bodyRange !== undefined) {
                            index = new Position(value.bodyRange.start.line, value.bodyRange.start.character+1);
                            FileEditor.addEdit(annotation, index, true);
                        }    
                    }
                }
                // reset index
                index = undefined;
            }
        }

    }

    private static addEdit(string:string, position:Immutable<Position>, internal = false){
        let newPos = new Position(position.line, position.character);
        FileEditor.editArray.push([string, newPos, internal]);
    }

    private static insertEdits(editor: TextEditor){
        editor?.edit(function (editBuilder: TextEditorEdit) {
            FileEditor.editArray.forEach(array => {
                if (array[1] !== undefined) {
                    let indent = array[1].character;

                    //when the indent is more then 0
                    if (indent > 0) {
                        let spaces = FileEditor.getTabString(editor);
                        let indentString = (array[2]) ? FileEditor.lineBreak + spaces+spaces : FileEditor.lineBreak + spaces;
                        array[0] = array[0].replace(/\r\n/g, indentString);
                    }

                    editBuilder.insert(array[1], array[0]);
                }
            });
        });
        FileEditor.editArray = [];
    }

    private static getTabString(editor:TextEditor){
        let tabs:number = +editor.options.tabSize!;
        
        return ' '.repeat(tabs);;
    }

}
