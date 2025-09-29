"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DensityOfStatesConfig = void 0;
const zip_1 = __importDefault(require("lodash/zip"));
const highcharts_1 = require("../../charts/highcharts");
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
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
    constructor(property, chartConfig) {
        var _a;
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            xAxisTitle: property.xAxisTitle,
            yAxisType: "linear",
        });
        this.yDataSeries = property.yDataSeries;
        this.legends = property.legend || [];
        this.fermiEnergy = (_a = chartConfig === null || chartConfig === void 0 ? void 0 : chartConfig.fermiEnergy) !== null && _a !== void 0 ? _a : 0;
        this.xDataArray = this.cleanXDataArray(property.xDataArray);
    }
    // shifting values wrt fermi energy here
    cleanXDataArray(rawData) {
        return rawData.flat().map((x) => {
            const value = this.fermiEnergy ? x - this.fermiEnergy : x;
            return Number(value.toPrecision(4));
        });
    }
    get series() {
        return this.yDataSeries.map((item, index) => {
            const legend = this.legends[index];
            const spinText = (legend === null || legend === void 0 ? void 0 : legend.spin) ? ` ${legend.spin > 0 ? "↑" : "↓"}` : "";
            const name = (legend === null || legend === void 0 ? void 0 : legend.element)
                ? `${legend.element} ${legend.electronicState}${spinText}`
                : "Total";
            return {
                data: (0, zip_1.default)(this.xDataArray, item.map((x) => Number(Number(x).toPrecision(4)))),
                name,
                color: name === "Total" ? "#000000" : undefined,
                animation: false,
            };
        });
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
class DensityOfStatesProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: DensityOfStatesProperty.propertyName });
        this.subtitle = "Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Energy (${this.xAxis.units})`;
        this.chartConfig = new DensityOfStatesConfig(this, {
            fermiEnergy: config.fermiEnergy,
        }).config;
    }
    get legend() {
        return this.requiredProp("legend");
    }
}
DensityOfStatesProperty.isRefined = true;
DensityOfStatesProperty.propertyName = settings_1.PropertyName.density_of_states;
exports.default = DensityOfStatesProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(DensityOfStatesProperty.prototype);
