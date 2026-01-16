"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WavefunctionAmplitudeConfig = void 0;
const zip_1 = __importDefault(require("lodash/zip"));
const WavefunctionAmplitudePropertySchemaMixin_1 = require("../../generated/WavefunctionAmplitudePropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const _2d_plot_1 = require("../include/mixins/2d_plot");
class WavefunctionAmplitudeConfig extends _2d_plot_1.TwoDimensionalHighChartConfigMixin {
    constructor() {
        super(...arguments);
        this.tooltipXAxisName = "z coordinate";
        this.tooltipYAxisName = "amplitude";
    }
    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: `wavefunction ${index + 1}`,
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
exports.WavefunctionAmplitudeConfig = WavefunctionAmplitudeConfig;
class WavefunctionAmplitudeProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: WavefunctionAmplitudeProperty.propertyName });
        this.subtitle = "Wavefunction Amplitude";
        this.yAxisTitle = "Amplitude";
        this.xAxisTitle = "Z Coordinate";
        this.chartConfig = new WavefunctionAmplitudeConfig(this).config;
    }
}
WavefunctionAmplitudeProperty.isRefined = true;
WavefunctionAmplitudeProperty.propertyName = settings_1.PropertyName.wavefunction_amplitude;
WavefunctionAmplitudeProperty.propertyType = settings_1.PropertyType.non_scalar;
(0, WavefunctionAmplitudePropertySchemaMixin_1.wavefunctionAmplitudePropertySchemaMixin)(WavefunctionAmplitudeProperty.prototype);
exports.default = WavefunctionAmplitudeProperty;
