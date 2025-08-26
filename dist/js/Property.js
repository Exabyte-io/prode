"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const settings_1 = require("./settings");
class Property extends entity_1.NamedInMemoryEntity {
    constructor() {
        super(...arguments);
        this.prettyName = Property.prettifyName(this.name);
        // static propertyBranch(propertyName: `${PropertyName}`): PropertyConfig {
        //     // safely return empty object in case the tree does not contain the name key
        //     return PROPERTIES_TREE[propertyName] || {};
        // }
        // static omitInResults(propertyName: `${PropertyName}`) {
        //     return Boolean(this.propertyBranch(propertyName).omitInResults);
        // }
        // static isScalar(propertyConfig: PropertyConfig) {
        //     return propertyConfig.type === PropertyType.scalar;
        // }
        // static isConvergence(propertyConfig: PropertyConfig) {
        //     return Boolean(propertyConfig.isConvergence);
        // }
    }
    static get isScalar() {
        return this.propertyType === settings_1.PropertyType.scalar;
    }
    static get isNonScalar() {
        return this.propertyType === settings_1.PropertyType.non_scalar;
    }
    static get isTensor() {
        return this.propertyType === settings_1.PropertyType.tensor;
    }
    static get isObject() {
        return this.propertyType === settings_1.PropertyType.object;
    }
    get propertyClass() {
        return this.constructor;
    }
    toRowValues(group, slug) {
        return [
            {
                ...this.toJSON(),
                slug,
                group,
            },
        ];
    }
    static prettifyName(name) {
        return (name.charAt(0).toUpperCase() + name.slice(1)).replace("_", " ");
    }
}
Property.isRefined = false;
Property.isConvergence = false;
Property.isAbleToReturnMultipleResults = false;
exports.default = Property;
