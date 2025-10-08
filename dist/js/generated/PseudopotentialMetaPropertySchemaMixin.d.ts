import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FileDataItem } from "@mat3ra/esse/dist/js/types";
export type PseudopotentialMetaPropertySchemaMixin = Omit<FileDataItem, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PseudopotentialMetaPropertyInMemoryEntity = InMemoryEntity & PseudopotentialMetaPropertySchemaMixin;
export declare function pseudopotentialMetaPropertySchemaMixin(item: InMemoryEntity): void;
