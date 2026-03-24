import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    LUMOEnergyPropertySchemaMixin,
    // The generated helper lowercases only the first character of leading acronyms.
    lUMOEnergyPropertySchemaMixin as lumoEnergyPropertySchemaMixin,
} from "../../generated/LUMOEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = LUMOEnergyPropertySchema;

type Base = typeof Property<Schema> & Constructor<LUMOEnergyPropertySchemaMixin>;

export default class LUMOEnergyProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.lumo_energy;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: LUMOEnergyProperty.propertyName });
    }
}

lumoEnergyPropertySchemaMixin(LUMOEnergyProperty.prototype);
