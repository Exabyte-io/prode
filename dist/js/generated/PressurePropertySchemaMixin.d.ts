import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PressurePropertySchema } from "@mat3ra/esse/dist/js/types";
export type PressurePropertySchemaMixin = Omit<PressurePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PressurePropertyInMemoryEntity = InMemoryEntity & PressurePropertySchemaMixin;
export declare function pressurePropertySchemaMixin(item: InMemoryEntity): void;
