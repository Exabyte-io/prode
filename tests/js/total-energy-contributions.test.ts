import { expect } from "chai";

import TotalEnergyContributionsProperty from "../../src/js/include/primitive/TotalEnergyContributionsProperty";

describe("TotalEnergyContributionsProperty", () => {
    it("should create a total energy contributions property with basic fields", () => {
        const config = {
            name: "total_energy_contributions",
            units: "eV",
            hartree: {
                name: "hartree",
                value: -15.2,
            },
            exchange: {
                name: "exchange",
                value: -8.5,
            },
        };

        const totalEnergyContributionsProperty = new TotalEnergyContributionsProperty(config);

        expect(totalEnergyContributionsProperty.name).equal("total_energy_contributions");
        expect(totalEnergyContributionsProperty.units).equal("eV");
        expect(totalEnergyContributionsProperty.hartree?.value).equal(-15.2);
        expect(totalEnergyContributionsProperty.exchange?.value).equal(-8.5);
    });

    it("should handle all energy contribution fields", () => {
        const config = {
            name: "total_energy_contributions",
            units: "hartree",
            temperatureEntropy: { value: 0.1 },
            harrisFoulkes: { value: -2.3 },
            oneElectron: { value: 12.5 },
            hartree: { value: -15.2 },
            exchange: { value: -8.5 },
            exchangeCorrelation: { value: -3.1 },
            ewald: { value: 5.2 },
            alphaZ: { value: -1.8 },
            atomicEnergy: { value: 2.1 },
            eigenvalues: { value: 8.9 },
            PAWDoubleCounting2: { value: -0.5 },
            PAWDoubleCounting3: { value: 0.3 },
            hartreeFock: { value: -4.2 },
        };

        const property = new TotalEnergyContributionsProperty(config);

        expect(property.temperatureEntropy?.value).equal(0.1);
        expect(property.harrisFoulkes?.value).equal(-2.3);
        expect(property.oneElectron?.value).equal(12.5);
        expect(property.hartree?.value).equal(-15.2);
        expect(property.exchange?.value).equal(-8.5);
        expect(property.exchangeCorrelation?.value).equal(-3.1);
        expect(property.ewald?.value).equal(5.2);
        expect(property.alphaZ?.value).equal(-1.8);
        expect(property.atomicEnergy?.value).equal(2.1);
        expect(property.eigenvalues?.value).equal(8.9);
        expect(property.PAWDoubleCounting2?.value).equal(-0.5);
        expect(property.PAWDoubleCounting3?.value).equal(0.3);
        expect(property.hartreeFock?.value).equal(-4.2);
    });

    it("should support different energy units", () => {
        const units = ["kJ/mol", "eV", "J/mol", "hartree", "cm-1", "Ry", "eV/atom"];

        units.forEach((unit) => {
            const config = {
                name: "total_energy_contributions",
                units: unit,
                hartree: { value: 1.0 },
            };

            const property = new TotalEnergyContributionsProperty(config);
            expect(property.units).equal(unit);
        });
    });

    it("should handle missing optional fields", () => {
        const config = {
            name: "total_energy_contributions",
            units: "eV",
            hartree: { value: -15.2 },
        };

        const property = new TotalEnergyContributionsProperty(config);

        expect(property.hartree?.value).equal(-15.2);
        expect(property.exchange).equal(undefined);
        expect(property.temperatureEntropy).equal(undefined);
    });
});
