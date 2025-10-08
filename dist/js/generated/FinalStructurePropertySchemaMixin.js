"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalStructurePropertySchemaMixin = finalStructurePropertySchemaMixin;
function finalStructurePropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get isRelaxed() {
            return this.requiredProp("isRelaxed");
        },
        get materialId() {
            return this.requiredProp("materialId");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
