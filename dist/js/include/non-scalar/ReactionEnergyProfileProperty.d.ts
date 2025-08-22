import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";
type Schema = ReactionEnergyProfilePropertySchema;
export declare class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
}
type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<ReactionEnergyProfilePropertySchema>>;
declare const ReactionEnergyProfileProperty_base: Base;
export default class ReactionEnergyProfileProperty extends ReactionEnergyProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    readonly name: Schema["name"];
    constructor(config: object);
}
export {};
