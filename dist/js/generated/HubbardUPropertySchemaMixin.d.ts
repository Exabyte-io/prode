import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HubbardUPropertySchemaMixin = Omit<HubbardUParametersPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HubbardUPropertyInMemoryEntity = InMemoryEntity & HubbardUPropertySchemaMixin;
export declare function hubbardUPropertySchemaMixin(item: InMemoryEntity): void;
