import type { PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import { PROPERTY_CLASS_MAP } from "./classmap";
import Property from "./Property";
import type { PropertyName } from "./settings";

export default class PropertyFactory {
    static Property = Property;

    static methodsTree: Record<string, () => void> = {};

    static create(
        config:
            | `${PropertyName}`
            | PropertyHolderSchema["data"]
            | ProtoPropertyHolderSchema["data"],
        methodType?: string,
    ): Property {
        const name = typeof config === "string" ? config : config.name;
        // TODO: fix this
        // @ts-expect-error - this is a workaround to allow the propertyMixin to be used with any type of entity
        const PropertyClass = PROPERTY_CLASS_MAP[name];
        const precisionFn = this._precisionFunctionByMethodType(methodType);

        // add precision function directly to avoid mixins
        PropertyClass.prototype.calculatePrecision = precisionFn;

        return new PropertyClass(config);
    }

    // TODO: generalize the tree
    static _precisionFunctionByMethodType(methodType = "DFTPseudopotential") {
        // eslint-disable-next-line func-names, @typescript-eslint/no-empty-function
        return this.methodsTree[methodType] || function () {}; // return empty function (class) by default
    }

    // TODO: move to web-app
    // static _calculateFermiEnergy() {
    //     if (!this.constructor.Unit) {
    //         throw new Error("Unit is null!");
    //     }
    //     const units = lodash
    //         .get(this.context, "subworkflow.units", [])
    //         .map((ucfg) => new this.constructor.Unit(ucfg));

    //     // check whether FE was intended on being calculated
    //     const FEUnits = units.filter((u) => u.getResultByName("fermi_energy"));
    //     const lastFEUnit = FEUnits && FEUnits[FEUnits.length - 1];
    //     // extract FE value from raw properties
    //     const FEProperty = lastFEUnit && lastFEUnit.getRawPropertiesResultByName("fermi_energy");

    //     return FEProperty && FEProperty.value;
    // }

    // TODO: move to web-app
    // static _calculatePointsPath(property: Property) {
    //     const latticeConfig = lodash.get(this.context, "material.lattice", {});
    //     if (!_.isEmpty(latticeConfig)) {
    //         const rl = new Made.ReciprocalLattice(latticeConfig);
    //         return rl.extractKpointPath(this.xDataArray);
    //     }
    //     return undefined;
    // }
}
