import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    ThermalCorrectionToEnergyPropertySchemaMixin,
    thermalCorrectionToEnergyPropertySchemaMixin,
} from "../../generated/ThermalCorrectionToEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ThermalCorrectionToEnergyPropertySchema;

type Base = typeof Property<Schema> & Constructor<ThermalCorrectionToEnergyPropertySchemaMixin>;

export default class ThermalCorrectionToEnergyProperty extends (Property as Base) implements Schema {
    static readonly propertyType = PropertyType.scalar;

    static readonly propertyName = PropertyName.thermal_correction_to_energy;

    static readonly isRefined = true;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ThermalCorrectionToEnergyProperty.propertyName });
    }
}

thermalCorrectionToEnergyPropertySchemaMixin(ThermalCorrectionToEnergyProperty.prototype);
