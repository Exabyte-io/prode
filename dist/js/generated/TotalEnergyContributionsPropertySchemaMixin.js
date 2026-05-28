"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalEnergyContributionsPropertySchemaMixin = totalEnergyContributionsPropertySchemaMixin;
function totalEnergyContributionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get temperatureEntropy() {
            return this.prop("temperatureEntropy");
        },
        set temperatureEntropy(value) {
            this.setProp("temperatureEntropy", value);
        },
        get harris_foulkes() {
            return this.prop("harris_foulkes");
        },
        set harris_foulkes(value) {
            this.setProp("harris_foulkes", value);
        },
        get smearing() {
            return this.prop("smearing");
        },
        set smearing(value) {
            this.setProp("smearing", value);
        },
        get one_electron() {
            return this.prop("one_electron");
        },
        set one_electron(value) {
            this.setProp("one_electron", value);
        },
        get hartree() {
            return this.prop("hartree");
        },
        set hartree(value) {
            this.setProp("hartree", value);
        },
        get exchange() {
            return this.prop("exchange");
        },
        set exchange(value) {
            this.setProp("exchange", value);
        },
        get exchange_correlation() {
            return this.prop("exchange_correlation");
        },
        set exchange_correlation(value) {
            this.setProp("exchange_correlation", value);
        },
        get ewald() {
            return this.prop("ewald");
        },
        set ewald(value) {
            this.setProp("ewald", value);
        },
        get alphaZ() {
            return this.prop("alphaZ");
        },
        set alphaZ(value) {
            this.setProp("alphaZ", value);
        },
        get atomicEnergy() {
            return this.prop("atomicEnergy");
        },
        set atomicEnergy(value) {
            this.setProp("atomicEnergy", value);
        },
        get eigenvalues() {
            return this.prop("eigenvalues");
        },
        set eigenvalues(value) {
            this.setProp("eigenvalues", value);
        },
        get PAWDoubleCounting2() {
            return this.prop("PAWDoubleCounting2");
        },
        set PAWDoubleCounting2(value) {
            this.setProp("PAWDoubleCounting2", value);
        },
        get PAWDoubleCounting3() {
            return this.prop("PAWDoubleCounting3");
        },
        set PAWDoubleCounting3(value) {
            this.setProp("PAWDoubleCounting3", value);
        },
        get hartreeFock() {
            return this.prop("hartreeFock");
        },
        set hartreeFock(value) {
            this.setProp("hartreeFock", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get units() {
            return this.prop("units");
        },
        set units(value) {
            this.setProp("units", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
