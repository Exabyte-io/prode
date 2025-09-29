"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PseudopotentialProperty_1 = __importDefault(require("./meta_properties/PseudopotentialProperty"));
const AveragePotentialProfileProperty_1 = __importDefault(require("./properties/non-scalar/AveragePotentialProfileProperty"));
const BandGapsProperty_1 = __importDefault(require("./properties/non-scalar/BandGapsProperty"));
const BandStructureProperty_1 = __importDefault(require("./properties/non-scalar/BandStructureProperty"));
const ChargeDensityProfileProperty_1 = __importDefault(require("./properties/non-scalar/ChargeDensityProfileProperty"));
const ConvergenceElectronicProperty_1 = __importDefault(require("./properties/non-scalar/convergence/ConvergenceElectronicProperty"));
const ConvergenceIonicProperty_1 = __importDefault(require("./properties/non-scalar/convergence/ConvergenceIonicProperty"));
const DensityOfStatesProperty_1 = __importDefault(require("./properties/non-scalar/DensityOfStatesProperty"));
const DielectricTensorProperty_1 = __importDefault(require("./properties/non-scalar/DielectricTensorProperty"));
const FileContentProperty_1 = __importDefault(require("./properties/non-scalar/FileContentProperty"));
const FinalStructureProperty_1 = __importDefault(require("./properties/non-scalar/FinalStructureProperty"));
const HubbardUProperty_1 = __importDefault(require("./properties/non-scalar/HubbardUProperty"));
const HubbardVNNProperty_1 = __importDefault(require("./properties/non-scalar/HubbardVNNProperty"));
const HubbardVProperty_1 = __importDefault(require("./properties/non-scalar/HubbardVProperty"));
const IsRelaxedProperty_1 = __importDefault(require("./properties/non-scalar/IsRelaxedProperty"));
const JupyterNotebookEndpointProperty_1 = __importDefault(require("./properties/non-scalar/JupyterNotebookEndpointProperty"));
const PhononDispersionsProperty_1 = __importDefault(require("./properties/non-scalar/PhononDispersionsProperty"));
const PhononDOSProperty_1 = __importDefault(require("./properties/non-scalar/PhononDOSProperty"));
const PotentialProfileProperty_1 = __importDefault(require("./properties/non-scalar/PotentialProfileProperty"));
const ReactionEnergyProfileProperty_1 = __importDefault(require("./properties/non-scalar/ReactionEnergyProfileProperty"));
const WorkflowProperty_1 = __importDefault(require("./properties/non-scalar/WorkflowProperty"));
const TotalEnergyContributionsProperty_1 = __importDefault(require("./properties/object/TotalEnergyContributionsProperty"));
const FermiEnergyProperty_1 = __importDefault(require("./properties/scalar/FermiEnergyProperty"));
const IonizationPotentialElementalProperty_1 = __importDefault(require("./properties/scalar/IonizationPotentialElementalProperty"));
const PressureProperty_1 = __importDefault(require("./properties/scalar/PressureProperty"));
const ReactionEnergyBarrierProperty_1 = __importDefault(require("./properties/scalar/ReactionEnergyBarrierProperty"));
const SurfaceEnergyProperty_1 = __importDefault(require("./properties/scalar/SurfaceEnergyProperty"));
const TotalEnergyProperty_1 = __importDefault(require("./properties/scalar/TotalEnergyProperty"));
const TotalForceProperty_1 = __importDefault(require("./properties/scalar/TotalForceProperty"));
const ValenceBandOffsetProperty_1 = __importDefault(require("./properties/scalar/ValenceBandOffsetProperty"));
const ZeroPointEnergyProperty_1 = __importDefault(require("./properties/scalar/ZeroPointEnergyProperty"));
const AtomicForcesProperty_1 = __importDefault(require("./properties/tensor/AtomicForcesProperty"));
const MagneticMomentsProperty_1 = __importDefault(require("./properties/tensor/MagneticMomentsProperty"));
const StressTensorProperty_1 = __importDefault(require("./properties/tensor/StressTensorProperty"));
const AtomicConstraintsProperty_1 = __importDefault(require("./proto_properties/AtomicConstraintsProperty"));
const BoundaryConditionsProperty_1 = __importDefault(require("./proto_properties/BoundaryConditionsProperty"));
const settings_1 = require("./settings");
const PROPERTY_CLASS_MAP = {
    [PressureProperty_1.default.propertyName]: PressureProperty_1.default,
    [TotalForceProperty_1.default.propertyName]: TotalForceProperty_1.default,
    [TotalEnergyProperty_1.default.propertyName]: TotalEnergyProperty_1.default,
    [SurfaceEnergyProperty_1.default.propertyName]: SurfaceEnergyProperty_1.default,
    [ConvergenceElectronicProperty_1.default.propertyName]: ConvergenceElectronicProperty_1.default,
    [ConvergenceIonicProperty_1.default.propertyName]: ConvergenceIonicProperty_1.default,
    [FermiEnergyProperty_1.default.propertyName]: FermiEnergyProperty_1.default,
    [ZeroPointEnergyProperty_1.default.propertyName]: ZeroPointEnergyProperty_1.default,
    [TotalEnergyContributionsProperty_1.default.propertyName]: TotalEnergyContributionsProperty_1.default,
    [AtomicForcesProperty_1.default.propertyName]: AtomicForcesProperty_1.default,
    [StressTensorProperty_1.default.propertyName]: StressTensorProperty_1.default,
    [DensityOfStatesProperty_1.default.propertyName]: DensityOfStatesProperty_1.default,
    [BandStructureProperty_1.default.propertyName]: BandStructureProperty_1.default,
    [BandGapsProperty_1.default.propertyName]: BandGapsProperty_1.default,
    [PhononDispersionsProperty_1.default.propertyName]: PhononDispersionsProperty_1.default,
    [PhononDOSProperty_1.default.propertyName]: PhononDOSProperty_1.default,
    [FinalStructureProperty_1.default.propertyName]: FinalStructureProperty_1.default,
    [IsRelaxedProperty_1.default.propertyName]: IsRelaxedProperty_1.default,
    [WorkflowProperty_1.default.propertyName]: WorkflowProperty_1.default,
    [MagneticMomentsProperty_1.default.propertyName]: MagneticMomentsProperty_1.default,
    [ReactionEnergyBarrierProperty_1.default.propertyName]: ReactionEnergyBarrierProperty_1.default,
    [ReactionEnergyProfileProperty_1.default.propertyName]: ReactionEnergyProfileProperty_1.default,
    [PotentialProfileProperty_1.default.propertyName]: PotentialProfileProperty_1.default,
    [ChargeDensityProfileProperty_1.default.propertyName]: ChargeDensityProfileProperty_1.default,
    [AveragePotentialProfileProperty_1.default.propertyName]: AveragePotentialProfileProperty_1.default,
    [ValenceBandOffsetProperty_1.default.propertyName]: ValenceBandOffsetProperty_1.default,
    [IonizationPotentialElementalProperty_1.default.propertyName]: IonizationPotentialElementalProperty_1.default,
    [FileContentProperty_1.default.propertyName]: FileContentProperty_1.default,
    [DielectricTensorProperty_1.default.propertyName]: DielectricTensorProperty_1.default,
    [HubbardUProperty_1.default.propertyName]: HubbardUProperty_1.default,
    [HubbardVNNProperty_1.default.propertyName]: HubbardVNNProperty_1.default,
    [HubbardVProperty_1.default.propertyName]: HubbardVProperty_1.default,
    [JupyterNotebookEndpointProperty_1.default.propertyName]: JupyterNotebookEndpointProperty_1.default,
};
const META_PROPERTY_CLASS_MAP = {
    [PseudopotentialProperty_1.default.propertyName]: PseudopotentialProperty_1.default,
};
const PROTO_PROPERTY_CLASS_MAP = {
    [BoundaryConditionsProperty_1.default.propertyName]: BoundaryConditionsProperty_1.default,
    [AtomicConstraintsProperty_1.default.propertyName]: AtomicConstraintsProperty_1.default,
};
class PropertyFactory {
    static getRefinedPropertyNames() {
        return this.filterPropertyNames((PropertyClass) => {
            return PropertyClass.isRefined;
        });
    }
    static getConvergencePropertyNames() {
        return this.filterPropertyNames((PropertyClass) => {
            return PropertyClass.isConvergence;
        });
    }
    static getMultipleResultsPropertyNames() {
        return this.filterPropertyNames((PropertyClass) => {
            return PropertyClass.isAbleToReturnMultipleResults;
        });
    }
    static getScalarPropertyNames() {
        return this.filterPropertyNames((PropertyClass) => {
            return PropertyClass.propertyType === settings_1.PropertyType.scalar;
        });
    }
    static getNonScalarPropertyNames() {
        return this.filterPropertyNames((PropertyClass) => {
            return PropertyClass.isNonScalar;
        });
    }
    static filterPropertyNames(filterFn) {
        const properties = Object.values(PROPERTY_CLASS_MAP);
        return properties
            .concat(Object.values(META_PROPERTY_CLASS_MAP))
            .concat(Object.values(PROTO_PROPERTY_CLASS_MAP))
            .filter(filterFn)
            .map((PropertyClass) => PropertyClass.propertyName);
    }
    static createProperty(config) {
        const PropertyClass = PROPERTY_CLASS_MAP[config.name];
        return new PropertyClass(config);
    }
    static createMetaProperty(config) {
        const { name } = config;
        const PropertyClass = META_PROPERTY_CLASS_MAP[name];
        return new PropertyClass(config);
    }
    static createProtoProperty(config) {
        const { name } = config;
        const PropertyClass = PROTO_PROPERTY_CLASS_MAP[name];
        return new PropertyClass(config);
    }
}
PropertyFactory.methodsTree = {};
exports.default = PropertyFactory;
