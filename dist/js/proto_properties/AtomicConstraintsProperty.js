"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AtomicConstraintsPropertySchemaMixin_1 = require("../generated/AtomicConstraintsPropertySchemaMixin");
const ProtoProperty_1 = __importDefault(require("../ProtoProperty"));
const settings_1 = require("../settings");
class AtomicConstraintsProperty extends ProtoProperty_1.default {
    constructor(config) {
        super({ ...config, name: AtomicConstraintsProperty.propertyName });
    }
}
AtomicConstraintsProperty.propertyName = settings_1.PropertyName.atomic_constraints;
(0, AtomicConstraintsPropertySchemaMixin_1.atomicConstraintsPropertySchemaMixin)(AtomicConstraintsProperty.prototype);
exports.default = AtomicConstraintsProperty;
