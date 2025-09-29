"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalEnergyContributionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalEnergyContributionsProperty.propertyName });
    }
    get temperatureEntropy() {
        return this.prop("temperatureEntropy");
    }
    get harris_foulkes() {
        return this.prop("harris_foulkes");
    }
    get one_electron() {
        return this.prop("one_electron");
    }
    get hartree() {
        return this.prop("hartree");
    }
    get exchange() {
        return this.prop("exchange");
    }
    get exchangeCorrelation() {
        return this.prop("exchange_correlation");
    }
    get exchange_correlation() {
        return this.prop("exchange_correlation");
    }
    get ewald() {
        return this.prop("ewald");
    }
    get alphaZ() {
        return this.prop("alphaZ");
    }
    get atomicEnergy() {
        return this.prop("atomicEnergy");
    }
    get eigenvalues() {
        return this.prop("eigenvalues");
    }
    get PAWDoubleCounting2() {
        return this.prop("PAWDoubleCounting2");
    }
    get PAWDoubleCounting3() {
        return this.prop("PAWDoubleCounting3");
    }
    get hartreeFock() {
        return this.prop("hartreeFock");
    }
    get units() {
        return this.prop("units");
    }
}
TotalEnergyContributionsProperty.propertyType = settings_1.PropertyType.object;
TotalEnergyContributionsProperty.propertyName = settings_1.PropertyName.total_energy_contributions;
exports.default = TotalEnergyContributionsProperty;
