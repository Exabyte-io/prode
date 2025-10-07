"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TotalEnergyContributionsPropertySchemaMixin_1 = require("../../generated/TotalEnergyContributionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalEnergyContributionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalEnergyContributionsProperty.propertyName });
    }
    get exchangeCorrelation() {
        return this.exchange_correlation;
    }
}
TotalEnergyContributionsProperty.propertyType = settings_1.PropertyType.object;
TotalEnergyContributionsProperty.propertyName = settings_1.PropertyName.total_energy_contributions;
exports.default = TotalEnergyContributionsProperty;
(0, TotalEnergyContributionsPropertySchemaMixin_1.totalEnergyContributionsPropertySchemaMixin)(TotalEnergyContributionsProperty.prototype);
