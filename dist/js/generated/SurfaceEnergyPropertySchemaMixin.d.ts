import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type SurfaceEnergyPropertySchemaMixin = Omit<SurfaceEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type SurfaceEnergyPropertyInMemoryEntity = InMemoryEntity & SurfaceEnergyPropertySchemaMixin;
export declare function surfaceEnergyPropertySchemaMixin(item: InMemoryEntity): void;
