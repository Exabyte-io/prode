"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValuesUnitsProperty_1 = __importDefault(require("./ValuesUnitsProperty"));
class AtomicForcesProperty extends ValuesUnitsProperty_1.default {
    constructor(config) {
        super(config, "atomic_forces");
    }
}
exports.default = AtomicForcesProperty;
