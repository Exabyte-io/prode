import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";
export declare class ChargeDensityProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName = "z coordinate";
    readonly tooltipYAxisName = "charge density";
}
type BaseProperty = typeof Property & Constructor<TwoDimensionalPlotMixin<ChargeDensityProfilePropertySchema>>;
declare const ChargeDensityProfileProperty_base: BaseProperty;
export default class ChargeDensityProfileProperty extends ChargeDensityProfileProperty_base {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    readonly name: ChargeDensityProfilePropertySchema["name"];
    constructor(config: object);
}
export {};
