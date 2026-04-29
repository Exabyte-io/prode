import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionToEnergyPropertySchemaMixin = Omit<
    ThermalCorrectionToEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionToEnergyPropertyInMemoryEntity = InMemoryEntity &
    ThermalCorrectionToEnergyPropertySchemaMixin;

export function thermalCorrectionToEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ThermalCorrectionToEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ThermalCorrectionToEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["name"]>("name");
        },
        set name(value: ThermalCorrectionToEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["units"]>("units");
        },
        set units(value: ThermalCorrectionToEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["value"]>("value");
        },
        set value(value: ThermalCorrectionToEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
