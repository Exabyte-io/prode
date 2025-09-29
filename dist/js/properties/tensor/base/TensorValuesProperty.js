"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TensorProperty_1 = __importDefault(require("./TensorProperty"));
class TensorValuesProperty extends TensorProperty_1.default {
    get values() {
        return this.requiredProp("values");
    }
}
exports.default = TensorValuesProperty;
