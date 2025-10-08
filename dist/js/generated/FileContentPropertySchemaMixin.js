"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileContentPropertySchemaMixin = fileContentPropertySchemaMixin;
function fileContentPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get filetype() {
            return this.requiredProp("filetype");
        },
        get objectData() {
            return this.requiredProp("objectData");
        },
        get pathname() {
            return this.prop("pathname");
        },
        get basename() {
            return this.prop("basename");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
