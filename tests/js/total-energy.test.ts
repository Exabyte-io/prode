import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import TotalEnergyProperty from "../../src/js/properties/scalar/TotalEnergyProperty";

describe("TotalEnergyProperty", () => {
    it("should create a total energy property with value and units", () => {
        const config: TotalEnergyPropertySchema = {
            name: "total_energy",
            value: -1234.56,
            units: "eV",
        };

        const totalEnergyProperty = new TotalEnergyProperty(config);

        expect(totalEnergyProperty.name).equal("total_energy");
        expect(totalEnergyProperty.value).equal(-1234.56);
        expect(totalEnergyProperty.units).equal("eV");
    });

    it("should support different energy units", () => {
        const units: TotalEnergyPropertySchema["units"][] = [
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
            const config: TotalEnergyPropertySchema = {
                name: "total_energy",
                value: 1.0,
                units: unit,
            };

            const totalEnergyProperty = new TotalEnergyProperty(config);
            expect(totalEnergyProperty.units).equal(unit);
        });
    });

    it("should handle negative energy values", () => {
        const config: TotalEnergyPropertySchema = {
            name: "total_energy",
            value: -5678.9,
            units: "hartree",
        };

        const totalEnergyProperty = new TotalEnergyProperty(config);

        expect(totalEnergyProperty.value).equal(-5678.9);
        expect(totalEnergyProperty.units).equal("hartree");
    });
});
