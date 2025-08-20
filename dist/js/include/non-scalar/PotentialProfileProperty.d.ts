import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PotentialProfileSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";
export declare class PotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
    get series(): {
        animation: boolean;
        name: string;
        data: [number, number][];
    }[];
    get overrideConfig(): {
        legend: {
            layout: string;
            align: string;
            verticalAlign: string;
            borderWidth: number;
        };
    };
}
type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<PotentialProfileSchema>>;
declare const PotentialProfileProperty_base: Base;
export default class PotentialProfileProperty extends PotentialProfileProperty_base {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    name: PotentialProfileSchema["name"];
}
export {};
