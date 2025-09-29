/* eslint-disable no-unused-expressions */
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import DielectricTensorProperty from "../../src/js/properties/non-scalar/DielectricTensorProperty";

describe("DielectricTensorProperty", () => {
    let dielectricTensorProperty: DielectricTensorProperty;
    let mockConfig: Omit<DielectricTensorPropertySchema, "name">;

    beforeEach(() => {
        mockConfig = {
            values: [
                {
                    part: "real" as const,
                    spin: 0.5,
                    frequencies: [0, 1, 2, 3, 4, 5],
                    components: [
                        [1.0, 0.0, 0.0] as [number, number, number],
                        [0.0, 1.0, 0.0] as [number, number, number],
                        [0.0, 0.0, 1.0] as [number, number, number],
                        [1.1, 0.1, 0.0] as [number, number, number],
                        [0.1, 1.1, 0.0] as [number, number, number],
                        [0.0, 0.0, 1.1] as [number, number, number],
                    ],
                },
                {
                    part: "imaginary" as const,
                    spin: 0.5,
                    frequencies: [0, 1, 2, 3, 4, 5],
                    components: [
                        [0.1, 0.0, 0.0] as [number, number, number],
                        [0.0, 0.1, 0.0] as [number, number, number],
                        [0.0, 0.0, 0.1] as [number, number, number],
                        [0.2, 0.0, 0.0] as [number, number, number],
                        [0.0, 0.2, 0.0] as [number, number, number],
                        [0.0, 0.0, 0.2] as [number, number, number],
                    ],
                },
                {
                    part: "real" as const,
                    spin: -0.5,
                    frequencies: [0, 1, 2, 3, 4, 5],
                    components: [
                        [1.0, 0.0, 0.0] as [number, number, number],
                        [0.0, 1.0, 0.0] as [number, number, number],
                        [0.0, 0.0, 1.0] as [number, number, number],
                        [1.1, 0.1, 0.0] as [number, number, number],
                        [0.1, 1.1, 0.0] as [number, number, number],
                        [0.0, 0.0, 1.1] as [number, number, number],
                    ],
                },
                {
                    part: "imaginary" as const,
                    spin: -0.5,
                    frequencies: [0, 1, 2, 3, 4, 5],
                    components: [
                        [0.1, 0.0, 0.0] as [number, number, number],
                        [0.0, 0.1, 0.0] as [number, number, number],
                        [0.0, 0.0, 0.1] as [number, number, number],
                        [0.2, 0.0, 0.0] as [number, number, number],
                        [0.0, 0.2, 0.0] as [number, number, number],
                        [0.0, 0.0, 0.2] as [number, number, number],
                    ],
                },
            ],
        };

        dielectricTensorProperty = new DielectricTensorProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a DielectricTensorProperty instance", () => {
            expect(dielectricTensorProperty).to.be.instanceOf(DielectricTensorProperty);
        });

        it("should have correct property name", () => {
            expect(dielectricTensorProperty.name).to.equal(PropertyName.dielectric_tensor);
        });

        it("should have correct static property name", () => {
            expect(DielectricTensorProperty.propertyName).to.equal(PropertyName.dielectric_tensor);
        });
    });

    describe("basic properties", () => {
        it("should have correct subtitle", () => {
            expect(dielectricTensorProperty.subtitle).to.equal("Dielectric Tensor");
        });

        it("should have correct y-axis title", () => {
            expect(dielectricTensorProperty.yAxisTitle).to.equal("Dielectric Tensor Component");
        });

        it("should have correct x-axis title", () => {
            expect(dielectricTensorProperty.xAxisTitle).to.equal("Frequency (eV)");
        });

        it("should have chart configuration", () => {
            expect(dielectricTensorProperty.chartConfig).to.be.an("array");
            expect(dielectricTensorProperty.chartConfig).to.have.length.greaterThan(0);
        });
    });

    describe("values property", () => {
        it("should return values data", () => {
            const { values } = dielectricTensorProperty;
            expect(values).to.be.an("array");
            expect(values).to.have.length(4);
        });

        it("should have correct structure for each value", () => {
            const { values } = dielectricTensorProperty;
            const firstValue = values[0];

            expect(firstValue).to.have.property("part", "real");
            expect(firstValue).to.have.property("spin", 0.5);
            expect(firstValue).to.have.property("frequencies");
            expect(firstValue).to.have.property("components");
            expect(firstValue.frequencies).to.be.an("array");
            expect(firstValue.components).to.be.an("array");
        });

        it("should have correct frequencies", () => {
            const { values } = dielectricTensorProperty;
            expect(values[0].frequencies).to.deep.equal([0, 1, 2, 3, 4, 5]);
        });

        it("should have correct components structure", () => {
            const { values } = dielectricTensorProperty;
            const { components } = values[0];
            expect(components).to.have.length(6);
            expect(components[0]).to.be.an("array");
            expect(components[0]).to.have.length(3);
        });
    });

    describe("chart configuration", () => {
        it("should generate multiple chart configs for different spin channels", () => {
            expect(dielectricTensorProperty.chartConfig).to.have.length(2); // Two spin channels
        });

        it("should have proper chart config structure", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig).to.be.an("object");
            expect(chartConfig).to.have.property("chart");
            expect(chartConfig).to.have.property("series");
        });

        it("should have correct chart type", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig.chart?.type).to.equal("spline");
        });

        it("should have zoom type xy", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig.chart?.zoomType).to.equal("xy");
        });

        it("should have animation disabled", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig.chart?.animation).to.be.false;
        });

        it("should have credits disabled", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig.credits?.enabled).to.be.false;
        });

        it("should have legend configuration", () => {
            const chartConfig = dielectricTensorProperty.chartConfig[0];
            expect(chartConfig.legend).to.exist;
            expect(chartConfig.legend?.layout).to.equal("horizontal");
            expect(chartConfig.legend?.align).to.equal("center");
            expect(chartConfig.legend?.verticalAlign).to.equal("bottom");
        });
    });

    describe("spin channel handling", () => {
        it("should handle positive spin values", () => {
            const { values } = dielectricTensorProperty;
            const positiveSpinValues = values.filter((v) => v.spin === 0.5);
            expect(positiveSpinValues).to.have.length(2); // real and imaginary
        });

        it("should handle negative spin values", () => {
            const { values } = dielectricTensorProperty;
            const negativeSpinValues = values.filter((v) => v.spin === -0.5);
            expect(negativeSpinValues).to.have.length(2); // real and imaginary
        });

        it("should create separate chart configs for different spin channels", () => {
            const chartConfigs = dielectricTensorProperty.chartConfig;
            expect(chartConfigs).to.have.length(2);
        });
    });

    describe("data processing", () => {
        it("should handle real and imaginary parts", () => {
            const { values } = dielectricTensorProperty;
            const realParts = values.filter((v) => v.part === "real");
            const imaginaryParts = values.filter((v) => v.part === "imaginary");

            expect(realParts).to.have.length(2); // Two spin channels
            expect(imaginaryParts).to.have.length(2); // Two spin channels
        });

        it("should have consistent frequencies across parts", () => {
            const { values } = dielectricTensorProperty;
            const { frequencies } = values[0];

            values.forEach((value) => {
                expect(value.frequencies).to.deep.equal(frequencies);
            });
        });

        it("should have consistent component count", () => {
            const { values } = dielectricTensorProperty;
            const componentCount = values[0].components.length;

            values.forEach((value) => {
                expect(value.components).to.have.length(componentCount);
            });
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle single spin channel", () => {
            const singleSpinConfig = {
                values: [
                    {
                        part: "real" as const,
                        spin: 0.5,
                        frequencies: [0, 1, 2],
                        components: [
                            [1.0, 0.0, 0.0] as [number, number, number],
                            [0.0, 1.0, 0.0] as [number, number, number],
                            [0.0, 0.0, 1.0] as [number, number, number],
                        ],
                    },
                    {
                        part: "imaginary" as const,
                        spin: 0.5,
                        frequencies: [0, 1, 2],
                        components: [
                            [0.1, 0.0, 0.0] as [number, number, number],
                            [0.0, 0.1, 0.0] as [number, number, number],
                            [0.0, 0.0, 0.1] as [number, number, number],
                        ],
                    },
                ],
            };

            const singleSpinProperty = new DielectricTensorProperty(singleSpinConfig);
            expect(singleSpinProperty).to.exist;
            expect(singleSpinProperty.chartConfig).to.have.length(1);
        });

        it("should handle no spin values", () => {
            const noSpinConfig = {
                values: [
                    {
                        part: "real" as const,
                        frequencies: [0, 1, 2],
                        components: [
                            [1.0, 0.0, 0.0] as [number, number, number],
                            [0.0, 1.0, 0.0] as [number, number, number],
                            [0.0, 0.0, 1.0] as [number, number, number],
                        ],
                    },
                    {
                        part: "imaginary" as const,
                        frequencies: [0, 1, 2],
                        components: [
                            [0.1, 0.0, 0.0] as [number, number, number],
                            [0.0, 0.1, 0.0] as [number, number, number],
                            [0.0, 0.0, 0.1] as [number, number, number],
                        ],
                    },
                ],
            };

            const noSpinProperty = new DielectricTensorProperty(noSpinConfig);
            expect(noSpinProperty).to.exist;
            expect(noSpinProperty.chartConfig).to.have.length(1);
        });

        it("should handle minimal data", () => {
            const minimalConfig = {
                values: [
                    {
                        part: "real" as const,
                        frequencies: [0],
                        components: [[1.0, 0.0, 0.0] as [number, number, number]],
                    },
                ],
            };

            const minimalProperty = new DielectricTensorProperty(minimalConfig);
            expect(minimalProperty).to.exist;
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = dielectricTensorProperty.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("name", PropertyName.dielectric_tensor);
        });

        it("should have _json property", () => {
            expect(dielectricTensorProperty._json).to.exist;
            expect(dielectricTensorProperty._json).to.be.an("object");
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple frequency points", () => {
            const multiFreqConfig = {
                values: [
                    {
                        part: "real" as const,
                        spin: 0.5,
                        frequencies: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
                        components: [
                            [1.0, 0.0, 0.0] as [number, number, number],
                            [1.1, 0.0, 0.0] as [number, number, number],
                            [1.2, 0.0, 0.0] as [number, number, number],
                            [1.3, 0.0, 0.0] as [number, number, number],
                            [1.4, 0.0, 0.0] as [number, number, number],
                            [1.5, 0.0, 0.0] as [number, number, number],
                            [1.6, 0.0, 0.0] as [number, number, number],
                        ],
                    },
                    {
                        part: "imaginary" as const,
                        spin: 0.5,
                        frequencies: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
                        components: [
                            [0.1, 0.0, 0.0] as [number, number, number],
                            [0.2, 0.0, 0.0] as [number, number, number],
                            [0.3, 0.0, 0.0] as [number, number, number],
                            [0.4, 0.0, 0.0] as [number, number, number],
                            [0.5, 0.0, 0.0] as [number, number, number],
                            [0.6, 0.0, 0.0] as [number, number, number],
                            [0.7, 0.0, 0.0] as [number, number, number],
                        ],
                    },
                ],
            };

            const multiFreqProperty = new DielectricTensorProperty(multiFreqConfig);
            expect(multiFreqProperty).to.exist;
            expect(multiFreqProperty.values[0].frequencies).to.have.length(7);
        });

        it("should handle different tensor components", () => {
            const tensorConfig = {
                values: [
                    {
                        part: "real" as const,
                        spin: 0.5,
                        frequencies: [0, 1, 2],
                        components: [
                            [2.0, 0.1, 0.2] as [number, number, number],
                            [0.1, 2.1, 0.3] as [number, number, number],
                            [0.2, 0.3, 2.2] as [number, number, number],
                        ],
                    },
                ],
            };

            const tensorProperty = new DielectricTensorProperty(tensorConfig);
            expect(tensorProperty).to.exist;
            expect(tensorProperty.values[0].components[0]).to.deep.equal([2.0, 0.1, 0.2]);
        });
    });
});
