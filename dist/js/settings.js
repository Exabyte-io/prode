"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyName = exports.PropertyType = exports.ExternalSource = void 0;
var ExternalSource;
(function (ExternalSource) {
    ExternalSource["materials_project"] = "MaterialsProject";
    ExternalSource["icsd"] = "ICSD";
})(ExternalSource || (exports.ExternalSource = ExternalSource = {}));
var PropertyType;
(function (PropertyType) {
    // by data type
    PropertyType["scalar"] = "scalar";
    PropertyType["non_scalar"] = "non-scalar";
    // non-scalar subtypes
    PropertyType["tensor"] = "tensor";
    PropertyType["object"] = "object";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
var PropertyName;
(function (PropertyName) {
    PropertyName["pressure"] = "pressure";
    PropertyName["total_force"] = "total_force";
    PropertyName["total_energy"] = "total_energy";
    PropertyName["surface_energy"] = "surface_energy";
    PropertyName["convergence_electronic"] = "convergence_electronic";
    PropertyName["convergence_ionic"] = "convergence_ionic";
    PropertyName["fermi_energy"] = "fermi_energy";
    PropertyName["zero_point_energy"] = "zero_point_energy";
    PropertyName["total_energy_contributions"] = "total_energy_contributions";
    PropertyName["atomic_forces"] = "atomic_forces";
    PropertyName["atomic_constraints"] = "atomic_constraints";
    PropertyName["stress_tensor"] = "stress_tensor";
    PropertyName["density_of_states"] = "density_of_states";
    PropertyName["band_structure"] = "band_structure";
    PropertyName["band_gaps"] = "band_gaps";
    PropertyName["phonon_dispersions"] = "phonon_dispersions";
    PropertyName["phonon_dos"] = "phonon_dos";
    PropertyName["final_structure"] = "final_structure";
    PropertyName["is_relaxed"] = "is_relaxed";
    PropertyName["workflow_pyml_predict"] = "workflow:pyml_predict";
    PropertyName["file_content"] = "file_content";
    PropertyName["magnetic_moments"] = "magnetic_moments";
    PropertyName["reaction_energy_barrier"] = "reaction_energy_barrier";
    PropertyName["reaction_energy_profile"] = "reaction_energy_profile";
    PropertyName["potential_profile"] = "potential_profile";
    PropertyName["wavefunction_amplitude"] = "wavefunction_amplitude";
    PropertyName["charge_density_profile"] = "charge_density_profile";
    PropertyName["jupyter_notebook_endpoint"] = "jupyter_notebook_endpoint";
    PropertyName["average_potential_profile"] = "average_potential_profile";
    PropertyName["valence_band_offset"] = "valence_band_offset";
    PropertyName["ionization_potential"] = "ionization_potential";
    PropertyName["pseudopotential"] = "pseudopotential";
    PropertyName["boundary_conditions"] = "boundary_conditions";
    PropertyName["dielectric_tensor"] = "dielectric_tensor";
    PropertyName["hubbard_u"] = "hubbard_u";
    PropertyName["hubbard_v_nn"] = "hubbard_v_nn";
    PropertyName["hubbard_v"] = "hubbard_v";
})(PropertyName || (exports.PropertyName = PropertyName = {}));
