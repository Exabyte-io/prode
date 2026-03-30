import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionToEnthalpyPropertySchemaMixin = Omit<
    ThermalCorrectionToEnthalpyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionToEnthalpyPropertyInMemoryEntity = InMemoryEntity &
    ThermalCorrectionToEnthalpyPropertySchemaMixin;

export function thermalCorrectionToEnthalpyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & ThermalCorrectionToEnthalpyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<ThermalCorrectionToEnthalpyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
