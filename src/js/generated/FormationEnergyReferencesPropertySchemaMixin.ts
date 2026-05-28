import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyReferencesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FormationEnergyReferencesPropertySchemaMixin = Omit<
    FormationEnergyReferencesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FormationEnergyReferencesPropertyInMemoryEntity = InMemoryEntity &
    FormationEnergyReferencesPropertySchemaMixin;

export function formationEnergyReferencesPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & FormationEnergyReferencesPropertySchemaMixin = {
        get name() {
            return this.requiredProp<FormationEnergyReferencesPropertySchema["name"]>("name");
        },
        get value() {
            return this.requiredProp<FormationEnergyReferencesPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
