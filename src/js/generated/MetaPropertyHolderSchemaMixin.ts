import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

export type MetaPropertyHolderSchemaMixin = Omit<
    MetaPropertyHolderSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type MetaPropertyHolderInMemoryEntity = InMemoryEntity & MetaPropertyHolderSchemaMixin;

export function metaPropertyHolderSchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & MetaPropertyHolderSchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & MetaPropertyHolderSchemaMixin = {
        get data() {
            return this.requiredProp<MetaPropertyHolderSchema["data"]>("data");
        },
        set data(value: MetaPropertyHolderSchema["data"]) {
            this.setProp("data", value);
        },
        get source() {
            return this.requiredProp<MetaPropertyHolderSchema["source"]>("source");
        },
        set source(value: MetaPropertyHolderSchema["source"]) {
            this.setProp("source", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
