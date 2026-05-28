"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convergenceElectronicPropertySchemaMixin = convergenceElectronicPropertySchemaMixin;
function convergenceElectronicPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value) {
            this.setProp("units", value);
        },
        get data() {
            return this.requiredProp("data");
        },
        set data(value) {
            this.setProp("data", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
