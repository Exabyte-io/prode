"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IsRelaxedPropertySchemaMixin_1 = require("../../generated/IsRelaxedPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class IsRelaxedProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: IsRelaxedProperty.propertyName });
    }
}
IsRelaxedProperty.isRefined = true;
IsRelaxedProperty.propertyName = settings_1.PropertyName.is_relaxed;
IsRelaxedProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = IsRelaxedProperty;
(0, IsRelaxedPropertySchemaMixin_1.isRelaxedPropertySchemaMixin)(IsRelaxedProperty.prototype);
