"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyHolderSchemaMixin = propertyHolderSchemaMixin;
function propertyHolderSchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get group() {
            return this.prop("group");
        },
        set group(value) {
            this.setProp("group", value);
        },
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
        get exabyteId() {
            return this.requiredProp("exabyteId");
        },
        set exabyteId(value) {
            this.setProp("exabyteId", value);
        },
        get precision() {
            return this.prop("precision");
        },
        set precision(value) {
            this.setProp("precision", value);
        },
        get systemTags() {
            return this.prop("systemTags");
        },
        set systemTags(value) {
            this.setProp("systemTags", value);
        },
        get repetition() {
            return this.requiredProp("repetition");
        },
        set repetition(value) {
            this.setProp("repetition", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
