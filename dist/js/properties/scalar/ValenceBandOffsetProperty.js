"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValenceBandOffsetPropertySchemaMixin_1 = require("../../generated/ValenceBandOffsetPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class ValenceBandOffsetProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ValenceBandOffsetProperty.propertyName });
    }
}
ValenceBandOffsetProperty.isRefined = true;
ValenceBandOffsetProperty.propertyName = settings_1.PropertyName.valence_band_offset;
ValenceBandOffsetProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = ValenceBandOffsetProperty;
(0, ValenceBandOffsetPropertySchemaMixin_1.valenceBandOffsetPropertySchemaMixin)(ValenceBandOffsetProperty.prototype);
