import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { WavefunctionAmplitudePropertySchema } from "@mat3ra/esse/dist/js/types";
export type WavefunctionAmplitudePropertySchemaMixin = Omit<WavefunctionAmplitudePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type WavefunctionAmplitudePropertyInMemoryEntity = InMemoryEntity & WavefunctionAmplitudePropertySchemaMixin;
export declare function wavefunctionAmplitudePropertySchemaMixin(item: InMemoryEntity): void;
