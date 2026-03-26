"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stressTensorPropertySchemaMixin = stressTensorPropertySchemaMixin;
function stressTensorPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get value() {
            return this.requiredProp("value");
        },
        set value(value) {
            this.setProp("value", value);
        },
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
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
