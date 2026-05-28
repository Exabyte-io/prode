"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelaxedPropertySchemaMixin = isRelaxedPropertySchemaMixin;
function isRelaxedPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value) {
            this.setProp("value", value);
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
