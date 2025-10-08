import type { AxisOptions, IndividualSeriesOptions, Options, PlotLines } from "highcharts";
import type { XDataArray } from "../properties/include/mixins/2d_plot";
/**
 * Callback JavaScript function to format the data label. Note that if a format is defined, the format takes
 * precedence and the formatter is ignored.
 * Available data are:
 * - this.percentage Stacked series and pies only. The point's percentage of the total.
 * - this.point      The point object. The point name, if defined, is available through this.point.name.
 * - this.series     The series object. The series name is available through this.series.name.
 * - this.total      Stacked series only. The total value at this point's x value.
 * - this.x:         The x value.
 * - this.y:         The y value.
 */
export type FormatterScope = {
    percentage: number;
    point: {
        name: string;
        index: number;
    };
    series: {
        name: string;
    };
    total: number;
    x: number;
    y: number;
    key: number;
};
export type Formatter = (this: FormatterScope) => string;
export interface HighChartsConfigParams {
    title?: string;
    subtitle: string;
    yAxisTitle?: string;
    xAxisTitle?: string;
    yAxisType: string;
    series?: IndividualSeriesOptions[];
    legend?: string[] | object[] | boolean;
}
/**
 * @description Base class for Highcharts configuration
 */
export declare abstract class HighChartsConfig implements HighChartsConfigParams {
    readonly title: HighChartsConfigParams["title"];
    readonly subtitle: HighChartsConfigParams["subtitle"];
    readonly yAxisTitle: HighChartsConfigParams["yAxisTitle"];
    readonly xAxisTitle: HighChartsConfigParams["xAxisTitle"];
    readonly yAxisType: HighChartsConfigParams["yAxisType"];
    readonly legend: HighChartsConfigParams["legend"];
    readonly _series: HighChartsConfigParams["series"];
    constructor({ title, subtitle, yAxisTitle, xAxisTitle, yAxisType, series, legend, }: HighChartsConfigParams);
    yAxis(): AxisOptions;
    xAxis(): AxisOptions;
    abstract tooltipFormatter(_xDataArray?: XDataArray): (this: FormatterScope) => string;
    plotSingleLine({ value, width, label, color, dashStyle, }: PlotLines): PlotLines[];
    get series(): IndividualSeriesOptions[] | undefined;
    get config(): Options;
    get overrideConfig(): Options;
}
