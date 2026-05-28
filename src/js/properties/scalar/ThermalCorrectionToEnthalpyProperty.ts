import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    ThermalCorrectionToEnthalpyPropertySchemaMixin,
    thermalCorrectionToEnthalpyPropertySchemaMixin,
} from "../../generated/ThermalCorrectionToEnthalpyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ThermalCorrectionToEnthalpyPropertySchema;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ThermalCorrectionToEnthalpyProperty
    extends ThermalCorrectionToEnthalpyPropertySchemaMixin {}

class ThermalCorrectionToEnthalpyProperty extends Property<Schema> implements Schema {
    static readonly propertyType = PropertyType.scalar;

    static readonly propertyName = PropertyName.thermal_correction_to_enthalpy;

    static readonly isRefined = true;

    declare name: Schema["name"];

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ThermalCorrectionToEnthalpyProperty.propertyName });
    }
}

thermalCorrectionToEnthalpyPropertySchemaMixin(ThermalCorrectionToEnthalpyProperty.prototype);

export default ThermalCorrectionToEnthalpyProperty;
