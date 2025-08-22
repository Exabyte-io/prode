import { expect } from "chai";

import ValenceBandOffsetProperty from "../../src/js/include/primitive/ValenceBandOffsetProperty";

describe("ValenceBandOffsetProperty", () => {
    it("should create a valence band offset property with value and units", () => {
        const config = {
            name: "valence_band_offset",
            value: 0.5,
            units: "eV",
        };

        const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);

        expect(valenceBandOffsetProperty.name).equal("valence_band_offset");
        expect(valenceBandOffsetProperty.value).equal(0.5);
        expect(valenceBandOffsetProperty.units).equal("eV");
    });

    it("should support different energy units", () => {
        const units = ["kJ/mol", "eV", "J/mol", "hartree", "cm-1", "Ry", "eV/atom", "eV/A^2"];

        units.forEach((unit) => {
            const config = {
                name: "valence_band_offset",
                value: 1.0,
                units: unit,
            };

            const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);
            expect(valenceBandOffsetProperty.units).equal(unit);
        });
    });

    it("should handle positive valence band offsets", () => {
        const config = {
            name: "valence_band_offset",
            value: 1.2,
            units: "eV",
        };

        const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);

        expect(valenceBandOffsetProperty.value).equal(1.2);
        expect(valenceBandOffsetProperty.units).equal("eV");
    });

    it("should handle negative valence band offsets", () => {
        const config = {
            name: "valence_band_offset",
            value: -0.8,
            units: "hartree",
        };

        const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);

        expect(valenceBandOffsetProperty.value).equal(-0.8);
        expect(valenceBandOffsetProperty.units).equal("hartree");
    });

    it("should handle zero valence band offset", () => {
        const config = {
            name: "valence_band_offset",
            value: 0.0,
            units: "Ry",
        };

        const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);

        expect(valenceBandOffsetProperty.value).equal(0.0);
        expect(valenceBandOffsetProperty.units).equal("Ry");
    });

    it("should handle small valence band offsets", () => {
        const config = {
            name: "valence_band_offset",
            value: 0.05,
            units: "eV",
        };

        const valenceBandOffsetProperty = new ValenceBandOffsetProperty(config);

        expect(valenceBandOffsetProperty.value).equal(0.05);
        expect(valenceBandOffsetProperty.units).equal("eV");
    });
});
