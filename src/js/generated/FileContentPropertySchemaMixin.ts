import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FileContentPropertySchemaMixin = Omit<
    FileContentPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FileContentPropertyInMemoryEntity = InMemoryEntity & FileContentPropertySchemaMixin;

export function fileContentPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FileContentPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & FileContentPropertySchemaMixin = {
        get name() {
            return this.requiredProp<FileContentPropertySchema["name"]>("name");
        },
        set name(value: FileContentPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get filetype() {
            return this.requiredProp<FileContentPropertySchema["filetype"]>("filetype");
        },
        set filetype(value: FileContentPropertySchema["filetype"]) {
            this.setProp("filetype", value);
        },
        get objectData() {
            return this.requiredProp<FileContentPropertySchema["objectData"]>("objectData");
        },
        set objectData(value: FileContentPropertySchema["objectData"]) {
            this.setProp("objectData", value);
        },
        get pathname() {
            return this.prop<FileContentPropertySchema["pathname"]>("pathname");
        },
        set pathname(value: FileContentPropertySchema["pathname"]) {
            this.setProp("pathname", value);
        },
        get basename() {
            return this.prop<FileContentPropertySchema["basename"]>("basename");
        },
        set basename(value: FileContentPropertySchema["basename"]) {
            this.setProp("basename", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
