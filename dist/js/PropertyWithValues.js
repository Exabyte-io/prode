"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyWithValues = void 0;
const PropertyWithValues_1 = require("./mixins/PropertyWithValues");
const Property_1 = __importDefault(require("./Property"));
class PropertyWithValues extends Property_1.default {
}
exports.PropertyWithValues = PropertyWithValues;
(0, PropertyWithValues_1.propertyWithValuesMixin)(PropertyWithValues.prototype);
