import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type FileContentPropertySchemaMixin } from "../../generated/FileContentPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FileContentPropertySchema;
type Base = typeof Property<Schema> & Constructor<FileContentPropertySchemaMixin>;
declare const FileContentProperty_base: Base;
export default class FileContentProperty extends FileContentProperty_base implements Schema {
    static readonly isAbleToReturnMultipleResults = true;
    static readonly propertyName = PropertyName.file_content;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
