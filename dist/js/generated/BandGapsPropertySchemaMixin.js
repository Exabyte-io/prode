"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandGapsPropertySchemaMixin = bandGapsPropertySchemaMixin;
function bandGapsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get values() {
            return this.requiredProp("values");
        },
        get eigenvalues() {
            return this.prop("eigenvalues");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
