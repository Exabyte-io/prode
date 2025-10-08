import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { IsRelaxedPropertySchema } from "@mat3ra/esse/dist/js/types";
export type IsRelaxedPropertySchemaMixin = Omit<IsRelaxedPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type IsRelaxedPropertyInMemoryEntity = InMemoryEntity & IsRelaxedPropertySchemaMixin;
export declare function isRelaxedPropertySchemaMixin(item: InMemoryEntity): void;
