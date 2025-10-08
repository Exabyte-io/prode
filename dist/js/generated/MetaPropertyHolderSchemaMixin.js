"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPropertyHolderSchemaMixin = metaPropertyHolderSchemaMixin;
function metaPropertyHolderSchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get data() {
            return this.requiredProp("data");
        },
        get source() {
            return this.requiredProp("source");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
