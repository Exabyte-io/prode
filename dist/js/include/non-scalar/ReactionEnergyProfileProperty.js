"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionEnergyProfileConfig = void 0;
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
class ReactionEnergyProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "reaction coordinate";
        this.tooltipYAxisName = "energy";
    }
}
exports.ReactionEnergyProfileConfig = ReactionEnergyProfileConfig;
class ReactionEnergyProfileProperty extends Property_1.default {
    constructor() {
        super(...arguments);
        this.subtitle = "Reaction Energy Profile";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.xAxisTitle = "Reaction Coordinate";
        this.chartConfig = new ReactionEnergyProfileConfig(this).config;
    }
}
exports.default = ReactionEnergyProfileProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(ReactionEnergyProfileProperty.prototype);
