import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FormationEnergyPropertySchemaMixin = Omit<
    FormationEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FormationEnergyPropertyInMemoryEntity = InMemoryEntity &
    FormationEnergyPropertySchemaMixin;

export function formationEnergyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & FormationEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<FormationEnergyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<FormationEnergyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<FormationEnergyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
