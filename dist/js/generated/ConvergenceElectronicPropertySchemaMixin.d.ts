import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ConvergenceElectronicPropertySchemaMixin = Omit<ConvergenceElectronicPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ConvergenceElectronicPropertyInMemoryEntity = InMemoryEntity & ConvergenceElectronicPropertySchemaMixin;
export declare function convergenceElectronicPropertySchemaMixin(item: InMemoryEntity): void;
