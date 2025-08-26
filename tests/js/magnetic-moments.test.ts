import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import MagneticMomentsProperty from "../../src/js/properties/tensor/MagneticMomentsProperty";

describe("MagneticMomentsProperty", () => {
    it("should create a magnetic moments property with values and units", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [0.0, 0.0, 2.0],
                    id: 1,
                },
                {
                    value: [0.0, 0.0, -2.0],
                    id: 2,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.name).equal("magnetic_moments");
        expect(magneticMomentsProperty.units).equal("uB");
        expect(magneticMomentsProperty.values).length(2);
        expect(magneticMomentsProperty.values[0].value).deep.equal([0.0, 0.0, 2.0]);
        expect(magneticMomentsProperty.values[0].id).equal(1);
        expect(magneticMomentsProperty.values[1].value).deep.equal([0.0, 0.0, -2.0]);
        expect(magneticMomentsProperty.values[1].id).equal(2);
    });

    it("should handle ferromagnetic alignment", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [0.0, 0.0, 2.0],
                    id: 1,
                },
                {
                    value: [0.0, 0.0, 2.0],
                    id: 2,
                },
                {
                    value: [0.0, 0.0, 2.0],
                    id: 3,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.values).length(3);
        magneticMomentsProperty.values.forEach((moment) => {
            expect(moment.value).deep.equal([0.0, 0.0, 2.0]);
        });
    });

    it("should handle antiferromagnetic alignment", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [0.0, 0.0, 2.0],
                    id: 1,
                },
                {
                    value: [0.0, 0.0, -2.0],
                    id: 2,
                },
                {
                    value: [0.0, 0.0, 2.0],
                    id: 3,
                },
                {
                    value: [0.0, 0.0, -2.0],
                    id: 4,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.values).length(4);
        expect(magneticMomentsProperty.values[0].value[2]).equal(2.0);
        expect(magneticMomentsProperty.values[1].value[2]).equal(-2.0);
        expect(magneticMomentsProperty.values[2].value[2]).equal(2.0);
        expect(magneticMomentsProperty.values[3].value[2]).equal(-2.0);
    });

    it("should handle non-collinear magnetic moments", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [1.0, 0.0, 0.0],
                    id: 1,
                },
                {
                    value: [0.0, 1.0, 0.0],
                    id: 2,
                },
                {
                    value: [0.0, 0.0, 1.0],
                    id: 3,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.values[0].value).deep.equal([1.0, 0.0, 0.0]);
        expect(magneticMomentsProperty.values[1].value).deep.equal([0.0, 1.0, 0.0]);
        expect(magneticMomentsProperty.values[2].value).deep.equal([0.0, 0.0, 1.0]);
    });

    it("should handle zero magnetic moments", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [0.0, 0.0, 0.0],
                    id: 1,
                },
                {
                    value: [0.0, 0.0, 0.0],
                    id: 2,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.values).length(2);
        magneticMomentsProperty.values.forEach((moment) => {
            expect(moment.value).deep.equal([0.0, 0.0, 0.0]);
        });
    });

    it("should handle fractional magnetic moments", () => {
        const config: MagneticMomentsPropertySchema = {
            name: "magnetic_moments",
            units: "uB",
            values: [
                {
                    value: [0.5, -0.3, 1.2],
                    id: 1,
                },
                {
                    value: [-0.2, 0.8, -0.7],
                    id: 2,
                },
            ],
        };

        const magneticMomentsProperty = new MagneticMomentsProperty(config);

        expect(magneticMomentsProperty.values[0].value).deep.equal([0.5, -0.3, 1.2]);
        expect(magneticMomentsProperty.values[1].value).deep.equal([-0.2, 0.8, -0.7]);
    });
});
