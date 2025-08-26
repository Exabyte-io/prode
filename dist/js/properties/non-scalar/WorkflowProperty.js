"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class WorkflowProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: WorkflowProperty.propertyName });
    }
    get subworkflows() {
        return this.requiredProp("subworkflows");
    }
    get units() {
        return this.requiredProp("units");
    }
    get properties() {
        return this.prop("properties");
    }
    get isUsingDataset() {
        return this.prop("isUsingDataset");
    }
    get workflows() {
        return this.prop("workflows");
    }
    get isDefault() {
        return this.prop("isDefault");
    }
    get metadata() {
        return this.prop("metadata");
    }
}
WorkflowProperty.propertyName = settings_1.PropertyName.workflow_pyml_predict;
exports.default = WorkflowProperty;
