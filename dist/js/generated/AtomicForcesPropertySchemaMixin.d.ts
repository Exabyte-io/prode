import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type AtomicForcesPropertySchemaMixin = Omit<AtomicForcesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type AtomicForcesPropertyInMemoryEntity = InMemoryEntity & AtomicForcesPropertySchemaMixin;
export declare function atomicForcesPropertySchemaMixin(item: InMemoryEntity): void;
