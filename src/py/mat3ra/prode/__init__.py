from enum import Enum
from types import SimpleNamespace


class ExternalSource(str, Enum):
    icsd = "ICSD"
    materials_project = "MaterialsProject"
    materials_project_legacy = "MaterialsProjectLegacy"


class PropertyType(str, Enum):
    non_scalar = "non-scalar"
    object = "object"
    scalar = "scalar"
    tensor = "tensor"


class ScalarPropertyName(str, Enum):
    fermi_energy = "fermi_energy"
    ionization_potential = "ionization_potential"
    pressure = "pressure"
    reaction_energy_barrier = "reaction_energy_barrier"
    surface_energy = "surface_energy"
    total_energy = "total_energy"
    total_force = "total_force"
    valence_band_offset = "valence_band_offset"
    zero_point_energy = "zero_point_energy"


class NonScalarPropertyName(str, Enum):
    average_potential_profile = "average_potential_profile"
    band_gaps = "band_gaps"
    band_structure = "band_structure"
    charge_density_profile = "charge_density_profile"
    convergence_electronic = "convergence_electronic"
    convergence_ionic = "convergence_ionic"
    density_of_states = "density_of_states"
    dielectric_tensor = "dielectric_tensor"
    file_content = "file_content"
    final_structure = "final_structure"
    hubbard_u = "hubbard_u"
    hubbard_v = "hubbard_v"
    hubbard_v_nn = "hubbard_v_nn"
    is_relaxed = "is_relaxed"
    jupyter_notebook_endpoint = "jupyter_notebook_endpoint"
    phonon_dispersions = "phonon_dispersions"
    phonon_dos = "phonon_dos"
    potential_profile = "potential_profile"
    reaction_energy_profile = "reaction_energy_profile"
    wavefunction_amplitude = "wavefunction_amplitude"
    workflow_pyml_predict = "workflow:pyml_predict"


class TensorPropertyName(str, Enum):
    atomic_forces = "atomic_forces"
    magnetic_moments = "magnetic_moments"
    stress_tensor = "stress_tensor"


class ObjectPropertyName(str, Enum):
    total_energy_contributions = "total_energy_contributions"


class ProtoPropertyName(str, Enum):
    atomic_constraints = "atomic_constraints"
    boundary_conditions = "boundary_conditions"


class MetaPropertyName(str, Enum):
    pseudopotential = "pseudopotential"


PropertyName = SimpleNamespace(
    scalar=ScalarPropertyName,
    non_scalar=NonScalarPropertyName,
    tensor=TensorPropertyName,
    object=ObjectPropertyName,
    proto=ProtoPropertyName,
    meta=MetaPropertyName,
)
