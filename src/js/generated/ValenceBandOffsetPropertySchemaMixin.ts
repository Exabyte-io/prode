import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ValenceBandOffsetPropertySchemaMixin = Omit<
    ValenceBandOffsetPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ValenceBandOffsetPropertyInMemoryEntity = InMemoryEntity &
    ValenceBandOffsetPropertySchemaMixin;

export function valenceBandOffsetPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ValenceBandOffsetPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ValenceBandOffsetPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ValenceBandOffsetPropertySchema["name"]>("name");
        },
        set name(value: ValenceBandOffsetPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<ValenceBandOffsetPropertySchema["units"]>("units");
        },
        set units(value: ValenceBandOffsetPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<ValenceBandOffsetPropertySchema["value"]>("value");
        },
        set value(value: ValenceBandOffsetPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
