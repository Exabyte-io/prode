"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jupyterNotebookEndpointPropertySchemaMixin = jupyterNotebookEndpointPropertySchemaMixin;
function jupyterNotebookEndpointPropertySchemaMixin(item) {
    // @ts-expect-error
    const properties = {
        get name() {
            return this.requiredProp("name");
        },
        get host() {
            return this.requiredProp("host");
        },
        get port() {
            return this.requiredProp("port");
        },
        get token() {
            return this.requiredProp("token");
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
