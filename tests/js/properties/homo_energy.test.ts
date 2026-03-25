/* eslint-disable no-unused-expressions */
import type { HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import HOMOEnergyProperty from "../../../src/js/properties/scalar/HOMOEnergyProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("HOMOEnergyProperty", () => {
    it("should create a HOMO energy property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<HOMOEnergyPropertySchema, "name"> = {
            value: -12.8,
            units: "eV",
        };

        const homoEnergyProperty = new HOMOEnergyProperty(config);

        expect(homoEnergyProperty).to.be.instanceOf(HOMOEnergyProperty);
        expect(HOMOEnergyProperty.propertyType).equal(PropertyType.scalar);
        expect(HOMOEnergyProperty.propertyName).equal(PropertyName.homo_energy);
        expect(HOMOEnergyProperty.isRefined).to.be.true;
    });
});
