import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
export type StressTensorPropertySchemaMixin = Omit<StressTensorPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type StressTensorPropertyInMemoryEntity = InMemoryEntity & StressTensorPropertySchemaMixin;
export declare function stressTensorPropertySchemaMixin(item: InMemoryEntity): void;
