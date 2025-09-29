/* eslint-disable no-unused-expressions */
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import DensityOfStatesProperty from "../../src/js/properties/non-scalar/DensityOfStatesProperty";

describe("DensityOfStatesProperty", () => {
    let densityOfStatesProperty: DensityOfStatesProperty;
    let mockConfig: Omit<DensityOfStatesPropertySchema, "name">;

    beforeEach(() => {
        mockConfig = {
            xAxis: {
                label: "energy",
                units: "eV",
            },
            yAxis: {
                label: "density of states",
                units: "states/unitcell",
            },
            xDataArray: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
            yDataSeries: [
                [0.1, 0.2, 0.5, 1.0, 2.0, 3.0, 2.0, 1.0, 0.5, 0.2, 0.1] as [number, ...number[]],
                [0.05, 0.15, 0.4, 0.8, 1.5, 2.5, 1.5, 0.8, 0.4, 0.15, 0.05] as [
                    number,
                    ...number[],
                ],
            ],
            legend: [
                {
                    element: "Total",
                    electronicState: "DOS",
                    spin: 0.5 as const,
                },
                {
                    element: "s",
                    electronicState: "DOS",
                    spin: -0.5 as const,
                },
            ],
        };

        densityOfStatesProperty = new DensityOfStatesProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a DensityOfStatesProperty instance", () => {
            expect(densityOfStatesProperty).to.be.instanceOf(DensityOfStatesProperty);
        });

        it("should have correct property name", () => {
            expect(densityOfStatesProperty.name).to.equal(PropertyName.density_of_states);
        });

        it("should be a refined property", () => {
            expect(DensityOfStatesProperty.isRefined).to.be.true;
        });

        it("should have correct static property name", () => {
            expect(DensityOfStatesProperty.propertyName).to.equal(PropertyName.density_of_states);
        });
    });

    describe("basic properties", () => {
        it("should have correct subtitle", () => {
            expect(densityOfStatesProperty.subtitle).to.equal("Density Of States");
        });

        it("should have correct y-axis title with units", () => {
            expect(densityOfStatesProperty.yAxisTitle).to.equal(
                "Density Of States (states/unitcell)",
            );
        });

        it("should have correct x-axis title with units", () => {
            expect(densityOfStatesProperty.xAxisTitle).to.equal("Energy (eV)");
        });

        it("should have chart configuration", () => {
            expect(densityOfStatesProperty.chartConfig).to.exist;
            expect(densityOfStatesProperty.chartConfig).to.be.an("object");
        });
    });

    describe("legend property", () => {
        it("should return legend data", () => {
            const { legend } = densityOfStatesProperty;
            expect(legend).to.be.an("array");
            expect(legend).to.have.length(2);
        });

        it("should have correct legend structure", () => {
            const { legend } = densityOfStatesProperty;
            expect(legend[0]).to.have.property("element", "Total");
            expect(legend[0]).to.have.property("electronicState", "DOS");
            expect(legend[0]).to.have.property("spin", 0.5);
        });
    });

    describe("chart configuration", () => {
        it("should have chart type spline", () => {
            expect(densityOfStatesProperty.chartConfig.chart?.type).to.equal("spline");
        });

        it("should have zoom type xy", () => {
            expect(densityOfStatesProperty.chartConfig.chart?.zoomType).to.equal("xy");
        });

        it("should have animation disabled", () => {
            expect(densityOfStatesProperty.chartConfig.chart?.animation).to.be.false;
        });

        it("should have credits disabled", () => {
            expect(densityOfStatesProperty.chartConfig.credits?.enabled).to.be.false;
        });

        it("should have legend configuration", () => {
            expect(densityOfStatesProperty.chartConfig.legend).to.exist;
            expect(densityOfStatesProperty.chartConfig.legend?.layout).to.equal("horizontal");
            expect(densityOfStatesProperty.chartConfig.legend?.align).to.equal("center");
            expect(densityOfStatesProperty.chartConfig.legend?.verticalAlign).to.equal("bottom");
        });
    });

    describe("fermi energy handling", () => {
        it("should handle fermi energy in constructor", () => {
            const configWithFermi = {
                ...mockConfig,
                fermiEnergy: 2.5,
            };

            const dosWithFermi = new DensityOfStatesProperty(configWithFermi);
            expect(dosWithFermi).to.exist;
        });

        it("should handle null fermi energy", () => {
            const configWithNullFermi = {
                ...mockConfig,
                fermiEnergy: null,
            };

            const dosWithNullFermi = new DensityOfStatesProperty(configWithNullFermi);
            expect(dosWithNullFermi).to.exist;
        });

        it("should handle undefined fermi energy", () => {
            const dosWithoutFermi = new DensityOfStatesProperty(mockConfig);
            expect(dosWithoutFermi).to.exist;
        });
    });

    describe("data handling", () => {
        it("should handle xDataArray", () => {
            expect(densityOfStatesProperty.xDataArray).to.deep.equal(mockConfig.xDataArray);
        });

        it("should handle yDataSeries", () => {
            expect(densityOfStatesProperty.yDataSeries).to.deep.equal(mockConfig.yDataSeries);
        });

        it("should handle axis configuration", () => {
            expect(densityOfStatesProperty.xAxis).to.deep.equal(mockConfig.xAxis);
            expect(densityOfStatesProperty.yAxis).to.deep.equal(mockConfig.yAxis);
        });
    });

    describe("different energy units", () => {
        it("should work with different x-axis units", () => {
            const configWithDifferentUnits = {
                ...mockConfig,
                xAxis: {
                    label: "energy" as const,
                    units: "hartree" as const,
                },
                yAxis: {
                    label: "density of states" as const,
                    units: "states/unitcell" as const,
                },
            };

            const dosWithDifferentUnits = new DensityOfStatesProperty(configWithDifferentUnits);
            expect(dosWithDifferentUnits.xAxisTitle).to.equal("Energy (hartree)");
            expect(dosWithDifferentUnits.yAxisTitle).to.equal(
                "Density Of States (states/unitcell)",
            );
        });

        it("should work with kJ/mol units", () => {
            const configWithKJmol = {
                ...mockConfig,
                xAxis: {
                    label: "energy" as const,
                    units: "kJ/mol" as const,
                },
                yAxis: {
                    label: "density of states" as const,
                    units: "states/unitcell" as const,
                },
            };

            const dosWithKJmol = new DensityOfStatesProperty(configWithKJmol);
            expect(dosWithKJmol.xAxisTitle).to.equal("Energy (kJ/mol)");
            expect(dosWithKJmol.yAxisTitle).to.equal("Density Of States (states/unitcell)");
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle empty data arrays", () => {
            const configWithEmptyData = {
                ...mockConfig,
                xDataArray: [],
                yDataSeries: [],
            };

            const dosWithEmptyData = new DensityOfStatesProperty(configWithEmptyData);
            expect(dosWithEmptyData).to.exist;
        });

        it("should handle single data point", () => {
            const configWithSinglePoint = {
                ...mockConfig,
                xDataArray: [0],
                yDataSeries: [[1.0] as [number, ...number[]]],
            };

            const dosWithSinglePoint = new DensityOfStatesProperty(configWithSinglePoint);
            expect(dosWithSinglePoint).to.exist;
        });

        it("should handle multiple data series", () => {
            const configWithMultipleSeries = {
                ...mockConfig,
                yDataSeries: [
                    [0.1, 0.2, 0.3] as [number, ...number[]],
                    [0.2, 0.4, 0.6] as [number, ...number[]],
                    [0.3, 0.6, 0.9] as [number, ...number[]],
                ],
                legend: [
                    { element: "s", electronicState: "DOS", spin: 0.5 as const },
                    { element: "p", electronicState: "DOS", spin: 0.5 as const },
                    { element: "d", electronicState: "DOS", spin: 0.5 as const },
                ],
            };

            const dosWithMultipleSeries = new DensityOfStatesProperty(configWithMultipleSeries);
            expect(dosWithMultipleSeries).to.exist;
            expect(dosWithMultipleSeries.legend).to.have.length(3);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = densityOfStatesProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.density_of_states);
        });

        it("should have _json property", () => {
            expect(densityOfStatesProperty._json).to.exist;
            expect(densityOfStatesProperty._json).to.be.an("object");
        });
    });

    describe("complex scenarios", () => {
        it("should handle spin-polarized data", () => {
            const spinPolarizedConfig = {
                ...mockConfig,
                legend: [
                    { element: "Total", electronicState: "DOS", spin: 0.5 as const },
                    { element: "Total", electronicState: "DOS", spin: -0.5 as const },
                ],
            };

            const spinPolarizedDOS = new DensityOfStatesProperty(spinPolarizedConfig);
            expect(spinPolarizedDOS.legend).to.have.length(2);
            expect(spinPolarizedDOS.legend[0].spin).to.equal(0.5);
            expect(spinPolarizedDOS.legend[1].spin).to.equal(-0.5);
        });

        it("should handle element-specific data", () => {
            const elementSpecificConfig = {
                ...mockConfig,
                legend: [
                    { element: "Fe", electronicState: "3d", spin: 0.5 as const },
                    { element: "Fe", electronicState: "3d", spin: -0.5 as const },
                    { element: "Fe", electronicState: "4s", spin: 0.5 as const },
                ],
            };

            const elementSpecificDOS = new DensityOfStatesProperty(elementSpecificConfig);
            expect(elementSpecificDOS.legend).to.have.length(3);
            expect(elementSpecificDOS.legend[0].element).to.equal("Fe");
            expect(elementSpecificDOS.legend[0].electronicState).to.equal("3d");
        });
    });
});
