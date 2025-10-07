import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
export type MetaPropertyHolderSchemaMixin = Omit<MetaPropertyHolderSchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type MetaPropertyHolderInMemoryEntity = InMemoryEntity & MetaPropertyHolderSchemaMixin;
export declare function metaPropertyHolderSchemaMixin(item: InMemoryEntity): void;
