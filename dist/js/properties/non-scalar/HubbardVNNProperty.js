"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HubbardVNNPropertySchemaMixin_1 = require("../../generated/HubbardVNNPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class HubbardVNNProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: HubbardVNNProperty.propertyName });
    }
}
HubbardVNNProperty.propertyName = settings_1.PropertyName.hubbard_v_nn;
HubbardVNNProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = HubbardVNNProperty;
(0, HubbardVNNPropertySchemaMixin_1.hubbardVNNPropertySchemaMixin)(HubbardVNNProperty.prototype);
