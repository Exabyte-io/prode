/* eslint-disable no-unused-expressions */
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import LUMOEnergyProperty from "../../../src/js/properties/scalar/LUMOEnergyProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("LUMOEnergyProperty", () => {
    it("should create a LUMO energy property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<LUMOEnergyPropertySchema, "name"> = {
            value: 3.12,
            units: "eV",
        };

        const lumoEnergyProperty = new LUMOEnergyProperty(config);

        expect(lumoEnergyProperty).to.be.instanceOf(LUMOEnergyProperty);
        expect(LUMOEnergyProperty.propertyType).equal(PropertyType.scalar);
        expect(LUMOEnergyProperty.propertyName).equal(PropertyName.lumo_energy);
        expect(LUMOEnergyProperty.isRefined).to.be.true;
    });
});
