"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NonScalarProperty_1 = __importDefault(require("../base/NonScalarProperty"));
/**
 * Base class for all convergence properties
 * Provides common functionality and ensures proper convergence configuration
 */
class ConvergenceProperty extends NonScalarProperty_1.default {
    get data() {
        return this.requiredProp("data");
    }
    get units() {
        return this.requiredProp("units");
    }
}
ConvergenceProperty.isConvergence = true;
exports.default = ConvergenceProperty;
