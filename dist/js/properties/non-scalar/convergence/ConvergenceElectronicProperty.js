"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const highcharts_1 = require("../../../charts/highcharts");
const ConvergenceElectronicPropertySchemaMixin_1 = require("../../../generated/ConvergenceElectronicPropertySchemaMixin");
const Property_1 = __importDefault(require("../../../Property"));
const settings_1 = require("../../../settings");
class ConvergenceElectronicConfig extends highcharts_1.HighChartsConfig {
    constructor(monitor) {
        let iteration = 1;
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
    constructor(config) {
        super({ ...config, name: ConvergenceElectronicProperty.propertyName });
        this.chartConfig = new ConvergenceElectronicConfig(this).config;
    }
}
ConvergenceElectronicProperty.propertyName = settings_1.PropertyName.convergence_electronic;
ConvergenceElectronicProperty.propertyType = settings_1.PropertyType.non_scalar;
ConvergenceElectronicProperty.isConvergence = true;
(0, ConvergenceElectronicPropertySchemaMixin_1.convergenceElectronicPropertySchemaMixin)(ConvergenceElectronicProperty.prototype);
exports.default = ConvergenceElectronicProperty;
