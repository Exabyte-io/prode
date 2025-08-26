"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@mat3ra/code/dist/js/utils");
const settings_1 = require("../../settings");
const NonScalarProperty_1 = __importDefault(require("./base/NonScalarProperty"));
class BandGapsProperty extends NonScalarProperty_1.default {
    constructor(config) {
        super({ ...config, name: BandGapsProperty.propertyName });
    }
    get eigenvalues() {
        return this.prop("eigenvalues");
    }
    get values() {
        return this.requiredProp("values");
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
    /**
     * @summary Converts QueryBuilder selector into mongo selector by value.
     * @param name band_gaps:direct/band_gaps:indirect
     * @param selector Mongo selector
     */
    static normalizeSelectorByDataField(name, selector) {
        // name is in 'band_gaps:direct' format
        const type = name.split(":")[1]; // direct/indirect
        return {
            name: "band_gaps",
            values: {
                $elemMatch: {
                    type,
                    value: selector,
                },
            },
        };
    }
}
BandGapsProperty.isRefined = true;
BandGapsProperty.propertyName = settings_1.PropertyName.band_gaps;
exports.default = BandGapsProperty;
