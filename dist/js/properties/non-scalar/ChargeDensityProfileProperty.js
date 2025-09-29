"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDensityProfileConfig = void 0;
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class ChargeDensityProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "charge density";
    }
}
exports.ChargeDensityProfileConfig = ChargeDensityProfileConfig;
class ChargeDensityProfileProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: ChargeDensityProfileProperty.propertyName });
        this.subtitle = "Charge Density Profile";
        this.yAxisTitle = `Charge Density (${this.yAxis.units})`;
        this.xAxisTitle = "Z Coordinate";
        this.chartConfig = new ChargeDensityProfileConfig(this).config;
    }
}
ChargeDensityProfileProperty.isRefined = true;
ChargeDensityProfileProperty.propertyName = settings_1.PropertyName.charge_density_profile;
(0, _2d_plot_1.twoDimensionalPlotMixin)(ChargeDensityProfileProperty.prototype);
exports.default = ChargeDensityProfileProperty;
