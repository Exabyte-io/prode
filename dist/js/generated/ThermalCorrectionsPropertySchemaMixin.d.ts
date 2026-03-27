import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ThermalCorrectionsPropertySchemaMixin = Omit<ThermalCorrectionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ThermalCorrectionsPropertyInMemoryEntity = InMemoryEntity & ThermalCorrectionsPropertySchemaMixin;
export declare function thermalCorrectionsPropertySchemaMixin(item: InMemoryEntity): void;
