"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AtomicForcesPropertySchemaMixin_1 = require("../../generated/AtomicForcesPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class AtomicForcesProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: AtomicForcesProperty.propertyName });
    }
}
AtomicForcesProperty.propertyName = settings_1.PropertyName.atomic_forces;
AtomicForcesProperty.propertyType = settings_1.PropertyType.tensor;
(0, AtomicForcesPropertySchemaMixin_1.atomicForcesPropertySchemaMixin)(AtomicForcesProperty.prototype);
exports.default = AtomicForcesProperty;
