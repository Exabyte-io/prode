"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudopotentialMetaPropertySchemaMixin = pseudopotentialMetaPropertySchemaMixin;
function pseudopotentialMetaPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get element() {
            return this.requiredProp("element");
        },
        set element(value) {
            this.setProp("element", value);
        },
        get hash() {
            return this.requiredProp("hash");
        },
        set hash(value) {
            this.setProp("hash", value);
        },
        get type() {
            return this.requiredProp("type");
        },
        set type(value) {
            this.setProp("type", value);
        },
        get source() {
            return this.requiredProp("source");
        },
        set source(value) {
            this.setProp("source", value);
        },
        get version() {
            return this.prop("version");
        },
        set version(value) {
            this.setProp("version", value);
        },
        get exchangeCorrelation() {
            return this.requiredProp("exchangeCorrelation");
        },
        set exchangeCorrelation(value) {
            this.setProp("exchangeCorrelation", value);
        },
        get valenceConfiguration() {
            return this.prop("valenceConfiguration");
        },
        set valenceConfiguration(value) {
            this.setProp("valenceConfiguration", value);
        },
        get path() {
            return this.requiredProp("path");
        },
        set path(value) {
            this.setProp("path", value);
        },
        get apps() {
            return this.requiredProp("apps");
        },
        set apps(value) {
            this.setProp("apps", value);
        },
        get filename() {
            return this.prop("filename");
        },
        set filename(value) {
            this.setProp("filename", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get cutoffs() {
            return this.prop("cutoffs");
        },
        set cutoffs(value) {
            this.setProp("cutoffs", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
