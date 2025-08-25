import type { IonizationPotentialElementalPropertySchema as Schema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import IonizationPotentialElementalProperty from "../../src/js/include/primitive/IonizationPotentialElementalProperty";

describe("IonizationPotentialElementalProperty", () => {
    it("should create an ionization potential property with value and units", () => {
        const config: Schema = {
            name: "ionization_potential",
            value: 13.6,
            units: "eV",
        };

        const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);

        expect(ionizationPotentialProperty.name).equal("ionization_potential");
        expect(ionizationPotentialProperty.value).equal(13.6);
        expect(ionizationPotentialProperty.units).equal("eV");
    });

    it("should support different energy units", () => {
        const units: Schema["units"][] = [
            "kJ/mol",
            "eV",
            "J/mol",
            "hartree",
            "cm-1",
            "Ry",
            "eV/atom",
        ];

        units.forEach((unit) => {
            const config: Schema = {
                name: "ionization_potential",
                value: 1.0,
                units: unit,
            };

            const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);
            expect(ionizationPotentialProperty.units).equal(unit);
        });
    });

    it("should handle high ionization potentials", () => {
        const config: Schema = {
            name: "ionization_potential",
            value: 24.6,
            units: "eV",
        };

        const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);

        expect(ionizationPotentialProperty.value).equal(24.6);
        expect(ionizationPotentialProperty.units).equal("eV");
    });

    it("should handle low ionization potentials", () => {
        const config: Schema = {
            name: "ionization_potential",
            value: 3.9,
            units: "eV",
        };

        const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);

        expect(ionizationPotentialProperty.value).equal(3.9);
        expect(ionizationPotentialProperty.units).equal("eV");
    });

    it("should handle ionization potential without units", () => {
        const config: Schema = {
            name: "ionization_potential",
            value: 5.1,
            units: "eV",
        };

        const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);

        expect(ionizationPotentialProperty.value).equal(5.1);
        expect(ionizationPotentialProperty.units).equal(undefined);
    });

    it("should handle fractional ionization potentials", () => {
        const config: Schema = {
            name: "ionization_potential",
            value: 7.23,
            units: "hartree",
        };

        const ionizationPotentialProperty = new IonizationPotentialElementalProperty(config);

        expect(ionizationPotentialProperty.value).equal(7.23);
        expect(ionizationPotentialProperty.units).equal("hartree");
    });
});
