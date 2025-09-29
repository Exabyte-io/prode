/* eslint-disable no-unused-expressions */
import type { BandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import BandStructureProperty from "../../src/js/properties/non-scalar/BandStructureProperty";

describe("BandStructureProperty", () => {
    let bandStructureProperty: BandStructureProperty;
    let mockConfig: Omit<BandStructurePropertySchema, "name">;
    let mockPointsPath: KPointPath;

    beforeEach(() => {
        mockPointsPath = [
            { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
            { point: "X", steps: 10, coordinates: [0.5, 0, 0] },
            { point: "M", steps: 10, coordinates: [0.5, 0.5, 0] },
            { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
        ];

        mockConfig = {
            xAxis: {
                label: "kpoints",
                units: "crystal",
            },
            yAxis: {
                label: "energy",
                units: "eV",
            },
            spin: [0.5, -0.5],
            xDataArray: [
                [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            ],
            yDataSeries: [
                [-5.0, -4.0, -3.0, -2.0, -1.0, 0.0] as [number, ...number[]],
                [0.0, 1.0, 2.0, 3.0, 4.0, 5.0] as [number, ...number[]],
            ],
        };

        bandStructureProperty = new BandStructureProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a BandStructureProperty instance", () => {
            expect(bandStructureProperty).to.be.instanceOf(BandStructureProperty);
        });

        it("should have correct property name", () => {
            expect(BandStructureProperty.propertyName).to.equal(PropertyName.band_structure);
        });

        it("should be a refined property", () => {
            expect(BandStructureProperty.isRefined).to.be.true;
        });

        it("should have correct static property name", () => {
            expect(BandStructureProperty.propertyName).to.equal("band_structure");
        });
    });

    describe("basic properties", () => {
        it("should have correct subtitle", () => {
            expect(bandStructureProperty.subtitle).to.equal("Electronic Bandstructure");
        });

        it("should have correct y-axis title with units", () => {
            expect(bandStructureProperty.yAxisTitle).to.equal("Energy (eV)");
        });

        it("should have chart configuration", () => {
            expect(bandStructureProperty.chartConfig).to.exist;
            expect(bandStructureProperty.chartConfig).to.be.an("object");
        });
    });

    describe("mixin functionality", () => {
        it("should have 2D plot mixin methods", () => {
            expect(bandStructureProperty).to.have.property("xDataArray");
            expect(bandStructureProperty).to.have.property("yDataSeries");
        });

        it("should have spin dependent mixin methods", () => {
            expect(bandStructureProperty).to.have.property("spin");
        });

        it("should return xDataArray", () => {
            const { xDataArray } = bandStructureProperty;
            expect(xDataArray).to.be.an("array");
            expect(xDataArray).to.have.length(2);
        });

        it("should return yDataSeries", () => {
            const { yDataSeries } = bandStructureProperty;
            expect(yDataSeries).to.be.an("array");
            expect(yDataSeries).to.have.length(2);
        });

        it("should have correct xDataArray structure", () => {
            const { xDataArray } = bandStructureProperty;
            expect(xDataArray[0]).to.deep.equal([0, 0.1, 0.2, 0.3, 0.4, 0.5]);
            expect(xDataArray[1]).to.deep.equal([0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
        });

        it("should have correct yDataSeries structure", () => {
            const { yDataSeries } = bandStructureProperty;
            expect(yDataSeries[0]).to.deep.equal([-5.0, -4.0, -3.0, -2.0, -1.0, 0.0]);
            expect(yDataSeries[1]).to.deep.equal([0.0, 1.0, 2.0, 3.0, 4.0, 5.0]);
        });
    });

    describe("constructor with additional options", () => {
        it("should accept fermiEnergy in constructor", () => {
            const configWithFermi = {
                ...mockConfig,
                fermiEnergy: 0.5,
            };

            const propertyWithFermi = new BandStructureProperty(configWithFermi);
            expect(propertyWithFermi).to.be.instanceOf(BandStructureProperty);
        });

        it("should accept pointsPath in constructor", () => {
            const configWithPath = {
                ...mockConfig,
                pointsPath: mockPointsPath,
            };

            const propertyWithPath = new BandStructureProperty(configWithPath);
            expect(propertyWithPath).to.be.instanceOf(BandStructureProperty);
        });

        it("should work without additional options", () => {
            const basicProperty = new BandStructureProperty(mockConfig);
            expect(basicProperty).to.be.instanceOf(BandStructureProperty);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            expect(bandStructureProperty.toJSON).to.be.a("function");
            const json = bandStructureProperty.toJSON();
            expect(json).to.be.an("object");
        });

        it("should have _json property", () => {
            expect(bandStructureProperty._json).to.exist;
            expect(bandStructureProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = bandStructureProperty.toJSON();
            expect(json).to.have.property("xDataArray");
            expect(json).to.have.property("yDataSeries");
            expect(json).to.have.property("yAxis");
            expect(json.xDataArray).to.have.length(2);
            expect(json.yDataSeries).to.have.length(2);
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle empty xDataArray", () => {
            const emptyXDataConfig = {
                ...mockConfig,
                xDataArray: [],
            };

            const emptyXDataProperty = new BandStructureProperty(emptyXDataConfig);
            expect(emptyXDataProperty).to.be.instanceOf(BandStructureProperty);
        });

        it("should handle empty yDataSeries", () => {
            const emptyYDataConfig = {
                ...mockConfig,
                yDataSeries: [],
            };

            const emptyYDataProperty = new BandStructureProperty(emptyYDataConfig);
            expect(emptyYDataProperty).to.be.instanceOf(BandStructureProperty);
        });

        it("should handle single data point", () => {
            const singlePointConfig = {
                ...mockConfig,
                xDataArray: [[0]],
                yDataSeries: [[0.0] as [number, ...number[]]],
            };

            const singlePointProperty = new BandStructureProperty(singlePointConfig);
            expect(singlePointProperty.xDataArray[0]).to.deep.equal([0]);
            expect(singlePointProperty.yDataSeries[0]).to.deep.equal([0.0]);
        });

        it("should handle different energy units", () => {
            const hartreeConfig = {
                ...mockConfig,
                yAxis: {
                    label: "energy" as const,
                    units: "hartree" as const,
                },
            };

            const hartreeProperty = new BandStructureProperty(hartreeConfig);
            expect(hartreeProperty.yAxisTitle).to.equal("Energy (hartree)");
        });

        it("should handle null fermiEnergy", () => {
            const nullFermiConfig = {
                ...mockConfig,
                fermiEnergy: null,
            };

            const nullFermiProperty = new BandStructureProperty(nullFermiConfig);
            expect(nullFermiProperty).to.be.instanceOf(BandStructureProperty);
        });

        it("should handle undefined fermiEnergy", () => {
            const undefinedFermiConfig = {
                ...mockConfig,
                fermiEnergy: undefined,
            };

            const undefinedFermiProperty = new BandStructureProperty(undefinedFermiConfig);
            expect(undefinedFermiProperty).to.be.instanceOf(BandStructureProperty);
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple energy bands", () => {
            const multipleBandsConfig = {
                ...mockConfig,
                xDataArray: [
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                    [1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
                ],
                yDataSeries: [
                    [-5.0, -4.0, -3.0, -2.0, -1.0, 0.0] as [number, ...number[]],
                    [-3.0, -2.0, -1.0, 0.0, 1.0, 2.0] as [number, ...number[]],
                    [-1.0, 0.0, 1.0, 2.0, 3.0, 4.0] as [number, ...number[]],
                ],
            };

            const multipleBandsProperty = new BandStructureProperty(multipleBandsConfig);
            expect(multipleBandsProperty.yDataSeries).to.have.length(3);
        });

        it("should handle complex k-point paths", () => {
            const complexPointsPath: KPointPath = [
                { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
                { point: "X₁", steps: 10, coordinates: [0.25, 0, 0] },
                { point: "X", steps: 10, coordinates: [0.5, 0, 0] },
                { point: "M₁", steps: 10, coordinates: [0.5, 0.25, 0] },
                { point: "M", steps: 10, coordinates: [0.5, 0.5, 0] },
                { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
            ];

            const complexPathConfig = {
                ...mockConfig,
                pointsPath: complexPointsPath,
            };

            const complexPathProperty = new BandStructureProperty(complexPathConfig);
            expect(complexPathProperty).to.be.instanceOf(BandStructureProperty);
        });

        it("should handle different energy ranges", () => {
            const highEnergyConfig = {
                ...mockConfig,
                yDataSeries: [[10.0, 12.0, 14.0, 16.0, 18.0, 20.0] as [number, ...number[]]],
            };

            const highEnergyProperty = new BandStructureProperty(highEnergyConfig);
            expect(highEnergyProperty.yDataSeries[0]).to.deep.equal([
                10.0, 12.0, 14.0, 16.0, 18.0, 20.0,
            ]);
        });

        it("should handle negative energies", () => {
            const negativeEnergyConfig = {
                ...mockConfig,
                yDataSeries: [[-10.0, -8.0, -6.0, -4.0, -2.0, 0.0] as [number, ...number[]]],
            };

            const negativeEnergyProperty = new BandStructureProperty(negativeEnergyConfig);
            expect(negativeEnergyProperty.yDataSeries[0]).to.deep.equal([
                -10.0, -8.0, -6.0, -4.0, -2.0, 0.0,
            ]);
        });

        it("should handle mixed positive and negative energies", () => {
            const mixedEnergyConfig = {
                ...mockConfig,
                yDataSeries: [[-2.0, -1.0, 0.0, 1.0, 2.0, 3.0] as [number, ...number[]]],
            };

            const mixedEnergyProperty = new BandStructureProperty(mixedEnergyConfig);
            expect(mixedEnergyProperty.yDataSeries[0]).to.deep.equal([
                -2.0, -1.0, 0.0, 1.0, 2.0, 3.0,
            ]);
        });

        it("should handle very long k-point paths", () => {
            const longPathConfig = {
                ...mockConfig,
                xDataArray: [Array.from({ length: 100 }, (_, i) => i * 0.01)],
                yDataSeries: [
                    Array.from({ length: 100 }, (_, i) => Math.sin(i * 0.1)) as [
                        number,
                        ...number[],
                    ],
                ],
            };

            const longPathProperty = new BandStructureProperty(longPathConfig);
            expect(longPathProperty.xDataArray[0]).to.have.length(100);
            expect(longPathProperty.yDataSeries[0]).to.have.length(100);
        });

        it("should handle different yAxis labels", () => {
            const customYAxisConfig = {
                ...mockConfig,
                yAxis: {
                    label: "energy" as const,
                    units: "Ry" as const,
                },
            };

            const customYAxisProperty = new BandStructureProperty(customYAxisConfig);
            expect(customYAxisProperty.yAxisTitle).to.equal("Energy (Ry)");
        });
    });
});
