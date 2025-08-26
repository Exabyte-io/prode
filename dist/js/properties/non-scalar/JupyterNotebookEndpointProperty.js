"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class JupyterNotebookEndpointProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: JupyterNotebookEndpointProperty.propertyName });
    }
    get host() {
        return this.requiredProp("host");
    }
    get port() {
        return this.requiredProp("port");
    }
    get token() {
        return this.requiredProp("token");
    }
}
JupyterNotebookEndpointProperty.propertyName = settings_1.PropertyName.jupyter_notebook_endpoint;
exports.default = JupyterNotebookEndpointProperty;
