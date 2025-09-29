import type { Constructor } from "@mat3ra/code/dist/js/utils/types.js";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { IndividualSeriesOptions, Options } from "highcharts";
import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, type YDataSeries } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = DensityOfStatesPropertySchema;
export declare class DensityOfStatesConfig extends HighChartsConfig {
    readonly yDataSeries: YDataSeries;
    readonly fermiEnergy: number | null;
    readonly xDataArray: Schema["xDataArray"];
    readonly legends: Schema["legend"];
    get overrideConfig(): {
        colors: string[];
        credits: {
            enabled: boolean;
        };
        chart: {
            type: string;
            zoomType: string;
            animation: boolean;
        };
        legend: {
            layout: string;
            align: string;
            verticalAlign: string;
            borderWidth: number;
        };
    };
    constructor(property: {
        subtitle: string;
        yAxisTitle: string;
        xAxisTitle: string;
        yDataSeries: YDataSeries;
        legend?: Schema["legend"];
        xDataArray: Schema["xDataArray"];
    }, chartConfig?: {
        fermiEnergy?: number | null;
    });
    cleanXDataArray(rawData: Schema["xDataArray"]): number[];
    get series(): IndividualSeriesOptions[];
    tooltipFormatter(): (this: FormatterScope) => string;
    xAxis(): {
        plotLines: import("highcharts").PlotLines[];
        allowDecimals?: boolean;
        alternateGridColor?: string;
        breaks?: import("highcharts").AxisBreak[];
        categories?: any[] | null;
        ceiling?: number;
        className?: string;
        crosshair?: import("highcharts").CrosshairObject | boolean;
        dateTimeLabelFormats?: import("highcharts").DateTimeFormats;
        description?: string;
        endOnTick?: boolean;
        events?: {
            afterBreaks?(event: Event): void;
            afterSetExtremes?(event: import("highcharts").AxisEvent): void;
            pointBreak?(event: Event): void;
            setExtremes?(event: import("highcharts").AxisEvent): void;
        };
        floor?: number | null;
        gridLineColor?: string;
        gridLineDashStyle?: string;
        gridLineWidth?: number;
        gridLineInterpolation?: string;
        gridZIndex?: number;
        id?: string;
        labels?: import("highcharts").AxisLabels;
        lineColor?: string | import("highcharts").Gradient;
        lineWidth?: number;
        linkedTo?: number;
        max?: number | null;
        maxPadding?: number;
        maxZoom?: number;
        min?: number | null;
        minPadding?: number;
        minRange?: number;
        minTickInterval?: number;
        minorGridLineColor?: string;
        minorGridLineDashStyle?: string;
        minorGridLineWidth?: number;
        minorTickColor?: string;
        minorTickInterval?: number | string | null;
        minorTickLength?: number;
        minorTickPosition?: string;
        minorTickWidth?: number;
        offset?: number;
        opposite?: boolean;
        plotBands?: import("highcharts").PlotBands[];
        reversed?: boolean;
        reversedStacks?: boolean;
        showEmpty?: boolean;
        showFirstLabel?: boolean;
        showLastLabel?: boolean;
        softMax?: number;
        softMin?: number;
        stackLabels?: {
            align?: string;
            enabled?: boolean;
            format?: string;
            formatter?: Function;
            rotation?: number;
            style?: import("highcharts").CSSObject;
            textAlign?: string;
            useHTML?: boolean;
            verticalAlign?: string;
            x?: number;
            y?: number;
        };
        startOfWeek?: number;
        startOnTick?: boolean;
        stops?: Array<Array<number | string>>;
        tickAmount?: number;
        tickColor?: string;
        tickInterval?: number | null;
        tickLength?: number;
        tickPixelInterval?: number | null;
        tickPosition?: string;
        tickPositioner?(min: number, max: number): void;
        tickPositions?: number[];
        tickWidth?: number;
        tickmarkPlacement?: string | null;
        title?: import("highcharts").AxisTitle | null;
        type?: string;
        units?: Array<[string, number[]]>;
        visible?: boolean;
    };
}
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;
declare const DensityOfStatesProperty_base: Base;
export default class DensityOfStatesProperty extends DensityOfStatesProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.density_of_states;
    constructor(config: Omit<Schema, "name"> & {
        fermiEnergy?: number | null;
    });
    toJSON: () => Schema & AnyObject;
    _json: Schema & AnyObject;
    get legend(): {
        element?: string;
        index?: number;
        electronicState?: string;
        spin?: 0.5 | -0.5;
    }[];
}
export {};
