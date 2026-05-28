/* eslint-disable no-unused-expressions */
import type { FormationEnergyReferencesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import FormationEnergyReferencesProperty from "../../../src/js/properties/non-scalar/FormationEnergyReferencesProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

const COMPOUND_LABEL = "SiC";
const COMPOUND_TOTAL_ENERGY = -15.5;
const COMPOUND_N_ATOMS = 2;

describe("FormationEnergyReferencesProperty", () => {
    it("should create property with correct metadata and rows", () => {
        const config: Omit<FormationEnergyReferencesPropertySchema, "name"> = {
            value: {
                rows: [
                    {
                        label: COMPOUND_LABEL,
                        total_energy: COMPOUND_TOTAL_ENERGY,
                        n_atoms: COMPOUND_N_ATOMS,
                        total_energy_per_atom: COMPOUND_TOTAL_ENERGY / COMPOUND_N_ATOMS,
                        precision_value: 10,
                        precision_metric: "KPPRA",
                    },
                ],
            },
        };

        const property = new FormationEnergyReferencesProperty(config);

        expect(property).to.be.instanceOf(FormationEnergyReferencesProperty);
        expect(FormationEnergyReferencesProperty.propertyType).equal(PropertyType.non_scalar);
        expect(FormationEnergyReferencesProperty.propertyName).equal(
            PropertyName.formation_energy_references,
        );
        expect(property.value.rows).to.have.length(1);
        expect(property.value.rows[0].label).equal(COMPOUND_LABEL);
    });
});
