import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { HOMOEnergyPropertySchemaMixin } from "../../generated/HOMOEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HOMOEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<HOMOEnergyPropertySchemaMixin>;
declare const HOMOEnergyProperty_base: Base;
export default class HOMOEnergyProperty extends HOMOEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.homo_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
