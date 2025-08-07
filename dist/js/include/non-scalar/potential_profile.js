"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PotentialProfileProperty = exports.PotentialProfileConfig = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Property_1 = __importDefault(require("../../Property"));
const _2d_plot_1 = require("../mixins/2d_plot");
const NAMES = {
    0: "averageVHartree",
    1: "averageVLocal",
    2: "averageVHartreePlusLocal",
};
class PotentialProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "energy";
    }
    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index],
                data: lodash_1.default.zip(this.xDataArray, item),
            };
        });
    }
    get overrideConfig() {
        return {
            ...super.overrideConfig,
            legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                borderWidth: 0,
            },
        };
    }
}
exports.PotentialProfileConfig = PotentialProfileConfig;
class PotentialProfileProperty extends Property_1.default {
    constructor() {
        super(...arguments);
        this.subtitle = "Potential Profile";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.xAxisTitle = "Z Coordinate";
        this.chartConfig = new PotentialProfileConfig(this).config;
    }
}
exports.PotentialProfileProperty = PotentialProfileProperty;
(0, _2d_plot_1.twoDimensionalPlotMixin)(PotentialProfileProperty.prototype);
