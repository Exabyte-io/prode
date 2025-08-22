/* eslint-disable max-classes-per-file */
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import Property from "../../Property";

type Schema = ConvergenceIonicPropertySchema;

class ConvergenceIonicConfig extends HighChartsConfig {
    constructor(monitor: ConvergenceIonicProperty) {
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
        return function (this: FormatterScope) {
            // eslint-disable-next-line no-useless-concat
            return "<b>step:</b> " + this.key + "<br>" + "<b>Energy:</b> " + this.y.toFixed(4);
        };
    }
}

export default class ConvergenceIonicProperty extends Property implements Schema {
    readonly chartConfig: Options;

    declare name: Schema["name"];

    constructor(
        config: object,
        ConfigBuilder: typeof ConvergenceIonicConfig = ConvergenceIonicConfig,
    ) {
        super({ ...config, name: "convergence_ionic" });
        this.chartConfig = new ConfigBuilder(this).config;
    }

    get tolerance() {
        return this.prop<Schema["tolerance"]>("tolerance");
    }

    get data() {
        return this.requiredProp<Schema["data"]>("data");
    }

    get units() {
        return this.requiredProp<Schema["units"]>("units");
    }
}
