import { PGTDocument } from "../models/PGTDocument";

export default interface TestGenerator {

    generateTestsFor(document: PGTDocument, useExternal: boolean): void;

}
