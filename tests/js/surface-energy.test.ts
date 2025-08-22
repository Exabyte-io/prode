import { expect } from "chai";

import SurfaceEnergyProperty from "../../src/js/include/primitive/SurfaceEnergyProperty";

describe("SurfaceEnergyProperty", () => {
    it("should create a surface energy property with value and units", () => {
        const config = {
            name: "surface_energy",
            value: 2.5,
            units: "eV/A^2",
        };

        const surfaceEnergyProperty = new SurfaceEnergyProperty(config);

        expect(surfaceEnergyProperty.name).equal("surface_energy");
        expect(surfaceEnergyProperty.value).equal(2.5);
        expect(surfaceEnergyProperty.units).equal("eV/A^2");
    });

    it("should support different energy units", () => {
        const units = ["kJ/mol", "eV", "J/mol", "hartree", "cm-1", "Ry", "eV/atom", "eV/A^2"];

        units.forEach((unit) => {
            const config = {
                name: "surface_energy",
                value: 1.0,
                units: unit,
            };

            const surfaceEnergyProperty = new SurfaceEnergyProperty(config);
            expect(surfaceEnergyProperty.units).equal(unit);
        });
    });

    it("should handle positive surface energy values", () => {
        const config = {
            name: "surface_energy",
            value: 0.85,
            units: "J/mol",
        };

        const surfaceEnergyProperty = new SurfaceEnergyProperty(config);

        expect(surfaceEnergyProperty.value).equal(0.85);
        expect(surfaceEnergyProperty.units).equal("J/mol");
    });
});
