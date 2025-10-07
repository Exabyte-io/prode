"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@mat3ra/code/dist/js/utils");
const BandGapsPropertySchemaMixin_1 = require("../../generated/BandGapsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class BandGapsProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: BandGapsProperty.propertyName });
    }
    toRowValues(group) {
        return [this.toJSONByType("direct", group), this.toJSONByType("indirect", group)];
    }
    flattenProperties() {
        return this.values
            .map((x) => {
            return {
                name: `${this.name}:${x.type}`,
                value: x.value,
            };
        })
            .map((x) => (0, utils_1.flattenObject)(x));
    }
    /**
     * @summary Gets specified band gap (direct/indirect) and returns it in simplified form (as pressure).
     * Characteristic name will be `band_gaps:<type>`
     * @param type {String}
     */
    toJSONByType(type, group) {
        const ch = this.toJSON();
        const bandGapByType = (0, utils_1.deepClone)(ch);
        const directData = this.values.find((x) => x.type === type);
        const name = `band_gaps:${type}`;
        return {
            ...bandGapByType,
            data: {
                ...directData,
                name,
            },
            slug: name,
            group,
        };
    }
}
BandGapsProperty.isRefined = true;
BandGapsProperty.propertyName = settings_1.PropertyName.band_gaps;
BandGapsProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = BandGapsProperty;
(0, BandGapsPropertySchemaMixin_1.bandGapsPropertySchemaMixin)(BandGapsProperty.prototype);
