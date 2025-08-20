/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
import type { DensityOfStatesSchema } from "@mat3ra/esse/dist/js/types";

import type { FormatterScope } from "../../charts/highcharts";
import { twoDimensionalPlotMixin } from "../mixins/2d_plot";
import { DensityOfStatesConfig, DensityOfStatesProperty } from "./density_of_states";

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

export class PhononDOSProperty extends DensityOfStatesProperty {
    constructor(config: object) {
        super(config, PhononDOSConfig);
    }

    readonly subtitle: string = "Phonon Density Of States";

    readonly yAxisTitle: string = `Density Of States (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Frequency (${this.xAxis.units})`;

    readonly fermiEnergy: null = null;

    declare name: DensityOfStatesSchema["name"];
}

twoDimensionalPlotMixin(PhononDOSProperty.prototype);
