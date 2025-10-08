import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ValenceBandOffsetPropertySchemaMixin = Omit<ValenceBandOffsetPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ValenceBandOffsetPropertyInMemoryEntity = InMemoryEntity & ValenceBandOffsetPropertySchemaMixin;
export declare function valenceBandOffsetPropertySchemaMixin(item: InMemoryEntity): void;
