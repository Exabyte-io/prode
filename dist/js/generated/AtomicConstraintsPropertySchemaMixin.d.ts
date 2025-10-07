import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type AtomicConstraintsPropertySchemaMixin = Omit<AtomicConstraintsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type AtomicConstraintsPropertyInMemoryEntity = InMemoryEntity & AtomicConstraintsPropertySchemaMixin;
export declare function atomicConstraintsPropertySchemaMixin(item: InMemoryEntity): void;
