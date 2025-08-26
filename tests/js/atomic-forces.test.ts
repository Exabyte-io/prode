import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import AtomicForcesProperty from "../../src/js/properties/tensor/AtomicForcesProperty";

describe("AtomicForcesProperty", () => {
    it("should create an atomic forces property with values and units", () => {
        const config: AtomicForcesPropertySchema = {
            name: "atomic_forces",
            units: "eV/bohr",
            values: [
                {
                    value: [0.1, -0.2, 0.3],
                    id: 1,
                },
                {
                    value: [-0.1, 0.2, -0.3],
                    id: 2,
                },
            ],
        };

        const atomicForcesProperty = new AtomicForcesProperty(config);

        expect(atomicForcesProperty.name).equal("atomic_forces");
        expect(atomicForcesProperty.units).equal("eV/bohr");
        expect(atomicForcesProperty.values).length(2);
        expect(atomicForcesProperty.values?.[0].value).deep.equal([0.1, -0.2, 0.3]);
        expect(atomicForcesProperty.values?.[0].id).equal(1);
        expect(atomicForcesProperty.values?.[1].value).deep.equal([-0.1, 0.2, -0.3]);
        expect(atomicForcesProperty.values?.[1].id).equal(2);
    });

    it("should support different force units", () => {
        const units: AtomicForcesPropertySchema["units"][] = [
            "eV/bohr",
            "eV/angstrom",
            "Ry/a.u.",
            "newton",
            "kg*m/s^2",
            "eV/a.u.",
        ];

        units.forEach((unit) => {
            const config: AtomicForcesPropertySchema = {
                name: "atomic_forces",
                units: unit,
                values: [
                    {
                        value: [1.0, 0.0, 0.0],
                        id: 1,
                    },
                ],
            };

            const atomicForcesProperty = new AtomicForcesProperty(config);
            expect(atomicForcesProperty.units).equal(unit);
        });
    });

    it("should handle empty values array", () => {
        const config: AtomicForcesPropertySchema = {
            name: "atomic_forces",
            units: "eV/bohr",
            values: [],
        };

        const atomicForcesProperty = new AtomicForcesProperty(config);

        expect(atomicForcesProperty.values).deep.equal([]);
        expect(atomicForcesProperty.units).equal("eV/bohr");
    });

    it("should handle missing optional fields", () => {
        const config: AtomicForcesPropertySchema = {
            name: "atomic_forces",
            units: "eV/bohr", // units is required
            values: [
                {
                    value: [0.1, 0.2, 0.3],
                    id: 1,
                },
            ],
        };

        const atomicForcesProperty = new AtomicForcesProperty(config);

        expect(atomicForcesProperty.values?.[0].value).deep.equal([0.1, 0.2, 0.3]);
        expect(atomicForcesProperty.units).equal("eV/bohr");
    });

    it("should handle 3D force vectors", () => {
        const config: AtomicForcesPropertySchema = {
            name: "atomic_forces",
            units: "newton",
            values: [
                {
                    value: [1.5, -2.3, 0.8],
                    id: 1,
                },
                {
                    value: [-0.5, 1.2, -1.7],
                    id: 2,
                },
                {
                    value: [0.0, 0.0, 0.0],
                    id: 3,
                },
            ],
        };

        const atomicForcesProperty = new AtomicForcesProperty(config);

        expect(atomicForcesProperty.values).length(3);
        expect(atomicForcesProperty.values?.[0].value).length(3);
        expect(atomicForcesProperty.values?.[1].value).length(3);
        expect(atomicForcesProperty.values?.[2].value).length(3);
        expect(atomicForcesProperty.values?.[2].value).deep.equal([0.0, 0.0, 0.0]);
    });
});
