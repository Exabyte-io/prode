"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jupyterNotebookEndpointPropertySchemaMixin = jupyterNotebookEndpointPropertySchemaMixin;
function jupyterNotebookEndpointPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value) {
            this.setProp("name", value);
        },
        get host() {
            return this.requiredProp("host");
        },
        set host(value) {
            this.setProp("host", value);
        },
        get port() {
            return this.requiredProp("port");
        },
        set port(value) {
            this.setProp("port", value);
        },
        get token() {
            return this.requiredProp("token");
        },
        set token(value) {
            this.setProp("token", value);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
