"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const pickBy_1 = __importDefault(require("lodash/pickBy"));
const settings_1 = require("./settings");
const tree_1 = __importStar(require("./tree"));
class Property extends entity_1.NamedInMemoryEntity {
    constructor() {
        var _b;
        super(...arguments);
        this.propertyBranch = _a.propertyBranch(this.name);
        this.prettyName = _a.prettifyName(this.name);
        this.omitInResults = _a.omitInResults(this.name);
        this.isScalar = _a.isScalar(this.propertyBranch);
        this.isTensor = this.propertyBranch.type === settings_1.PropertyType.tensor;
        this.isObject = this.propertyBranch.type === settings_1.PropertyType.object;
        this.isConvergence = _a.isConvergence(this.propertyBranch);
        this.isAbleToReturnMultipleResults = this.propertyBranch.isAbleToReturnMultipleResults;
        this.type = (_b = this.propertyBranch.type) !== null && _b !== void 0 ? _b : null;
        this.isRefined = this.name in tree_1.REFINED_PROPERTIES_SUBTREE;
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
    static propertyBranch(propertyName) {
        // safely return empty object in case the tree does not contain the name key
        return tree_1.default[propertyName] || {};
    }
    static omitInResults(propertyName) {
        return Boolean(this.propertyBranch(propertyName).omitInResults);
    }
    static isScalar(propertyConfig) {
        return propertyConfig.type === settings_1.PropertyType.scalar;
    }
    static isConvergence(propertyConfig) {
        return Boolean(propertyConfig.isConvergence);
    }
    get repetition() {
        return this.requiredProp("repetition");
    }
}
_a = Property;
Property.scalarsSubTree = (0, pickBy_1.default)(tree_1.default, (val) => _a.isScalar(val));
Property.nonScalarsSubTree = (0, pickBy_1.default)(tree_1.default, (val) => !_a.isScalar(val));
Property.convergencesSubTree = (0, pickBy_1.default)(tree_1.default, (val) => _a.isConvergence(val));
exports.default = Property;
