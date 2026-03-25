"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HOMOEnergyPropertySchemaMixin_1 = require("../../generated/HOMOEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HOMOEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HOMOEnergyProperty.propertyName });
    }
}
HOMOEnergyProperty.isRefined = true;
HOMOEnergyProperty.propertyName = settings_1.PropertyName.homo_energy;
HOMOEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = HOMOEnergyProperty;
(0, HOMOEnergyPropertySchemaMixin_1.hOMOEnergyPropertySchemaMixin)(HOMOEnergyProperty.prototype);
