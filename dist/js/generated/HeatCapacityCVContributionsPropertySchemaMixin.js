"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heatCapacityCVContributionsPropertySchemaMixin = heatCapacityCVContributionsPropertySchemaMixin;
function heatCapacityCVContributionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get translational() {
            return this.prop("translational");
        },
        get rotational() {
            return this.prop("rotational");
        },
        get vibrational() {
            return this.prop("vibrational");
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
