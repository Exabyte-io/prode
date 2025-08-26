"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ValuesUnitsProperty_1 = __importDefault(require("./base/ValuesUnitsProperty"));
class HubbardVNNProperty extends ValuesUnitsProperty_1.default {
    constructor(config) {
        super({ ...config, name: HubbardVNNProperty.propertyName });
    }
}
HubbardVNNProperty.propertyName = settings_1.PropertyName.hubbard_v_nn;
exports.default = HubbardVNNProperty;
