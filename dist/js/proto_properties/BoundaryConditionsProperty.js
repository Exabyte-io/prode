"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const ProtoProperty_1 = __importDefault(require("./ProtoProperty"));
class BoundaryConditionsProperty extends ProtoProperty_1.default {
    constructor(config) {
        super({ ...config, name: BoundaryConditionsProperty.propertyName });
    }
    get type() {
        return this.requiredProp("type");
    }
    get offset() {
        return this.requiredProp("offset");
    }
}
BoundaryConditionsProperty.propertyName = settings_1.PropertyName.boundary_conditions;
exports.default = BoundaryConditionsProperty;
