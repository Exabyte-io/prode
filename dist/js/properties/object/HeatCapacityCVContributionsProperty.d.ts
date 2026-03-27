import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HeatCapacityCvContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { HeatCapacityCVContributionsPropertySchemaMixin } from "../../generated/HeatCapacityCVContributionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HeatCapacityCvContributionsPropertySchema;
type Base = typeof Property<Schema> & Constructor<HeatCapacityCVContributionsPropertySchemaMixin>;
declare const HeatCapacityCVContributionsProperty_base: Base;
export default class HeatCapacityCVContributionsProperty extends HeatCapacityCVContributionsProperty_base implements Schema {
    static readonly propertyType = PropertyType.object;
    static readonly propertyName = PropertyName.heat_capacity_cv_contributions;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
}
export {};
