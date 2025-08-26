"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionEnergyProfileConfig = void 0;
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class ReactionEnergyProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "reaction coordinate";
        this.tooltipYAxisName = "energy";
    }
}
exports.ReactionEnergyProfileConfig = ReactionEnergyProfileConfig;
class ReactionEnergyProfileProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: ReactionEnergyProfileProperty.propertyName });
        this.subtitle = "Reaction Energy Profile";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.xAxisTitle = "Reaction Coordinate";
        this.chartConfig = new ReactionEnergyProfileConfig(this).config;
    }
}
ReactionEnergyProfileProperty.isRefined = true;
ReactionEnergyProfileProperty.propertyName = settings_1.PropertyName.reaction_energy_profile;
(0, _2d_plot_1.twoDimensionalPlotMixin)(ReactionEnergyProfileProperty.prototype);
exports.default = ReactionEnergyProfileProperty;
