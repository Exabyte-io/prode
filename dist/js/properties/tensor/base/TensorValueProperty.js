"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TensorProperty_1 = __importDefault(require("./TensorProperty"));
class TensorValueProperty extends TensorProperty_1.default {
    get value() {
        return this.requiredProp("value");
    }
}
exports.default = TensorValueProperty;
