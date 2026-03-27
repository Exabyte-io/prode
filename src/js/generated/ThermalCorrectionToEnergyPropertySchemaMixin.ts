import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionToEnergyPropertySchemaMixin = Omit<
    ThermalCorrectionToEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionToEnergyPropertyInMemoryEntity = InMemoryEntity &
    ThermalCorrectionToEnergyPropertySchemaMixin;

export function thermalCorrectionToEnergyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & ThermalCorrectionToEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<ThermalCorrectionToEnergyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
