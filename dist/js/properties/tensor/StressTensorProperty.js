"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StressTensorPropertySchemaMixin_1 = require("../../generated/StressTensorPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class StressTensorProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: StressTensorProperty.propertyName });
    }
}
StressTensorProperty.propertyName = settings_1.PropertyName.stress_tensor;
StressTensorProperty.propertyType = settings_1.PropertyType.tensor;
exports.default = StressTensorProperty;
(0, StressTensorPropertySchemaMixin_1.stressTensorPropertySchemaMixin)(StressTensorProperty.prototype);
