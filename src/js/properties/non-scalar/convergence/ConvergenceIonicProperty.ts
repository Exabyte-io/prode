/* eslint-disable max-classes-per-file */
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { type FormatterScope, HighChartsConfig } from "../../../charts/highcharts";
import { PropertyName } from "../../../settings";
import ConvergenceProperty from "./ConvergenceProperty";

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

class ConvergenceIonicProperty extends ConvergenceProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.convergence_ionic;

    readonly chartConfig: Options;

    get tolerance() {
        return this.prop<Schema["tolerance"]>("tolerance");
    }

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ConvergenceIonicProperty.propertyName });
        this.chartConfig = new ConvergenceIonicConfig(this).config;
    }
}

export default ConvergenceIonicProperty;
