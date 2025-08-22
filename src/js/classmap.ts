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
import IsRelaxedProperty from "./include/non-scalar/IsRelaxedProperty";
import JupyterNotebookEndpointProperty from "./include/non-scalar/JupyterNotebookEndpointProperty";
import PhononDispersionsProperty from "./include/non-scalar/PhononDispersionsProperty";
import PhononDOSProperty from "./include/non-scalar/PhononDOSProperty";
import PotentialProfileProperty from "./include/non-scalar/PotentialProfileProperty";
import ReactionEnergyProfileProperty from "./include/non-scalar/ReactionEnergyProfileProperty";
import WorkflowProperty from "./include/non-scalar/WorkflowProperty";
import AtomicConstraintsProperty from "./include/primitive/AtomicConstraintsProperty";
import AtomicForcesProperty from "./include/primitive/AtomicForcesProperty";
import BoundaryConditionsProperty from "./include/primitive/BoundaryConditionsProperty";
import FermiEnergyProperty from "./include/primitive/FermiEnergyProperty";
import FileContentProperty from "./include/primitive/FileContentProperty";
import MagneticMomentsProperty from "./include/primitive/MagneticMomentsProperty";
import PressureProperty from "./include/primitive/PressureProperty";
import ReactionEnergyBarrierProperty from "./include/primitive/ReactionEnergyBarrierProperty";
import StressTensorProperty from "./include/primitive/StressTensorProperty";
import SurfaceEnergyProperty from "./include/primitive/SurfaceEnergyProperty";
import TotalEnergyContributionsProperty from "./include/primitive/TotalEnergyContributionsProperty";
import TotalEnergyProperty from "./include/primitive/TotalEnergyProperty";
import TotalForcesProperty from "./include/primitive/TotalForcesProperty";
import ValenceBandOffsetProperty from "./include/primitive/ValenceBandOffsetProperty";
import ZeroPointEnergyProperty from "./include/primitive/ZeroPointEnergyProperty";
import { PropertyName } from "./settings";

/**
 * @description Type for property class constructor
 */
type PropertyClassConstructor = new (...args: any[]) => any;

/**
 * @description Type for the property class map
 */
type PropertyClassMap = {
    [key in PropertyName]: PropertyClassConstructor;
};

/**
 * @desc Used in property factory to map property names to property classes.
 */
export const PROPERTY_CLASS_MAP: PropertyClassMap = {
    [PropertyName.pressure]: PressureProperty,
    [PropertyName.total_force]: TotalForcesProperty,
    [PropertyName.total_energy]: TotalEnergyProperty,
    [PropertyName.surface_energy]: SurfaceEnergyProperty,
    [PropertyName.convergence_electronic]: ConvergenceElectronicProperty,
    [PropertyName.convergence_ionic]: ConvergenceIonicProperty,
    [PropertyName.fermi_energy]: FermiEnergyProperty,
    [PropertyName.zero_point_energy]: ZeroPointEnergyProperty,
    [PropertyName.total_energy_contributions]: TotalEnergyContributionsProperty,
    [PropertyName.atomic_forces]: AtomicForcesProperty,
    [PropertyName.stress_tensor]: StressTensorProperty,
    [PropertyName.density_of_states]: DensityOfStatesProperty,
    [PropertyName.band_structure]: BandStructureProperty,
    [PropertyName.band_gaps]: BandGapsProperty,
    [PropertyName.phonon_dispersions]: PhononDispersionsProperty,
    [PropertyName.phonon_dos]: PhononDOSProperty,
    [PropertyName.final_structure]: FinalStructureProperty,
    [PropertyName.is_relaxed]: IsRelaxedProperty,
    [PropertyName.workflow_pyml_predict]: WorkflowProperty,
    [PropertyName.magnetic_moments]: MagneticMomentsProperty,
    [PropertyName.reaction_energy_barrier]: ReactionEnergyBarrierProperty,
    [PropertyName.reaction_energy_profile]: ReactionEnergyProfileProperty,
    [PropertyName.potential_profile]: PotentialProfileProperty,
    [PropertyName.charge_density_profile]: ChargeDensityProfileProperty,
    [PropertyName.average_potential_profile]: AveragePotentialProfileProperty,
    [PropertyName.valence_band_offset]: ValenceBandOffsetProperty,
    [PropertyName.file_content]: FileContentProperty,
    [PropertyName.dielectric_tensor]: DielectricTensorProperty,
    [PropertyName.hubbard_u]: HubbardUProperty,
    [PropertyName.hubbard_v_nn]: HubbardVNNProperty,
    [PropertyName.hubbard_v]: HubbardVProperty,
    [PropertyName.jupyter_notebook_endpoint]: JupyterNotebookEndpointProperty,

    // meta
    [PropertyName.pseudopotential]: Pseudopotential,

    // proto
    [PropertyName.boundary_conditions]: BoundaryConditionsProperty,
    [PropertyName.atomic_constraints]: AtomicConstraintsProperty,
};
