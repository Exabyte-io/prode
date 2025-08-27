"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ScalarProperty_1 = __importDefault(require("./base/ScalarProperty"));
class SurfaceEnergyProperty extends ScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: SurfaceEnergyProperty.propertyName });
    }
}
SurfaceEnergyProperty.propertyName = settings_1.PropertyName.surface_energy;
exports.default = SurfaceEnergyProperty;
