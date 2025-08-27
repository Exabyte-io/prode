"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ScalarProperty_1 = __importDefault(require("./base/ScalarProperty"));
class PressureProperty extends ScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: PressureProperty.propertyName });
    }
}
PressureProperty.propertyName = settings_1.PropertyName.pressure;
exports.default = PressureProperty;
