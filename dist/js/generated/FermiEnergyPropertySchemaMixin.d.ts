import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FermiEnergyPropertySchemaMixin = Omit<FermiEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FermiEnergyPropertyInMemoryEntity = InMemoryEntity & FermiEnergyPropertySchemaMixin;
export declare function fermiEnergyPropertySchemaMixin(item: InMemoryEntity): void;
