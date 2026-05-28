import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type LUMOEnergyPropertySchemaMixin = Omit<
    LUMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type LUMOEnergyPropertyInMemoryEntity = InMemoryEntity & LUMOEnergyPropertySchemaMixin;

export function lUMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & LUMOEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & LUMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<LUMOEnergyPropertySchema["name"]>("name");
        },
        set name(value: LUMOEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<LUMOEnergyPropertySchema["units"]>("units");
        },
        set units(value: LUMOEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<LUMOEnergyPropertySchema["value"]>("value");
        },
        set value(value: LUMOEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
