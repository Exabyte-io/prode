import type { DimensionPlotSchema } from "@mat3ra/esse/dist/js/types";
import { type FormatterScope, type HighChartsConfigParams, HighChartsConfig } from "../../../charts/highcharts";
import type Property from "../../../Property";
export type TwoDimensionalPlotMixin<S extends {
    xDataArray: XDataArray;
    yDataSeries: YDataSeries;
    yAxis: DimensionPlotSchema["yAxis"];
    xAxis: DimensionPlotSchema["xAxis"];
} = {
    xDataArray: XDataArray;
    yDataSeries: YDataSeries;
    yAxis: DimensionPlotSchema["yAxis"];
    xAxis: DimensionPlotSchema["xAxis"];
}> = {
    xDataArray: S["xDataArray"];
    yDataSeries: S["yDataSeries"];
    yAxis: S["yAxis"];
    xAxis: S["xAxis"];
};
export type XDataArray = DimensionPlotSchema["xDataArray"];
export type XDataArraySimple = number[];
export type XDataArrayNested = XDataArraySimple[];
export type YDataSeries = DimensionPlotSchema["yDataSeries"];
export declare function twoDimensionalPlotMixin(item: Property): void;
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
