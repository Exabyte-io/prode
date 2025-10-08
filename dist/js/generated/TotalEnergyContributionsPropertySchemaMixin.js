"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalEnergyContributionsPropertySchemaMixin = totalEnergyContributionsPropertySchemaMixin;
function totalEnergyContributionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get temperatureEntropy() {
            return this.prop("temperatureEntropy");
        },
        get harris_foulkes() {
            return this.prop("harris_foulkes");
        },
        get smearing() {
            return this.prop("smearing");
        },
        get one_electron() {
            return this.prop("one_electron");
        },
        get hartree() {
            return this.prop("hartree");
        },
        get exchange() {
            return this.prop("exchange");
        },
        get exchange_correlation() {
            return this.prop("exchange_correlation");
        },
        get ewald() {
            return this.prop("ewald");
        },
        get alphaZ() {
            return this.prop("alphaZ");
        },
        get atomicEnergy() {
            return this.prop("atomicEnergy");
        },
        get eigenvalues() {
            return this.prop("eigenvalues");
        },
        get PAWDoubleCounting2() {
            return this.prop("PAWDoubleCounting2");
        },
        get PAWDoubleCounting3() {
            return this.prop("PAWDoubleCounting3");
        },
        get hartreeFock() {
            return this.prop("hartreeFock");
        },
        get name() {
            return this.requiredProp("name");
        },
        get units() {
            return this.prop("units");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
