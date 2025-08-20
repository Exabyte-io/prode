import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyProfileSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";
export declare class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
}
type BaseProperty = typeof Property & Constructor<TwoDimensionalPlotMixin<ReactionEnergyProfileSchema>>;
declare const ReactionEnergyProfileProperty_base: BaseProperty;
export declare class ReactionEnergyProfileProperty extends ReactionEnergyProfileProperty_base {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    name: ReactionEnergyProfileSchema["name"];
}
export {};
