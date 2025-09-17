import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { BandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options, PlotLines } from "highcharts";
import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, type XDataArray, type XDataArrayNested, type YDataSeries } from "../include/mixins/2d_plot";
import { type SpinDependentMixin } from "../include/mixins/spin_dependent";
import NonScalarProperty from "./base/NonScalarProperty";
export declare const _POINT_COORDINATES_PRECISION_ = 4;
export declare class BandStructureConfig extends HighChartsConfig {
    readonly yDataSeries: YDataSeries;
    readonly spin?: number[];
    readonly xDataArray: XDataArrayNested;
    readonly pointsDistanceArray: number[];
    readonly fermiEnergy: number | null;
    readonly pointsPath: KPointPath | undefined;
    constructor(property: SpinDependentMixin & TwoDimensionalPlotMixin & {
        subtitle: string;
        yAxisTitle: string;
        fermiEnergy: number | null;
        pointsPath: KPointPath | undefined;
    });
    cleanXDataArray(rawData?: XDataArray): XDataArrayNested;
    calculatePointsDistance(listOfPoints?: XDataArrayNested): number[];
    findSymmetryPointIndex(xDataArray: XDataArrayNested, point: number[]): number;
    plotXLines(): PlotLines[];
    plotXLineAtPoint({ point, distance }: {
        point: string;
        distance: number | null;
    }): PlotLines;
    get series(): {
        data: [number, number][];
        name: string;
        color: string;
        animation: boolean;
    }[];
    xAxis(): {
        minorGridLineColor: string;
        minorGridLineWidth: number;
        minorTickLength: number;
        title: {
            text: string;
            offset: number;
        };
        type: string;
        tickPositioner: () => never[];
        plotLines: PlotLines[] | undefined;
        labels: {
            enabled: boolean;
        };
    };
    tooltipFormatter(xDataArray: XDataArrayNested, yAxisName?: string): (this: FormatterScope) => string;
    yAxis(): {
        gridZIndex: number;
        plotLines: PlotLines[];
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
    get overrideConfig(): {
        chart: {
            animation: boolean;
            type: string;
            zoomType: string;
        };
        plotOptions: {
            spline: {
                lineWidth: number;
                states: {
                    hover: {
                        lineWidth: number;
                    };
                };
                marker: {
                    enabled: boolean;
                };
            };
        };
        tooltip: {
            valueSuffix: string;
            formatter: (this: FormatterScope) => string;
        };
        legend: {
            enabled: boolean;
        };
    };
}
type Schema = BandStructurePropertySchema;
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>> & Constructor<SpinDependentMixin<Schema>>;
declare const BandStructureProperty_base: Base;
export default class BandStructureProperty extends BandStructureProperty_base implements Schema {
    toJSON: () => BandStructurePropertySchema & AnyObject;
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly fermiEnergy: number | null;
    readonly pointsPath: KPointPath | undefined;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.band_structure;
    constructor(config: Omit<Schema, "name">);
}
export {};
