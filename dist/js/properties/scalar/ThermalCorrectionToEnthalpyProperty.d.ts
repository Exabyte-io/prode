import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { ThermalCorrectionToEnthalpyPropertySchemaMixin } from "../../generated/ThermalCorrectionToEnthalpyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = ThermalCorrectionToEnthalpyPropertySchema;
type Base = typeof Property<Schema> & Constructor<ThermalCorrectionToEnthalpyPropertySchemaMixin>;
declare const ThermalCorrectionToEnthalpyProperty_base: Base;
export default class ThermalCorrectionToEnthalpyProperty extends ThermalCorrectionToEnthalpyProperty_base implements Schema {
    static readonly propertyType = PropertyType.scalar;
    static readonly propertyName = PropertyName.thermal_correction_to_enthalpy;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
}
export {};
