import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type BoundaryConditionsPropertySchemaMixin = Omit<BoundaryConditionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type BoundaryConditionsPropertyInMemoryEntity = InMemoryEntity & BoundaryConditionsPropertySchemaMixin;
export declare function boundaryConditionsPropertySchemaMixin(item: InMemoryEntity): void;
