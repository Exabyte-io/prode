import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ThermalCorrectionToEnergyPropertySchemaMixin = Omit<ThermalCorrectionToEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ThermalCorrectionToEnergyPropertyInMemoryEntity = InMemoryEntity & ThermalCorrectionToEnergyPropertySchemaMixin;
export declare function thermalCorrectionToEnergyPropertySchemaMixin(item: InMemoryEntity): void;
