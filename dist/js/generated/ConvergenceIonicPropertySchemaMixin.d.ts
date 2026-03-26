import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ConvergenceIonicPropertySchemaMixin = Omit<ConvergenceIonicPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ConvergenceIonicPropertyInMemoryEntity = InMemoryEntity & ConvergenceIonicPropertySchemaMixin;
export declare function convergenceIonicPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & ConvergenceIonicPropertySchemaMixin;
