"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FermiEnergyPropertySchemaMixin_1 = require("../../generated/FermiEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class FermiEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: FermiEnergyProperty.propertyName });
    }
}
FermiEnergyProperty.propertyName = settings_1.PropertyName.fermi_energy;
FermiEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = FermiEnergyProperty;
(0, FermiEnergyPropertySchemaMixin_1.fermiEnergyPropertySchemaMixin)(FermiEnergyProperty.prototype);
