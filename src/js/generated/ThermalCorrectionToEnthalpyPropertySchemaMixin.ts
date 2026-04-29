import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionToEnthalpyPropertySchemaMixin = Omit<
    ThermalCorrectionToEnthalpyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionToEnthalpyPropertyInMemoryEntity = InMemoryEntity &
    ThermalCorrectionToEnthalpyPropertySchemaMixin;

export function thermalCorrectionToEnthalpyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ThermalCorrectionToEnthalpyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ThermalCorrectionToEnthalpyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["name"]>("name");
        },
        set name(value: ThermalCorrectionToEnthalpyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["units"]>("units");
        },
        set units(value: ThermalCorrectionToEnthalpyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["value"]>("value");
        },
        set value(value: ThermalCorrectionToEnthalpyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
