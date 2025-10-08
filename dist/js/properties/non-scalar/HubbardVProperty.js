"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HubbardVPropertySchemaMixin_1 = require("../../generated/HubbardVPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HubbardVProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HubbardVProperty.propertyName });
    }
}
HubbardVProperty.propertyName = settings_1.PropertyName.hubbard_v;
HubbardVProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = HubbardVProperty;
(0, HubbardVPropertySchemaMixin_1.hubbardVPropertySchemaMixin)(HubbardVProperty.prototype);
