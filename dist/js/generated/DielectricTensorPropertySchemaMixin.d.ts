import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
export type DielectricTensorPropertySchemaMixin = Omit<DielectricTensorPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type DielectricTensorPropertyInMemoryEntity = InMemoryEntity & DielectricTensorPropertySchemaMixin;
export declare function dielectricTensorPropertySchemaMixin(item: InMemoryEntity): void;
