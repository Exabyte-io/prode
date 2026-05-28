import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyReferencesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FormationEnergyReferencesPropertySchemaMixin = Omit<FormationEnergyReferencesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FormationEnergyReferencesPropertyInMemoryEntity = InMemoryEntity & FormationEnergyReferencesPropertySchemaMixin;
export declare function formationEnergyReferencesPropertySchemaMixin(item: InMemoryEntity): void;
