"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
class FileContentProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: "file_content" });
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
exports.default = FileContentProperty;
