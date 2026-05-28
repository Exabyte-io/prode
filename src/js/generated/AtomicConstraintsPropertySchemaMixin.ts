import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type AtomicConstraintsPropertySchemaMixin = Omit<
    AtomicConstraintsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type AtomicConstraintsPropertyInMemoryEntity = InMemoryEntity &
    AtomicConstraintsPropertySchemaMixin;

export function atomicConstraintsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & AtomicConstraintsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & AtomicConstraintsPropertySchemaMixin = {
        get name() {
            return this.requiredProp<AtomicConstraintsPropertySchema["name"]>("name");
        },
        set name(value: AtomicConstraintsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp<AtomicConstraintsPropertySchema["values"]>("values");
        },
        set values(value: AtomicConstraintsPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
