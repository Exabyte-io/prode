"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileContentPropertySchemaMixin_1 = require("../../generated/FileContentPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class FileContentProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: FileContentProperty.propertyName });
    }
}
FileContentProperty.isAbleToReturnMultipleResults = true;
FileContentProperty.propertyName = settings_1.PropertyName.file_content;
FileContentProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = FileContentProperty;
(0, FileContentPropertySchemaMixin_1.fileContentPropertySchemaMixin)(FileContentProperty.prototype);
