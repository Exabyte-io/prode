import ConvergenceElectronicProperty from "./include/convergence/ConvergenceElectronicProperty";
import ConvergenceIonicProperty from "./include/convergence/ConvergenceIonicProperty";
import Pseudopotential from "./include/meta_properties/Pseudopotential";
import AveragePotentialProfileProperty from "./include/non-scalar/AveragePotentialProfileProperty";
import BandGapsProperty from "./include/non-scalar/BandGapsProperty";
import BandStructureProperty from "./include/non-scalar/BandStructureProperty";
import ChargeDensityProfileProperty from "./include/non-scalar/ChargeDensityProfileProperty";
import DensityOfStatesProperty from "./include/non-scalar/DensityOfStatesProperty";
import DielectricTensorProperty from "./include/non-scalar/DielectricTensorProperty";
import FinalStructureProperty from "./include/non-scalar/FinalStructureProperty";
import HubbardUProperty from "./include/non-scalar/HubbardUProperty";
import HubbardVNNProperty from "./include/non-scalar/HubbardVNNProperty";
import HubbardVProperty from "./include/non-scalar/HubbardVProperty";
import PhononDispersionsProperty from "./include/non-scalar/PhononDispersionsProperty";
import PhononDOSProperty from "./include/non-scalar/PhononDOSProperty";
import PotentialProfileProperty from "./include/non-scalar/PotentialProfileProperty";
import ReactionEnergyProfileProperty from "./include/non-scalar/ReactionEnergyProfileProperty";
import WorkflowProperty from "./include/non-scalar/WorkflowProperty";
import ObjectProperty from "./include/primitive/ObjectProperty";
import TensorProperty from "./include/primitive/TensorProperty";
import PropertyClass from "./Property";
import { PropertyName, PropertyType } from "./settings";

/**
 * @description Type for property class constructor
 */
type PropertyClassConstructor = new (...args: any[]) => any;

/**
 * @description Type for the property class map
 */
type PropertyClassMap = Record<PropertyName, PropertyClassConstructor | null>;

/**
 * @desc Used in property factory to map property names to property classes.
 */
export const PROPERTY_CLASS_MAP: PropertyClassMap = {
    [PropertyName.pressure]: null,
    [PropertyName.total_force]: null,
    [PropertyName.total_energy]: null,
    [PropertyName.surface_energy]: null,
    [PropertyName.convergence_elec]: ConvergenceElectronicProperty,
    [PropertyName.convergence_ion]: ConvergenceIonicProperty,
    [PropertyName.fermi_energy]: null,
    [PropertyName.zero_point_energy]: null,
    [PropertyName.total_energy_contrib]: null,
    [PropertyName.atomic_forces]: null,
    [PropertyName.atomic_constraints]: null,
    [PropertyName.stress_tensor]: null,
    [PropertyName.dos]: DensityOfStatesProperty,
    [PropertyName.band_structure]: BandStructureProperty,
    [PropertyName.band_gaps]: BandGapsProperty,
    [PropertyName.phonon_dispersions]: PhononDispersionsProperty,
    [PropertyName.phonon_dos]: PhononDOSProperty,
    [PropertyName.final_structure]: FinalStructureProperty,
    [PropertyName.is_relaxed]: null,
    [PropertyName.w_pyml_predict]: WorkflowProperty,
    [PropertyName.file_content]: null,
    [PropertyName.magnetic_moments]: null,
    [PropertyName.rxn_energy_barrier]: null,
    [PropertyName.rxn_energy_profile]: ReactionEnergyProfileProperty,
    [PropertyName.potential_profile]: PotentialProfileProperty,
    [PropertyName.charge_density_profile]: ChargeDensityProfileProperty,
    [PropertyName.jupyter_nb_endpoint]: null,
    [PropertyName.average_potential_profile]: AveragePotentialProfileProperty,
    [PropertyName.valence_band_offset]: null,
    [PropertyName.pseudopotential]: Pseudopotential,
    [PropertyName.boundary_conditions]: null,
    [PropertyName.dielectric_tensor]: DielectricTensorProperty,
    [PropertyName.hubbard_u]: HubbardUProperty,
    [PropertyName.hubbard_v_nn]: HubbardVNNProperty,
    [PropertyName.hubbard_v]: HubbardVProperty,
};

export const PROPERTY_BRANCH_MAP: { [key in PropertyType]: PropertyClassConstructor } = {
    [PropertyType.tensor]: TensorProperty,
    [PropertyType.object]: ObjectProperty,
    [PropertyType.non_scalar]: PropertyClass,
    [PropertyType.scalar]: PropertyClass,
};
