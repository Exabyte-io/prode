import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FileDataItem } from "@mat3ra/esse/dist/js/types";

export type PseudopotentialMetaPropertySchemaMixin = Omit<
    FileDataItem,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PseudopotentialMetaPropertyInMemoryEntity = InMemoryEntity &
    PseudopotentialMetaPropertySchemaMixin;

export function pseudopotentialMetaPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PseudopotentialMetaPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & PseudopotentialMetaPropertySchemaMixin = {
        get element() {
            return this.requiredProp<FileDataItem["element"]>("element");
        },
        set element(value: FileDataItem["element"]) {
            this.setProp("element", value);
        },
        get hash() {
            return this.requiredProp<FileDataItem["hash"]>("hash");
        },
        set hash(value: FileDataItem["hash"]) {
            this.setProp("hash", value);
        },
        get type() {
            return this.requiredProp<FileDataItem["type"]>("type");
        },
        set type(value: FileDataItem["type"]) {
            this.setProp("type", value);
        },
        get source() {
            return this.requiredProp<FileDataItem["source"]>("source");
        },
        set source(value: FileDataItem["source"]) {
            this.setProp("source", value);
        },
        get version() {
            return this.prop<FileDataItem["version"]>("version");
        },
        set version(value: FileDataItem["version"]) {
            this.setProp("version", value);
        },
        get exchangeCorrelation() {
            return this.requiredProp<FileDataItem["exchangeCorrelation"]>("exchangeCorrelation");
        },
        set exchangeCorrelation(value: FileDataItem["exchangeCorrelation"]) {
            this.setProp("exchangeCorrelation", value);
        },
        get valenceConfiguration() {
            return this.prop<FileDataItem["valenceConfiguration"]>("valenceConfiguration");
        },
        set valenceConfiguration(value: FileDataItem["valenceConfiguration"]) {
            this.setProp("valenceConfiguration", value);
        },
        get path() {
            return this.requiredProp<FileDataItem["path"]>("path");
        },
        set path(value: FileDataItem["path"]) {
            this.setProp("path", value);
        },
        get apps() {
            return this.requiredProp<FileDataItem["apps"]>("apps");
        },
        set apps(value: FileDataItem["apps"]) {
            this.setProp("apps", value);
        },
        get filename() {
            return this.prop<FileDataItem["filename"]>("filename");
        },
        set filename(value: FileDataItem["filename"]) {
            this.setProp("filename", value);
        },
        get name() {
            return this.requiredProp<FileDataItem["name"]>("name");
        },
        set name(value: FileDataItem["name"]) {
            this.setProp("name", value);
        },
        get cutoffs() {
            return this.prop<FileDataItem["cutoffs"]>("cutoffs");
        },
        set cutoffs(value: FileDataItem["cutoffs"]) {
            this.setProp("cutoffs", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
