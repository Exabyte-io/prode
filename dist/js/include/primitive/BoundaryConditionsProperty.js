"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
class BoundaryConditionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: "boundary_conditions" });
    }
    get type() {
        return this.requiredProp("type");
    }
    get offset() {
        return this.requiredProp("offset");
    }
}
exports.default = BoundaryConditionsProperty;
