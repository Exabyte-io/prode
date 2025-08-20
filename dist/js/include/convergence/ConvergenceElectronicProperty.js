"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const highcharts_1 = require("../../charts/highcharts");
const Property_1 = __importDefault(require("../../Property"));
class ConvergenceElectronicConfig extends highcharts_1.HighChartsConfig {
    constructor(monitor) {
        let iteration = 1;
        // Old monitors are stored in a flat list, hence data = [data]
        // const dataArray = Array.isArray(monitorData[0]) ? monitorData : [monitorData];
        const series = monitor.data.map((values, index) => {
            const name = parseInt(index.toString(), 10) + 1;
            return {
                name: `step-${name}`,
                data: values.map((value) => {
                    // give points unique xAxis value to show multiple series properly in highCharts
                    const point = [iteration, Math.abs(value)];
                    iteration += 1;
                    return point;
                }),
            };
        });
        super({
            subtitle: "Convergence Electronic",
            yAxisTitle: `Convergence Electronic (${monitor.units})`,
            xAxisTitle: "Iterations",
            yAxisType: "logarithmic",
            series,
            legend: series.length > 1,
        });
    }
    // eslint-disable-next-line class-methods-use-this
    tooltipFormatter() {
        // note 'this' below refers to Highcharts tooltip scope
        // eslint-disable-next-line func-names
        return function () {
            return "<b>iteration:</b> " + this.key + "<br><b>Δ E:</b> " + this.y.toExponential(1);
        };
    }
    yAxis() {
        return {
            ...super.yAxis(),
            labels: {
                formatter() {
                    return this.value.toExponential();
                },
            },
        };
    }
}
class ConvergenceElectronicProperty extends Property_1.default {
    get data() {
        return this.requiredProp("data");
    }
    get units() {
        return this.requiredProp("units");
    }
    get chartConfig() {
        // eslint-disable-next-line no-use-before-define
        return new ConvergenceElectronicConfig(this).config;
    }
}
exports.default = ConvergenceElectronicProperty;
