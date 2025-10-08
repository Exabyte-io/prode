import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HubbardVNNPropertySchemaMixin = Omit<HubbardVNNParametersPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HubbardVNNPropertyInMemoryEntity = InMemoryEntity & HubbardVNNPropertySchemaMixin;
export declare function hubbardVNNPropertySchemaMixin(item: InMemoryEntity): void;
