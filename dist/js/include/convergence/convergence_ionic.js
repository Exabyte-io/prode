"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvergenceIonicProperty = void 0;
const highcharts_1 = require("../../charts/highcharts");
const Property_1 = __importDefault(require("../../Property"));
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
    constructor(config, ConfigBuilder = ConvergenceIonicConfig) {
        super(config);
        this.chartConfig = new ConfigBuilder(this).config;
    }
    get data() {
        return this.requiredProp("data");
    }
    get units() {
        return this.requiredProp("units");
    }
}
exports.ConvergenceIonicProperty = ConvergenceIonicProperty;
