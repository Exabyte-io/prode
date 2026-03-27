import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import ThermalCorrectionToEnergyProperty from "../../../src/js/properties/scalar/ThermalCorrectionToEnergyProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("ThermalCorrectionToEnergyProperty", () => {
    it("should create a thermal correction to energy property with correct constructor, propertyType, and propertyName", () => {
        const config: Omit<ThermalCorrectionToEnergyPropertySchema, "name"> = {
            value: 15.033,
            units: "kcal/mol",
        };

        const property = new ThermalCorrectionToEnergyProperty(config);

        expect(property).to.be.instanceOf(ThermalCorrectionToEnergyProperty);
        expect(ThermalCorrectionToEnergyProperty.propertyType).equal(PropertyType.scalar);
        expect(ThermalCorrectionToEnergyProperty.propertyName).equal(PropertyName.thermal_correction_to_energy);
    });
});
