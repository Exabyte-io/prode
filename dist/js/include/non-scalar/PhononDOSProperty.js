"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
const DensityOfStatesProperty_1 = require("./DensityOfStatesProperty");
class PhononDOSConfig extends DensityOfStatesProperty_1.DensityOfStatesConfig {
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
}
class PhononDOSProperty extends Property_1.default {
    constructor(config) {
        super(config);
        this.subtitle = "Phonon Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Frequency (${this.xAxis.units})`;
        this.fermiEnergy = null;
        this.chartConfig = new PhononDOSConfig(this).config;
    }
}
exports.default = PhononDOSProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PhononDOSProperty.prototype);
