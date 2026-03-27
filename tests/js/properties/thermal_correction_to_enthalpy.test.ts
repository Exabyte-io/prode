import type { ThermalCorrectionToEnthalpyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import ThermalCorrectionToEnthalpyProperty from "../../../src/js/properties/scalar/ThermalCorrectionToEnthalpyProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("ThermalCorrectionToEnthalpyProperty", () => {
    it("should create a thermal correction to enthalpy property with correct constructor, propertyType, and propertyName", () => {
        const config: Omit<ThermalCorrectionToEnthalpyPropertySchema, "name"> = {
            value: 15.626,
            units: "kcal/mol",
        };

        const property = new ThermalCorrectionToEnthalpyProperty(config);

        expect(property).to.be.instanceOf(ThermalCorrectionToEnthalpyProperty);
        expect(ThermalCorrectionToEnthalpyProperty.propertyType).equal(PropertyType.scalar);
        expect(ThermalCorrectionToEnthalpyProperty.propertyName).equal(
            PropertyName.thermal_correction_to_enthalpy,
        );
    });
});
