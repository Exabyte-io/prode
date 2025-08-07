"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvergenceElectronicProperty = void 0;
const groupBy_1 = __importDefault(require("lodash/groupBy"));
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
    /**
     * Data is transferred in a flat way from Rupy but it is stored in a nested array format on webapp.
     * This function is a converter (see example).
     *
     * @example
     * _convertData(
     *   [{index: 0, value: 0},
     *    {index: 0, value: 1},
     *    {index: 1, value: 2}]
     * );
     * // returns [[0,1], [2]]
     */
    // eslint-disable-next-line class-methods-use-this
    _convertData(currentData = [], newData = []) {
        const data = currentData
            .map((values, index) => values.map((value) => ({ index, value })))
            .flat();
        const groupedData = Object.values(
            (0, groupBy_1.default)(data.concat(newData), (x) => x.index),
        );
        return groupedData.map((energies) => energies.map((energy) => energy.value));
    }
}
exports.ConvergenceElectronicProperty = ConvergenceElectronicProperty;
