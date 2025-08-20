"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowProperty = void 0;
const Property_1 = __importDefault(require("../../Property"));
class WorkflowProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: "workflow:pyml_predict" });
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
exports.WorkflowProperty = WorkflowProperty;
