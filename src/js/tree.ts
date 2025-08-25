import pickBy from "lodash/pickBy";

import { PropertyDomain, PropertyName, PropertyType } from "./settings";

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
export type PropertiesTree = Record<PropertyName, PropertyConfig>;

/**
 * @description For more details about types and object keys below
 * check the [ESSE repository](https://github.com/Exabyte-io/esse).
 */
const propertiesTree: PropertiesTree = {
    [PropertyName.pressure]: {
        //        "name": "pressure",  // name is same as key unless specified explicitly
        //        "domain": PropertyDomain.material,  // default domain is assumed to be "material"
        //        "isAuxiliary": false,  // by default the property is non-auxiliary
        type: PropertyType.scalar,
        isRefined: true,
    },
    [PropertyName.total_force]: {
        type: PropertyType.scalar,
    },
    [PropertyName.total_energy]: {
        type: PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [PropertyName.surface_energy]: {
        type: PropertyType.scalar,
        isRefined: true,
    },
    [PropertyName.convergence_electronic]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
        isConvergence: true,
    },
    [PropertyName.convergence_ionic]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
        isConvergence: true,
    },
    [PropertyName.fermi_energy]: {
        type: PropertyType.scalar,
        isAuxiliary: true,
    },
    [PropertyName.zero_point_energy]: {
        type: PropertyType.scalar,
    },
    [PropertyName.total_energy_contributions]: {
        type: PropertyType.object,
        isAuxiliary: true,
    },
    [PropertyName.atomic_forces]: {
        type: PropertyType.tensor,
    },
    [PropertyName.atomic_constraints]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.stress_tensor]: {
        type: PropertyType.tensor,
    },
    [PropertyName.density_of_states]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.band_structure]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.band_gaps]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.phonon_dispersions]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.phonon_dos]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.final_structure]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.is_relaxed]: {
        // only storing the refined status as this is not to be shown in job results
        isRefined: true,
    },
    [PropertyName.workflow_pyml_predict]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
    },
    [PropertyName.file_content]: {
        type: PropertyType.non_scalar,
        isAbleToReturnMultipleResults: true,
    },
    [PropertyName.magnetic_moments]: {
        type: PropertyType.tensor,
    },
    [PropertyName.reaction_energy_barrier]: {
        type: PropertyType.scalar,
        isRefined: true,
        isAuxiliary: true,
    },
    [PropertyName.reaction_energy_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.potential_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.charge_density_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.jupyter_notebook_endpoint]: {
        type: PropertyType.non_scalar,
        domain: PropertyDomain.workflow,
    },
    [PropertyName.average_potential_profile]: {
        type: PropertyType.non_scalar,
        isRefined: true,
    },
    [PropertyName.valence_band_offset]: {
        type: PropertyType.scalar,
        isRefined: true,
    },
    [PropertyName.pseudopotential]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.boundary_conditions]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.dielectric_tensor]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.hubbard_u]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.hubbard_v_nn]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.hubbard_v]: {
        type: PropertyType.non_scalar,
    },
    [PropertyName.ionization_potential]: {
        type: PropertyType.scalar,
    },
};

export default propertiesTree;

export const REFINED_PROPERTIES_SUBTREE = pickBy(propertiesTree, (propertyConfig) => {
    // eslint-disable-next-line no-prototype-builtins
    if (propertyConfig.hasOwnProperty("isRefined")) {
        return Boolean(propertyConfig.isRefined);
    }
    return false;
});
