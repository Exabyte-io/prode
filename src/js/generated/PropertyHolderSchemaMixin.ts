import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

export type PropertyHolderSchemaMixin = Omit<
    PropertyHolderSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PropertyHolderInMemoryEntity = InMemoryEntity & PropertyHolderSchemaMixin;

export function propertyHolderSchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PropertyHolderSchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & PropertyHolderSchemaMixin = {
        get group() {
            return this.prop<PropertyHolderSchema["group"]>("group");
        },
        set group(value: PropertyHolderSchema["group"]) {
            this.setProp("group", value);
        },
        get data() {
            return this.requiredProp<PropertyHolderSchema["data"]>("data");
        },
        set data(value: PropertyHolderSchema["data"]) {
            this.setProp("data", value);
        },
        get source() {
            return this.requiredProp<PropertyHolderSchema["source"]>("source");
        },
        set source(value: PropertyHolderSchema["source"]) {
            this.setProp("source", value);
        },
        get exabyteId() {
            return this.requiredProp<PropertyHolderSchema["exabyteId"]>("exabyteId");
        },
        set exabyteId(value: PropertyHolderSchema["exabyteId"]) {
            this.setProp("exabyteId", value);
        },
        get precision() {
            return this.prop<PropertyHolderSchema["precision"]>("precision");
        },
        set precision(value: PropertyHolderSchema["precision"]) {
            this.setProp("precision", value);
        },
        get systemTags() {
            return this.prop<PropertyHolderSchema["systemTags"]>("systemTags");
        },
        set systemTags(value: PropertyHolderSchema["systemTags"]) {
            this.setProp("systemTags", value);
        },
        get repetition() {
            return this.requiredProp<PropertyHolderSchema["repetition"]>("repetition");
        },
        set repetition(value: PropertyHolderSchema["repetition"]) {
            this.setProp("repetition", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
