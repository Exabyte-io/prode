"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NonScalarProperty_1 = __importDefault(require("./NonScalarProperty"));
class ValuesUnitsProperty extends NonScalarProperty_1.default {
    get values() {
        return this.requiredProp("values");
    }
    get units() {
        return this.requiredProp("units");
    }
}
exports.default = ValuesUnitsProperty;
