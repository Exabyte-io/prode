import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FormationEnergyReferencesPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    FormationEnergyReferencesPropertySchemaMixin,
    formationEnergyReferencesPropertySchemaMixin,
} from "../../generated/FormationEnergyReferencesPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = FormationEnergyReferencesPropertySchema;
type Base = typeof Property<Schema> & Constructor<FormationEnergyReferencesPropertySchemaMixin>;

export default class FormationEnergyReferencesProperty
    extends (Property as Base)
    implements Schema {
    static readonly propertyName = PropertyName.formation_energy_references;

    static readonly propertyType = PropertyType.non_scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: FormationEnergyReferencesProperty.propertyName });
    }
}

formationEnergyReferencesPropertySchemaMixin(FormationEnergyReferencesProperty.prototype);
