"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPERTY_BRANCH_MAP = exports.PROPERTY_CLASS_MAP = void 0;
const convergence_electronic_1 = require("./include/convergence/convergence_electronic");
const convergence_ionic_1 = require("./include/convergence/convergence_ionic");
const pseudopotential_1 = require("./include/meta_properties/pseudopotential");
const average_potential_profile_1 = require("./include/non-scalar/average_potential_profile");
const band_gaps_1 = require("./include/non-scalar/band_gaps");
const band_structure_1 = require("./include/non-scalar/band_structure");
const charge_density_profile_1 = require("./include/non-scalar/charge_density_profile");
const density_of_states_1 = require("./include/non-scalar/density_of_states");
const dielectric_tensor_1 = require("./include/non-scalar/dielectric_tensor");
const hubbard_u_1 = require("./include/non-scalar/hubbard_u");
const hubbard_v_1 = require("./include/non-scalar/hubbard_v");
const hubbard_v_nn_1 = require("./include/non-scalar/hubbard_v_nn");
const phonon_dispersions_1 = require("./include/non-scalar/phonon_dispersions");
const phonon_dos_1 = require("./include/non-scalar/phonon_dos");
const potential_profile_1 = require("./include/non-scalar/potential_profile");
const reaction_energy_profile_1 = require("./include/non-scalar/reaction_energy_profile");
const structure_1 = require("./include/non-scalar/structure");
const workflow_1 = require("./include/non-scalar/workflow");
const object_1 = require("./include/primitive/object");
const tensor_1 = require("./include/primitive/tensor");
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
    [settings_1.PropertyName.convergence_elec]:
        convergence_electronic_1.ConvergenceElectronicProperty,
    [settings_1.PropertyName.convergence_ion]: convergence_ionic_1.ConvergenceIonicProperty,
    [settings_1.PropertyName.fermi_energy]: null,
    [settings_1.PropertyName.zero_point_energy]: null,
    [settings_1.PropertyName.total_energy_contrib]: null,
    [settings_1.PropertyName.atomic_forces]: null,
    [settings_1.PropertyName.atomic_constraints]: null,
    [settings_1.PropertyName.stress_tensor]: null,
    [settings_1.PropertyName.dos]: density_of_states_1.DensityOfStatesProperty,
    [settings_1.PropertyName.band_structure]: band_structure_1.BandStructureProperty,
    [settings_1.PropertyName.band_gaps]: band_gaps_1.BandGapsProperty,
    [settings_1.PropertyName.phonon_dispersions]: phonon_dispersions_1.PhononDispersionsProperty,
    [settings_1.PropertyName.phonon_dos]: phonon_dos_1.PhononDOSProperty,
    [settings_1.PropertyName.predicted_properties]: null,
    [settings_1.PropertyName.final_structure]: structure_1.StructureProperty,
    [settings_1.PropertyName.is_relaxed]: null,
    [settings_1.PropertyName.w_ml_predict]: workflow_1.WorkflowProperty,
    [settings_1.PropertyName.w_pyml_predict]: workflow_1.WorkflowProperty,
    [settings_1.PropertyName.file_content]: null,
    [settings_1.PropertyName.magnetic_moments]: null,
    [settings_1.PropertyName.rxn_energy_barrier]: null,
    [settings_1.PropertyName.rxn_energy_profile]:
        reaction_energy_profile_1.ReactionEnergyProfileProperty,
    [settings_1.PropertyName.potential_profile]: potential_profile_1.PotentialProfileProperty,
    [settings_1.PropertyName.charge_density_profile]:
        charge_density_profile_1.ChargeDensityProfileProperty,
    [settings_1.PropertyName.jupyter_nb_endpoint]: null,
    [settings_1.PropertyName.average_potential_profile]:
        average_potential_profile_1.AveragePotentialProfileProperty,
    [settings_1.PropertyName.valence_band_offset]: null,
    [settings_1.PropertyName.pseudopotential]: pseudopotential_1.Pseudopotential,
    [settings_1.PropertyName.boundary_conditions]: null,
    [settings_1.PropertyName.dielectric_tensor]: dielectric_tensor_1.DielectricTensorProperty,
    [settings_1.PropertyName.hubbard_u]: hubbard_u_1.HubbardUProperty,
    [settings_1.PropertyName.hubbard_v_nn]: hubbard_v_nn_1.HubbardVNNProperty,
    [settings_1.PropertyName.hubbard_v]: hubbard_v_1.HubbardVProperty,
};
exports.PROPERTY_BRANCH_MAP = {
    [settings_1.PropertyType.tensor]: tensor_1.TensorProperty,
    [settings_1.PropertyType.object]: object_1.ObjectProperty,
    [settings_1.PropertyType.non_scalar]: Property_1.default,
    [settings_1.PropertyType.scalar]: Property_1.default,
};
