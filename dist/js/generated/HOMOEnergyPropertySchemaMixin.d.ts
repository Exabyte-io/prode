import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HOMOEnergyPropertySchemaMixin = Omit<HOMOEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HOMOEnergyPropertyInMemoryEntity = InMemoryEntity & HOMOEnergyPropertySchemaMixin;
export declare function hOMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & HOMOEnergyPropertySchemaMixin;
