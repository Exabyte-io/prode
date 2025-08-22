"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const classmap_1 = require("./classmap");
const Property_1 = __importDefault(require("./Property"));
class PropertyFactory {
    static create(config, methodType) {
        const name = lodash_1.default.isString(config)
            ? config
            : lodash_1.default.get(config, "data.name", "") || lodash_1.default.get(config, "name", "");
        const PropertyClass = classmap_1.PROPERTY_CLASS_MAP[name];
        const precisionFn = this._precisionFunctionByMethodType(methodType);
        // add precision function directly to avoid mixins
        PropertyClass.prototype.calculatePrecision = precisionFn;
        return new PropertyClass(config);
    }
    // TODO: generalize the tree
    static _precisionFunctionByMethodType(methodType = "DFTPseudopotential") {
        // eslint-disable-next-line func-names, @typescript-eslint/no-empty-function
        return this.methodsTree[methodType] || function () { }; // return empty function (class) by default
    }
}
PropertyFactory.Property = Property_1.default;
PropertyFactory.methodsTree = {};
exports.default = PropertyFactory;
