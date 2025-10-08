import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { type ChargeDensityProfilePropertySchemaMixin } from "../../generated/ChargeDensityProfilePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
export declare class ChargeDensityProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName = "z coordinate";
    readonly tooltipYAxisName = "charge density";
}
type Schema = ChargeDensityProfilePropertySchema;
type Base = typeof Property<Schema> & Constructor<ChargeDensityProfilePropertySchemaMixin>;
declare const ChargeDensityProfileProperty_base: Base;
declare class ChargeDensityProfileProperty extends ChargeDensityProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.charge_density_profile;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export default ChargeDensityProfileProperty;
