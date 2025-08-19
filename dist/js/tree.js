"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFINED_PROPERTIES_SUBTREE = void 0;
const pickBy_1 = __importDefault(require("lodash/pickBy"));
const settings_1 = require("./settings");
/**
 * @description For more details about types and object keys below
 * check the [ESSE repository](https://github.com/Exabyte-io/esse).
 */
const propertiesTree = {
    [settings_1.PropertyName.pressure]: {
        //        "name": "pressure",  // name is same as key unless specified explicitly
        //        "domain": PropertyDomain.material,  // default domain is assumed to be "material"
        //        "isAuxiliary": false,  // by default the property is non-auxiliary
        type: settings_1.PropertyType.scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.total_force]: {
        type: settings_1.PropertyType.scalar,
    },
    [settings_1.PropertyName.total_energy]: {
        type: settings_1.PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [settings_1.PropertyName.surface_energy]: {
        type: settings_1.PropertyType.scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.convergence_elec]: {
        type: settings_1.PropertyType.non_scalar,
        domain: settings_1.PropertyDomain.workflow,
        isConvergence: true,
    },
    [settings_1.PropertyName.convergence_ion]: {
        type: settings_1.PropertyType.non_scalar,
        domain: settings_1.PropertyDomain.workflow,
        isConvergence: true,
    },
    [settings_1.PropertyName.fermi_energy]: {
        type: settings_1.PropertyType.scalar,
        isAuxiliary: true,
    },
    [settings_1.PropertyName.zero_point_energy]: {
        type: settings_1.PropertyType.scalar,
    },
    [settings_1.PropertyName.total_energy_contrib]: {
        type: settings_1.PropertyType.object,
        isAuxiliary: true,
    },
    [settings_1.PropertyName.atomic_forces]: {
        type: settings_1.PropertyType.tensor,
    },
    [settings_1.PropertyName.atomic_constraints]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.stress_tensor]: {
        type: settings_1.PropertyType.tensor,
    },
    [settings_1.PropertyName.dos]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.band_structure]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.band_gaps]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.phonon_dispersions]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.phonon_dos]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.final_structure]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.is_relaxed]: {
        // only storing the refined status as this is not to be shown in job results
        isRefined: true,
    },
    [settings_1.PropertyName.w_pyml_predict]: {
        type: settings_1.PropertyType.non_scalar,
        domain: settings_1.PropertyDomain.workflow,
    },
    [settings_1.PropertyName.file_content]: {
        type: settings_1.PropertyType.non_scalar,
        isAbleToReturnMultipleResults: true,
    },
    [settings_1.PropertyName.magnetic_moments]: {
        type: settings_1.PropertyType.tensor,
    },
    [settings_1.PropertyName.rxn_energy_barrier]: {
        type: settings_1.PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [settings_1.PropertyName.rxn_energy_profile]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.potential_profile]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.charge_density_profile]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.jupyter_nb_endpoint]: {
        type: settings_1.PropertyType.non_scalar,
        domain: settings_1.PropertyDomain.workflow,
    },
    [settings_1.PropertyName.average_potential_profile]: {
        type: settings_1.PropertyType.non_scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.valence_band_offset]: {
        type: settings_1.PropertyType.scalar,
        isRefined: true,
    },
    [settings_1.PropertyName.pseudopotential]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.boundary_conditions]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.dielectric_tensor]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.hubbard_u]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.hubbard_v_nn]: {
        type: settings_1.PropertyType.non_scalar,
    },
    [settings_1.PropertyName.hubbard_v]: {
        type: settings_1.PropertyType.non_scalar,
    },
};
exports.default = propertiesTree;
exports.REFINED_PROPERTIES_SUBTREE = (0, pickBy_1.default)(propertiesTree, (propertyConfig) => {
    // eslint-disable-next-line no-prototype-builtins
    if (propertyConfig.hasOwnProperty("isRefined")) {
        return Boolean(propertyConfig.isRefined);
    }
    return false;
});
