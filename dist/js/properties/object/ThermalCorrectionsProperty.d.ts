import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ThermalCorrectionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { ThermalCorrectionsPropertySchemaMixin } from "../../generated/ThermalCorrectionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = ThermalCorrectionsPropertySchema;
type Base = typeof Property<Schema> & Constructor<ThermalCorrectionsPropertySchemaMixin>;
declare const ThermalCorrectionsProperty_base: Base;
export default class ThermalCorrectionsProperty extends ThermalCorrectionsProperty_base implements Schema {
    static readonly propertyType = PropertyType.object;
    static readonly propertyName = PropertyName.thermal_corrections;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
    get toEnergy(): {
        name?: "to_energy";
        value: number;
    } | undefined;
    get toEnthalpy(): {
        name?: "to_enthalpy";
        value: number;
    } | undefined;
}
export {};
