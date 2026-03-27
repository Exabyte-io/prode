"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ThermalCorrectionToEnergyPropertySchemaMixin_1 = require("../../generated/ThermalCorrectionToEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ThermalCorrectionToEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ThermalCorrectionToEnergyProperty.propertyName });
    }
}
ThermalCorrectionToEnergyProperty.propertyType = settings_1.PropertyType.scalar;
ThermalCorrectionToEnergyProperty.propertyName = settings_1.PropertyName.thermal_correction_to_energy;
ThermalCorrectionToEnergyProperty.isRefined = true;
exports.default = ThermalCorrectionToEnergyProperty;
(0, ThermalCorrectionToEnergyPropertySchemaMixin_1.thermalCorrectionToEnergyPropertySchemaMixin)(ThermalCorrectionToEnergyProperty.prototype);
