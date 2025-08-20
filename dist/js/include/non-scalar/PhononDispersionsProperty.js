"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
const spin_dependent_1 = require("../mixins/spin_dependent");
const BandStructureProperty_1 = require("./BandStructureProperty");
class PhononDispersionsConfig extends BandStructureProperty_1.BandStructureConfig {
    tooltipFormatter(xDataArray, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}
class PhononDispersionsProperty extends Property_1.default {
    constructor(config) {
        super(config);
        this.subtitle = "Phonon Dispersions";
        this.yAxisTitle = `Frequency (${this.yAxis.units})`;
        // unset property
        this.fermiEnergy = null;
        // TODO: Add as config parameter
        this.pointsPath = undefined;
        this.chartConfig = new PhononDispersionsConfig(this).config;
    }
}
exports.default = PhononDispersionsProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PhononDispersionsProperty.prototype);
(0, spin_dependent_1.spinDependentMixin)(PhononDispersionsProperty.prototype);
