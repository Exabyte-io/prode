import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalEnergyContributionsPropertySchemaMixin = Omit<TotalEnergyContributionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalEnergyContributionsPropertyInMemoryEntity = InMemoryEntity & TotalEnergyContributionsPropertySchemaMixin;
export declare function totalEnergyContributionsPropertySchemaMixin(item: InMemoryEntity): void;
