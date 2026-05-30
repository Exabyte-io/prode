import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    FormationEnergyPropertySchemaMixin,
    formationEnergyPropertySchemaMixin,
} from "../../generated/FormationEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = FormationEnergyPropertySchema;

type Base = typeof Property<Schema> & Constructor<FormationEnergyPropertySchemaMixin>;

export default class FormationEnergyProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.formation_energy;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: FormationEnergyProperty.propertyName });
    }
}

formationEnergyPropertySchemaMixin(FormationEnergyProperty.prototype);
