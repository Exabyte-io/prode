/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononDensityOfStatesSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import type { FormatterScope } from "../../charts/highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin, twoDimensionalPlotMixin } from "../mixins/2d_plot";
import { DensityOfStatesConfig } from "./DensityOfStatesProperty";

class PhononDOSConfig extends DensityOfStatesConfig {
    tooltipFormatter() {
        // eslint-disable-next-line func-names
        return function (this: FormatterScope) {
            return (
                "<b>state:</b> " +
                this.series.name +
                "<br>" +
                "<b>energy:</b> " +
                this.key.toFixed(4) +
                "<br>" +
                "<b>value: </b>  " +
                this.y.toFixed(4)
            );
        };
    }
}

type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<PhononDensityOfStatesSchema>>;

export default class PhononDOSProperty extends (Property as Base) {
    constructor(config: object) {
        super(config);
        this.chartConfig = new PhononDOSConfig(this).config;
    }

    readonly chartConfig: Options;

    readonly subtitle: string = "Phonon Density Of States";

    readonly yAxisTitle: string = `Density Of States (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Frequency (${this.xAxis.units})`;

    readonly fermiEnergy = null;

    declare name: PhononDensityOfStatesSchema["name"];
}

twoDimensionalPlotMixin(PhononDOSProperty.prototype);
