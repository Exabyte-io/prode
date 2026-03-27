import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HeatCapacityCvPropertySchema } from "@mat3ra/esse/dist/js/types";
import { HeatCapacityCVPropertySchemaMixin } from "../../generated/HeatCapacityCVPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HeatCapacityCvPropertySchema;
type Base = typeof Property<Schema> & Constructor<HeatCapacityCVPropertySchemaMixin>;
declare const HeatCapacityCVProperty_base: Base;
export default class HeatCapacityCVProperty extends HeatCapacityCVProperty_base implements Schema {
    static readonly propertyType = PropertyType.scalar;
    static readonly propertyName = PropertyName.heat_capacity_cv;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
}
export {};
