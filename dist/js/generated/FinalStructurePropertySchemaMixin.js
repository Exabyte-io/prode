"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalStructurePropertySchemaMixin = finalStructurePropertySchemaMixin;
function finalStructurePropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get isRelaxed() {
            return this.requiredProp("isRelaxed");
        },
        set isRelaxed(value) {
            this.setProp("isRelaxed", value);
        },
        get materialId() {
            return this.requiredProp("materialId");
        },
        set materialId(value) {
            this.setProp("materialId", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
