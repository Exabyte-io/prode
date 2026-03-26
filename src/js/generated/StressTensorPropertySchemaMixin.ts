import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";

export type StressTensorPropertySchemaMixin = Omit<
    StressTensorPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type StressTensorPropertyInMemoryEntity = InMemoryEntity & StressTensorPropertySchemaMixin;

export function stressTensorPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & StressTensorPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & StressTensorPropertySchemaMixin = {
        get value() {
            return this.requiredProp<StressTensorPropertySchema["value"]>("value");
        },
        set value(value: StressTensorPropertySchema["value"]) {
            this.setProp("value", value);
        },
        get name() {
            return this.requiredProp<StressTensorPropertySchema["name"]>("name");
        },
        set name(value: StressTensorPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<StressTensorPropertySchema["units"]>("units");
        },
        set units(value: StressTensorPropertySchema["units"]) {
            this.setProp("units", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
