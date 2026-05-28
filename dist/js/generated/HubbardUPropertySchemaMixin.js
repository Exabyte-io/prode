"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubbardUPropertySchemaMixin = hubbardUPropertySchemaMixin;
function hubbardUPropertySchemaMixin(item) {
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
        get values() {
            return this.requiredProp("values");
        },
        set values(value) {
            this.setProp("values", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
