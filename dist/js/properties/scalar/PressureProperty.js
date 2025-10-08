"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PressurePropertySchemaMixin_1 = require("../../generated/PressurePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class PressureProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: PressureProperty.propertyName });
    }
}
PressureProperty.isRefined = true;
PressureProperty.propertyName = settings_1.PropertyName.pressure;
PressureProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = PressureProperty;
(0, PressurePropertySchemaMixin_1.pressurePropertySchemaMixin)(PressureProperty.prototype);
