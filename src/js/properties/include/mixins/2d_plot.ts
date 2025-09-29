import type { DimensionPlotSchema } from "@mat3ra/esse/dist/js/types";
import zip from "lodash/zip";

import {
    type FormatterScope,
    type HighChartsConfigParams,
    HighChartsConfig,
} from "../../../charts/highcharts";
import type Property from "../../../Property";

export type TwoDimensionalPlotMixin<
    S extends {
        xDataArray: XDataArray;
        yDataSeries: YDataSeries;
        yAxis: DimensionPlotSchema["yAxis"];
        xAxis: DimensionPlotSchema["xAxis"];
    } = {
        xDataArray: XDataArray;
        yDataSeries: YDataSeries;
        yAxis: DimensionPlotSchema["yAxis"];
        xAxis: DimensionPlotSchema["xAxis"];
    },
> = {
    xDataArray: S["xDataArray"];
    yDataSeries: S["yDataSeries"];
    yAxis: S["yAxis"];
    xAxis: S["xAxis"];
};

export type XDataArray = DimensionPlotSchema["xDataArray"];
export type XDataArraySimple = number[];
export type XDataArrayNested = XDataArraySimple[];
export type YDataSeries = DimensionPlotSchema["yDataSeries"];

export function twoDimensionalPlotMixin(item: Property) {
    // @ts-expect-error - this is a workaround to allow the mixin to be used with any type of entity
    const properties: Property & TwoDimensionalPlotMixin<DimensionPlotSchema> = {
        get xDataArray() {
            return this.requiredProp<XDataArray>("xDataArray");
        },

        get yDataSeries() {
            return this.requiredProp<YDataSeries>("yDataSeries");
        },

        get yAxis() {
            return this.requiredProp<DimensionPlotSchema["yAxis"]>("yAxis");
        },

        get xAxis() {
            return this.requiredProp<DimensionPlotSchema["xAxis"]>("xAxis");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}

export type TwoDimensionalHighChartConfigMixinParams = {
    subtitle: string;
    yAxisTitle: string;
    xAxisTitle: string;
    xDataArray: XDataArray;
    yDataSeries: YDataSeries;
    legend?: HighChartsConfigParams["legend"];
};

export class TwoDimensionalHighChartConfigMixin extends HighChartsConfig {
    readonly xDataArray: XDataArray;

    readonly yDataSeries: YDataSeries;

    // override upon inheritance
    readonly tooltipXAxisName: string = "";

    // override upon inheritance
    readonly tooltipYAxisName: string = "";

    constructor(property: TwoDimensionalHighChartConfigMixinParams) {
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            xAxisTitle: property.xAxisTitle,
            yAxisType: "linear",
            legend: property.legend || false,
        });
        this.xDataArray = property.xDataArray;
        this.yDataSeries = property.yDataSeries;
    }

    get series() {
        return this.yDataSeries.map((item) => {
            return {
                animation: false,
                data: zip(this.xDataArray, item) as [number, number][],
            };
        });
    }

    tooltipFormatter(xDataArray: XDataArray = []) {
        const { tooltipXAxisName, tooltipYAxisName } = this;

        // eslint-disable-next-line func-names
        return function (this: FormatterScope) {
            const xValue = xDataArray[this.point.index];
            return (
                "<b>" +
                tooltipXAxisName +
                "</b> " +
                (Array.isArray(xValue) ? xValue.join(", ") : xValue.toFixed(4)) +
                "<br><b>" +
                tooltipYAxisName +
                ": </b>  " +
                this.y.toFixed(4)
            );
        };
    }

    get overrideConfig(): object {
        const { xDataArray } = this;
        return {
            chart: {
                animation: false,
                type: "spline",
                zoomType: "xy",
            },
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 6,
                        },
                    },
                    marker: {
                        enabled: false,
                    },
                },
            },
            tooltip: {
                valueSuffix: "",
                formatter: this.tooltipFormatter(xDataArray),
            },
            legend: {
                enabled: false,
            },
        };
    }
}
