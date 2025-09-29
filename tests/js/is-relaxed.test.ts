import type { IsRelaxedPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import IsRelaxedProperty from "../../src/js/properties/non-scalar/IsRelaxedProperty";

describe("IsRelaxedProperty", () => {
    it("should create an is relaxed property with basic structure data", () => {
        const config: IsRelaxedPropertySchema = {
            name: "is_relaxed",
            formula: "Si",
            unitCellFormula: "Si8",
            basis: {
                elements: [
                    { value: "Si", id: 1 },
                    { value: "Si", id: 2 },
                ],
                coordinates: [
                    { value: [0.0, 0.0, 0.0], id: 1 },
                    { value: [0.25, 0.25, 0.25], id: 2 },
                ],
                units: "crystal",
            },
            lattice: {
                a: 5.43,
                b: 5.43,
                c: 5.43,
                alpha: 90,
                beta: 90,
                gamma: 90,
                type: "CUB",
                units: {
                    length: "angstrom",
                    angle: "degree",
                },
            },
        };

        const isRelaxedProperty = new IsRelaxedProperty(config);

        expect(isRelaxedProperty.name).equal("is_relaxed");
        expect(isRelaxedProperty.formula).equal("Si");
        expect(isRelaxedProperty.unitCellFormula).equal("Si8");
        expect(isRelaxedProperty.basis.elements).length(2);
        expect(isRelaxedProperty.basis.coordinates).length(2);
        expect(isRelaxedProperty.lattice.a).equal(5.43);
        expect(isRelaxedProperty.lattice.type).equal("CUB");
    });

    it("should handle derived properties", () => {
        const config: IsRelaxedPropertySchema = {
            name: "is_relaxed",
            basis: {
                elements: [{ value: "Si", id: 1 }],
                coordinates: [{ value: [0.0, 0.0, 0.0], id: 1 }],
            },
            lattice: {
                a: 5.43,
                b: 5.43,
                c: 5.43,
                alpha: 90,
                beta: 90,
                gamma: 90,
            },
            derivedProperties: [
                {
                    name: "volume",
                    units: "angstrom^3",
                    value: 160.0,
                },
                {
                    name: "density",
                    units: "g/cm^3",
                    value: 2.33,
                },
                {
                    name: "symmetry",
                    pointGroupSymbol: "m-3m",
                    spaceGroupSymbol: "Fd-3m",
                    tolerance: {
                        units: "angstrom",
                        value: 0.01,
                    },
                },
            ],
        };

        const isRelaxedProperty = new IsRelaxedProperty(config);

        expect(isRelaxedProperty.derivedProperties).length(3);
        expect(isRelaxedProperty.derivedProperties?.[0].name).equal("volume");
        expect(isRelaxedProperty.derivedProperties?.[1].name).equal("density");
        expect(isRelaxedProperty.derivedProperties?.[2].name).equal("symmetry");
    });

    it("should handle external source information", () => {
        const config: IsRelaxedPropertySchema = {
            name: "is_relaxed",
            basis: {
                elements: [{ value: "Si", id: 1 }],
                coordinates: [{ value: [0.0, 0.0, 0.0], id: 1 }],
            },
            lattice: {
                a: 5.43,
                b: 5.43,
                c: 5.43,
                alpha: 90,
                beta: 90,
                gamma: 90,
            },
            external: {
                id: "mp-149",
                source: "materialsproject.org",
                origin: true,
                doi: "10.1103/PhysRevB.50.17953",
                url: "https://next-gen.materialsproject.org/materials/mp-149",
            },
        };

        const isRelaxedProperty = new IsRelaxedProperty(config);

        expect(isRelaxedProperty.external?.id).equal("mp-149");
        expect(isRelaxedProperty.external?.source).equal("materialsproject.org");
        expect(isRelaxedProperty.external?.origin).equal(true);
    });

    it("should handle consistency checks", () => {
        const config: IsRelaxedPropertySchema = {
            name: "is_relaxed",
            basis: {
                elements: [{ value: "Si", id: 1 }],
                coordinates: [{ value: [0.0, 0.0, 0.0], id: 1 }],
            },
            lattice: {
                a: 5.43,
                b: 5.43,
                c: 5.43,
                alpha: 90,
                beta: 90,
                gamma: 90,
            },
            consistencyChecks: [
                {
                    name: "atomsTooClose",
                    key: "basis.coordinates.1",
                    severity: "warning",
                    message: "Atoms are too close to each other",
                },
            ],
        };

        const isRelaxedProperty = new IsRelaxedProperty(config);

        expect(isRelaxedProperty.consistencyChecks).length(1);
        expect(isRelaxedProperty.consistencyChecks?.[0].name).equal("atomsTooClose");
        expect(isRelaxedProperty.consistencyChecks?.[0].severity).equal("warning");
    });

    it("should handle optional fields", () => {
        const config: IsRelaxedPropertySchema = {
            name: "is_relaxed",
            basis: {
                elements: [{ value: "Si", id: 1 }],
                coordinates: [{ value: [0.0, 0.0, 0.0], id: 1 }],
            },
            lattice: {
                a: 5.43,
                b: 5.43,
                c: 5.43,
                alpha: 90,
                beta: 90,
                gamma: 90,
            },
            icsdId: 12345,
            isNonPeriodic: false,
            scaledHash: "abc123",
            slug: "silicon-crystal",
            systemName: "Si_crystal",
            schemaVersion: "1.0.0",
            isDefault: true,
        };

        const isRelaxedProperty = new IsRelaxedProperty(config);

        expect(isRelaxedProperty.icsdId).equal(12345);
        expect(isRelaxedProperty.isNonPeriodic).equal(false);
        expect(isRelaxedProperty.scaledHash).equal("abc123");
        expect(isRelaxedProperty.isDefault).equal(true);
    });
});
