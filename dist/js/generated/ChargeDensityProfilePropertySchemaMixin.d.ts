import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type ChargeDensityProfilePropertySchemaMixin = Omit<ChargeDensityProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ChargeDensityProfilePropertyInMemoryEntity = InMemoryEntity & ChargeDensityProfilePropertySchemaMixin;
export declare function chargeDensityProfilePropertySchemaMixin(item: InMemoryEntity): void;
