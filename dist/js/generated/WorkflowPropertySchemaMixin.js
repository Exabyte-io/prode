"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowPropertySchemaMixin = workflowPropertySchemaMixin;
function workflowPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get subworkflows() {
            return this.requiredProp("subworkflows");
        },
        get units() {
            return this.requiredProp("units");
        },
        get properties() {
            return this.prop("properties");
        },
        get isUsingDataset() {
            return this.prop("isUsingDataset");
        },
        get isMultiMaterial() {
            return this.prop("isMultiMaterial");
        },
        get workflows() {
            return this.prop("workflows");
        },
        get application() {
            return this.prop("application");
        },
        get tags() {
            return this.prop("tags");
        },
        get isDefault() {
            return this.prop("isDefault");
        },
        get metadata() {
            return this.prop("metadata");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
