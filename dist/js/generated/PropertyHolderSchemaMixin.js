"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyHolderSchemaMixin = propertyHolderSchemaMixin;
function propertyHolderSchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get group() {
            return this.prop("group");
        },
        get data() {
            return this.requiredProp("data");
        },
        get source() {
            return this.requiredProp("source");
        },
        get exabyteId() {
            return this.requiredProp("exabyteId");
        },
        get precision() {
            return this.prop("precision");
        },
        get systemTags() {
            return this.prop("systemTags");
        },
        get repetition() {
            return this.requiredProp("repetition");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
