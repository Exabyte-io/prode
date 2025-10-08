"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelaxedPropertySchemaMixin = isRelaxedPropertySchemaMixin;
function isRelaxedPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get value() {
            return this.requiredProp("value");
        },
        get materialId() {
            return this.requiredProp("materialId");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
