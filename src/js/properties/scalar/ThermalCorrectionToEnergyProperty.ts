import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    ThermalCorrectionToEnergyPropertySchemaMixin,
    thermalCorrectionToEnergyPropertySchemaMixin,
} from "../../generated/ThermalCorrectionToEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ThermalCorrectionToEnergyPropertySchema;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ThermalCorrectionToEnergyProperty extends ThermalCorrectionToEnergyPropertySchemaMixin {}

class ThermalCorrectionToEnergyProperty extends Property<Schema> implements Schema {
    static readonly propertyType = PropertyType.scalar;

    static readonly propertyName = PropertyName.thermal_correction_to_energy;

    static readonly isRefined = true;

    declare name: Schema["name"];

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ThermalCorrectionToEnergyProperty.propertyName });
    }
}

thermalCorrectionToEnergyPropertySchemaMixin(ThermalCorrectionToEnergyProperty.prototype);

export default ThermalCorrectionToEnergyProperty;
