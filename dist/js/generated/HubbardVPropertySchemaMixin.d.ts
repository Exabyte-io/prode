import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HubbardVPropertySchemaMixin = Omit<HubbardVParametersPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HubbardVPropertyInMemoryEntity = InMemoryEntity & HubbardVPropertySchemaMixin;
export declare function hubbardVPropertySchemaMixin(item: InMemoryEntity): void;
