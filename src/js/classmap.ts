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
import { Property as PropertyClass } from "./property";
import { Property, PropertyType } from "./settings";

/**
 * @description Type for property class constructor
 */
type PropertyClassConstructor = new (...args: any[]) => any;

/**
 * @description Type for the property class map
 */
type PropertyClassMap = Record<Property, PropertyClassConstructor | null>;

/**
 * @desc Used in property factory to map property names to property classes.
 */
export const PROPERTY_CLASS_MAP: PropertyClassMap = {
    [Property.pressure]: null,
    [Property.total_force]: null,
    [Property.total_energy]: null,
    [Property.surface_energy]: null,
    [Property.convergence_elec]: ConvergenceElectronicProperty,
    [Property.convergence_ion]: ConvergenceIonicProperty,
    [Property.fermi_energy]: null,
    [Property.zero_point_energy]: null,
    [Property.total_energy_contrib]: null,
    [Property.atomic_forces]: null,
    [Property.atomic_constraints]: null,
    [Property.stress_tensor]: null,
    [Property.dos]: DensityOfStatesProperty,
    [Property.band_structure]: BandStructureProperty,
    [Property.band_gaps]: BandGapsProperty,
    [Property.phonon_dispersions]: PhononDispersionsProperty,
    [Property.phonon_dos]: PhononDOSProperty,
    [Property.predicted_properties]: null,
    [Property.final_structure]: StructureProperty,
    [Property.is_relaxed]: null,
    [Property.w_ml_predict]: WorkflowProperty,
    [Property.w_pyml_predict]: WorkflowProperty,
    [Property.file_content]: null,
    [Property.magnetic_moments]: null,
    [Property.rxn_energy_barrier]: null,
    [Property.rxn_energy_profile]: ReactionEnergyProfileProperty,
    [Property.potential_profile]: PotentialProfileProperty,
    [Property.charge_density_profile]: ChargeDensityProfileProperty,
    [Property.jupyter_nb_endpoint]: null,
    [Property.average_potential_profile]: AveragePotentialProfileProperty,
    [Property.valence_band_offset]: null,
    [Property.pseudopotential]: Pseudopotential,
    [Property.boundary_conditions]: null,
    [Property.dielectric_tensor]: DielectricTensorProperty,
    [Property.hubbard_u]: HubbardUProperty,
    [Property.hubbard_v_nn]: HubbardVNNProperty,
    [Property.hubbard_v]: HubbardVProperty,
};

export const PROPERTY_BRANCH_MAP: { [key in PropertyType]: PropertyClassConstructor } = {
    [PropertyType.tensor]: TensorProperty,
    [PropertyType.object]: ObjectProperty,
    [PropertyType.non_scalar]: PropertyClass,
    [PropertyType.scalar]: PropertyClass,
};
