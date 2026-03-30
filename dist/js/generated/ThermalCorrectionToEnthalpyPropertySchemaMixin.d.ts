import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ThermalCorrectionToEnthalpyPropertySchemaMixin = Omit<ThermalCorrectionToEnthalpyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ThermalCorrectionToEnthalpyPropertyInMemoryEntity = InMemoryEntity & ThermalCorrectionToEnthalpyPropertySchemaMixin;
export declare function thermalCorrectionToEnthalpyPropertySchemaMixin(item: InMemoryEntity): void;
