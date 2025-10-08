"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convergenceIonicPropertySchemaMixin = convergenceIonicPropertySchemaMixin;
function convergenceIonicPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get tolerance() {
            return this.prop("tolerance");
        },
        get units() {
            return this.requiredProp("units");
        },
        get data() {
            return this.requiredProp("data");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
