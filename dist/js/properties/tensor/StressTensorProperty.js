"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const TensorValueProperty_1 = __importDefault(require("./base/TensorValueProperty"));
class StressTensorProperty extends TensorValueProperty_1.default {
    constructor(config) {
        super({ ...config, name: StressTensorProperty.propertyName });
    }
}
StressTensorProperty.propertyName = settings_1.PropertyName.stress_tensor;
exports.default = StressTensorProperty;
