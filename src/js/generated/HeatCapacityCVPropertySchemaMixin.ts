import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HeatCapacityCvPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HeatCapacityCVPropertySchemaMixin = Omit<
    HeatCapacityCvPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HeatCapacityCVPropertyInMemoryEntity = InMemoryEntity &
    HeatCapacityCVPropertySchemaMixin;

export function heatCapacityCVPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & HeatCapacityCVPropertySchemaMixin = {
        get name() {
            return this.requiredProp<HeatCapacityCvPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<HeatCapacityCvPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<HeatCapacityCvPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
