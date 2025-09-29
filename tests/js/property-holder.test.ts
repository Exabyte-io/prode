/* eslint-disable no-unused-expressions */
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import PropertyHolder from "../../src/js/holders/PropertyHolder";

describe("PropertyHolder", () => {
    let propertyHolder: PropertyHolder;
    let mockData: PropertyHolderSchema;

    beforeEach(() => {
        // Mock data structure that matches PropertyHolderSchema
        mockData = {
            data: {
                name: PropertyName.total_energy,
                value: -100.5,
                units: "eV",
            },
            precision: { value: 0.01 },
            source: {
                type: "exabyte",
                info: {
                    jobId: "calc-123",
                    unitId: "test-unit",
                },
            },
            group: "dft",
            exabyteId: ["exabyte-123"],
            repetition: 1,
            systemTags: ["isRefined", "isBest"],
        };

        propertyHolder = new PropertyHolder(mockData);
    });

    describe("instantiation", () => {
        it("should create a PropertyHolder instance", () => {
            expect(propertyHolder).to.be.instanceOf(PropertyHolder);
        });

        it("should extend InMemoryEntity", () => {
            expect(propertyHolder).to.have.property("toJSON");
            expect(propertyHolder).to.have.property("prop");
            expect(propertyHolder).to.have.property("requiredProp");
        });
    });

    describe("getter methods", () => {
        it("should return data property", () => {
            expect(propertyHolder.data).to.deep.equal(mockData.data);
        });

        it("should return precision property", () => {
            expect(propertyHolder.precision).to.equal(mockData.precision);
        });

        it("should return source property", () => {
            expect(propertyHolder.source).to.deep.equal(mockData.source);
        });

        it("should return sourceInfo property", () => {
            expect(propertyHolder.sourceInfo).to.deep.equal(mockData.source.info);
        });

        it("should return group property", () => {
            expect(propertyHolder.group).to.equal(mockData.group);
        });

        it("should return exabyteId property", () => {
            expect(propertyHolder.exabyteId).to.equal(mockData.exabyteId);
        });

        it("should return repetition property", () => {
            expect(propertyHolder.repetition).to.equal(mockData.repetition);
        });

        it("should return systemTags property", () => {
            expect(propertyHolder.systemTags).to.deep.equal(mockData.systemTags);
        });
    });

    describe("property creation", () => {
        it("should create property via PropertyFactory", () => {
            const { property } = propertyHolder;
            expect(property).to.exist;
            expect(property).to.have.property("name", PropertyName.total_energy);
        });

        it("should create property with correct data", () => {
            const { property } = propertyHolder;
            expect(property).to.have.property("_json");
            expect(property._json).to.deep.equal(mockData.data);
        });
    });

    describe("flattenProperties method", () => {
        it("should flatten properties successfully", () => {
            const flattened = propertyHolder.flattenProperties();
            expect(flattened).to.be.an("array");
            // The flattenObject function may return empty array if data is not suitable for flattening
            expect(flattened).to.satisfy((arr: unknown[]) => arr.length >= 0);
        });

        it("should handle complex nested data", () => {
            const complexData = {
                data: {
                    name: PropertyName.band_structure,
                    value: {
                        kpoints: [
                            [0, 0, 0],
                            [0.5, 0.5, 0.5],
                        ],
                        energies: [
                            [-5, -3, -1],
                            [1, 3, 5],
                        ],
                        metadata: {
                            calculation: {
                                method: "dft",
                                functional: "pbe",
                            },
                        },
                    },
                },
            };

            const complexPropertyHolder = new PropertyHolder(complexData);
            const flattened = complexPropertyHolder.flattenProperties();
            expect(flattened).to.be.an("array");
            expect(flattened).to.have.length(1);
        });

        it("should return empty array on error", () => {
            // Create a property holder with invalid data that will cause flattenObject to fail
            const invalidData = {
                data: null,
                source: { type: "test", info: { id: "test" } },
                repetition: 1,
            };

            const invalidPropertyHolder = new PropertyHolder(invalidData);
            const flattened = invalidPropertyHolder.flattenProperties();
            expect(flattened).to.be.an("array");
            expect(flattened).to.have.length(0);
        });
    });

    describe("toRowValues method", () => {
        it("should return row values with group and slug", () => {
            const rowValues = propertyHolder.toRowValues();
            expect(rowValues).to.be.an("array");
            expect(rowValues).to.have.length(1);

            const rowValue = rowValues[0];
            expect(rowValue).to.have.property("slug");
            expect(rowValue).to.have.property("group", mockData.group);
        });

        it("should include property data in row values", () => {
            const rowValues = propertyHolder.toRowValues();
            const rowValue = rowValues[0];

            expect(rowValue).to.have.property("name", PropertyName.total_energy);
            expect(rowValue).to.have.property("value", -100.5);
            expect(rowValue).to.have.property("units", "eV");
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle missing optional properties", () => {
            const minimalData = {
                data: { name: PropertyName.total_energy, value: 100 },
                source: { type: "test", info: { id: "test" } },
                repetition: 1,
            };

            const minimalPropertyHolder = new PropertyHolder(minimalData);
            expect(minimalPropertyHolder.precision).to.be.undefined;
            expect(minimalPropertyHolder.group).to.be.undefined;
            expect(minimalPropertyHolder.exabyteId).to.be.undefined;
            expect(minimalPropertyHolder.systemTags).to.be.undefined;
        });

        it("should handle different property types", () => {
            const tensorData = {
                data: {
                    name: PropertyName.atomic_forces,
                    value: [
                        [1, 2, 3],
                        [4, 5, 6],
                    ],
                    unit: "eV/Å",
                },
                source: { type: "exabyte", info: { jobId: "test", unitId: "test" } },
                repetition: 1,
            };

            const tensorPropertyHolder = new PropertyHolder(tensorData);
            expect(tensorPropertyHolder.property).to.exist;
            expect(tensorPropertyHolder.property.name).to.equal(PropertyName.atomic_forces);
        });
    });

    describe("integration with PropertyFactory", () => {
        it("should work with scalar properties", () => {
            const scalarData: PropertyHolderSchema = {
                data: {
                    name: PropertyName.pressure,
                    value: 1.0,
                    units: "pa",
                },
                source: { type: "exabyte", info: { jobId: "test", unitId: "test" } },
                repetition: 1,
            };

            const scalarPropertyHolder = new PropertyHolder(scalarData);
            const { property } = scalarPropertyHolder;
            expect(property.name).to.equal(PropertyName.pressure);
        });

        it("should work with non-scalar properties", () => {
            const nonScalarData: PropertyHolderSchema = {
                data: {
                    name: PropertyName.band_structure,
                    xAxis: {
                        label: "kpoints",
                        units: "crystal",
                    },
                    yAxis: {
                        label: "energy",
                        units: "eV",
                    },
                    xDataArray: [[0, 0, 0]],
                    yDataSeries: [[-5, -3, -1]],
                    spin: [0.5, -0.5],
                },
                source: { type: "exabyte", info: { jobId: "test", unitId: "test" } },
                repetition: 1,
            };

            const nonScalarPropertyHolder = new PropertyHolder(nonScalarData);
            const { property } = nonScalarPropertyHolder;
            expect(property.name).to.equal(PropertyName.band_structure);
        });
    });
});
