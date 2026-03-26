import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
export type PropertyHolderSchemaMixin = Omit<PropertyHolderSchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PropertyHolderInMemoryEntity = InMemoryEntity & PropertyHolderSchemaMixin;
export declare function propertyHolderSchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & PropertyHolderSchemaMixin;
