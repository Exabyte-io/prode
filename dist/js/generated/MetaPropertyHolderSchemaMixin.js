"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPropertyHolderSchemaMixin = metaPropertyHolderSchemaMixin;
function metaPropertyHolderSchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get data() {
            return this.requiredProp("data");
        },
        set data(value) {
            this.setProp("data", value);
        },
        get source() {
            return this.requiredProp("source");
        },
        set source(value) {
            this.setProp("source", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
