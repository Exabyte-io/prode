import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
export type BandStructurePropertySchemaMixin = Omit<BandStructurePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type BandStructurePropertyInMemoryEntity = InMemoryEntity & BandStructurePropertySchemaMixin;
export declare function bandStructurePropertySchemaMixin(item: InMemoryEntity): void;
