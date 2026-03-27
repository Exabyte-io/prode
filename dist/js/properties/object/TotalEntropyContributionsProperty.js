"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TotalEntropyContributionsPropertySchemaMixin_1 = require("../../generated/TotalEntropyContributionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class TotalEntropyContributionsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: TotalEntropyContributionsProperty.propertyName });
    }
}
TotalEntropyContributionsProperty.propertyType = settings_1.PropertyType.object;
TotalEntropyContributionsProperty.propertyName = settings_1.PropertyName.total_entropy_contributions;
TotalEntropyContributionsProperty.isRefined = true;
exports.default = TotalEntropyContributionsProperty;
(0, TotalEntropyContributionsPropertySchemaMixin_1.totalEntropyContributionsPropertySchemaMixin)(TotalEntropyContributionsProperty.prototype);
