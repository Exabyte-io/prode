"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyHolderMixin = propertyHolderMixin;
const utils_1 = require("@mat3ra/code/dist/js/utils");
const PropertyFactory_1 = __importDefault(require("../../PropertyFactory"));
function propertyHolderMixin(item) {
    // @ts-expect-error - this is a workaround to allow the propertyMixin to be used with any type of entity
    const properties = {
        get data() {
            return this.requiredProp("data");
        },
        get precision() {
            return this.prop("precision");
        },
        get source() {
            return this.requiredProp("source");
        },
        get sourceInfo() {
            return this.requiredProp("source.info");
        },
        get group() {
            return this.prop("group");
        },
        get exabyteId() {
            return this.prop("exabyteId");
        },
        get repetition() {
            return this.requiredProp("repetition");
        },
        get property() {
            return PropertyFactory_1.default.createProperty(this.data);
        },
        get systemTags() {
            return this.prop("systemTags");
        },
        flattenProperties() {
            try {
                return [(0, utils_1.flattenObject)(this.data)];
            }
            catch (error) {
                return [];
            }
        },
        /**
         * @summary Adds slug & group property to characteristic. They used for forming column name.
         * 'group' property will contain model type/subtype. Band gap characteristic is split before.
         */
        toRowValues() {
            return this.property.toRowValues(this.group, this.slug);
        },
    };
    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
