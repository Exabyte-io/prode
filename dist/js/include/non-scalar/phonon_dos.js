"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhononDOSProperty = void 0;
const _2d_plot_1 = require("../mixins/2d_plot");
const density_of_states_1 = require("./density_of_states");
class PhononDOSConfig extends density_of_states_1.DensityOfStatesConfig {
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
class PhononDOSProperty extends density_of_states_1.DensityOfStatesProperty {
    constructor(config) {
        super(config, PhononDOSConfig);
        this.subtitle = "Phonon Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Frequency (${this.xAxis.units})`;
        this.fermiEnergy = null;
    }
}
exports.PhononDOSProperty = PhononDOSProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PhononDOSProperty.prototype);
