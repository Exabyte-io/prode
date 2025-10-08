"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhononDispersionsPropertySchemaMixin_1 = require("../../generated/PhononDispersionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const BandStructureProperty_1 = require("./BandStructureProperty");
class PhononDispersionsConfig extends BandStructureProperty_1.BandStructureConfig {
    tooltipFormatter(xDataArray, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}
class PhononDispersionsProperty extends Property_1.default {
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
PhononDispersionsProperty.propertyType = settings_1.PropertyType.non_scalar;
(0, PhononDispersionsPropertySchemaMixin_1.phononDispersionsPropertySchemaMixin)(PhononDispersionsProperty.prototype);
exports.default = PhononDispersionsProperty;
