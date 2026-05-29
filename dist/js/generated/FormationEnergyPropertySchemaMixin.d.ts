import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FormationEnergyPropertySchemaMixin = Omit<FormationEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FormationEnergyPropertyInMemoryEntity = InMemoryEntity & FormationEnergyPropertySchemaMixin;
export declare function formationEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & FormationEnergyPropertySchemaMixin;
