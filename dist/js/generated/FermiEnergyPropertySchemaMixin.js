"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fermiEnergyPropertySchemaMixin = fermiEnergyPropertySchemaMixin;
function fermiEnergyPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value) {
            this.setProp("value", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
