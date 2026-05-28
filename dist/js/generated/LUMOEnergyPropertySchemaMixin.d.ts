import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type LUMOEnergyPropertySchemaMixin = Omit<LUMOEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type LUMOEnergyPropertyInMemoryEntity = InMemoryEntity & LUMOEnergyPropertySchemaMixin;
export declare function lUMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & LUMOEnergyPropertySchemaMixin;
