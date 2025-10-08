"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZeroPointEnergyPropertySchemaMixin_1 = require("../../generated/ZeroPointEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ZeroPointEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ZeroPointEnergyProperty.propertyName });
    }
}
ZeroPointEnergyProperty.propertyName = settings_1.PropertyName.zero_point_energy;
ZeroPointEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = ZeroPointEnergyProperty;
(0, ZeroPointEnergyPropertySchemaMixin_1.zeroPointEnergyPropertySchemaMixin)(ZeroPointEnergyProperty.prototype);
