"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionEnergyProfileConfig = void 0;
const ReactionEnergyProfilePropertySchemaMixin_1 = require("../../generated/ReactionEnergyProfilePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
class ReactionEnergyProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "reaction coordinate";
        this.tooltipYAxisName = "energy";
    }
}
exports.ReactionEnergyProfileConfig = ReactionEnergyProfileConfig;
class ReactionEnergyProfileProperty extends Property_1.default {
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
ReactionEnergyProfileProperty.propertyType = settings_1.PropertyType.non_scalar;
(0, ReactionEnergyProfilePropertySchemaMixin_1.reactionEnergyProfilePropertySchemaMixin)(ReactionEnergyProfileProperty.prototype);
exports.default = ReactionEnergyProfileProperty;
