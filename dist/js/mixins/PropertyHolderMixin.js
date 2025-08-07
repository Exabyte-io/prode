"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyHolderMixin = propertyHolderMixin;
const utils_1 = require("@mat3ra/code/dist/js/utils");
const PropertyFactory_1 = __importDefault(require("../PropertyFactory"));
function propertyHolderMixin(item) {
    // @ts-expect-error
    const properties = {
        get data() {
            return this.prop("data");
        },
        get precision() {
            return this.prop("precision", {});
        },
        get schemaVersion() {
            return this.prop("schemaVersion");
        },
        get source() {
            return this.requiredProp("source");
        },
        get sourceInfo() {
            return this.prop("source.info") || {};
        },
        get group() {
            return this.prop("group");
        },
        // same as element of PROPERTIES
        get slug() {
            return this.prop("slug");
        },
        get exabyteId() {
            return this.prop("exabyteId");
        },
        get property() {
            return PropertyFactory_1.default.create(this.data);
        },
        flattenProperties() {
            try {
                return [(0, utils_1.flattenObject)(this.data)];
            } catch (error) {
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
