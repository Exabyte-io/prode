import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HeatCapacityCvContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HeatCapacityCVContributionsPropertySchemaMixin = Omit<
    HeatCapacityCvContributionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HeatCapacityCVContributionsPropertyInMemoryEntity = InMemoryEntity &
    HeatCapacityCVContributionsPropertySchemaMixin;

export function heatCapacityCVContributionsPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & HeatCapacityCVContributionsPropertySchemaMixin = {
        get translational() {
            return this.prop<HeatCapacityCvContributionsPropertySchema["translational"]>(
                "translational",
            );
        },
        get rotational() {
            return this.prop<HeatCapacityCvContributionsPropertySchema["rotational"]>("rotational");
        },
        get vibrational() {
            return this.prop<HeatCapacityCvContributionsPropertySchema["vibrational"]>(
                "vibrational",
            );
        },
        get name() {
            return this.requiredProp<HeatCapacityCvContributionsPropertySchema["name"]>("name");
        },
        get units() {
            return this.prop<HeatCapacityCvContributionsPropertySchema["units"]>("units");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
