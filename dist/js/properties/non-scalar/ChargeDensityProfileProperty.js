"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeDensityProfileConfig = void 0;
const ChargeDensityProfilePropertySchemaMixin_1 = require("../../generated/ChargeDensityProfilePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
class ChargeDensityProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "charge density";
    }
}
exports.ChargeDensityProfileConfig = ChargeDensityProfileConfig;
class ChargeDensityProfileProperty extends Property_1.default {
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
ChargeDensityProfileProperty.propertyType = settings_1.PropertyType.non_scalar;
(0, ChargeDensityProfilePropertySchemaMixin_1.chargeDensityProfilePropertySchemaMixin)(ChargeDensityProfileProperty.prototype);
exports.default = ChargeDensityProfileProperty;
