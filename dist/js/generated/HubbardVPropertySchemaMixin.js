"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubbardVPropertySchemaMixin = hubbardVPropertySchemaMixin;
function hubbardVPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get units() {
            return this.requiredProp("units");
        },
        get values() {
            return this.requiredProp("values");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
