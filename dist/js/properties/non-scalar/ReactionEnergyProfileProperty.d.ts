import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { ReactionEnergyProfilePropertySchemaMixin } from "../../generated/ReactionEnergyProfilePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
type Schema = ReactionEnergyProfilePropertySchema;
export declare class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
}
type Base = typeof Property<Schema> & Constructor<ReactionEnergyProfilePropertySchemaMixin>;
declare const ReactionEnergyProfileProperty_base: Base;
declare class ReactionEnergyProfileProperty extends ReactionEnergyProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.reaction_energy_profile;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export default ReactionEnergyProfileProperty;
