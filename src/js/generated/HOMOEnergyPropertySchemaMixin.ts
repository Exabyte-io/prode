import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HOMOEnergyPropertySchemaMixin = Omit<
    HOMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HOMOEnergyPropertyInMemoryEntity = InMemoryEntity & HOMOEnergyPropertySchemaMixin;

export function hOMOEnergyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & HOMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<HOMOEnergyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<HOMOEnergyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<HOMOEnergyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
