import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

export type ProtoPropertyHolderSchemaMixin = Omit<
    ProtoPropertyHolderSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ProtoPropertyHolderInMemoryEntity = InMemoryEntity & ProtoPropertyHolderSchemaMixin;

export function protoPropertyHolderSchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ProtoPropertyHolderSchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ProtoPropertyHolderSchemaMixin = {
        get data() {
            return this.requiredProp<ProtoPropertyHolderSchema["data"]>("data");
        },
        set data(value: ProtoPropertyHolderSchema["data"]) {
            this.setProp("data", value);
        },
        get source() {
            return this.requiredProp<ProtoPropertyHolderSchema["source"]>("source");
        },
        set source(value: ProtoPropertyHolderSchema["source"]) {
            this.setProp("source", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
