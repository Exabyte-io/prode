import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionsPropertySchemaMixin = Omit<
    ThermalCorrectionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionsPropertyInMemoryEntity = InMemoryEntity &
    ThermalCorrectionsPropertySchemaMixin;

export function thermalCorrectionsPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & ThermalCorrectionsPropertySchemaMixin = {
        get to_energy() {
            return this.prop<ThermalCorrectionsPropertySchema["to_energy"]>("to_energy");
        },
        get to_enthalpy() {
            return this.prop<ThermalCorrectionsPropertySchema["to_enthalpy"]>("to_enthalpy");
        },
        get name() {
            return this.requiredProp<ThermalCorrectionsPropertySchema["name"]>("name");
        },
        get units() {
            return this.prop<ThermalCorrectionsPropertySchema["units"]>("units");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
