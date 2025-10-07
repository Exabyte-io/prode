"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convergenceElectronicPropertySchemaMixin = convergenceElectronicPropertySchemaMixin;
function convergenceElectronicPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
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
