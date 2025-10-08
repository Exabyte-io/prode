"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HubbardUPropertySchemaMixin_1 = require("../../generated/HubbardUPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HubbardUProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HubbardUProperty.propertyName });
    }
}
HubbardUProperty.propertyName = settings_1.PropertyName.hubbard_u;
HubbardUProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = HubbardUProperty;
(0, HubbardUPropertySchemaMixin_1.hubbardUPropertySchemaMixin)(HubbardUProperty.prototype);
