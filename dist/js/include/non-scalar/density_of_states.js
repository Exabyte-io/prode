"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DensityOfStatesProperty = exports.DensityOfStatesConfig = void 0;
const zip_1 = __importDefault(require("lodash/zip"));
const highcharts_1 = require("../../charts/highcharts");
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
class DensityOfStatesConfig extends highcharts_1.HighChartsConfig {
    get overrideConfig() {
        return {
            colors: [
                "#7cb5ec",
                "#90ed7d",
                "#f7a35c",
                "#8085e9",
                "#f15c80",
                "#e4d354",
                "#2b908f",
                "#f45b5b",
                "#91e8e1",
            ],
            credits: {
                enabled: false,
            },
            chart: {
                type: "spline",
                zoomType: "xy",
                animation: false,
            },
            legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                borderWidth: 0,
            },
        };
    }
    constructor(property) {
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            xAxisTitle: property.xAxisTitle,
            yAxisType: "linear",
        });
        this.yDataSeries = property.yDataSeries;
        this.legends = property.legend;
        this.fermiEnergy = property.fermiEnergy;
        this.xDataArray = this.cleanXDataArray(property.xDataArray);
    }
    // shifting values wrt fermi energy here
    cleanXDataArray(rawData) {
        return rawData.flat().map((x) => {
            const value = this.fermiEnergy ? x - this.fermiEnergy : x;
            return +value.toPrecision(4);
        });
    }
    get series() {
        const series_ = this.yDataSeries.map((item, index) => {
            const legend = this.legends[index];
            const { spin } = legend;
            const spinText = spin ? ` ${spin > 0 ? "↑" : "↓"}` : "";
            const name = legend && legend.element
                ? `${legend.element} ${legend.electronicState}${spinText}`
                : "Total";
            return {
                data: (0, zip_1.default)(this.xDataArray, item.map((x) => Number(x).toPrecision(4))),
                name,
                color: name === "Total" ? "#000000" : undefined,
                animation: false,
            };
        });
        return series_;
    }
    tooltipFormatter() {
        // eslint-disable-next-line func-names
        return function () {
            return ("<b>state:</b> " +
                this.series.name +
                "<br>" +
                "<b>energy:</b> " +
                this.key.toFixed(4) +
                "<br>" +
                "<b>value: </b>  " +
                this.y.toFixed(4));
        };
    }
    xAxis() {
        return {
            ...super.xAxis(),
            plotLines: this.fermiEnergy
                ? this.plotSingleLine({
                    value: 0.0,
                    label: {
                        text: "E_F",
                        style: {
                            color: "red",
                        },
                        y: 15,
                        x: 5,
                        rotation: 0,
                    },
                })
                : [],
        };
    }
}
exports.DensityOfStatesConfig = DensityOfStatesConfig;
class DensityOfStatesProperty extends Property_1.default {
    constructor(config, ConfigBuilder = DensityOfStatesConfig) {
        super(config);
        this.subtitle = "Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Energy (${this.xAxis.units})`;
        this.fermiEnergy = 0;
        this.chartConfig = new ConfigBuilder(this).config;
    }
    get legend() {
        return this.requiredProp("legend");
    }
}
exports.DensityOfStatesProperty = DensityOfStatesProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(DensityOfStatesProperty.prototype);
