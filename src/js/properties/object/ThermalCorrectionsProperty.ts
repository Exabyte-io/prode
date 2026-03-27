import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ThermalCorrectionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    ThermalCorrectionsPropertySchemaMixin,
    thermalCorrectionsPropertySchemaMixin,
} from "../../generated/ThermalCorrectionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ThermalCorrectionsPropertySchema;

type Base = typeof Property<Schema> & Constructor<ThermalCorrectionsPropertySchemaMixin>;

export default class ThermalCorrectionsProperty extends (Property as Base) implements Schema {
    static readonly propertyType = PropertyType.object;

    static readonly propertyName = PropertyName.thermal_corrections;

    static readonly isRefined = true;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ThermalCorrectionsProperty.propertyName });
    }

    get toEnergy() {
        return this.to_energy;
    }

    get toEnthalpy() {
        return this.to_enthalpy;
    }
}

thermalCorrectionsPropertySchemaMixin(ThermalCorrectionsProperty.prototype);
