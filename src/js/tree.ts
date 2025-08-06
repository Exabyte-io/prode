import _ from "underscore";

import { Property, PropertyDomain, PropertyType } from "./settings";

export interface PropertyConfig {
    type?: PropertyType;
    domain?: PropertyDomain;
    isRefined?: boolean;
    isAuxiliary?: boolean;
    isConvergence?: boolean;
    isAbleToReturnMultipleResults?: boolean;
    omitInResults?: boolean;
}

/**
 * @description Type for the properties tree configuration
 */
export type PropertiesTree = Record<Property, PropertyConfig>;

/**
 * @description For more details about types and object keys below
 * check the [ESSE repository](https://github.com/Exabyte-io/esse).
 */
const propertiesTree: PropertiesTree = {
    [Property.pressure]: {
        //        "name": "pressure",  // name is same as key unless specified explicitly
        //        "domain": PropertyDomain.material,  // default domain is assumed to be "material"
        //        "isAuxiliary": false,  // by default the property is non-auxiliary
        type: PropertyType.scalar,
        isRefined: true,
    },
    [Property.total_force]: {
        type: PropertyType.scalar,
    },
    [Property.total_energy]: {
        type: PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [Property.surface_energy]: {
        type: PropertyType.scalar,
        isRefined: true,
    },
    [Property.convergence_elec]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
        isConvergence: true,
    },
    [Property.convergence_ion]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
        isConvergence: true,
    },
    [Property.fermi_energy]: {
        type: PropertyType.scalar,
        isAuxiliary: true,
    },
    [Property.zero_point_energy]: {
        type: PropertyType.scalar,
    },
    [Property.total_energy_contrib]: {
        type: PropertyType.object,
        isAuxiliary: true,
    },
    [Property.atomic_forces]: {
        type: PropertyType.tensor,
    },
    [Property.atomic_constraints]: {
        type: PropertyType.non_scalar,
    },
    [Property.stress_tensor]: {
        type: PropertyType.tensor,
    },
    [Property.dos]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.band_structure]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.band_gaps]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.phonon_dispersions]: {
        type: PropertyType.non_scalar,
    },
    [Property.phonon_dos]: {
        type: PropertyType.non_scalar,
    },
    [Property.predicted_properties]: {
        type: PropertyType.non_scalar,
    },
    [Property.final_structure]: {
        type: PropertyType.non_scalar,
    },
    [Property.is_relaxed]: {
        // only storing the refined status as this is not to be shown in job results
        isRefined: true,
    },
    [Property.w_ml_predict]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
    },
    [Property.w_pyml_predict]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
    },
    [Property.file_content]: {
        type: PropertyType.non_scalar,
        isAbleToReturnMultipleResults: true,
    },
    [Property.magnetic_moments]: {
        type: PropertyType.tensor,
    },
    [Property.rxn_energy_barrier]: {
        type: PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [Property.rxn_energy_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.potential_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.charge_density_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.jupyter_nb_endpoint]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
    },
    [Property.average_potential_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [Property.valence_band_offset]: {
        type: PropertyType.scalar,
        isRefined: true,
    },
    [Property.pseudopotential]: {
        type: PropertyType.non_scalar,
    },
    [Property.boundary_conditions]: {
        type: PropertyType.non_scalar,
    },
    [Property.dielectric_tensor]: {
        type: PropertyType.non_scalar,
    },
    [Property.hubbard_u]: {
        type: PropertyType.non_scalar,
    },
    [Property.hubbard_v_nn]: {
        type: PropertyType.non_scalar,
    },
    [Property.hubbard_v]: {
        type: PropertyType.non_scalar,
    },
};

export default propertiesTree;

export const REFINED_PROPERTIES_SUBTREE = _.pick(propertiesTree, (propertyConfig) => {
    // eslint-disable-next-line no-prototype-builtins
    if (propertyConfig.hasOwnProperty("isRefined")) {
        return Boolean(propertyConfig.isRefined);
    }
    return false;
});
