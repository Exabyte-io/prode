import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
export type FinalStructurePropertySchemaMixin = Omit<FinalStructurePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FinalStructurePropertyInMemoryEntity = InMemoryEntity & FinalStructurePropertySchemaMixin;
export declare function finalStructurePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & FinalStructurePropertySchemaMixin;
