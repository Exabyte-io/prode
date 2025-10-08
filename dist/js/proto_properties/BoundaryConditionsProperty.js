"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoundaryConditionsPropertySchemaMixin_1 = require("../generated/BoundaryConditionsPropertySchemaMixin");
const ProtoProperty_1 = __importDefault(require("../ProtoProperty"));
const settings_1 = require("../settings");
class BoundaryConditionsProperty extends ProtoProperty_1.default {
    constructor(config) {
        super({ ...config, name: BoundaryConditionsProperty.propertyName });
    }
}
BoundaryConditionsProperty.propertyName = settings_1.PropertyName.boundary_conditions;
(0, BoundaryConditionsPropertySchemaMixin_1.boundaryConditionsPropertySchemaMixin)(BoundaryConditionsProperty.prototype);
exports.default = BoundaryConditionsProperty;
