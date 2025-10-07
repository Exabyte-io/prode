import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ZeroPointEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ZeroPointEnergyPropertySchemaMixin = Omit<ZeroPointEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ZeroPointEnergyPropertyInMemoryEntity = InMemoryEntity & ZeroPointEnergyPropertySchemaMixin;
export declare function zeroPointEnergyPropertySchemaMixin(item: InMemoryEntity): void;
