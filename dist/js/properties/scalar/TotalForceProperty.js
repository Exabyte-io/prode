"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const ScalarProperty_1 = __importDefault(require("./base/ScalarProperty"));
class TotalForceProperty extends ScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: TotalForceProperty.propertyName });
    }
}
TotalForceProperty.propertyName = settings_1.PropertyName.total_force;
exports.default = TotalForceProperty;
