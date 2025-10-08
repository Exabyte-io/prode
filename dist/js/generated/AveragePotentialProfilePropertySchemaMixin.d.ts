import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type AveragePotentialProfilePropertySchemaMixin = Omit<AveragePotentialProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type AveragePotentialProfilePropertyInMemoryEntity = InMemoryEntity & AveragePotentialProfilePropertySchemaMixin;
export declare function averagePotentialProfilePropertySchemaMixin(item: InMemoryEntity): void;
