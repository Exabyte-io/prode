"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkflowPropertySchemaMixin_1 = require("../../generated/WorkflowPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class WorkflowProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: WorkflowProperty.propertyName });
    }
}
WorkflowProperty.propertyName = settings_1.PropertyName.workflow_pyml_predict;
WorkflowProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = WorkflowProperty;
(0, WorkflowPropertySchemaMixin_1.workflowPropertySchemaMixin)(WorkflowProperty.prototype);
