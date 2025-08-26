import type { ZeroPointEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import ZeroPointEnergyProperty from "../../src/js/properties/scalar/ZeroPointEnergyProperty";

describe("ZeroPointEnergyProperty", () => {
    it("should create a zero point energy property with value and units", () => {
        const config: ZeroPointEnergyPropertySchema = {
            name: "zero_point_energy",
            value: 0.15,
            units: "eV",
        };

        const zeroPointEnergyProperty = new ZeroPointEnergyProperty(config);

        expect(zeroPointEnergyProperty.name).equal("zero_point_energy");
        expect(zeroPointEnergyProperty.value).equal(0.15);
        expect(zeroPointEnergyProperty.units).equal("eV");
    });

    it("should support different energy units", () => {
        const units: ZeroPointEnergyPropertySchema["units"][] = [
            "kJ/mol",
            "eV",
            "J/mol",
            "hartree",
            "cm-1",
            "Ry",
            "eV/atom",
            "eV/A^2",
        ];
        units.forEach((unit) => {
            const config: ZeroPointEnergyPropertySchema = {
                name: "zero_point_energy",
                value: 1.0,
                units: unit,
            };

            const zeroPointEnergyProperty = new ZeroPointEnergyProperty(config);
            expect(zeroPointEnergyProperty.units).equal(unit);
        });
    });

    it("should handle small zero point energy values", () => {
        const config: ZeroPointEnergyPropertySchema = {
            name: "zero_point_energy",
            value: 0.001,
            units: "hartree",
        };

        const zeroPointEnergyProperty = new ZeroPointEnergyProperty(config);

        expect(zeroPointEnergyProperty.value).equal(0.001);
        expect(zeroPointEnergyProperty.units).equal("hartree");
    });
});
