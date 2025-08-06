import lodash from "lodash";

import { PROPERTY_BRANCH_MAP, PROPERTY_CLASS_MAP } from "./classmap";
import { Property } from "./property";
import PROPERTIES_TREE from "./tree";

export default class PropertyFactory {
    static Property = Property;

    static classMap = PROPERTY_CLASS_MAP;

    static branchMap = PROPERTY_BRANCH_MAP;

    static methodsTree: Record<string, () => void> = {};

    static create(config: string | object, methodType?: string): Property {
        const name = lodash.isString(config)
            ? config
            : lodash.get(config, "data.name", "") || lodash.get(config, "name", "");

        const PropertyClass = this._propertyClassByName(name as keyof typeof PROPERTIES_TREE);
        const precisionFn = this._precisionFunctionByMethodType(methodType);

        // add precision function directly to avoid mixins
        PropertyClass.prototype.calculatePrecision = precisionFn;

        return new PropertyClass(config);
    }

    static _propertyClassByName(name: keyof typeof PROPERTIES_TREE) {
        const branch = PROPERTIES_TREE[name];
        return this.classMap[name] || (branch.type && this.branchMap[branch.type]) || this.Property;
    }

    // TODO: generalize the tree
    static _precisionFunctionByMethodType(methodType = "DFTPseudopotential") {
        // eslint-disable-next-line func-names, @typescript-eslint/no-empty-function
        return this.methodsTree[methodType] || function () {}; // return empty function (class) by default
    }

    static _calculateFermiEnergy() {
        // TODO: move to web-app
        if (!this.constructor.Unit) {
            throw new Error("Unit is null!");
        }
        const units = lodash
            .get(this.context, "subworkflow.units", [])
            .map((ucfg) => new this.constructor.Unit(ucfg));

        // check whether FE was intended on being calculated
        const FEUnits = units.filter((u) => u.getResultByName("fermi_energy"));
        const lastFEUnit = FEUnits && FEUnits[FEUnits.length - 1];
        // extract FE value from raw properties
        const FEProperty = lastFEUnit && lastFEUnit.getRawPropertiesResultByName("fermi_energy");

        return FEProperty && FEProperty.value;
    }

    static _calculatePointsPath(property: Property) {
        // TODO: do we have context in esse schemas?
        const latticeConfig = lodash.get(this.context, "material.lattice", {});
        if (!_.isEmpty(latticeConfig)) {
            const rl = new Made.ReciprocalLattice(latticeConfig);
            return rl.extractKpointPath(this.xDataArray);
        }
        return undefined;
    }
}
