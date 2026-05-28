"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandGapsPropertySchemaMixin = bandGapsPropertySchemaMixin;
function bandGapsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value) {
            this.setProp("values", value);
        },
        get eigenvalues() {
            return this.prop("eigenvalues");
        },
        set eigenvalues(value) {
            this.setProp("eigenvalues", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
