import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalForcePropertySchemaMixin = Omit<TotalForcesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalForcePropertyInMemoryEntity = InMemoryEntity & TotalForcePropertySchemaMixin;
export declare function totalForcePropertySchemaMixin(item: InMemoryEntity): void;
