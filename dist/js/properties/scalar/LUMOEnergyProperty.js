"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LUMOEnergyPropertySchemaMixin_1 = require("../../generated/LUMOEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class LUMOEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: LUMOEnergyProperty.propertyName });
    }
}
LUMOEnergyProperty.isRefined = true;
LUMOEnergyProperty.propertyName = settings_1.PropertyName.lumo_energy;
LUMOEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = LUMOEnergyProperty;
(0, LUMOEnergyPropertySchemaMixin_1.lUMOEnergyPropertySchemaMixin)(LUMOEnergyProperty.prototype);
