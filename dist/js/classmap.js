"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPERTY_CLASS_MAP = void 0;
const ConvergenceElectronicProperty_1 = __importDefault(require("./include/convergence/ConvergenceElectronicProperty"));
const ConvergenceIonicProperty_1 = __importDefault(require("./include/convergence/ConvergenceIonicProperty"));
const Pseudopotential_1 = __importDefault(require("./include/meta_properties/Pseudopotential"));
const AveragePotentialProfileProperty_1 = __importDefault(require("./include/non-scalar/AveragePotentialProfileProperty"));
const BandGapsProperty_1 = __importDefault(require("./include/non-scalar/BandGapsProperty"));
const BandStructureProperty_1 = __importDefault(require("./include/non-scalar/BandStructureProperty"));
const ChargeDensityProfileProperty_1 = __importDefault(require("./include/non-scalar/ChargeDensityProfileProperty"));
const DensityOfStatesProperty_1 = __importDefault(require("./include/non-scalar/DensityOfStatesProperty"));
const DielectricTensorProperty_1 = __importDefault(require("./include/non-scalar/DielectricTensorProperty"));
const FinalStructureProperty_1 = __importDefault(require("./include/non-scalar/FinalStructureProperty"));
const HubbardUProperty_1 = __importDefault(require("./include/non-scalar/HubbardUProperty"));
const HubbardVNNProperty_1 = __importDefault(require("./include/non-scalar/HubbardVNNProperty"));
const HubbardVProperty_1 = __importDefault(require("./include/non-scalar/HubbardVProperty"));
const IsRelaxedProperty_1 = __importDefault(require("./include/non-scalar/IsRelaxedProperty"));
const JupyterNotebookEndpointProperty_1 = __importDefault(require("./include/non-scalar/JupyterNotebookEndpointProperty"));
const PhononDispersionsProperty_1 = __importDefault(require("./include/non-scalar/PhononDispersionsProperty"));
const PhononDOSProperty_1 = __importDefault(require("./include/non-scalar/PhononDOSProperty"));
const PotentialProfileProperty_1 = __importDefault(require("./include/non-scalar/PotentialProfileProperty"));
const ReactionEnergyProfileProperty_1 = __importDefault(require("./include/non-scalar/ReactionEnergyProfileProperty"));
const WorkflowProperty_1 = __importDefault(require("./include/non-scalar/WorkflowProperty"));
const AtomicConstraintsProperty_1 = __importDefault(require("./include/primitive/AtomicConstraintsProperty"));
const AtomicForcesProperty_1 = __importDefault(require("./include/primitive/AtomicForcesProperty"));
const BoundaryConditionsProperty_1 = __importDefault(require("./include/primitive/BoundaryConditionsProperty"));
const FermiEnergyProperty_1 = __importDefault(require("./include/primitive/FermiEnergyProperty"));
const FileContentProperty_1 = __importDefault(require("./include/primitive/FileContentProperty"));
const MagneticMomentsProperty_1 = __importDefault(require("./include/primitive/MagneticMomentsProperty"));
const PressureProperty_1 = __importDefault(require("./include/primitive/PressureProperty"));
const ReactionEnergyBarrierProperty_1 = __importDefault(require("./include/primitive/ReactionEnergyBarrierProperty"));
const StressTensorProperty_1 = __importDefault(require("./include/primitive/StressTensorProperty"));
const SurfaceEnergyProperty_1 = __importDefault(require("./include/primitive/SurfaceEnergyProperty"));
const TotalEnergyContributionsProperty_1 = __importDefault(require("./include/primitive/TotalEnergyContributionsProperty"));
const TotalEnergyProperty_1 = __importDefault(require("./include/primitive/TotalEnergyProperty"));
const TotalForcesProperty_1 = __importDefault(require("./include/primitive/TotalForcesProperty"));
const ValenceBandOffsetProperty_1 = __importDefault(require("./include/primitive/ValenceBandOffsetProperty"));
const ZeroPointEnergyProperty_1 = __importDefault(require("./include/primitive/ZeroPointEnergyProperty"));
const settings_1 = require("./settings");
/**
 * @desc Used in property factory to map property names to property classes.
 */
exports.PROPERTY_CLASS_MAP = {
    [settings_1.PropertyName.pressure]: PressureProperty_1.default,
    [settings_1.PropertyName.total_force]: TotalForcesProperty_1.default,
    [settings_1.PropertyName.total_energy]: TotalEnergyProperty_1.default,
    [settings_1.PropertyName.surface_energy]: SurfaceEnergyProperty_1.default,
    [settings_1.PropertyName.convergence_electronic]: ConvergenceElectronicProperty_1.default,
    [settings_1.PropertyName.convergence_ionic]: ConvergenceIonicProperty_1.default,
    [settings_1.PropertyName.fermi_energy]: FermiEnergyProperty_1.default,
    [settings_1.PropertyName.zero_point_energy]: ZeroPointEnergyProperty_1.default,
    [settings_1.PropertyName.total_energy_contributions]: TotalEnergyContributionsProperty_1.default,
    [settings_1.PropertyName.atomic_forces]: AtomicForcesProperty_1.default,
    [settings_1.PropertyName.stress_tensor]: StressTensorProperty_1.default,
    [settings_1.PropertyName.density_of_states]: DensityOfStatesProperty_1.default,
    [settings_1.PropertyName.band_structure]: BandStructureProperty_1.default,
    [settings_1.PropertyName.band_gaps]: BandGapsProperty_1.default,
    [settings_1.PropertyName.phonon_dispersions]: PhononDispersionsProperty_1.default,
    [settings_1.PropertyName.phonon_dos]: PhononDOSProperty_1.default,
    [settings_1.PropertyName.final_structure]: FinalStructureProperty_1.default,
    [settings_1.PropertyName.is_relaxed]: IsRelaxedProperty_1.default,
    [settings_1.PropertyName.workflow_pyml_predict]: WorkflowProperty_1.default,
    [settings_1.PropertyName.magnetic_moments]: MagneticMomentsProperty_1.default,
    [settings_1.PropertyName.reaction_energy_barrier]: ReactionEnergyBarrierProperty_1.default,
    [settings_1.PropertyName.reaction_energy_profile]: ReactionEnergyProfileProperty_1.default,
    [settings_1.PropertyName.potential_profile]: PotentialProfileProperty_1.default,
    [settings_1.PropertyName.charge_density_profile]: ChargeDensityProfileProperty_1.default,
    [settings_1.PropertyName.average_potential_profile]: AveragePotentialProfileProperty_1.default,
    [settings_1.PropertyName.valence_band_offset]: ValenceBandOffsetProperty_1.default,
    [settings_1.PropertyName.file_content]: FileContentProperty_1.default,
    [settings_1.PropertyName.dielectric_tensor]: DielectricTensorProperty_1.default,
    [settings_1.PropertyName.hubbard_u]: HubbardUProperty_1.default,
    [settings_1.PropertyName.hubbard_v_nn]: HubbardVNNProperty_1.default,
    [settings_1.PropertyName.hubbard_v]: HubbardVProperty_1.default,
    [settings_1.PropertyName.jupyter_notebook_endpoint]: JupyterNotebookEndpointProperty_1.default,
    // meta
    [settings_1.PropertyName.pseudopotential]: Pseudopotential_1.default,
    // proto
    [settings_1.PropertyName.boundary_conditions]: BoundaryConditionsProperty_1.default,
    [settings_1.PropertyName.atomic_constraints]: AtomicConstraintsProperty_1.default,
};
