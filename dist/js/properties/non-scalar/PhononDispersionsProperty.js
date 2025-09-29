"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const spin_dependent_1 = require("../include/mixins/spin_dependent");
const BandStructureProperty_1 = require("./BandStructureProperty");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class PhononDispersionsConfig extends BandStructureProperty_1.BandStructureConfig {
    tooltipFormatter(xDataArray, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}
class PhononDispersionsProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: PhononDispersionsProperty.propertyName });
        this.subtitle = "Phonon Dispersions";
        this.yAxisTitle = `Frequency (${this.yAxis.units})`;
        this.chartConfig = new PhononDispersionsConfig(this, {
            pointsPath: config.pointsPath,
        }).config;
    }
}
PhononDispersionsProperty.propertyName = settings_1.PropertyName.phonon_dispersions;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PhononDispersionsProperty.prototype);
(0, spin_dependent_1.spinDependentMixin)(PhononDispersionsProperty.prototype);
exports.default = PhononDispersionsProperty;
