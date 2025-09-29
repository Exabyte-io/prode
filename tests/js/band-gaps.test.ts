/* eslint-disable no-unused-expressions */
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import BandGapsProperty from "../../src/js/properties/non-scalar/BandGapsProperty";

describe("BandGapsProperty", () => {
    let bandGapsProperty: BandGapsProperty;
    let mockConfig: Omit<BandGapsPropertySchema, "name">;

    beforeEach(() => {
        mockConfig = {
            values: [
                {
                    type: "direct" as const,
                    value: 1.5,
                    units: "eV" as const,
                    kpointConduction: [0.0, 0.0, 0.0] as [number, number, number],
                    kpointValence: [0.0, 0.0, 0.0] as [number, number, number],
                    eigenvalueConduction: 2.0,
                    eigenvalueValence: 0.5,
                    spin: 0,
                },
                {
                    type: "indirect" as const,
                    value: 1.2,
                    units: "eV" as const,
                    kpointConduction: [0.5, 0.5, 0.5] as [number, number, number],
                    kpointValence: [0.0, 0.0, 0.0] as [number, number, number],
                    eigenvalueConduction: 1.8,
                    eigenvalueValence: 0.6,
                    spin: 0,
                },
            ],
            eigenvalues: [
                {
                    kpoint: [0.0, 0.0, 0.0] as [number, number, number],
                    weight: 1.0,
                    eigenvalues: [
                        {
                            spin: 0,
                            energies: [-5.0, -4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0],
                            occupations: [1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                        },
                    ],
                },
            ],
        };

        bandGapsProperty = new BandGapsProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a BandGapsProperty instance", () => {
            expect(bandGapsProperty).to.be.instanceOf(BandGapsProperty);
        });

        it("should have correct property name", () => {
            expect(bandGapsProperty.name).to.equal(PropertyName.band_gaps);
        });

        it("should be a refined property", () => {
            expect(BandGapsProperty.isRefined).to.be.true;
        });

        it("should have correct static property name", () => {
            expect(BandGapsProperty.propertyName).to.equal(PropertyName.band_gaps);
        });
    });

    describe("values property", () => {
        it("should return values", () => {
            const { values } = bandGapsProperty;
            expect(values).to.be.an("array");
            expect(values).to.have.length(2);
        });

        it("should have correct direct band gap", () => {
            const { values } = bandGapsProperty;
            const directGap = values.find((gap) => gap.type === "direct");
            expect(directGap).to.exist;
            expect(directGap).to.have.property("value", 1.5);
            expect(directGap).to.have.property("units", "eV");
            expect(directGap).to.have.property("kpointConduction");
            expect(directGap).to.have.property("kpointValence");
            expect(directGap).to.have.property("eigenvalueConduction", 2.0);
            expect(directGap).to.have.property("eigenvalueValence", 0.5);
            expect(directGap).to.have.property("spin", 0);
        });

        it("should have correct indirect band gap", () => {
            const { values } = bandGapsProperty;
            const indirectGap = values.find((gap) => gap.type === "indirect");
            expect(indirectGap).to.exist;
            expect(indirectGap).to.have.property("value", 1.2);
            expect(indirectGap).to.have.property("units", "eV");
            expect(indirectGap).to.have.property("kpointConduction");
            expect(indirectGap).to.have.property("kpointValence");
            expect(indirectGap).to.have.property("eigenvalueConduction", 1.8);
            expect(indirectGap).to.have.property("eigenvalueValence", 0.6);
            expect(indirectGap).to.have.property("spin", 0);
        });

        it("should have correct k-points for direct gap", () => {
            const { values } = bandGapsProperty;
            const directGap = values.find((gap) => gap.type === "direct");
            expect(directGap?.kpointConduction).to.deep.equal([0.0, 0.0, 0.0]);
            expect(directGap?.kpointValence).to.deep.equal([0.0, 0.0, 0.0]);
        });

        it("should have correct k-points for indirect gap", () => {
            const { values } = bandGapsProperty;
            const indirectGap = values.find((gap) => gap.type === "indirect");
            expect(indirectGap?.kpointConduction).to.deep.equal([0.5, 0.5, 0.5]);
            expect(indirectGap?.kpointValence).to.deep.equal([0.0, 0.0, 0.0]);
        });
    });

    describe("eigenvalues property", () => {
        it("should return eigenvalues", () => {
            const { eigenvalues } = bandGapsProperty;
            expect(eigenvalues).to.be.an("array");
            expect(eigenvalues).to.have.length(1);
        });

        it("should have correct eigenvalue structure", () => {
            const { eigenvalues } = bandGapsProperty;
            const eigenvalue = eigenvalues?.[0];
            expect(eigenvalue).to.have.property("kpoint");
            expect(eigenvalue).to.have.property("weight", 1.0);
            expect(eigenvalue).to.have.property("eigenvalues");
        });

        it("should have correct k-point in eigenvalues", () => {
            const { eigenvalues } = bandGapsProperty;
            expect(eigenvalues?.[0]?.kpoint).to.deep.equal([0.0, 0.0, 0.0]);
        });

        it("should have correct eigenvalue data", () => {
            const { eigenvalues } = bandGapsProperty;
            const eigenvalueData = eigenvalues?.[0]?.eigenvalues?.[0];
            expect(eigenvalueData).to.have.property("spin", 0);
            expect(eigenvalueData).to.have.property("energies");
            expect(eigenvalueData).to.have.property("occupations");
            expect(eigenvalueData?.energies).to.have.length(10);
            expect(eigenvalueData?.occupations).to.have.length(10);
        });
    });

    describe("toRowValues method", () => {
        it("should return array of row values", () => {
            const rowValues = bandGapsProperty.toRowValues();
            expect(rowValues).to.be.an("array");
            expect(rowValues).to.have.length(2);
        });

        it("should return direct and indirect row values", () => {
            const rowValues = bandGapsProperty.toRowValues();
            const directRow = rowValues.find((row) => row.slug === "band_gaps:direct");
            const indirectRow = rowValues.find((row) => row.slug === "band_gaps:indirect");

            expect(directRow).to.exist;
            expect(indirectRow).to.exist;
        });

        it("should have correct structure for direct row", () => {
            const rowValues = bandGapsProperty.toRowValues();
            const directRow = rowValues.find((row) => row.slug === "band_gaps:direct");

            expect(directRow).to.have.property("name", "band_gaps");
            expect(directRow).to.have.property("slug", "band_gaps:direct");
            expect(directRow).to.have.property("data");
            expect(directRow?.data).to.have.property("name", "band_gaps:direct");
            expect(directRow?.data).to.have.property("type", "direct");
            expect(directRow?.data).to.have.property("value", 1.5);
        });

        it("should have correct structure for indirect row", () => {
            const rowValues = bandGapsProperty.toRowValues();
            const indirectRow = rowValues.find((row) => row.slug === "band_gaps:indirect");

            expect(indirectRow).to.have.property("name", "band_gaps");
            expect(indirectRow).to.have.property("slug", "band_gaps:indirect");
            expect(indirectRow).to.have.property("data");
            expect(indirectRow?.data).to.have.property("name", "band_gaps:indirect");
            expect(indirectRow?.data).to.have.property("type", "indirect");
            expect(indirectRow?.data).to.have.property("value", 1.2);
        });

        it("should include group when provided", () => {
            const rowValues = bandGapsProperty.toRowValues("test-group");
            expect(rowValues[0]).to.have.property("group", "test-group");
            expect(rowValues[1]).to.have.property("group", "test-group");
        });
    });

    describe("flattenProperties method", () => {
        it("should return flattened properties", () => {
            const flattened = bandGapsProperty.flattenProperties();
            expect(flattened).to.be.an("array");
            expect(flattened).to.have.length(2);
        });

        it("should have correct structure for flattened properties", () => {
            const flattened = bandGapsProperty.flattenProperties();
            expect(flattened).to.be.an("array");
            expect(flattened).to.have.length(2);

            // After flattenObject, the structure becomes { "band_gaps:direct": 1.5 }
            // Check that we have the expected flattened structure
            const directFlattened = flattened.find(
                (item) => item["band_gaps:direct"] !== undefined,
            );
            const indirectFlattened = flattened.find(
                (item) => item["band_gaps:indirect"] !== undefined,
            );

            expect(directFlattened).to.exist;
            expect(indirectFlattened).to.exist;
            expect(directFlattened).to.have.property("band_gaps:direct", 1.5);
            expect(indirectFlattened).to.have.property("band_gaps:indirect", 1.2);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = bandGapsProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.band_gaps);
        });

        it("should have _json property", () => {
            expect(bandGapsProperty._json).to.exist;
            expect(bandGapsProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = bandGapsProperty.toJSON();
            expect(json).to.have.property("values");
            expect(json).to.have.property("eigenvalues");
            expect(json.values).to.have.length(2);
            expect(json.eigenvalues).to.have.length(1);
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle minimal required data", () => {
            const minimalConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 1.0,
                    },
                ],
            };

            const minimalProperty = new BandGapsProperty(minimalConfig);
            expect(minimalProperty).to.exist;
            expect(minimalProperty.values).to.have.length(1);
            expect(minimalProperty.eigenvalues).to.be.undefined;
        });

        it("should handle missing optional properties", () => {
            const noOptionalConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 1.0,
                    },
                ],
            };

            const noOptionalProperty = new BandGapsProperty(noOptionalConfig);
            expect(noOptionalProperty.eigenvalues).to.be.undefined;
        });

        it("should handle different units", () => {
            const differentUnitsConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 144.7,
                        units: "kJ/mol" as const,
                    },
                    {
                        type: "indirect" as const,
                        value: 115.8,
                        units: "kJ/mol" as const,
                    },
                ],
            };

            const unitsProperty = new BandGapsProperty(differentUnitsConfig);
            expect(unitsProperty.values[0].units).to.equal("kJ/mol");
            expect(unitsProperty.values[1].units).to.equal("kJ/mol");
        });

        it("should handle different energy units", () => {
            const energyUnitsConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 0.055,
                        units: "hartree" as const,
                    },
                ],
            };

            const energyProperty = new BandGapsProperty(energyUnitsConfig);
            expect(energyProperty.values[0].units).to.equal("hartree");
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple spin channels", () => {
            const spinConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 1.5,
                        units: "eV" as const,
                        spin: 0,
                    },
                    {
                        type: "direct" as const,
                        value: 1.6,
                        units: "eV" as const,
                        spin: 1,
                    },
                ],
            };

            const spinProperty = new BandGapsProperty(spinConfig);
            expect(spinProperty.values).to.have.length(2);
            expect(spinProperty.values[0].spin).to.equal(0);
            expect(spinProperty.values[1].spin).to.equal(1);
        });

        it("should handle complex eigenvalue data", () => {
            const complexEigenvaluesConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 1.5,
                        units: "eV" as const,
                    },
                ],
                eigenvalues: [
                    {
                        kpoint: [0.0, 0.0, 0.0] as [number, number, number],
                        weight: 1.0,
                        eigenvalues: [
                            {
                                spin: 0,
                                energies: [-5.0, -4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0],
                                occupations: [1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                            },
                            {
                                spin: 1,
                                energies: [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5],
                                occupations: [1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                            },
                        ],
                    },
                ],
            };

            const complexProperty = new BandGapsProperty(complexEigenvaluesConfig);
            expect(complexProperty.eigenvalues).to.have.length(1);
            expect(complexProperty.eigenvalues?.[0]?.eigenvalues).to.have.length(2);
        });

        it("should handle large k-point arrays", () => {
            const largeKpointsConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 1.5,
                        units: "eV" as const,
                        kpointConduction: [0.0, 0.0, 0.0] as [number, number, number],
                        kpointValence: [0.0, 0.0, 0.0] as [number, number, number],
                    },
                ],
                eigenvalues: Array.from({ length: 100 }, (_, i) => ({
                    kpoint: [i * 0.01, i * 0.01, i * 0.01] as [number, number, number],
                    weight: 1.0 / 100,
                    eigenvalues: [
                        {
                            spin: 0,
                            energies: Array.from({ length: 20 }, (_, j) => j - 10),
                            occupations: Array.from({ length: 20 }, (_, j) => (j < 10 ? 1.0 : 0.0)),
                        },
                    ],
                })),
            };

            const largeProperty = new BandGapsProperty(largeKpointsConfig);
            expect(largeProperty.eigenvalues).to.have.length(100);
        });

        it("should handle different gap types only", () => {
            const directOnlyConfig = {
                values: [
                    {
                        type: "direct" as const,
                        value: 2.0,
                        units: "eV" as const,
                    },
                ],
            };

            const directOnlyProperty = new BandGapsProperty(directOnlyConfig);
            const rowValues = directOnlyProperty.toRowValues();
            expect(rowValues).to.have.length(2); // Still returns both direct and indirect
            const directRow = rowValues.find((row) => row.slug === "band_gaps:direct");
            const indirectRow = rowValues.find((row) => row.slug === "band_gaps:indirect");

            expect(directRow).to.exist;
            expect(indirectRow).to.exist;
            expect(directRow?.data.value).to.equal(2.0);
            expect(indirectRow?.data.value).to.be.undefined; // No indirect gap data
        });
    });
});
