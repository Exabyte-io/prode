"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const classmap_1 = require("./classmap");
const Property_1 = __importDefault(require("./Property"));
const tree_1 = __importDefault(require("./tree"));
class PropertyFactory {
    static create(config, methodType) {
        const name = lodash_1.default.isString(config)
            ? config
            : lodash_1.default.get(config, "data.name", "") || lodash_1.default.get(config, "name", "");
        const PropertyClass = this._propertyClassByName(name);
        const precisionFn = this._precisionFunctionByMethodType(methodType);
        // add precision function directly to avoid mixins
        PropertyClass.prototype.calculatePrecision = precisionFn;
        return new PropertyClass(config);
    }
    static _propertyClassByName(name) {
        const branch = tree_1.default[name];
        return this.classMap[name] || (branch.type && this.branchMap[branch.type]) || this.Property;
    }
    // TODO: generalize the tree
    static _precisionFunctionByMethodType(methodType = "DFTPseudopotential") {
        // eslint-disable-next-line func-names, @typescript-eslint/no-empty-function
        return this.methodsTree[methodType] || function () { }; // return empty function (class) by default
    }
    static _calculateFermiEnergy() {
        // TODO: move to web-app
        if (!this.constructor.Unit) {
            throw new Error("Unit is null!");
        }
        const units = lodash_1.default
            .get(this.context, "subworkflow.units", [])
            .map((ucfg) => new this.constructor.Unit(ucfg));
        // check whether FE was intended on being calculated
        const FEUnits = units.filter((u) => u.getResultByName("fermi_energy"));
        const lastFEUnit = FEUnits && FEUnits[FEUnits.length - 1];
        // extract FE value from raw properties
        const FEProperty = lastFEUnit && lastFEUnit.getRawPropertiesResultByName("fermi_energy");
        return FEProperty && FEProperty.value;
    }
    static _calculatePointsPath(property) {
        // TODO: do we have context in esse schemas?
        const latticeConfig = lodash_1.default.get(this.context, "material.lattice", {});
        if (!_.isEmpty(latticeConfig)) {
            const rl = new Made.ReciprocalLattice(latticeConfig);
            return rl.extractKpointPath(this.xDataArray);
        }
        return undefined;
    }
}
PropertyFactory.Property = Property_1.default;
PropertyFactory.classMap = classmap_1.PROPERTY_CLASS_MAP;
PropertyFactory.branchMap = classmap_1.PROPERTY_BRANCH_MAP;
PropertyFactory.methodsTree = {};
exports.default = PropertyFactory;
