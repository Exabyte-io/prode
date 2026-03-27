"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ThermalCorrectionToEnthalpyPropertySchemaMixin_1 = require("../../generated/ThermalCorrectionToEnthalpyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ThermalCorrectionToEnthalpyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ThermalCorrectionToEnthalpyProperty.propertyName });
    }
}
ThermalCorrectionToEnthalpyProperty.propertyType = settings_1.PropertyType.scalar;
ThermalCorrectionToEnthalpyProperty.propertyName = settings_1.PropertyName.thermal_correction_to_enthalpy;
ThermalCorrectionToEnthalpyProperty.isRefined = true;
exports.default = ThermalCorrectionToEnthalpyProperty;
(0, ThermalCorrectionToEnthalpyPropertySchemaMixin_1.thermalCorrectionToEnthalpyPropertySchemaMixin)(ThermalCorrectionToEnthalpyProperty.prototype);
