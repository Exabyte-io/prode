import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HeatCapacityCvContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HeatCapacityCVContributionsPropertySchemaMixin = Omit<HeatCapacityCvContributionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HeatCapacityCVContributionsPropertyInMemoryEntity = InMemoryEntity & HeatCapacityCVContributionsPropertySchemaMixin;
export declare function heatCapacityCVContributionsPropertySchemaMixin(item: InMemoryEntity): void;
