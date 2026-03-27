"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HeatCapacityCVContributionsPropertySchemaMixin_1 = require("../../generated/HeatCapacityCVContributionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HeatCapacityCVContributionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HeatCapacityCVContributionsProperty.propertyName });
    }
}
HeatCapacityCVContributionsProperty.propertyType = settings_1.PropertyType.object;
HeatCapacityCVContributionsProperty.propertyName = settings_1.PropertyName.heat_capacity_cv_contributions;
HeatCapacityCVContributionsProperty.isRefined = true;
exports.default = HeatCapacityCVContributionsProperty;
(0, HeatCapacityCVContributionsPropertySchemaMixin_1.heatCapacityCVContributionsPropertySchemaMixin)(HeatCapacityCVContributionsProperty.prototype);
