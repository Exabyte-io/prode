import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AxisLabelFormatterOptions, IndividualSeriesOptions } from "highcharts";
import _ from "underscore";

import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import { Property } from "../../property";

interface DataPoint {
    index: number;
    value: number;
}

class ConvergenceElectronicConfig extends HighChartsConfig {
    constructor(monitor: ConvergenceElectronicProperty) {
        let iteration = 1;

        // Old monitors are stored in a flat list, hence data = [data]
        // const dataArray = Array.isArray(monitorData[0]) ? monitorData : [monitorData];

        const series: IndividualSeriesOptions[] = monitor.data.map((values, index) => {
            const name = parseInt(index.toString(), 10) + 1;
            return {
                name: `step-${name}`,
                data: values.map((value) => {
                    // give points unique xAxis value to show multiple series properly in highCharts
                    const point: [number, number] = [iteration, Math.abs(value)];
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
        return function (this: FormatterScope) {
            return "<b>iteration:</b> " + this.key + "<br><b>Δ E:</b> " + this.y.toExponential(1);
        };
    }

    yAxis() {
        return {
            ...super.yAxis(),
            labels: {
                formatter(this: AxisLabelFormatterOptions) {
                    return this.value.toExponential();
                },
            },
        };
    }
}

export class ConvergenceElectronicProperty extends Property {
    get data() {
        return this.requiredProp<ConvergenceElectronicPropertySchema["data"]>("data");
    }

    get units() {
        return this.requiredProp<ConvergenceElectronicPropertySchema["units"]>("units");
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
    _convertData(currentData: number[][] = [], newData: DataPoint[] = []): number[][] {
        const data: DataPoint[] = currentData
            .map((values, index) => values.map((value) => ({ index, value })))
            .flat();

        const groupedData = Object.values(_.groupBy(data.concat(newData), (x) => x.index));

        return groupedData.map((energies) => energies.map((energy) => energy.value));
    }
}
