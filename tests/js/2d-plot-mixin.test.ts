/* eslint-disable no-unused-expressions */
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

// import { PropertyName } from "../../src/js";
import {
    type XDataArray,
    type YDataSeries,
    TwoDimensionalHighChartConfigMixin,
} from "../../src/js/properties/include/mixins/2d_plot";
import DensityOfStatesProperty from "../../src/js/properties/non-scalar/DensityOfStatesProperty";

describe("2D Plot Mixin Integration", () => {
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
            legend: [],
        };

        densityOfStatesProperty = new DensityOfStatesProperty(mockConfig);
    });

    describe("twoDimensionalPlotMixin integration", () => {
        it("should add xDataArray getter to property", () => {
            expect(densityOfStatesProperty.xDataArray).to.exist;
            expect(densityOfStatesProperty.xDataArray).to.be.an("array");
            expect(densityOfStatesProperty.xDataArray).to.have.length(11);
        });

        it("should add yDataSeries getter to property", () => {
            expect(densityOfStatesProperty.yDataSeries).to.exist;
            expect(densityOfStatesProperty.yDataSeries).to.be.an("array");
            expect(densityOfStatesProperty.yDataSeries).to.have.length(2);
        });

        it("should add yAxis getter to property", () => {
            expect(densityOfStatesProperty.yAxis).to.exist;
            expect(densityOfStatesProperty.yAxis).to.be.an("object");
            expect(densityOfStatesProperty.yAxis).to.have.property("label", "density of states");
            expect(densityOfStatesProperty.yAxis).to.have.property("units", "states/unitcell");
        });

        it("should add xAxis getter to property", () => {
            expect(densityOfStatesProperty.xAxis).to.exist;
            expect(densityOfStatesProperty.xAxis).to.be.an("object");
            expect(densityOfStatesProperty.xAxis).to.have.property("label", "energy");
            expect(densityOfStatesProperty.xAxis).to.have.property("units", "eV");
        });

        it("should return correct xDataArray structure", () => {
            const { xDataArray } = densityOfStatesProperty;
            expect(xDataArray).to.deep.equal([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
        });

        it("should return correct yDataSeries structure", () => {
            const { yDataSeries } = densityOfStatesProperty;
            expect(yDataSeries[0]).to.deep.equal([
                0.1, 0.2, 0.5, 1.0, 2.0, 3.0, 2.0, 1.0, 0.5, 0.2, 0.1,
            ]);
            expect(yDataSeries[1]).to.deep.equal([
                0.05, 0.15, 0.4, 0.8, 1.5, 2.5, 1.5, 0.8, 0.4, 0.15, 0.05,
            ]);
        });
    });

    describe("TwoDimensionalHighChartConfigMixin class", () => {
        let chartConfig: TwoDimensionalHighChartConfigMixin;
        let chartParams: {
            subtitle: string;
            yAxisTitle: string;
            xAxisTitle: string;
            xDataArray: XDataArray;
            yDataSeries: YDataSeries;
            legend?: boolean;
        };

        beforeEach(() => {
            chartParams = {
                subtitle: "Test Chart",
                yAxisTitle: "Energy (eV)",
                xAxisTitle: "k-points",
                xDataArray: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                yDataSeries: [
                    [0.1, 0.2, 0.5, 1.0, 2.0, 3.0, 2.0, 1.0, 0.5, 0.2, 0.1] as [
                        number,
                        ...number[],
                    ],
                    [0.05, 0.15, 0.4, 0.8, 1.5, 2.5, 1.5, 0.8, 0.4, 0.15, 0.05] as [
                        number,
                        ...number[],
                    ],
                ],
            };

            chartConfig = new TwoDimensionalHighChartConfigMixin(chartParams);
        });

        describe("instantiation", () => {
            it("should create a TwoDimensionalHighChartConfigMixin instance", () => {
                expect(chartConfig).to.be.instanceOf(TwoDimensionalHighChartConfigMixin);
            });

            it("should set xDataArray property", () => {
                expect(chartConfig.xDataArray).to.deep.equal(chartParams.xDataArray);
            });

            it("should set yDataSeries property", () => {
                expect(chartConfig.yDataSeries).to.deep.equal(chartParams.yDataSeries);
            });

            it("should have default tooltip axis names", () => {
                expect(chartConfig.tooltipXAxisName).to.equal("");
                expect(chartConfig.tooltipYAxisName).to.equal("");
            });
        });

        describe("series property", () => {
            it("should generate correct series data", () => {
                const { series } = chartConfig;
                expect(series).to.be.an("array");
                expect(series).to.have.length(2);
            });

            it("should have correct series structure", () => {
                const { series } = chartConfig;
                expect(series[0]).to.have.property("animation", false);
                expect(series[0]).to.have.property("data");
                expect(series[0].data).to.be.an("array");
                expect(series[0].data).to.have.length(11);
            });

            it("should zip xDataArray with yDataSeries correctly", () => {
                const { series } = chartConfig;
                expect(series[0].data[0]).to.deep.equal([-5, 0.1]);
                expect(series[0].data[5]).to.deep.equal([0, 3.0]);
                expect(series[0].data[10]).to.deep.equal([5, 0.1]);
                expect(series[1].data[0]).to.deep.equal([-5, 0.05]);
                expect(series[1].data[5]).to.deep.equal([0, 2.5]);
                expect(series[1].data[10]).to.deep.equal([5, 0.05]);
            });

            it("should handle single data series", () => {
                const singleSeriesParams = {
                    ...chartParams,
                    yDataSeries: [
                        [0.1, 0.2, 0.5, 1.0, 2.0, 3.0, 2.0, 1.0, 0.5, 0.2, 0.1] as [
                            number,
                            ...number[],
                        ],
                    ],
                };

                const singleSeriesConfig = new TwoDimensionalHighChartConfigMixin(
                    singleSeriesParams,
                );
                const { series } = singleSeriesConfig;
                expect(series).to.have.length(1);
                expect(series[0].data).to.have.length(11);
            });

            it("should handle empty data series", () => {
                const emptySeriesParams = {
                    ...chartParams,
                    yDataSeries: [],
                };

                const emptySeriesConfig = new TwoDimensionalHighChartConfigMixin(emptySeriesParams);
                const { series } = emptySeriesConfig;
                expect(series).to.have.length(0);
            });
        });

        describe("tooltipFormatter method", () => {
            it("should create a tooltip formatter function", () => {
                const formatter = chartConfig.tooltipFormatter();
                expect(formatter).to.be.a("function");
            });

            it("should handle array x-values in tooltip", () => {
                const formatter = chartConfig.tooltipFormatter([
                    [1, 2, 3],
                    [4, 5, 6],
                ]);
                const mockScope = {
                    point: {
                        name: "test",
                        index: 0,
                    },
                    series: {
                        name: "test",
                    },
                    percentage: 50,
                    total: 100,
                    x: 0,
                    y: 1.2345,
                    key: 0,
                };

                const result = formatter.call(mockScope);

                expect(result).to.include("1, 2, 3");
            });

            it("should handle number x-values in tooltip", () => {
                const formatter = chartConfig.tooltipFormatter([1.234, 2.345, 3.456]);
                const mockScope = {
                    point: {
                        name: "test",
                        index: 0,
                    },
                    series: {
                        name: "test",
                    },
                    percentage: 50,
                    total: 100,
                    x: 0,
                    y: 1.2345,
                    key: 0,
                };

                const result = formatter.call(mockScope);

                expect(result).to.include("1.2340");
            });
        });

        describe("overrideConfig property", () => {
            it("should return chart configuration object", () => {
                const config = chartConfig.overrideConfig;
                expect(config).to.be.an("object");
            });

            it("should have correct chart type", () => {
                const config = chartConfig.overrideConfig as any;
                expect(config.chart).to.have.property("type", "spline");
                expect(config.chart).to.have.property("animation", false);
                expect(config.chart).to.have.property("zoomType", "xy");
            });

            it("should have correct plot options", () => {
                const config = chartConfig.overrideConfig as any;
                expect(config.plotOptions.spline).to.have.property("lineWidth", 2);
                expect(config.plotOptions.spline.marker).to.have.property("enabled", false);
            });

            it("should have tooltip configuration", () => {
                const config = chartConfig.overrideConfig as any;
                expect(config.tooltip).to.have.property("valueSuffix", "");
                expect(config.tooltip).to.have.property("formatter");
                expect(config.tooltip.formatter).to.be.a("function");
            });

            it("should have legend disabled", () => {
                const config = chartConfig.overrideConfig as any;
                expect(config.legend).to.have.property("enabled", false);
            });
        });

        describe("edge cases and error handling", () => {
            it("should handle empty xDataArray", () => {
                const emptyParams = {
                    ...chartParams,
                    xDataArray: [],
                };

                const emptyConfig = new TwoDimensionalHighChartConfigMixin(emptyParams);
                expect(emptyConfig.xDataArray).to.deep.equal([]);
            });

            it("should handle empty yDataSeries", () => {
                const emptyParams = {
                    ...chartParams,
                    yDataSeries: [],
                };

                const emptyConfig = new TwoDimensionalHighChartConfigMixin(emptyParams);
                expect(emptyConfig.yDataSeries).to.deep.equal([]);
            });

            it("should handle mismatched array lengths", () => {
                const mismatchedParams = {
                    ...chartParams,
                    xDataArray: [-5, -4, -3],
                    yDataSeries: [[0.1, 0.2, 0.5] as [number, ...number[]]],
                };

                const mismatchedConfig = new TwoDimensionalHighChartConfigMixin(mismatchedParams);
                const { series } = mismatchedConfig;
                expect(series).to.have.length(1);
                expect(series[0].data).to.have.length(3);
            });

            it("should handle single data point", () => {
                const singlePointParams = {
                    ...chartParams,
                    xDataArray: [0],
                    yDataSeries: [[1.0] as [number, ...number[]]],
                };

                const singlePointConfig = new TwoDimensionalHighChartConfigMixin(singlePointParams);
                const { series } = singlePointConfig;
                expect(series).to.have.length(1);
                expect(series[0].data).to.have.length(1);
                expect(series[0].data[0]).to.deep.equal([0, 1.0]);
            });

            it("should handle very long data arrays", () => {
                const longDataParams = {
                    ...chartParams,
                    xDataArray: Array.from({ length: 100 }, (_, i) => i * 0.01),
                    yDataSeries: [
                        Array.from({ length: 100 }, (_, i) => Math.sin(i * 0.1)) as [
                            number,
                            ...number[],
                        ],
                    ],
                };

                const longDataConfig = new TwoDimensionalHighChartConfigMixin(longDataParams);
                const { series } = longDataConfig;
                expect(series).to.have.length(1);
                expect(series[0].data).to.have.length(100);
            });
        });

        describe("complex scenarios", () => {
            it("should handle multiple data series with different lengths", () => {
                const multiSeriesParams = {
                    ...chartParams,
                    xDataArray: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                    yDataSeries: [
                        [0.1, 0.2, 0.5, 1.0, 2.0, 3.0, 2.0, 1.0, 0.5, 0.2, 0.1] as [
                            number,
                            ...number[],
                        ],
                        [0.05, 0.15, 0.4, 0.8, 1.5, 2.5, 1.5, 0.8, 0.4, 0.15, 0.05] as [
                            number,
                            ...number[],
                        ],
                        [0.2, 0.3, 0.6, 1.1, 2.1, 3.1, 2.1, 1.1, 0.6, 0.3, 0.2] as [
                            number,
                            ...number[],
                        ],
                    ],
                };

                const multiSeriesConfig = new TwoDimensionalHighChartConfigMixin(multiSeriesParams);
                const { series } = multiSeriesConfig;
                expect(series).to.have.length(3);
                expect(series[0].data).to.have.length(11);
                expect(series[1].data).to.have.length(11);
                expect(series[2].data).to.have.length(11);
            });

            it("should handle negative values", () => {
                const negativeParams = {
                    ...chartParams,
                    xDataArray: [-1, -0.5, 0, 0.5, 1],
                    yDataSeries: [[-10, -5, 0, 5, 10] as [number, ...number[]]],
                };

                const negativeConfig = new TwoDimensionalHighChartConfigMixin(negativeParams);
                const { series } = negativeConfig;
                expect(series[0].data[0]).to.deep.equal([-1, -10]);
                expect(series[0].data[2]).to.deep.equal([0, 0]);
                expect(series[0].data[4]).to.deep.equal([1, 10]);
            });

            it("should handle decimal precision", () => {
                const decimalParams = {
                    ...chartParams,
                    xDataArray: [0.123456789, 0.987654321],
                    yDataSeries: [[1.23456789, 9.87654321] as [number, ...number[]]],
                };

                const decimalConfig = new TwoDimensionalHighChartConfigMixin(decimalParams);
                const { series } = decimalConfig;
                expect(series[0].data[0]).to.deep.equal([0.123456789, 1.23456789]);
                expect(series[0].data[1]).to.deep.equal([0.987654321, 9.87654321]);
            });
        });
    });
});
