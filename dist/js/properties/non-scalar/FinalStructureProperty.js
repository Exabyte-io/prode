"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FinalStructurePropertySchemaMixin_1 = require("../../generated/FinalStructurePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class FinalStructureProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: FinalStructureProperty.propertyName });
    }
}
FinalStructureProperty.propertyName = settings_1.PropertyName.final_structure;
FinalStructureProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = FinalStructureProperty;
(0, FinalStructurePropertySchemaMixin_1.finalStructurePropertySchemaMixin)(FinalStructureProperty.prototype);
