"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
class AtomicConstraintsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: "atomic_constraints" });
    }
    get values() {
        return this.requiredProp("values");
    }
}
exports.default = AtomicConstraintsProperty;
