import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type MagneticMomentsPropertySchemaMixin = Omit<MagneticMomentsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type MagneticMomentsPropertyInMemoryEntity = InMemoryEntity & MagneticMomentsPropertySchemaMixin;
export declare function magneticMomentsPropertySchemaMixin(item: InMemoryEntity): void;
