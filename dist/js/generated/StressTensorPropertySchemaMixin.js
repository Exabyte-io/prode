"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stressTensorPropertySchemaMixin = stressTensorPropertySchemaMixin;
function stressTensorPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get value() {
            return this.requiredProp("value");
        },
        get name() {
            return this.requiredProp("name");
        },
        get units() {
            return this.requiredProp("units");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
