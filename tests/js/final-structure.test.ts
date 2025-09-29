/* eslint-disable no-unused-expressions */
import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import FinalStructureProperty from "../../src/js/properties/non-scalar/FinalStructureProperty";

describe("FinalStructureProperty", () => {
    let finalStructureProperty: FinalStructureProperty;
    let mockConfig: Omit<FinalStructurePropertySchema, "name">;

    beforeEach(() => {
        mockConfig = {
            isRelaxed: true,
            formula: "Si2O4",
            unitCellFormula: "Si2O4",
            basis: {
                elements: [
                    { value: "Si" as const, id: 0 },
                    { value: "Si" as const, id: 1 },
                    { value: "O" as const, id: 2 },
                    { value: "O" as const, id: 3 },
                    { value: "O" as const, id: 4 },
                    { value: "O" as const, id: 5 },
                ],
                coordinates: [
                    { value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 },
                    { value: [0.5, 0.5, 0.5] as [number, number, number], id: 1 },
                    { value: [0.25, 0.25, 0.25] as [number, number, number], id: 2 },
                    { value: [0.75, 0.75, 0.25] as [number, number, number], id: 3 },
                    { value: [0.75, 0.25, 0.75] as [number, number, number], id: 4 },
                    { value: [0.25, 0.75, 0.75] as [number, number, number], id: 5 },
                ],
                units: "crystal" as const,
                labels: [
                    { value: 1, id: 0 },
                    { value: 1, id: 1 },
                    { value: 2, id: 2 },
                    { value: 2, id: 3 },
                    { value: 2, id: 4 },
                    { value: 2, id: 5 },
                ],
            },
            lattice: {
                a: 5.0,
                b: 5.0,
                c: 5.0,
                alpha: 90.0,
                beta: 90.0,
                gamma: 90.0,
                vectors: {
                    a: [5.0, 0.0, 0.0] as [number, number, number],
                    b: [0.0, 5.0, 0.0] as [number, number, number],
                    c: [0.0, 0.0, 5.0] as [number, number, number],
                    alat: 5.0,
                    units: "angstrom" as const,
                },
                type: "CUB" as const,
                units: {
                    length: "angstrom" as const,
                    angle: "degree" as const,
                },
            },
            derivedProperties: [
                {
                    name: "volume" as const,
                    units: "angstrom^3" as const,
                    value: 125.0,
                },
                {
                    name: "density" as const,
                    units: "g/cm^3" as const,
                    value: 2.33,
                },
                {
                    name: "symmetry" as const,
                    pointGroupSymbol: "m-3m",
                    spaceGroupSymbol: "Fd-3m",
                    tolerance: {
                        units: "angstrom" as const,
                        value: 0.01,
                    },
                },
            ],
            external: {
                id: "12345",
                source: "Materials Project",
                origin: true,
                data: {
                    mpId: "mp-149",
                },
                doi: "10.1038/sdata.2016.80",
                url: "https://materialsproject.org/materials/mp-149",
            },
            src: {
                extension: "cif",
                filename: "structure.cif",
                text: "data_silicon\n_cell_length_a    5.0\n_cell_length_b    5.0\n_cell_length_c    5.0",
                hash: "abc123def456",
            },
            scaledHash: "scaled123def456",
            icsdId: 12345,
            isNonPeriodic: false,
            consistencyChecks: [
                {
                    name: "default" as const,
                    key: "structure_valid",
                    severity: "info" as const,
                    message: "Structure is valid",
                },
                {
                    name: "atomsTooClose" as const,
                    key: "atoms_distance_check",
                    severity: "warning" as const,
                    message: "Some atoms are too close",
                },
            ],
            isDefault: true,
            metadata: {
                created: "2023-01-01T00:00:00Z",
                version: "1.0",
                author: "Test Author",
            },
        };

        finalStructureProperty = new FinalStructureProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a FinalStructureProperty instance", () => {
            expect(finalStructureProperty).to.be.instanceOf(FinalStructureProperty);
        });

        it("should have correct property name", () => {
            expect(finalStructureProperty.name).to.equal(PropertyName.final_structure);
        });

        it("should have correct static property name", () => {
            expect(FinalStructureProperty.propertyName).to.equal(PropertyName.final_structure);
        });
    });

    describe("required properties", () => {
        it("should return isRelaxed", () => {
            expect(finalStructureProperty.isRelaxed).to.be.true;
        });

        it("should return basis", () => {
            const { basis } = finalStructureProperty;
            expect(basis).to.be.an("object");
            expect(basis).to.have.property("elements");
            expect(basis).to.have.property("coordinates");
            expect(basis).to.have.property("units", "crystal");
            expect(basis).to.have.property("labels");
        });

        it("should have correct basis elements", () => {
            const { basis } = finalStructureProperty;
            expect(basis.elements).to.have.length(6);
            expect(basis.elements[0]).to.deep.equal({ value: "Si", id: 0 });
            expect(basis.elements[2]).to.deep.equal({ value: "O", id: 2 });
        });

        it("should have correct basis coordinates", () => {
            const { basis } = finalStructureProperty;
            expect(basis.coordinates).to.have.length(6);
            expect(basis.coordinates[0]).to.deep.equal({ value: [0.0, 0.0, 0.0], id: 0 });
            expect(basis.coordinates[2]).to.deep.equal({ value: [0.25, 0.25, 0.25], id: 2 });
        });

        it("should have correct basis labels", () => {
            const { basis } = finalStructureProperty;
            expect(basis.labels).to.have.length(6);
            expect(basis.labels?.[0]).to.deep.equal({ value: 1, id: 0 });
            expect(basis.labels?.[2]).to.deep.equal({ value: 2, id: 2 });
        });

        it("should return lattice", () => {
            const { lattice } = finalStructureProperty;
            expect(lattice).to.be.an("object");
            expect(lattice).to.have.property("a", 5.0);
            expect(lattice).to.have.property("b", 5.0);
            expect(lattice).to.have.property("c", 5.0);
            expect(lattice).to.have.property("alpha", 90.0);
            expect(lattice).to.have.property("beta", 90.0);
            expect(lattice).to.have.property("gamma", 90.0);
        });

        it("should have correct lattice vectors", () => {
            const { lattice } = finalStructureProperty;
            expect(lattice.vectors).to.exist;
            expect(lattice.vectors?.a).to.deep.equal([5.0, 0.0, 0.0]);
            expect(lattice.vectors?.b).to.deep.equal([0.0, 5.0, 0.0]);
            expect(lattice.vectors?.c).to.deep.equal([0.0, 0.0, 5.0]);
            expect(lattice.vectors?.alat).to.equal(5.0);
            expect(lattice.vectors?.units).to.equal("angstrom");
        });

        it("should have correct lattice type and units", () => {
            const { lattice } = finalStructureProperty;
            expect(lattice.type).to.equal("CUB");
            expect(lattice.units).to.deep.equal({
                length: "angstrom",
                angle: "degree",
            });
        });
    });

    describe("optional properties", () => {
        it("should return formula", () => {
            expect(finalStructureProperty.formula).to.equal("Si2O4");
        });

        it("should return unitCellFormula", () => {
            expect(finalStructureProperty.unitCellFormula).to.equal("Si2O4");
        });

        it("should return derivedProperties", () => {
            const { derivedProperties } = finalStructureProperty;
            expect(derivedProperties).to.be.an("array");
            expect(derivedProperties).to.have.length(3);
        });

        it("should have correct volume property", () => {
            const { derivedProperties } = finalStructureProperty;
            const volumeProp = derivedProperties?.find((prop) => prop.name === "volume");
            expect(volumeProp).to.exist;
            expect(volumeProp).to.have.property("units", "angstrom^3");
            expect(volumeProp).to.have.property("value", 125.0);
        });

        it("should have correct density property", () => {
            const { derivedProperties } = finalStructureProperty;
            const densityProp = derivedProperties?.find((prop) => prop.name === "density");
            expect(densityProp).to.exist;
            expect(densityProp).to.have.property("units", "g/cm^3");
            expect(densityProp).to.have.property("value", 2.33);
        });

        it("should have correct symmetry property", () => {
            const { derivedProperties } = finalStructureProperty;
            const symmetryProp = derivedProperties?.find((prop) => prop.name === "symmetry");
            expect(symmetryProp).to.exist;
            expect(symmetryProp).to.have.property("pointGroupSymbol", "m-3m");
            expect(symmetryProp).to.have.property("spaceGroupSymbol", "Fd-3m");
            expect(symmetryProp).to.have.property("tolerance");
            if (symmetryProp && "tolerance" in symmetryProp) {
                expect(symmetryProp.tolerance).to.have.property("units", "angstrom");
                expect(symmetryProp.tolerance).to.have.property("value", 0.01);
            }
        });
    });

    describe("external and source properties", () => {
        it("should return external", () => {
            const { external } = finalStructureProperty;
            expect(external).to.be.an("object");
            expect(external).to.have.property("id", "12345");
            expect(external).to.have.property("source", "Materials Project");
            expect(external).to.have.property("origin", true);
            expect(external).to.have.property("data");
            expect(external).to.have.property("doi", "10.1038/sdata.2016.80");
            expect(external).to.have.property(
                "url",
                "https://materialsproject.org/materials/mp-149",
            );
        });

        it("should have correct external data", () => {
            const { external } = finalStructureProperty;
            expect(external?.data).to.deep.equal({ mpId: "mp-149" });
        });

        it("should return src", () => {
            const { src } = finalStructureProperty;
            expect(src).to.be.an("object");
            expect(src).to.have.property("extension", "cif");
            expect(src).to.have.property("filename", "structure.cif");
            expect(src).to.have.property("text");
            expect(src).to.have.property("hash", "abc123def456");
        });

        it("should have correct src text", () => {
            const { src } = finalStructureProperty;
            expect(src?.text).to.include("data_silicon");
            expect(src?.text).to.include("_cell_length_a    5.0");
        });

        it("should return scaledHash", () => {
            expect(finalStructureProperty.scaledHash).to.equal("scaled123def456");
        });

        it("should return icsdId", () => {
            expect(finalStructureProperty.icsdId).to.equal(12345);
        });
    });

    describe("consistency checks and metadata", () => {
        it("should return isNonPeriodic", () => {
            expect(finalStructureProperty.isNonPeriodic).to.be.false;
        });

        it("should return consistencyChecks", () => {
            const { consistencyChecks } = finalStructureProperty;
            expect(consistencyChecks).to.be.an("array");
            expect(consistencyChecks).to.have.length(2);
        });

        it("should have correct consistency check structure", () => {
            const { consistencyChecks } = finalStructureProperty;
            const defaultCheck = consistencyChecks?.find((check) => check.name === "default");
            expect(defaultCheck).to.exist;
            expect(defaultCheck).to.have.property("key", "structure_valid");
            expect(defaultCheck).to.have.property("severity", "info");
            expect(defaultCheck).to.have.property("message", "Structure is valid");
        });

        it("should have atomsTooClose check", () => {
            const { consistencyChecks } = finalStructureProperty;
            const atomsCheck = consistencyChecks?.find((check) => check.name === "atomsTooClose");
            expect(atomsCheck).to.exist;
            expect(atomsCheck).to.have.property("key", "atoms_distance_check");
            expect(atomsCheck).to.have.property("severity", "warning");
            expect(atomsCheck).to.have.property("message", "Some atoms are too close");
        });

        it("should return isDefault", () => {
            expect(finalStructureProperty.isDefault).to.be.true;
        });

        it("should return metadata", () => {
            const { metadata } = finalStructureProperty;
            expect(metadata).to.be.an("object");
            expect(metadata).to.have.property("created", "2023-01-01T00:00:00Z");
            expect(metadata).to.have.property("version", "1.0");
            expect(metadata).to.have.property("author", "Test Author");
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle minimal required data", () => {
            const minimalConfig = {
                isRelaxed: false,
                basis: {
                    elements: [{ value: "H" as const, id: 0 }],
                    coordinates: [{ value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 }],
                },
                lattice: {
                    a: 10.0,
                    b: 10.0,
                    c: 10.0,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
            };

            const minimalProperty = new FinalStructureProperty(minimalConfig);
            expect(minimalProperty).to.exist;
            expect(minimalProperty.isRelaxed).to.be.false;
            expect(minimalProperty.formula).to.be.undefined;
            expect(minimalProperty.derivedProperties).to.be.undefined;
        });

        it("should handle missing optional properties", () => {
            const noOptionalConfig = {
                isRelaxed: true,
                basis: {
                    elements: [{ value: "Si" as const, id: 0 }],
                    coordinates: [{ value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 }],
                },
                lattice: {
                    a: 5.0,
                    b: 5.0,
                    c: 5.0,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
            };

            const noOptionalProperty = new FinalStructureProperty(noOptionalConfig);
            expect(noOptionalProperty.formula).to.be.undefined;
            expect(noOptionalProperty.unitCellFormula).to.be.undefined;
            expect(noOptionalProperty.derivedProperties).to.be.undefined;
            expect(noOptionalProperty.external).to.be.undefined;
            expect(noOptionalProperty.src).to.be.undefined;
            expect(noOptionalProperty.scaledHash).to.be.undefined;
            expect(noOptionalProperty.icsdId).to.be.undefined;
            expect(noOptionalProperty.isNonPeriodic).to.be.undefined;
            expect(noOptionalProperty.consistencyChecks).to.be.undefined;
            expect(noOptionalProperty.isDefault).to.be.undefined;
            expect(noOptionalProperty.metadata).to.be.undefined;
        });

        it("should handle different lattice types", () => {
            const hexConfig = {
                isRelaxed: true,
                basis: {
                    elements: [{ value: "C" as const, id: 0 }],
                    coordinates: [{ value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 }],
                },
                lattice: {
                    a: 2.5,
                    b: 2.5,
                    c: 6.7,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 120.0,
                    type: "HEX" as const,
                },
            };

            const hexProperty = new FinalStructureProperty(hexConfig);
            expect(hexProperty.lattice.type).to.equal("HEX");
        });

        it("should handle different coordinate units", () => {
            const cartesianConfig = {
                isRelaxed: true,
                basis: {
                    elements: [{ value: "H" as const, id: 0 }],
                    coordinates: [{ value: [1.0, 1.0, 1.0] as [number, number, number], id: 0 }],
                    units: "cartesian" as const,
                },
                lattice: {
                    a: 10.0,
                    b: 10.0,
                    c: 10.0,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
            };

            const cartesianProperty = new FinalStructureProperty(cartesianConfig);
            expect(cartesianProperty.basis.units).to.equal("cartesian");
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = finalStructureProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.final_structure);
        });

        it("should support toJSON with exclude parameter", () => {
            const json = finalStructureProperty.toJSON(["metadata"]);
            expect(json).to.be.an("object");
            expect(json).to.not.have.property("metadata");
        });

        it("should have _json property", () => {
            expect(finalStructureProperty._json).to.exist;
            expect(finalStructureProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = finalStructureProperty.toJSON();
            expect(json).to.have.property("isRelaxed", true);
            expect(json).to.have.property("formula", "Si2O4");
            expect(json).to.have.property("basis");
            expect(json).to.have.property("lattice");
        });
    });

    describe("complex scenarios", () => {
        it("should handle large structures", () => {
            const largeConfig = {
                isRelaxed: true,
                formula: "Si100O200",
                basis: {
                    elements: Array.from({ length: 300 }, (_, i) => ({
                        value: i < 100 ? ("Si" as const) : ("O" as const),
                        id: i,
                    })),
                    coordinates: Array.from({ length: 300 }, (_, i) => ({
                        value: [Math.random(), Math.random(), Math.random()] as [
                            number,
                            number,
                            number,
                        ],
                        id: i,
                    })),
                },
                lattice: {
                    a: 20.0,
                    b: 20.0,
                    c: 20.0,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
            };

            const largeProperty = new FinalStructureProperty(largeConfig);
            expect(largeProperty).to.exist;
            expect(largeProperty.basis.elements).to.have.length(300);
            expect(largeProperty.basis.coordinates).to.have.length(300);
        });

        it("should handle different derived properties", () => {
            const derivedConfig = {
                isRelaxed: true,
                basis: {
                    elements: [{ value: "C" as const, id: 0 }],
                    coordinates: [{ value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 }],
                },
                lattice: {
                    a: 3.5,
                    b: 3.5,
                    c: 3.5,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
                derivedProperties: [
                    {
                        name: "inchi" as const,
                        value: "InChI=1S/C",
                    },
                    {
                        name: "inchi_key" as const,
                        value: "VNWKTOKETHGBQD-UHFFFAOYSA-N",
                    },
                    {
                        name: "elemental_ratio" as const,
                        value: 1.0,
                        element: "C",
                    },
                    {
                        name: "p-norm" as const,
                        degree: 2,
                        value: 3.5,
                    },
                ],
            };

            const derivedProperty = new FinalStructureProperty(derivedConfig);
            expect(derivedProperty.derivedProperties).to.have.length(4);

            const inchiProp = derivedProperty.derivedProperties?.find(
                (prop) => prop.name === "inchi",
            );
            expect(inchiProp).to.exist;
            if (inchiProp && "value" in inchiProp) {
                expect(inchiProp.value).to.equal("InChI=1S/C");
            }

            const inchiKeyProp = derivedProperty.derivedProperties?.find(
                (prop) => prop.name === "inchi_key",
            );
            expect(inchiKeyProp).to.exist;
            if (inchiKeyProp && "value" in inchiKeyProp) {
                expect(inchiKeyProp.value).to.equal("VNWKTOKETHGBQD-UHFFFAOYSA-N");
            }
        });

        it("should handle different external sources", () => {
            const externalConfig = {
                isRelaxed: true,
                basis: {
                    elements: [{ value: "Fe" as const, id: 0 }],
                    coordinates: [{ value: [0.0, 0.0, 0.0] as [number, number, number], id: 0 }],
                },
                lattice: {
                    a: 2.8,
                    b: 2.8,
                    c: 2.8,
                    alpha: 90.0,
                    beta: 90.0,
                    gamma: 90.0,
                },
                external: {
                    id: 67890,
                    source: "ICSD",
                    origin: false,
                    data: {
                        icsdId: 67890,
                        spaceGroup: "Fm-3m",
                    },
                },
            };

            const externalProperty = new FinalStructureProperty(externalConfig);
            expect(externalProperty.external).to.exist;
            expect(externalProperty.external?.id).to.equal(67890);
            expect(externalProperty.external?.source).to.equal("ICSD");
            expect(externalProperty.external?.origin).to.be.false;
        });
    });
});
