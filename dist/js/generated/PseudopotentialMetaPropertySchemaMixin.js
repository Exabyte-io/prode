"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudopotentialMetaPropertySchemaMixin = pseudopotentialMetaPropertySchemaMixin;
function pseudopotentialMetaPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get element() {
            return this.requiredProp("element");
        },
        get hash() {
            return this.requiredProp("hash");
        },
        get type() {
            return this.requiredProp("type");
        },
        get source() {
            return this.requiredProp("source");
        },
        get version() {
            return this.prop("version");
        },
        get exchangeCorrelation() {
            return this.requiredProp("exchangeCorrelation");
        },
        get valenceConfiguration() {
            return this.prop("valenceConfiguration");
        },
        get path() {
            return this.requiredProp("path");
        },
        get apps() {
            return this.requiredProp("apps");
        },
        get filename() {
            return this.prop("filename");
        },
        get name() {
            return this.requiredProp("name");
        },
        get cutoffs() {
            return this.prop("cutoffs");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
