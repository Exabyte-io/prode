import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type PhononDOSPropertySchemaMixin = Omit<PhononDensityOfStatesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PhononDOSPropertyInMemoryEntity = InMemoryEntity & PhononDOSPropertySchemaMixin;
export declare function phononDOSPropertySchemaMixin(item: InMemoryEntity): void;
