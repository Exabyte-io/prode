import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type BandGapsPropertySchemaMixin = Omit<BandGapsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type BandGapsPropertyInMemoryEntity = InMemoryEntity & BandGapsPropertySchemaMixin;
export declare function bandGapsPropertySchemaMixin(item: InMemoryEntity): void;
