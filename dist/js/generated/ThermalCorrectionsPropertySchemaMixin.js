"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thermalCorrectionsPropertySchemaMixin = thermalCorrectionsPropertySchemaMixin;
function thermalCorrectionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get to_energy() {
            return this.prop("to_energy");
        },
        get to_enthalpy() {
            return this.prop("to_enthalpy");
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
