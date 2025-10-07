"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dielectricTensorPropertySchemaMixin = dielectricTensorPropertySchemaMixin;
function dielectricTensorPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get values() {
            return this.requiredProp("values");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
