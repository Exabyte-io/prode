import type { PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import Pseudopotential from "./meta_properties/PseudopotentialProperty";
import AveragePotentialProfileProperty from "./properties/non-scalar/AveragePotentialProfileProperty";
import BandGapsProperty from "./properties/non-scalar/BandGapsProperty";
import BandStructureProperty from "./properties/non-scalar/BandStructureProperty";
import ChargeDensityProfileProperty from "./properties/non-scalar/ChargeDensityProfileProperty";
import ConvergenceElectronicProperty from "./properties/non-scalar/convergence/ConvergenceElectronicProperty";
import ConvergenceIonicProperty from "./properties/non-scalar/convergence/ConvergenceIonicProperty";
import DensityOfStatesProperty from "./properties/non-scalar/DensityOfStatesProperty";
import DielectricTensorProperty from "./properties/non-scalar/DielectricTensorProperty";
import FileContentProperty from "./properties/non-scalar/FileContentProperty";
import FinalStructureProperty from "./properties/non-scalar/FinalStructureProperty";
import HubbardUProperty from "./properties/non-scalar/HubbardUProperty";
import HubbardVNNProperty from "./properties/non-scalar/HubbardVNNProperty";
import HubbardVProperty from "./properties/non-scalar/HubbardVProperty";
import IsRelaxedProperty from "./properties/non-scalar/IsRelaxedProperty";
import JupyterNotebookEndpointProperty from "./properties/non-scalar/JupyterNotebookEndpointProperty";
import PhononDispersionsProperty from "./properties/non-scalar/PhononDispersionsProperty";
import PhononDOSProperty from "./properties/non-scalar/PhononDOSProperty";
import PotentialProfileProperty from "./properties/non-scalar/PotentialProfileProperty";
import ReactionEnergyProfileProperty from "./properties/non-scalar/ReactionEnergyProfileProperty";
import WorkflowProperty from "./properties/non-scalar/WorkflowProperty";
import TotalEnergyContributionsProperty from "./properties/object/TotalEnergyContributionsProperty";
import FermiEnergyProperty from "./properties/scalar/FermiEnergyProperty";
import IonizationPotentialElementalProperty from "./properties/scalar/IonizationPotentialElementalProperty";
import PressureProperty from "./properties/scalar/PressureProperty";
import ReactionEnergyBarrierProperty from "./properties/scalar/ReactionEnergyBarrierProperty";
import SurfaceEnergyProperty from "./properties/scalar/SurfaceEnergyProperty";
import TotalEnergyProperty from "./properties/scalar/TotalEnergyProperty";
import TotalForcesProperty from "./properties/scalar/TotalForceProperty";
import ValenceBandOffsetProperty from "./properties/scalar/ValenceBandOffsetProperty";
import ZeroPointEnergyProperty from "./properties/scalar/ZeroPointEnergyProperty";
import AtomicForcesProperty from "./properties/tensor/AtomicForcesProperty";
import MagneticMomentsProperty from "./properties/tensor/MagneticMomentsProperty";
import StressTensorProperty from "./properties/tensor/StressTensorProperty";
import type Property from "./Property";
import AtomicConstraintsProperty from "./proto_properties/AtomicConstraintsProperty";
import BoundaryConditionsProperty from "./proto_properties/BoundaryConditionsProperty";
import { PropertyName, PropertyType } from "./settings";

type PropertyClassMap = {
    [key in PropertyName]: typeof Property;
};

export const PROPERTY_CLASS_MAP: PropertyClassMap = {
    [PressureProperty.propertyName]: PressureProperty,
    [TotalForcesProperty.propertyName]: TotalForcesProperty,
    [TotalEnergyProperty.propertyName]: TotalEnergyProperty,
    [SurfaceEnergyProperty.propertyName]: SurfaceEnergyProperty,
    [ConvergenceElectronicProperty.propertyName]: ConvergenceElectronicProperty,
    [ConvergenceIonicProperty.propertyName]: ConvergenceIonicProperty,
    [FermiEnergyProperty.propertyName]: FermiEnergyProperty,
    [ZeroPointEnergyProperty.propertyName]: ZeroPointEnergyProperty,
    [TotalEnergyContributionsProperty.propertyName]: TotalEnergyContributionsProperty,
    [AtomicForcesProperty.propertyName]: AtomicForcesProperty,
    [StressTensorProperty.propertyName]: StressTensorProperty,
    [DensityOfStatesProperty.propertyName]: DensityOfStatesProperty,
    [BandStructureProperty.propertyName]: BandStructureProperty,
    [BandGapsProperty.propertyName]: BandGapsProperty,
    [PhononDispersionsProperty.propertyName]: PhononDispersionsProperty,
    [PhononDOSProperty.propertyName]: PhononDOSProperty,
    [FinalStructureProperty.propertyName]: FinalStructureProperty,
    [IsRelaxedProperty.propertyName]: IsRelaxedProperty,
    [WorkflowProperty.propertyName]: WorkflowProperty,
    [MagneticMomentsProperty.propertyName]: MagneticMomentsProperty,
    [ReactionEnergyBarrierProperty.propertyName]: ReactionEnergyBarrierProperty,
    [ReactionEnergyProfileProperty.propertyName]: ReactionEnergyProfileProperty,
    [PotentialProfileProperty.propertyName]: PotentialProfileProperty,
    [ChargeDensityProfileProperty.propertyName]: ChargeDensityProfileProperty,
    [AveragePotentialProfileProperty.propertyName]: AveragePotentialProfileProperty,
    [ValenceBandOffsetProperty.propertyName]: ValenceBandOffsetProperty,
    [IonizationPotentialElementalProperty.propertyName]: IonizationPotentialElementalProperty,
    [FileContentProperty.propertyName]: FileContentProperty,
    [DielectricTensorProperty.propertyName]: DielectricTensorProperty,
    [HubbardUProperty.propertyName]: HubbardUProperty,
    [HubbardVNNProperty.propertyName]: HubbardVNNProperty,
    [HubbardVProperty.propertyName]: HubbardVProperty,
    [JupyterNotebookEndpointProperty.propertyName]: JupyterNotebookEndpointProperty,

    // meta
    [Pseudopotential.propertyName]: Pseudopotential,

    // proto
    [BoundaryConditionsProperty.propertyName]: BoundaryConditionsProperty,
    [AtomicConstraintsProperty.propertyName]: AtomicConstraintsProperty,
};

export default class PropertyFactory {
    static methodsTree: Record<string, () => void> = {};

    /**
     * Get all PropertyName values for properties that have isRefined = true
     * @returns Array of PropertyName values for refined properties
     */
    static getRefinedPropertyNames(): PropertyName[] {
        return this.filterPropertyNames((Property) => Property.isRefined);
    }

    /**
     * Get all PropertyName values for properties that have isConvergence = true
     * @returns Array of PropertyName values for convergence properties
     */
    static getConvergencePropertyNames(): PropertyName[] {
        return this.filterPropertyNames((Property) => Property.isConvergence);
    }

    /**
     * Get all PropertyName values for properties that have isAbleToReturnMultipleResults = true
     * @returns Array of PropertyName values for properties that can return multiple results
     */
    static getMultipleResultsPropertyNames(): PropertyName[] {
        return this.filterPropertyNames((Property) => Property.isAbleToReturnMultipleResults);
    }

    static getScalarPropertyNames(): PropertyName[] {
        return this.filterPropertyNames(({ propertyType }) => propertyType === PropertyType.scalar);
    }

    static getNonScalarPropertyNames(): PropertyName[] {
        return this.filterPropertyNames((PropertyClass) => PropertyClass.isNonScalar);
    }

    private static filterPropertyNames(
        filterFn: (PropertyClass: typeof Property) => boolean,
    ): PropertyName[] {
        return Object.values(PROPERTY_CLASS_MAP)
            .filter(filterFn)
            .map((PropertyClass) => PropertyClass.propertyName);
    }

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
