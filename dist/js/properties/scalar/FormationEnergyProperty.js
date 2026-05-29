"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormationEnergyPropertySchemaMixin_1 = require("../../generated/FormationEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class FormationEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: FormationEnergyProperty.propertyName });
    }
}
FormationEnergyProperty.isRefined = true;
FormationEnergyProperty.propertyName = settings_1.PropertyName.formation_energy;
FormationEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = FormationEnergyProperty;
(0, FormationEnergyPropertySchemaMixin_1.formationEnergyPropertySchemaMixin)(FormationEnergyProperty.prototype);
