import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { TotalEnergyPropertySchemaMixin } from "../../generated/TotalEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = TotalEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<TotalEnergyPropertySchemaMixin>;
declare const TotalEnergyProperty_base: Base;
export default class TotalEnergyProperty extends TotalEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.total_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
