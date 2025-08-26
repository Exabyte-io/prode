"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../../Property"));
const settings_1 = require("../../../settings");
class TensorProperty extends Property_1.default {
    get units() {
        return this.requiredProp("units");
    }
}
TensorProperty.propertyType = settings_1.PropertyType.tensor;
exports.default = TensorProperty;
