"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeatCapacityCVPropertySchemaMixin_1 = require("../../generated/HeatCapacityCVPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HeatCapacityCVProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HeatCapacityCVProperty.propertyName });
    }
}
HeatCapacityCVProperty.propertyType = settings_1.PropertyType.scalar;
HeatCapacityCVProperty.propertyName = settings_1.PropertyName.heat_capacity_cv;
HeatCapacityCVProperty.isRefined = true;
exports.default = HeatCapacityCVProperty;
(0, HeatCapacityCVPropertySchemaMixin_1.heatCapacityCVPropertySchemaMixin)(HeatCapacityCVProperty.prototype);
