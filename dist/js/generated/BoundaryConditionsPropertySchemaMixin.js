"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundaryConditionsPropertySchemaMixin = boundaryConditionsPropertySchemaMixin;
function boundaryConditionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get type() {
            return this.requiredProp("type");
        },
        set type(value) {
            this.setProp("type", value);
        },
        get offset() {
            return this.requiredProp("offset");
        },
        set offset(value) {
            this.setProp("offset", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
