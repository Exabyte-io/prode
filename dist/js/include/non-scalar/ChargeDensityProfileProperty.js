"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDensityProfileConfig = void 0;
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
class ChargeDensityProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "charge density";
    }
}
exports.ChargeDensityProfileConfig = ChargeDensityProfileConfig;
class ChargeDensityProfileProperty extends Property_1.default {
    constructor() {
        super(...arguments);
        this.subtitle = "Charge Density Profile";
        this.yAxisTitle = `Charge Density (${this.yAxis.units})`;
        this.xAxisTitle = "Z Coordinate";
        this.chartConfig = new ChargeDensityProfileConfig(this).config;
    }
}
exports.default = ChargeDensityProfileProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(ChargeDensityProfileProperty.prototype);
