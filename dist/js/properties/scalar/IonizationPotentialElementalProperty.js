"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IonizationPotentialElementalPropertySchemaMixin_1 = require("../../generated/IonizationPotentialElementalPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class IonizationPotentialElementalProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: IonizationPotentialElementalProperty.propertyName });
    }
}
IonizationPotentialElementalProperty.propertyName = settings_1.PropertyName.ionization_potential;
IonizationPotentialElementalProperty.propertyType = settings_1.PropertyType.scalar;
(0, IonizationPotentialElementalPropertySchemaMixin_1.ionizationPotentialElementalPropertySchemaMixin)(IonizationPotentialElementalProperty.prototype);
exports.default = IonizationPotentialElementalProperty;
