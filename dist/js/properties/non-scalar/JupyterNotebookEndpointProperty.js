"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JupyterNotebookEndpointPropertySchemaMixin_1 = require("../../generated/JupyterNotebookEndpointPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class JupyterNotebookEndpointProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: JupyterNotebookEndpointProperty.propertyName });
    }
}
JupyterNotebookEndpointProperty.propertyName = settings_1.PropertyName.jupyter_notebook_endpoint;
JupyterNotebookEndpointProperty.propertyType = settings_1.PropertyType.non_scalar;
(0, JupyterNotebookEndpointPropertySchemaMixin_1.jupyterNotebookEndpointPropertySchemaMixin)(JupyterNotebookEndpointProperty.prototype);
exports.default = JupyterNotebookEndpointProperty;
