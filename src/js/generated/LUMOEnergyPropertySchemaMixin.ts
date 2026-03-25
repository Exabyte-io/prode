import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type LUMOEnergyPropertySchemaMixin = Omit<
    LUMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type LUMOEnergyPropertyInMemoryEntity = InMemoryEntity & LUMOEnergyPropertySchemaMixin;

export function lUMOEnergyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & LUMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<LUMOEnergyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<LUMOEnergyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<LUMOEnergyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
