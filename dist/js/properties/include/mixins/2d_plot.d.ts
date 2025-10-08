import type { DimensionPlotSchema } from "@mat3ra/esse/dist/js/types";
import { type FormatterScope, type HighChartsConfigParams, HighChartsConfig } from "../../../charts/highcharts";
export type XDataArray = DimensionPlotSchema["xDataArray"];
export type XDataArraySimple = number[];
export type XDataArrayNested = XDataArraySimple[];
export type YDataSeries = DimensionPlotSchema["yDataSeries"];
export type TwoDimensionalHighChartConfigMixinParams = {
    subtitle: string;
    yAxisTitle: string;
    xAxisTitle: string;
    xDataArray: XDataArray;
    yDataSeries: YDataSeries;
    legend?: HighChartsConfigParams["legend"];
};
export declare class TwoDimensionalHighChartConfigMixin extends HighChartsConfig {
    readonly xDataArray: XDataArray;
    readonly yDataSeries: YDataSeries;
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
    constructor(property: TwoDimensionalHighChartConfigMixinParams);
    get series(): {
        animation: boolean;
        data: [number, number][];
    }[];
    tooltipFormatter(xDataArray?: XDataArray): (this: FormatterScope) => string;
    get overrideConfig(): object;
}
