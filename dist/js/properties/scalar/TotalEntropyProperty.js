"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TotalEntropyPropertySchemaMixin_1 = require("../../generated/TotalEntropyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalEntropyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalEntropyProperty.propertyName });
    }
}
TotalEntropyProperty.propertyType = settings_1.PropertyType.scalar;
TotalEntropyProperty.propertyName = settings_1.PropertyName.total_entropy;
TotalEntropyProperty.isRefined = true;
exports.default = TotalEntropyProperty;
(0, TotalEntropyPropertySchemaMixin_1.totalEntropyPropertySchemaMixin)(TotalEntropyProperty.prototype);
