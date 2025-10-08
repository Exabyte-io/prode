"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SurfaceEnergyPropertySchemaMixin_1 = require("../../generated/SurfaceEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class SurfaceEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: SurfaceEnergyProperty.propertyName });
    }
}
SurfaceEnergyProperty.isRefined = true;
SurfaceEnergyProperty.propertyName = settings_1.PropertyName.surface_energy;
SurfaceEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = SurfaceEnergyProperty;
(0, SurfaceEnergyPropertySchemaMixin_1.surfaceEnergyPropertySchemaMixin)(SurfaceEnergyProperty.prototype);
