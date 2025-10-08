"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveragePotentialProfileConfig = void 0;
const zip_1 = __importDefault(require("lodash/zip"));
const AveragePotentialProfilePropertySchemaMixin_1 = require("../../generated/AveragePotentialProfilePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
const NAMES = ["planar average", "macroscopic average"];
class AveragePotentialProfileConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
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
                data: (0, zip_1.default)(this.xDataArray, item),
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
exports.AveragePotentialProfileConfig = AveragePotentialProfileConfig;
class AveragePotentialProfileProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: AveragePotentialProfileProperty.propertyName });
        this.subtitle = "Average Potential Profile";
        this.yAxisTitle = `Energy (${this.yAxis.units})`;
        this.xAxisTitle = `Coordinate (${this.xAxis.units})`;
        this.chartConfig = new AveragePotentialProfileConfig(this).config;
    }
}
AveragePotentialProfileProperty.isRefined = true;
AveragePotentialProfileProperty.propertyName = settings_1.PropertyName.average_potential_profile;
AveragePotentialProfileProperty.propertyType = settings_1.PropertyType.non_scalar;
exports.default = AveragePotentialProfileProperty;
(0, AveragePotentialProfilePropertySchemaMixin_1.averagePotentialProfilePropertySchemaMixin)(AveragePotentialProfileProperty.prototype);
