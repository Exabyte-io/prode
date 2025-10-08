import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type PotentialProfilePropertySchemaMixin = Omit<PotentialProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PotentialProfilePropertyInMemoryEntity = InMemoryEntity & PotentialProfilePropertySchemaMixin;
export declare function potentialProfilePropertySchemaMixin(item: InMemoryEntity): void;
