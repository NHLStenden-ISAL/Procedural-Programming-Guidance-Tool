import { TextDocument } from "vscode";
import { PGTDocument } from "../models/PGTDocument";
import { Immutable } from "../utility/Immutable";
import { parseDocument } from "./PGTDocumentParser";

// Based on https://github.com/redhat-developer/yaml-language-server/blob/098496ed311a27560e4d1d40eae12636fb4b7e06/src/languageservice/parser/yaml-documents.ts

interface PGTCachedDocument {
    version: number;
    document: PGTDocument;
}

export class PGTDocuments {

    private documentCache = new Map<string, PGTCachedDocument>();

    public getPGTDocument(document: TextDocument): Immutable<PGTDocument> {
        this.ensureCache(document);
        return this.documentCache.get(document.uri.toString())!.document;
    }

    private ensureCache(document: TextDocument): void {
        const key = document.uri.toString();
        if (!this.documentCache.has(key)) {
            this.documentCache.set(key, { version: -1, document: new PGTDocument() });
        }

        const cacheEntry = this.documentCache.get(key)!;
        if (cacheEntry.version !== document.version) {
            cacheEntry.document = parseDocument(document.getText());
            cacheEntry.version = document.version;
        }
    }

}

export const pgtDocumentCache: PGTDocuments = new PGTDocuments();
