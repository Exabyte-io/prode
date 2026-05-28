import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalEnergyPropertySchemaMixin = Omit<TotalEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalEnergyPropertyInMemoryEntity = InMemoryEntity & TotalEnergyPropertySchemaMixin;
export declare function totalEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & TotalEnergyPropertySchemaMixin;
