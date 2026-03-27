import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEntropyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalEntropyContributionsPropertySchemaMixin = Omit<TotalEntropyContributionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalEntropyContributionsPropertyInMemoryEntity = InMemoryEntity & TotalEntropyContributionsPropertySchemaMixin;
export declare function totalEntropyContributionsPropertySchemaMixin(item: InMemoryEntity): void;
