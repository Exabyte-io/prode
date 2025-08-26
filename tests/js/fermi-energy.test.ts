import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import FermiEnergyProperty from "../../src/js/properties/scalar/FermiEnergyProperty";

describe("FermiEnergyProperty", () => {
    it("should create a fermi energy property with value and units", () => {
        const config: FermiEnergyPropertySchema = {
            name: "fermi_energy",
            value: 5.2,
            units: "eV",
        };

        const fermiEnergyProperty = new FermiEnergyProperty(config);

        expect(fermiEnergyProperty.name).equal("fermi_energy");
        expect(fermiEnergyProperty.value).equal(5.2);
        expect(fermiEnergyProperty.units).equal("eV");
    });

    it("should support different energy units", () => {
        const units: FermiEnergyPropertySchema["units"][] = [
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
            const config: FermiEnergyPropertySchema = {
                name: "fermi_energy",
                value: 1.0,
                units: unit,
            };

            const fermiEnergyProperty = new FermiEnergyProperty(config);
            expect(fermiEnergyProperty.units).equal(unit);
        });
    });

    it("should handle negative fermi energy values", () => {
        const config: FermiEnergyPropertySchema = {
            name: "fermi_energy",
            value: -2.1,
            units: "hartree",
        };

        const fermiEnergyProperty = new FermiEnergyProperty(config);

        expect(fermiEnergyProperty.value).equal(-2.1);
        expect(fermiEnergyProperty.units).equal("hartree");
    });
});
