import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { LUMOEnergyPropertySchemaMixin } from "../../generated/LUMOEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = LUMOEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<LUMOEnergyPropertySchemaMixin>;
declare const LUMOEnergyProperty_base: Base;
export default class LUMOEnergyProperty extends LUMOEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.lumo_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
