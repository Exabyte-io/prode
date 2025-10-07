import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
export type PhononDispersionsPropertySchemaMixin = Omit<PhononBandStructurePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PhononDispersionsPropertyInMemoryEntity = InMemoryEntity & PhononDispersionsPropertySchemaMixin;
export declare function phononDispersionsPropertySchemaMixin(item: InMemoryEntity): void;
