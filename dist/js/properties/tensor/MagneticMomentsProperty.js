"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MagneticMomentsPropertySchemaMixin_1 = require("../../generated/MagneticMomentsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class MagneticMomentsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: MagneticMomentsProperty.propertyName });
    }
}
MagneticMomentsProperty.propertyName = settings_1.PropertyName.magnetic_moments;
MagneticMomentsProperty.propertyType = settings_1.PropertyType.tensor;
(0, MagneticMomentsPropertySchemaMixin_1.magneticMomentsPropertySchemaMixin)(MagneticMomentsProperty.prototype);
exports.default = MagneticMomentsProperty;
