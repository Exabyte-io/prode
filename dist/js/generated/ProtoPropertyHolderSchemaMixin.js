"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protoPropertyHolderSchemaMixin = protoPropertyHolderSchemaMixin;
function protoPropertyHolderSchemaMixin(item) {
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
