import { expect } from "chai";

import PressureProperty from "../../src/js/include/primitive/PressureProperty";

describe("PressureProperty", () => {
    it("should create a pressure property with value and units", () => {
        const config = {
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
        const config = {
            name: "pressure",
            value: 101325,
            units: "Pa", // units is required
        };

        const pressureProperty = new PressureProperty(config);

        expect(pressureProperty.name).equal("pressure");
        expect(pressureProperty.value).equal(101325);
        expect(pressureProperty.units).equal("Pa");
    });

    it("should support pa units", () => {
        const config = {
            name: "pressure",
            value: 101325,
            units: "pa",
        };

        const pressureProperty = new PressureProperty(config);

        expect(pressureProperty.units).equal("pa");
    });
});
