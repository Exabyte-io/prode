import { expect } from "chai";

import ReactionEnergyBarrierProperty from "../../src/js/include/primitive/ReactionEnergyBarrierProperty";

describe("ReactionEnergyBarrierProperty", () => {
    it("should create a reaction energy barrier property with value and units", () => {
        const config = {
            name: "reaction_energy_barrier",
            value: 25.5,
            units: "kJ/mol",
        };

        const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);

        expect(reactionEnergyBarrierProperty.name).equal("reaction_energy_barrier");
        expect(reactionEnergyBarrierProperty.value).equal(25.5);
        expect(reactionEnergyBarrierProperty.units).equal("kJ/mol");
    });

    it("should support different energy units", () => {
        const units = ["kJ/mol", "eV", "J/mol", "hartree", "cm-1", "Ry", "eV/atom", "eV/A^2"];

        units.forEach((unit) => {
            const config = {
                name: "reaction_energy_barrier",
                value: 1.0,
                units: unit as any,
            };

            const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);
            expect(reactionEnergyBarrierProperty.units).equal(unit);
        });
    });

    it("should handle high energy barriers", () => {
        const config = {
            name: "reaction_energy_barrier",
            value: 150.0,
            units: "kJ/mol",
        };

        const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);

        expect(reactionEnergyBarrierProperty.value).equal(150.0);
        expect(reactionEnergyBarrierProperty.units).equal("kJ/mol");
    });

    it("should handle low energy barriers", () => {
        const config = {
            name: "reaction_energy_barrier",
            value: 0.5,
            units: "eV",
        };

        const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);

        expect(reactionEnergyBarrierProperty.value).equal(0.5);
        expect(reactionEnergyBarrierProperty.units).equal("eV");
    });

    it("should handle zero energy barrier", () => {
        const config = {
            name: "reaction_energy_barrier",
            value: 0.0,
            units: "hartree",
        };

        const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);

        expect(reactionEnergyBarrierProperty.value).equal(0.0);
        expect(reactionEnergyBarrierProperty.units).equal("hartree");
    });

    it("should handle negative energy barriers (exothermic reactions)", () => {
        const config = {
            name: "reaction_energy_barrier",
            value: -10.2,
            units: "kJ/mol",
        };

        const reactionEnergyBarrierProperty = new ReactionEnergyBarrierProperty(config);

        expect(reactionEnergyBarrierProperty.value).equal(-10.2);
        expect(reactionEnergyBarrierProperty.units).equal("kJ/mol");
    });
});
