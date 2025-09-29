/* eslint-disable no-unused-expressions */
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import PhononDispersionsProperty from "../../src/js/properties/non-scalar/PhononDispersionsProperty";

describe("PhononDispersionsProperty", () => {
    let phononDispersionsProperty: PhononDispersionsProperty;
    let mockConfig: Omit<PhononBandStructurePropertySchema, "name">;
    let mockPointsPath: KPointPath;

    beforeEach(() => {
        mockPointsPath = [
            { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
            { point: "X", steps: 10, coordinates: [0.5, 0, 0] },
            { point: "M", steps: 10, coordinates: [0.5, 0.5, 0] },
            { point: "Γ", steps: 10, coordinates: [0, 0, 0] },
        ];

        mockConfig = {
            xDataArray: [
                [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            ],
            yDataSeries: [
                [0.1, 0.2, 0.3, 0.4, 0.5, 0.6] as [number, ...number[]],
                [0.2, 0.3, 0.4, 0.5, 0.6, 0.7] as [number, ...number[]],
            ],
            xAxis: {
                label: "qpoints",
                units: "crystal",
            },
            yAxis: {
                units: "THz",
                label: "frequency" as const,
            },
        };

        phononDispersionsProperty = new PhononDispersionsProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a PhononDispersionsProperty instance", () => {
            expect(phononDispersionsProperty).to.be.instanceOf(PhononDispersionsProperty);
        });

        it("should have correct property name", () => {
            expect(phononDispersionsProperty.name).to.equal(PropertyName.phonon_dispersions);
        });

        it("should have correct static property name", () => {
            expect(PhononDispersionsProperty.propertyName).to.equal(
                PropertyName.phonon_dispersions,
            );
        });
    });

    describe("subtitle property", () => {
        it("should have correct subtitle", () => {
            expect(phononDispersionsProperty.subtitle).to.equal("Phonon Dispersions");
        });

        it("should be readonly", () => {
            expect(phononDispersionsProperty.subtitle).to.be.a("string");
        });
    });

    describe("yAxisTitle property", () => {
        it("should have correct y-axis title with units", () => {
            expect(phononDispersionsProperty.yAxisTitle).to.equal("Frequency (THz)");
        });

        it("should include units from yAxis", () => {
            const differentUnitsConfig = {
                ...mockConfig,
                yAxis: {
                    units: "cm-1" as const,
                    label: "frequency" as const,
                },
            };

            const differentUnitsProperty = new PhononDispersionsProperty(differentUnitsConfig);
            expect(differentUnitsProperty.yAxisTitle).to.equal("Frequency (cm-1)");
        });
    });

    describe("mixin functionality", () => {
        it("should have 2D plot mixin methods", () => {
            expect(phononDispersionsProperty).to.have.property("xDataArray");
            expect(phononDispersionsProperty).to.have.property("yDataSeries");
        });

        it("should have spin dependent mixin methods", () => {
            expect(phononDispersionsProperty).to.have.property("spin");
        });

        it("should return xDataArray", () => {
            const { xDataArray } = phononDispersionsProperty;
            expect(xDataArray).to.be.an("array");
            expect(xDataArray).to.have.length(2);
        });

        it("should return yDataSeries", () => {
            const { yDataSeries } = phononDispersionsProperty;
            expect(yDataSeries).to.be.an("array");
            expect(yDataSeries).to.have.length(2);
        });

        it("should have correct xDataArray structure", () => {
            const { xDataArray } = phononDispersionsProperty;
            expect(xDataArray[0]).to.deep.equal([0, 0.1, 0.2, 0.3, 0.4, 0.5]);
            expect(xDataArray[1]).to.deep.equal([0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
        });

        it("should have correct yDataSeries structure", () => {
            const { yDataSeries } = phononDispersionsProperty;
            expect(yDataSeries[0]).to.deep.equal([0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
            expect(yDataSeries[1]).to.deep.equal([0.2, 0.3, 0.4, 0.5, 0.6, 0.7]);
        });
    });

    describe("constructor with pointsPath", () => {
        it("should accept pointsPath in constructor", () => {
            const configWithPointsPath = {
                ...mockConfig,
                pointsPath: mockPointsPath,
            };

            const propertyWithPointsPath = new PhononDispersionsProperty(configWithPointsPath);
            expect(propertyWithPointsPath).to.be.instanceOf(PhononDispersionsProperty);
        });

        it("should work without pointsPath", () => {
            const propertyWithoutPointsPath = new PhononDispersionsProperty(mockConfig);
            expect(propertyWithoutPointsPath).to.be.instanceOf(PhononDispersionsProperty);
        });

        it("should handle empty pointsPath", () => {
            const configWithEmptyPointsPath = {
                ...mockConfig,
                pointsPath: [],
            };

            const propertyWithEmptyPointsPath = new PhononDispersionsProperty(
                configWithEmptyPointsPath,
            );
            expect(propertyWithEmptyPointsPath).to.be.instanceOf(PhononDispersionsProperty);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = phononDispersionsProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.phonon_dispersions);
        });

        it("should support toJSON with exclude parameter", () => {
            const json = phononDispersionsProperty.toJSON(["xDataArray"]);
            expect(json).to.be.an("object");
            expect(json).to.not.have.property("xDataArray");
        });

        it("should have _json property", () => {
            expect(phononDispersionsProperty._json).to.exist;
            expect(phononDispersionsProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = phononDispersionsProperty.toJSON();
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

            const emptyXDataProperty = new PhononDispersionsProperty(emptyXDataConfig);
            expect(emptyXDataProperty.xDataArray).to.have.length(0);
        });

        it("should handle empty yDataSeries", () => {
            const emptyYDataConfig = {
                ...mockConfig,
                yDataSeries: [],
            };

            const emptyYDataProperty = new PhononDispersionsProperty(emptyYDataConfig);
            expect(emptyYDataProperty.yDataSeries).to.have.length(0);
        });

        it("should handle single data point", () => {
            const singlePointConfig = {
                ...mockConfig,
                xDataArray: [[0]],
                yDataSeries: [[0.1] as [number, ...number[]]],
            };

            const singlePointProperty = new PhononDispersionsProperty(singlePointConfig);
            expect(singlePointProperty.xDataArray[0]).to.deep.equal([0]);
            expect(singlePointProperty.yDataSeries[0]).to.deep.equal([0.1]);
        });

        it("should handle different frequency units", () => {
            const differentUnitsConfig = {
                ...mockConfig,
                yAxis: {
                    units: "cm-1" as const,
                    label: "frequency" as const,
                },
            };

            const differentUnitsProperty = new PhononDispersionsProperty(differentUnitsConfig);
            expect(differentUnitsProperty.yAxisTitle).to.equal("Frequency (cm-1)");
        });

        it("should handle different frequency units (meV)", () => {
            const meVConfig = {
                ...mockConfig,
                yAxis: {
                    units: "meV" as const,
                    label: "frequency" as const,
                },
            };

            const meVProperty = new PhononDispersionsProperty(meVConfig);
            expect(meVProperty.yAxisTitle).to.equal("Frequency (meV)");
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple phonon branches", () => {
            const multipleBranchesConfig = {
                ...mockConfig,
                xDataArray: [
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                    [1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
                    [1.5, 1.6, 1.7, 1.8, 1.9, 2.0],
                    [2.0, 2.1, 2.2, 2.3, 2.4, 2.5],
                    [2.5, 2.6, 2.7, 2.8, 2.9, 3.0],
                ],
                yDataSeries: [
                    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5] as [number, ...number[]],
                    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5] as [number, ...number[]],
                    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5] as [number, ...number[]],
                    [0.5, 0.6, 0.7, 0.8, 0.9, 1.0] as [number, ...number[]],
                    [0.6, 0.7, 0.8, 0.9, 1.0, 1.1] as [number, ...number[]],
                    [0.7, 0.8, 0.9, 1.0, 1.1, 1.2] as [number, ...number[]],
                ],
            };

            const multipleBranchesProperty = new PhononDispersionsProperty(multipleBranchesConfig);
            expect(multipleBranchesProperty.yDataSeries).to.have.length(6);
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

            const complexPathProperty = new PhononDispersionsProperty(complexPathConfig);
            expect(complexPathProperty).to.be.instanceOf(PhononDispersionsProperty);
        });

        it("should handle different frequency ranges", () => {
            const highFrequencyConfig = {
                ...mockConfig,
                yDataSeries: [[10.0, 12.0, 14.0, 16.0, 18.0, 20.0] as [number, ...number[]]],
            };

            const highFrequencyProperty = new PhononDispersionsProperty(highFrequencyConfig);
            expect(highFrequencyProperty.yDataSeries[0]).to.deep.equal([
                10.0, 12.0, 14.0, 16.0, 18.0, 20.0,
            ]);
        });

        it("should handle negative frequencies", () => {
            const negativeFreqConfig = {
                ...mockConfig,
                yDataSeries: [[-0.1, -0.2, -0.3, -0.4, -0.5, -0.6] as [number, ...number[]]],
            };

            const negativeFreqProperty = new PhononDispersionsProperty(negativeFreqConfig);
            expect(negativeFreqProperty.yDataSeries[0]).to.deep.equal([
                -0.1, -0.2, -0.3, -0.4, -0.5, -0.6,
            ]);
        });

        it("should handle mixed positive and negative frequencies", () => {
            const mixedFreqConfig = {
                ...mockConfig,
                yDataSeries: [[0.1, -0.2, 0.3, -0.4, 0.5, -0.6] as [number, ...number[]]],
            };

            const mixedFreqProperty = new PhononDispersionsProperty(mixedFreqConfig);
            expect(mixedFreqProperty.yDataSeries[0]).to.deep.equal([
                0.1, -0.2, 0.3, -0.4, 0.5, -0.6,
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

            const longPathProperty = new PhononDispersionsProperty(longPathConfig);
            expect(longPathProperty.xDataArray[0]).to.have.length(100);
            expect(longPathProperty.yDataSeries[0]).to.have.length(100);
        });

        it("should handle different yAxis labels", () => {
            const differentLabelConfig = {
                ...mockConfig,
                yAxis: {
                    units: "THz" as const,
                    label: "frequency" as const,
                },
            };

            const differentLabelProperty = new PhononDispersionsProperty(differentLabelConfig);
            expect(differentLabelProperty.yAxisTitle).to.equal("Frequency (THz)");
        });
    });
});
