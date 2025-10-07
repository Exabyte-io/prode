"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TotalForcePropertySchemaMixin_1 = require("../../generated/TotalForcePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalForceProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalForceProperty.propertyName });
    }
}
TotalForceProperty.propertyName = settings_1.PropertyName.total_force;
TotalForceProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = TotalForceProperty;
(0, TotalForcePropertySchemaMixin_1.totalForcePropertySchemaMixin)(TotalForceProperty.prototype);
