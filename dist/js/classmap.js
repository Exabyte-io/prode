"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPERTY_BRANCH_MAP = exports.PROPERTY_CLASS_MAP = void 0;
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
const PhononDispersionsProperty_1 = __importDefault(require("./include/non-scalar/PhononDispersionsProperty"));
const PhononDOSProperty_1 = __importDefault(require("./include/non-scalar/PhononDOSProperty"));
const PotentialProfileProperty_1 = __importDefault(require("./include/non-scalar/PotentialProfileProperty"));
const ReactionEnergyProfileProperty_1 = __importDefault(require("./include/non-scalar/ReactionEnergyProfileProperty"));
const WorkflowProperty_1 = __importDefault(require("./include/non-scalar/WorkflowProperty"));
const ObjectProperty_1 = __importDefault(require("./include/primitive/ObjectProperty"));
const TensorProperty_1 = __importDefault(require("./include/primitive/TensorProperty"));
const Property_1 = __importDefault(require("./Property"));
const settings_1 = require("./settings");
/**
 * @desc Used in property factory to map property names to property classes.
 */
exports.PROPERTY_CLASS_MAP = {
    [settings_1.PropertyName.pressure]: null,
    [settings_1.PropertyName.total_force]: null,
    [settings_1.PropertyName.total_energy]: null,
    [settings_1.PropertyName.surface_energy]: null,
    [settings_1.PropertyName.convergence_elec]: ConvergenceElectronicProperty_1.default,
    [settings_1.PropertyName.convergence_ion]: ConvergenceIonicProperty_1.default,
    [settings_1.PropertyName.fermi_energy]: null,
    [settings_1.PropertyName.zero_point_energy]: null,
    [settings_1.PropertyName.total_energy_contrib]: null,
    [settings_1.PropertyName.atomic_forces]: null,
    [settings_1.PropertyName.atomic_constraints]: null,
    [settings_1.PropertyName.stress_tensor]: null,
    [settings_1.PropertyName.dos]: DensityOfStatesProperty_1.default,
    [settings_1.PropertyName.band_structure]: BandStructureProperty_1.default,
    [settings_1.PropertyName.band_gaps]: BandGapsProperty_1.default,
    [settings_1.PropertyName.phonon_dispersions]: PhononDispersionsProperty_1.default,
    [settings_1.PropertyName.phonon_dos]: PhononDOSProperty_1.default,
    [settings_1.PropertyName.final_structure]: FinalStructureProperty_1.default,
    [settings_1.PropertyName.is_relaxed]: null,
    [settings_1.PropertyName.w_pyml_predict]: WorkflowProperty_1.default,
    [settings_1.PropertyName.file_content]: null,
    [settings_1.PropertyName.magnetic_moments]: null,
    [settings_1.PropertyName.rxn_energy_barrier]: null,
    [settings_1.PropertyName.rxn_energy_profile]: ReactionEnergyProfileProperty_1.default,
    [settings_1.PropertyName.potential_profile]: PotentialProfileProperty_1.default,
    [settings_1.PropertyName.charge_density_profile]: ChargeDensityProfileProperty_1.default,
    [settings_1.PropertyName.jupyter_nb_endpoint]: null,
    [settings_1.PropertyName.average_potential_profile]: AveragePotentialProfileProperty_1.default,
    [settings_1.PropertyName.valence_band_offset]: null,
    [settings_1.PropertyName.pseudopotential]: Pseudopotential_1.default,
    [settings_1.PropertyName.boundary_conditions]: null,
    [settings_1.PropertyName.dielectric_tensor]: DielectricTensorProperty_1.default,
    [settings_1.PropertyName.hubbard_u]: HubbardUProperty_1.default,
    [settings_1.PropertyName.hubbard_v_nn]: HubbardVNNProperty_1.default,
    [settings_1.PropertyName.hubbard_v]: HubbardVProperty_1.default,
};
exports.PROPERTY_BRANCH_MAP = {
    [settings_1.PropertyType.tensor]: TensorProperty_1.default,
    [settings_1.PropertyType.object]: ObjectProperty_1.default,
    [settings_1.PropertyType.non_scalar]: Property_1.default,
    [settings_1.PropertyType.scalar]: Property_1.default,
};
