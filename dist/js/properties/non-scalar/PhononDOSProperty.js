"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
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
class PhononDOSProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: PhononDOSProperty.propertyName });
        this.subtitle = "Phonon Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Frequency (${this.xAxis.units})`;
        this.fermiEnergy = null;
        this.chartConfig = new PhononDOSConfig(this).config;
    }
}
PhononDOSProperty.propertyName = settings_1.PropertyName.phonon_dos;
exports.default = PhononDOSProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PhononDOSProperty.prototype);
