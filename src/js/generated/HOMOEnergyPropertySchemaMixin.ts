import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HOMOEnergyPropertySchemaMixin = Omit<
    HOMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HOMOEnergyPropertyInMemoryEntity = InMemoryEntity & HOMOEnergyPropertySchemaMixin;

export function hOMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & HOMOEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & HOMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<HOMOEnergyPropertySchema["name"]>("name");
        },
        set name(value: HOMOEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<HOMOEnergyPropertySchema["units"]>("units");
        },
        set units(value: HOMOEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<HOMOEnergyPropertySchema["value"]>("value");
        },
        set value(value: HOMOEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
