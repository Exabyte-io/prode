import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = FileContentPropertySchema;
export default class FileContentProperty extends Property implements Schema {
    name: Schema["name"];
    constructor(config: object);
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
