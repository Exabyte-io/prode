"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class FileContentProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: FileContentProperty.propertyName });
    }
    get filetype() {
        return this.requiredProp("filetype");
    }
    get objectData() {
        return this.requiredProp("objectData");
    }
    get pathname() {
        return this.prop("pathname");
    }
    get basename() {
        return this.requiredProp("basename");
    }
}
FileContentProperty.isAbleToReturnMultipleResults = true;
FileContentProperty.propertyName = settings_1.PropertyName.file_content;
exports.default = FileContentProperty;
