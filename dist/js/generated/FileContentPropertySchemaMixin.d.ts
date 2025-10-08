import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FileContentPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FileContentPropertySchemaMixin = Omit<FileContentPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FileContentPropertyInMemoryEntity = InMemoryEntity & FileContentPropertySchemaMixin;
export declare function fileContentPropertySchemaMixin(item: InMemoryEntity): void;
