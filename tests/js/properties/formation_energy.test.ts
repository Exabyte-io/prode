/* eslint-disable no-unused-expressions */
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import FormationEnergyProperty from "../../../src/js/properties/scalar/FormationEnergyProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("FormationEnergyProperty", () => {
    it("should create a formation energy property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<FormationEnergyPropertySchema, "name"> = {
            value: -0.123,
            units: "eV/atom",
        };

        const formationEnergyProperty = new FormationEnergyProperty(config);

        expect(formationEnergyProperty).to.be.instanceOf(FormationEnergyProperty);
        expect(FormationEnergyProperty.propertyType).equal(PropertyType.scalar);
        expect(FormationEnergyProperty.propertyName).equal(PropertyName.formation_energy);
        expect(FormationEnergyProperty.isRefined).to.be.true;
    });
});
