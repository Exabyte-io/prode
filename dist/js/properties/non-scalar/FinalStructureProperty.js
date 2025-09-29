"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../../settings");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class FinalStructureProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: FinalStructureProperty.propertyName });
    }
    get isRelaxed() {
        return this.requiredProp("isRelaxed");
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
FinalStructureProperty.propertyName = settings_1.PropertyName.final_structure;
exports.default = FinalStructureProperty;
