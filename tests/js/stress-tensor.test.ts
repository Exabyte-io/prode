import { expect } from "chai";

import StressTensorProperty from "../../src/js/include/primitive/StressTensorProperty";

describe("StressTensorProperty", () => {
    it("should create a stress tensor property with value and units", () => {
        const config = {
            name: "stress_tensor",
            units: "kbar",
            value: [
                [1.2, 0.3, -0.1],
                [0.3, 0.8, 0.2],
                [-0.1, 0.2, 1.5],
            ],
        };

        const stressTensorProperty = new StressTensorProperty(config);

        expect(stressTensorProperty.name).equal("stress_tensor");
        expect(stressTensorProperty.units).equal("kbar");
        expect(stressTensorProperty.value).deep.equal([
            [1.2, 0.3, -0.1],
            [0.3, 0.8, 0.2],
            [-0.1, 0.2, 1.5],
        ]);
    });

    it("should support pa units", () => {
        const config = {
            name: "stress_tensor",
            units: "pa",
            value: [
                [101325, 0, 0],
                [0, 101325, 0],
                [0, 0, 101325],
            ],
        };

        const stressTensorProperty = new StressTensorProperty(config);

        expect(stressTensorProperty.units).equal("pa");
        expect(stressTensorProperty.value[0][0]).equal(101325);
    });

    it("should handle symmetric stress tensor", () => {
        const config = {
            name: "stress_tensor",
            units: "kbar",
            value: [
                [2.0, 0.5, 0.0],
                [0.5, 2.0, 0.0],
                [0.0, 0.0, 2.0],
            ],
        };

        const stressTensorProperty = new StressTensorProperty(config);

        expect(stressTensorProperty.value[0][1]).equal(0.5);
        expect(stressTensorProperty.value[1][0]).equal(0.5);
        expect(stressTensorProperty.value[0][2]).equal(0.0);
        expect(stressTensorProperty.value[2][0]).equal(0.0);
    });

    it("should handle diagonal stress tensor", () => {
        const config = {
            name: "stress_tensor",
            units: "kbar",
            value: [
                [1.0, 0.0, 0.0],
                [0.0, 1.0, 0.0],
                [0.0, 0.0, 1.0],
            ],
        };

        const stressTensorProperty = new StressTensorProperty(config);

        expect(stressTensorProperty.value[0][0]).equal(1.0);
        expect(stressTensorProperty.value[1][1]).equal(1.0);
        expect(stressTensorProperty.value[2][2]).equal(1.0);
        expect(stressTensorProperty.value[0][1]).equal(0.0);
        expect(stressTensorProperty.value[1][2]).equal(0.0);
        expect(stressTensorProperty.value[0][2]).equal(0.0);
    });

    it("should handle negative stress components", () => {
        const config = {
            name: "stress_tensor",
            units: "kbar",
            value: [
                [-1.5, 0.2, -0.3],
                [0.2, -0.8, 0.1],
                [-0.3, 0.1, -2.0],
            ],
        };

        const stressTensorProperty = new StressTensorProperty(config);

        expect(stressTensorProperty.value[0][0]).equal(-1.5);
        expect(stressTensorProperty.value[1][1]).equal(-0.8);
        expect(stressTensorProperty.value[2][2]).equal(-2.0);
    });
});
