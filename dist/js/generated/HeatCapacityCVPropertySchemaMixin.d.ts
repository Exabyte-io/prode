import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HeatCapacityCvPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HeatCapacityCVPropertySchemaMixin = Omit<HeatCapacityCvPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HeatCapacityCVPropertyInMemoryEntity = InMemoryEntity & HeatCapacityCVPropertySchemaMixin;
export declare function heatCapacityCVPropertySchemaMixin(item: InMemoryEntity): void;
