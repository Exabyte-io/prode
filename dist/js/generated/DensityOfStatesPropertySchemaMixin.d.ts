import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type DensityOfStatesPropertySchemaMixin = Omit<DensityOfStatesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type DensityOfStatesPropertyInMemoryEntity = InMemoryEntity & DensityOfStatesPropertySchemaMixin;
export declare function densityOfStatesPropertySchemaMixin(item: InMemoryEntity): void;
