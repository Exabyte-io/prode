import type { PressurePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import PressureProperty from "../../src/js/properties/scalar/PressureProperty";

describe("PressureProperty", () => {
    it("should create a pressure property with value and units", () => {
        const config: PressurePropertySchema = {
            name: "pressure",
            value: 1.0,
            units: "kbar",
        };

        const pressureProperty = new PressureProperty(config);

        expect(pressureProperty.name).equal("pressure");
        expect(pressureProperty.value).equal(1.0);
        expect(pressureProperty.units).equal("kbar");
    });

    it("should create a pressure property with value only", () => {
        const config: PressurePropertySchema = {
            name: "pressure",
            value: 101325,
            units: "pa",
        };

        const pressureProperty = new PressureProperty(config);

        expect(pressureProperty.name).equal("pressure");
        expect(pressureProperty.value).equal(101325);
        expect(pressureProperty.units).equal("pa");
    });

    it("should support pa units", () => {
        const config: PressurePropertySchema = {
            name: "pressure",
            value: 101325,
            units: "pa",
        };

        const pressureProperty = new PressureProperty(config);

        expect(pressureProperty.units).equal("pa");
    });
});
