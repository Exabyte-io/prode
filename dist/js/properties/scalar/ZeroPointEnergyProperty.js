"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ScalarProperty_1 = __importDefault(require("./base/ScalarProperty"));
class ZeroPointEnergyProperty extends ScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: ZeroPointEnergyProperty.propertyName });
    }
}
ZeroPointEnergyProperty.propertyName = settings_1.PropertyName.zero_point_energy;
exports.default = ZeroPointEnergyProperty;
