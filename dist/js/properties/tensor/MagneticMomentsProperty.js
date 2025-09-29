"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const TensorValuesProperty_1 = __importDefault(require("./base/TensorValuesProperty"));
class MagneticMomentsProperty extends TensorValuesProperty_1.default {
    constructor(config) {
        super({ ...config, name: MagneticMomentsProperty.propertyName });
    }
}
MagneticMomentsProperty.propertyName = settings_1.PropertyName.magnetic_moments;
exports.default = MagneticMomentsProperty;
