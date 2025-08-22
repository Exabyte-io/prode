"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = __importDefault(require("../../Property"));
class IsRelaxedProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: "is_relaxed" });
    }
    get formula() {
        return this.prop("formula");
    }
    get unitCellFormula() {
        return this.prop("unitCellFormula");
    }
    get basis() {
        return this.requiredProp("basis");
    }
    get lattice() {
        return this.requiredProp("lattice");
    }
    get derivedProperties() {
        return this.prop("derivedProperties");
    }
    get external() {
        return this.prop("external");
    }
    get src() {
        return this.prop("src");
    }
    get scaledHash() {
        return this.prop("scaledHash");
    }
    get icsdId() {
        return this.prop("icsdId");
    }
    get isNonPeriodic() {
        return this.prop("isNonPeriodic");
    }
    get consistencyChecks() {
        return this.prop("consistencyChecks");
    }
    get isDefault() {
        return this.prop("isDefault");
    }
    get metadata() {
        return this.prop("metadata");
    }
}
exports.default = IsRelaxedProperty;
