"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../../Property"));
const settings_1 = require("../../../settings");
class NonScalarProperty extends Property_1.default {
}
NonScalarProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = NonScalarProperty;
