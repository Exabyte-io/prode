"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const highcharts_1 = require("../../../charts/highcharts");
const ConvergenceIonicPropertySchemaMixin_1 = require("../../../generated/ConvergenceIonicPropertySchemaMixin");
const Property_1 = __importDefault(require("../../../Property"));
const settings_1 = require("../../../settings");
class ConvergenceIonicConfig extends highcharts_1.HighChartsConfig {
    constructor(monitor) {
        super({
            subtitle: "Ionic Energy",
            yAxisTitle: `Ionic Energy (${monitor.units})`,
            xAxisTitle: "Steps",
            yAxisType: "linear",
            series: [
                {
                    data: monitor.data.map((value, index) => {
                        return [Number(index) + 1, value.energy];
                    }),
                },
            ],
        });
    }
    // eslint-disable-next-line class-methods-use-this
    tooltipFormatter() {
        // eslint-disable-next-line func-names
        return function () {
            // eslint-disable-next-line no-useless-concat
            return "<b>step:</b> " + this.key + "<br>" + "<b>Energy:</b> " + this.y.toFixed(4);
        };
    }
}
class ConvergenceIonicProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: ConvergenceIonicProperty.propertyName });
        this.chartConfig = new ConvergenceIonicConfig(this).config;
    }
}
ConvergenceIonicProperty.propertyName = settings_1.PropertyName.convergence_ionic;
ConvergenceIonicProperty.propertyType = settings_1.PropertyType.non_scalar;
ConvergenceIonicProperty.isConvergence = true;
(0, ConvergenceIonicPropertySchemaMixin_1.convergenceIonicPropertySchemaMixin)(ConvergenceIonicProperty.prototype);
exports.default = ConvergenceIonicProperty;
