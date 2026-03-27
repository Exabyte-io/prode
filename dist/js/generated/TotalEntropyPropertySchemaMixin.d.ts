import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEntropyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalEntropyPropertySchemaMixin = Omit<TotalEntropyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalEntropyPropertyInMemoryEntity = InMemoryEntity & TotalEntropyPropertySchemaMixin;
export declare function totalEntropyPropertySchemaMixin(item: InMemoryEntity): void;
