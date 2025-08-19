"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowProperty = void 0;
const Property_1 = __importDefault(require("../../Property"));
class WorkflowProperty extends Property_1.default {
    constructor(config) {
        super(config);
        this.displayName = "";
        this.name = "workflow:pyml_predict";
    }
}
exports.WorkflowProperty = WorkflowProperty;
