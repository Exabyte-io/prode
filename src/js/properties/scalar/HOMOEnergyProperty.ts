import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    HOMOEnergyPropertySchemaMixin,
    // The generated helper lowercases only the first character of leading acronyms.
    hOMOEnergyPropertySchemaMixin as homoEnergyPropertySchemaMixin,
} from "../../generated/HOMOEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = HOMOEnergyPropertySchema;

type Base = typeof Property<Schema> & Constructor<HOMOEnergyPropertySchemaMixin>;

export default class HOMOEnergyProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.homo_energy;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: HOMOEnergyProperty.propertyName });
    }
}

homoEnergyPropertySchemaMixin(HOMOEnergyProperty.prototype);
