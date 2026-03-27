"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ThermalCorrectionsPropertySchemaMixin_1 = require("../../generated/ThermalCorrectionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ThermalCorrectionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ThermalCorrectionsProperty.propertyName });
    }
    get toEnergy() {
        return this.to_energy;
    }
    get toEnthalpy() {
        return this.to_enthalpy;
    }
}
ThermalCorrectionsProperty.propertyType = settings_1.PropertyType.object;
ThermalCorrectionsProperty.propertyName = settings_1.PropertyName.thermal_corrections;
ThermalCorrectionsProperty.isRefined = true;
exports.default = ThermalCorrectionsProperty;
(0, ThermalCorrectionsPropertySchemaMixin_1.thermalCorrectionsPropertySchemaMixin)(ThermalCorrectionsProperty.prototype);
