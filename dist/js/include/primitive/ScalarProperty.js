"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
class ScalarProperty extends Property_1.default {
    constructor(config, propertyName) {
        super({ ...config, name: propertyName });
    }
    get value() {
        return this.requiredProp("value");
    }
    get units() {
        return this.requiredProp("units");
    }
}
exports.default = ScalarProperty;
