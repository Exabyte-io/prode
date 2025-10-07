"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atomicForcesPropertySchemaMixin = atomicForcesPropertySchemaMixin;
function atomicForcesPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get values() {
            return this.requiredProp("values");
        },
        get units() {
            return this.requiredProp("units");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
