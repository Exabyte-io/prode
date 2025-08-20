"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveragePotentialProfileConfig = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
const NAMES = ["planar average", "macroscopic average"];
class AveragePotentialProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "energy";
    }
    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index],
                data: lodash_1.default.zip(this.xDataArray, item),
            };
        });
    }
    get overrideConfig() {
        return {
            ...super.overrideConfig,
            legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                borderWidth: 0,
            },
        };
    }
}
exports.AveragePotentialProfileConfig = AveragePotentialProfileConfig;
class AveragePotentialProfileProperty extends Property_1.default {
    constructor() {
        super(...arguments);
        this.subtitle = "Average Potential Profile";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.xAxisTitle = `Coordinate (${this.xAxis.units})`;
        this.chartConfig = new AveragePotentialProfileConfig(this).config;
    }
}
exports.default = AveragePotentialProfileProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(AveragePotentialProfileProperty.prototype);
