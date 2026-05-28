"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magneticMomentsPropertySchemaMixin = magneticMomentsPropertySchemaMixin;
function magneticMomentsPropertySchemaMixin(item) {
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
        get units() {
            return this.requiredProp("units");
        },
        set units(value) {
            this.setProp("units", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
