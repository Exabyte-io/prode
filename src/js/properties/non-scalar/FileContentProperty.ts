import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = FileContentPropertySchema;

export default class FileContentProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly isAbleToReturnMultipleResults = true;

    static readonly propertyName = PropertyName.file_content;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: FileContentProperty.propertyName });
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
