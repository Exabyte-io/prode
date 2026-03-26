"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileContentPropertySchemaMixin = fileContentPropertySchemaMixin;
function fileContentPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get filetype() {
            return this.requiredProp("filetype");
        },
        set filetype(value) {
            this.setProp("filetype", value);
        },
        get objectData() {
            return this.requiredProp("objectData");
        },
        set objectData(value) {
            this.setProp("objectData", value);
        },
        get pathname() {
            return this.prop("pathname");
        },
        set pathname(value) {
            this.setProp("pathname", value);
        },
        get basename() {
            return this.prop("basename");
        },
        set basename(value) {
            this.setProp("basename", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
