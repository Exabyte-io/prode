/* eslint-disable max-classes-per-file */
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import Property from "../../Property";

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

export class ConvergenceIonicProperty extends Property {
    readonly chartConfig: Options;

    constructor(
        config: object,
        ConfigBuilder: typeof ConvergenceIonicConfig = ConvergenceIonicConfig,
    ) {
        super(config);
        this.chartConfig = new ConfigBuilder(this).config;
    }

    get data() {
        return this.requiredProp<ConvergenceIonicPropertySchema["data"]>("data");
    }

    get units() {
        return this.requiredProp<ConvergenceIonicPropertySchema["units"]>("units");
    }
}
