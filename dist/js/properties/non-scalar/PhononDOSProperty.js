"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhononDOSPropertySchemaMixin_1 = require("../../generated/PhononDOSPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
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
        super({ ...config, name: PhononDOSProperty.propertyName });
        this.subtitle = "Phonon Density Of States";
        this.yAxisTitle = `Density Of States (${this.yAxis.units})`;
        this.xAxisTitle = `Frequency (${this.xAxis.units})`;
        this.chartConfig = new PhononDOSConfig(this).config;
    }
}
PhononDOSProperty.propertyName = settings_1.PropertyName.phonon_dos;
PhononDOSProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = PhononDOSProperty;
(0, PhononDOSPropertySchemaMixin_1.phononDOSPropertySchemaMixin)(PhononDOSProperty.prototype);
