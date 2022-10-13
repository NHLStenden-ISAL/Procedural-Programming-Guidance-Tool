import { PGTDocument } from "../../models/PGTDocument";

export abstract class PGTDocumentValidator {

    public abstract validate(document: PGTDocument): boolean;

}
