import { ConvergenceElectronicProperty } from "./include/convergence/convergence_electronic";
import { ConvergenceIonicProperty } from "./include/convergence/convergence_ionic";
import { Pseudopotential } from "./include/meta_properties/pseudopotential";
import { AveragePotentialProfileProperty } from "./include/non-scalar/average_potential_profile";
import { BandGapsProperty } from "./include/non-scalar/band_gaps";
import { BandStructureProperty } from "./include/non-scalar/band_structure";
import { ChargeDensityProfileProperty } from "./include/non-scalar/charge_density_profile";
import { DensityOfStatesProperty } from "./include/non-scalar/density_of_states";
import { DielectricTensorProperty } from "./include/non-scalar/dielectric_tensor";
import { HubbardUProperty } from "./include/non-scalar/hubbard_u";
import { HubbardVProperty } from "./include/non-scalar/hubbard_v";
import { HubbardVNNProperty } from "./include/non-scalar/hubbard_v_nn";
import { PhononDispersionsProperty } from "./include/non-scalar/phonon_dispersions";
import { PhononDOSProperty } from "./include/non-scalar/phonon_dos";
import { PotentialProfileProperty } from "./include/non-scalar/potential_profile";
import { ReactionEnergyProfileProperty } from "./include/non-scalar/reaction_energy_profile";
import { StructureProperty } from "./include/non-scalar/structure";
import { WorkflowProperty } from "./include/non-scalar/workflow";
import { ObjectProperty } from "./include/primitive/object";
import { TensorProperty } from "./include/primitive/tensor";
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
    [PropertyName.final_structure]: StructureProperty,
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
