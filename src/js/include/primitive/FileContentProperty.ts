import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = FileContentPropertySchema;

export default class FileContentProperty extends Property implements Schema {
    declare name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "file_content" });
    }

    get filetype() {
        return this.requiredProp<Schema["filetype"]>("filetype");
    }

    get objectData() {
        return this.requiredProp<Schema["objectData"]>("objectData");
    }

    get pathname() {
        return this.prop<Schema["pathname"]>("pathname");
    }

    get basename() {
        return this.requiredProp<Schema["basename"]>("basename");
    }
}
