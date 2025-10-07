"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundaryConditionsPropertySchemaMixin = boundaryConditionsPropertySchemaMixin;
function boundaryConditionsPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get type() {
            return this.requiredProp("type");
        },
        get offset() {
            return this.requiredProp("offset");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
