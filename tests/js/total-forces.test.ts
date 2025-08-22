import { expect } from "chai";

import TotalForcesProperty from "../../src/js/include/primitive/TotalForcesProperty";

describe("TotalForcesProperty", () => {
    it("should create a total force property with value and units", () => {
        const config = {
            name: "total_force",
            value: 1.0,
            units: "eV/bohr",
        };

        const totalForcesProperty = new TotalForcesProperty(config);

        expect(totalForcesProperty.name).equal("total_force");
        expect(totalForcesProperty.value).equal(1.0);
        expect(totalForcesProperty.units).equal("eV/bohr");
    });

    it("should create a total force property with value only", () => {
        const config = {
            name: "total_force",
            value: 0.5,
            units: "eV/bohr", // units is required
        };

        const totalForcesProperty = new TotalForcesProperty(config);

        expect(totalForcesProperty.name).equal("total_force");
        expect(totalForcesProperty.value).equal(0.5);
        expect(totalForcesProperty.units).equal("eV/bohr");
    });

    it("should support different force units", () => {
        const units = ["eV/bohr", "eV/angstrom", "Ry/a.u.", "newton", "kg*m/s^2", "eV/a.u."];

        units.forEach((unit) => {
            const config = {
                name: "total_force",
                value: 1.0,
                units: unit,
            };

            const totalForcesProperty = new TotalForcesProperty(config);
            expect(totalForcesProperty.units).equal(unit);
        });
    });
});
