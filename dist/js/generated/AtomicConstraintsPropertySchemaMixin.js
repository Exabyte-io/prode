"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atomicConstraintsPropertySchemaMixin = atomicConstraintsPropertySchemaMixin;
function atomicConstraintsPropertySchemaMixin(item) {
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
