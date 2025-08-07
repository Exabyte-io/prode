"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoDimensionalHighChartConfigMixin = void 0;
exports.twoDimensionalPlotMixin = twoDimensionalPlotMixin;
const lodash_1 = __importDefault(require("lodash"));
const highcharts_1 = require("../../charts/highcharts");
function twoDimensionalPlotMixin(item) {
    // @ts-expect-error - this is a workaround to allow the mixin to be used with any type of entity
    const properties = {
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        get xAxis() {
            return this.requiredProp("xAxis");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
class TwoDimensionalHighChartConfigMixin extends highcharts_1.HighChartsConfig {
    constructor(property) {
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            xAxisTitle: property.xAxisTitle,
            yAxisType: "linear",
            legend: property.legend || false,
        });
        // override upon inheritance
        this.tooltipXAxisName = "";
        // override upon inheritance
        this.tooltipYAxisName = "";
        this.xDataArray = property.xDataArray;
        this.yDataSeries = property.yDataSeries;
    }
    get series() {
        return this.yDataSeries.map((item) => {
            return {
                animation: false,
                data: lodash_1.default.zip(this.xDataArray, item),
            };
        });
    }
    tooltipFormatter(xDataArray = []) {
        const { tooltipXAxisName, tooltipYAxisName } = this;
        // eslint-disable-next-line func-names
        return function () {
            const xValue = xDataArray[this.point.index];
            return ("<b>" +
                tooltipXAxisName +
                "</b> " +
                (Array.isArray(xValue) ? xValue.join(", ") : xValue.toFixed(4)) +
                "<br><b>" +
                tooltipYAxisName +
                ": </b>  " +
                this.y.toFixed(4));
        };
    }
    get overrideConfig() {
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
exports.TwoDimensionalHighChartConfigMixin = TwoDimensionalHighChartConfigMixin;
