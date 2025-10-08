"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TotalEnergyPropertySchemaMixin_1 = require("../../generated/TotalEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalEnergyProperty.propertyName });
    }
}
TotalEnergyProperty.isRefined = true;
TotalEnergyProperty.propertyName = settings_1.PropertyName.total_energy;
TotalEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = TotalEnergyProperty;
(0, TotalEnergyPropertySchemaMixin_1.totalEnergyPropertySchemaMixin)(TotalEnergyProperty.prototype);
