import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { ThermalCorrectionToEnthalpyPropertySchemaMixin } from "../../generated/ThermalCorrectionToEnthalpyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = ThermalCorrectionToEnthalpyPropertySchema;
interface ThermalCorrectionToEnthalpyProperty extends ThermalCorrectionToEnthalpyPropertySchemaMixin {
}
declare class ThermalCorrectionToEnthalpyProperty extends Property<Schema> implements Schema {
    static readonly propertyType = PropertyType.scalar;
    static readonly propertyName = PropertyName.thermal_correction_to_enthalpy;
    static readonly isRefined = true;
    name: Schema["name"];
    constructor(config: Omit<Schema, "name">);
}
export default ThermalCorrectionToEnthalpyProperty;
