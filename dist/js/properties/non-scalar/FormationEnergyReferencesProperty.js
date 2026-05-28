"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormationEnergyReferencesPropertySchemaMixin_1 = require("../../generated/FormationEnergyReferencesPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class FormationEnergyReferencesProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: FormationEnergyReferencesProperty.propertyName });
    }
}
FormationEnergyReferencesProperty.propertyName = settings_1.PropertyName.formation_energy_references;
FormationEnergyReferencesProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = FormationEnergyReferencesProperty;
(0, FormationEnergyReferencesPropertySchemaMixin_1.formationEnergyReferencesPropertySchemaMixin)(FormationEnergyReferencesProperty.prototype);
