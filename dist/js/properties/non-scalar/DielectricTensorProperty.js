"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DielectricTensorConfig = void 0;
const zip_1 = __importDefault(require("lodash/zip"));
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class DielectricTensorConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: Array.isArray(this.legend) ? this.legend[index] : "",
                data: (0, zip_1.default)(this.xDataArray, item),
            };
        });
    }
    tooltipFormatter() {
        // eslint-disable-next-line func-names
        return function () {
            return ("<b>part:</b> " +
                this.series.name +
                "<br>" +
                "<b>frequency:</b> " +
                this.key.toFixed(4) +
                "<br>" +
                "<b>epsilon: </b>  " +
                this.y.toFixed(4));
        };
    }
    get overrideConfig() {
        return {
            ...super.overrideConfig,
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
}
exports.DielectricTensorConfig = DielectricTensorConfig;
class DielectricTensorProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: DielectricTensorProperty.propertyName });
        this.subtitle = "Dielectric Tensor";
        this.yAxisTitle = "Dielectric Tensor Component";
        this.xAxisTitle = "Frequency (eV)";
        this.chartConfig = this.getAllChartConfigs().map((chartConfig) => {
            const cfg = new DielectricTensorConfig(chartConfig);
            return cfg.config;
        });
    }
    get values() {
        return this.requiredProp("values");
    }
    rowMajorToColumnMajor(matrix) {
        return matrix.reduce((accumulator, item) => {
            const [x, y, z] = item;
            accumulator[0].push(x);
            accumulator[1].push(y);
            accumulator[2].push(z);
            return accumulator;
        }, [[], [], []]);
    }
    getComplementaryPairs(precision = 3) {
        const groupedBySpin = {};
        this.values.forEach((item) => {
            // Round the spin value to mitigate floating-point precision issues
            const spinValue = item.spin !== undefined ? item.spin.toFixed(precision) : "undefined";
            groupedBySpin[spinValue] = groupedBySpin[spinValue] || [];
            groupedBySpin[spinValue].push(item);
        });
        return Object.values(groupedBySpin).filter((group) => group.length === 2 &&
            group.find((item) => item.part === "real") &&
            group.find((item) => item.part === "imaginary"));
    }
    getAllChartConfigs() {
        const complementaryPairs = this.getComplementaryPairs();
        return complementaryPairs.map((pair) => {
            const xDataArray = pair[0].frequencies;
            const spinChannel = pair[0].spin ? ` - spin(${pair[0].spin})` : "";
            return {
                subtitle: `${this.subtitle}${spinChannel}`,
                xAxisTitle: this.xAxisTitle,
                yAxisTitle: this.yAxisTitle,
                yAxisType: "linear",
                xDataArray,
                yDataSeries: pair.flatMap((p) => this.rowMajorToColumnMajor(p.components)),
                legend: pair.flatMap((p) => [..."xyz"].map((char) => `eps_${char} (${p.part})`)),
            };
        });
    }
}
DielectricTensorProperty.propertyName = settings_1.PropertyName.dielectric_tensor;
exports.default = DielectricTensorProperty;
