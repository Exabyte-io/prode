import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = FileContentPropertySchema;
export default class FileContentProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly isAbleToReturnMultipleResults = true;
    static readonly propertyName = PropertyName.file_content;
    constructor(config: Omit<Schema, "name">);
    get filetype(): "image" | "text" | "csv";
    get objectData(): {
        CONTAINER?: string;
        NAME?: string;
        PROVIDER?: string;
        REGION?: string;
        SIZE?: number;
        TIMESTAMP?: string;
    };
    get pathname(): string | undefined;
    get basename(): string;
}
export {};
