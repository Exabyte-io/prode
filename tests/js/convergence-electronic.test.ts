/* eslint-disable no-unused-expressions */
import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import ConvergenceElectronicProperty from "../../src/js/properties/non-scalar/convergence/ConvergenceElectronicProperty";

describe("ConvergenceElectronicProperty", () => {
    let convergenceElectronicProperty: ConvergenceElectronicProperty;
    let mockConfig: Omit<ConvergenceElectronicPropertySchema, "name">;

    beforeEach(() => {
        mockConfig = {
            data: [
                [1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4, 5.0e-5],
                [2.0e-3, 1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4],
            ],
            units: "eV",
        };

        convergenceElectronicProperty = new ConvergenceElectronicProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a ConvergenceElectronicProperty instance", () => {
            expect(convergenceElectronicProperty).to.be.instanceOf(ConvergenceElectronicProperty);
        });

        it("should have correct property name", () => {
            expect(convergenceElectronicProperty.name).to.equal(
                PropertyName.convergence_electronic,
            );
        });

        it("should be a convergence property", () => {
            expect((ConvergenceElectronicProperty as any).isConvergence).to.be.true;
        });

        it("should have correct static property name", () => {
            expect(ConvergenceElectronicProperty.propertyName).to.equal(
                PropertyName.convergence_electronic,
            );
        });
    });

    describe("data property", () => {
        it("should return data", () => {
            const { data } = convergenceElectronicProperty;
            expect(data).to.be.an("array");
            expect(data).to.have.length(2);
        });

        it("should have correct data structure", () => {
            const { data } = convergenceElectronicProperty;
            expect(data[0]).to.be.an("array");
            expect(data[1]).to.be.an("array");
            expect(data[0]).to.have.length(5);
            expect(data[1]).to.have.length(5);
        });

        it("should have correct convergence values", () => {
            const { data } = convergenceElectronicProperty;
            expect(data[0]).to.deep.equal([1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4, 5.0e-5]);
            expect(data[1]).to.deep.equal([2.0e-3, 1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4]);
        });
    });

    describe("units property", () => {
        it("should return units", () => {
            const { units } = convergenceElectronicProperty;
            expect(units).to.equal("eV");
        });

        it("should support different units", () => {
            const differentUnitsConfig = {
                data: [[1.0e-3, 5.0e-4, 2.0e-4]],
                units: "hartree" as const,
            };

            const differentUnitsProperty = new ConvergenceElectronicProperty(differentUnitsConfig);
            expect(differentUnitsProperty.units).to.equal("hartree");
        });
    });

    describe("convergence property inheritance", () => {
        it("should extend ConvergenceProperty", () => {
            expect(convergenceElectronicProperty).to.have.property("data");
            expect(convergenceElectronicProperty).to.have.property("units");
        });

        it("should have convergence property characteristics", () => {
            expect(convergenceElectronicProperty.data).to.be.an("array");
            expect(convergenceElectronicProperty.units).to.be.a("string");
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = convergenceElectronicProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.convergence_electronic);
        });

        it("should have _json property", () => {
            expect(convergenceElectronicProperty._json).to.exist;
            expect(convergenceElectronicProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = convergenceElectronicProperty.toJSON();
            expect(json).to.have.property("data");
            expect(json).to.have.property("units", "eV");
            expect(json.data).to.have.length(2);
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle single data series", () => {
            const singleSeriesConfig = {
                data: [[1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4, 5.0e-5]],
                units: "eV" as const,
            };

            const singleSeriesProperty = new ConvergenceElectronicProperty(singleSeriesConfig);
            expect(singleSeriesProperty.data).to.have.length(1);
        });

        it("should handle empty data series", () => {
            const emptySeriesConfig = {
                data: [],
                units: "eV" as const,
            };

            const emptySeriesProperty = new ConvergenceElectronicProperty(emptySeriesConfig);
            expect(emptySeriesProperty.data).to.have.length(0);
        });

        it("should handle different energy units", () => {
            const differentUnitsConfig = {
                data: [[1.0e-3, 5.0e-4, 2.0e-4]],
                units: "eV" as const,
            };

            const differentUnitsProperty = new ConvergenceElectronicProperty(differentUnitsConfig);
            expect(differentUnitsProperty.units).to.equal("eV");
        });

        it("should handle very small convergence values", () => {
            const smallValuesConfig = {
                data: [[1.0e-8, 5.0e-9, 2.0e-9, 1.0e-9, 5.0e-10]],
                units: "eV" as const,
            };

            const smallValuesProperty = new ConvergenceElectronicProperty(smallValuesConfig);
            expect(smallValuesProperty.data[0]).to.deep.equal([
                1.0e-8, 5.0e-9, 2.0e-9, 1.0e-9, 5.0e-10,
            ]);
        });

        it("should handle large convergence values", () => {
            const largeValuesConfig = {
                data: [[1.0, 0.5, 0.2, 0.1, 0.05]],
                units: "eV" as const,
            };

            const largeValuesProperty = new ConvergenceElectronicProperty(largeValuesConfig);
            expect(largeValuesProperty.data[0]).to.deep.equal([1.0, 0.5, 0.2, 0.1, 0.05]);
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple convergence series", () => {
            const multipleSeriesConfig = {
                data: [
                    [1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4, 5.0e-5],
                    [2.0e-3, 1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4],
                    [3.0e-3, 1.5e-3, 7.5e-4, 3.0e-4, 1.5e-4],
                ],
                units: "eV" as const,
            };

            const multipleSeriesProperty = new ConvergenceElectronicProperty(multipleSeriesConfig);
            expect(multipleSeriesProperty.data).to.have.length(3);
        });

        it("should handle different series lengths", () => {
            const differentLengthsConfig = {
                data: [
                    [1.0e-3, 5.0e-4, 2.0e-4],
                    [2.0e-3, 1.0e-3, 5.0e-4, 2.0e-4, 1.0e-4, 5.0e-5],
                ],
                units: "eV" as const,
            };

            const differentLengthsProperty = new ConvergenceElectronicProperty(
                differentLengthsConfig,
            );
            expect(differentLengthsProperty.data[0]).to.have.length(3);
            expect(differentLengthsProperty.data[1]).to.have.length(6);
        });

        it("should handle hartree units", () => {
            const hartreeConfig = {
                data: [[1.0e-4, 5.0e-5, 2.0e-5, 1.0e-5, 5.0e-6]],
                units: "hartree" as const,
            };

            const hartreeProperty = new ConvergenceElectronicProperty(hartreeConfig);
            expect(hartreeProperty.units).to.equal("hartree");
        });

        it("should handle Ry units", () => {
            const ryConfig = {
                data: [[1.0e-3, 5.0e-4, 2.0e-4]],
                units: "Ry" as const,
            };

            const ryProperty = new ConvergenceElectronicProperty(ryConfig);
            expect(ryProperty.units).to.equal("Ry");
        });

        it("should handle negative convergence values", () => {
            const negativeValuesConfig = {
                data: [[-1.0e-3, -5.0e-4, -2.0e-4, -1.0e-4, -5.0e-5]],
                units: "eV" as const,
            };

            const negativeValuesProperty = new ConvergenceElectronicProperty(negativeValuesConfig);
            expect(negativeValuesProperty.data[0]).to.deep.equal([
                -1.0e-3, -5.0e-4, -2.0e-4, -1.0e-4, -5.0e-5,
            ]);
        });

        it("should handle mixed positive and negative values", () => {
            const mixedValuesConfig = {
                data: [[1.0e-3, -5.0e-4, 2.0e-4, -1.0e-4, 5.0e-5]],
                units: "eV" as const,
            };

            const mixedValuesProperty = new ConvergenceElectronicProperty(mixedValuesConfig);
            expect(mixedValuesProperty.data[0]).to.deep.equal([
                1.0e-3, -5.0e-4, 2.0e-4, -1.0e-4, 5.0e-5,
            ]);
        });

        it("should handle very long convergence series", () => {
            const longSeriesConfig = {
                data: [Array.from({ length: 100 }, (_, i) => 1.0e-3 * Math.exp(-i * 0.1))],
                units: "eV" as const,
            };

            const longSeriesProperty = new ConvergenceElectronicProperty(longSeriesConfig);
            expect(longSeriesProperty.data[0]).to.have.length(100);
        });
    });
});
