/* eslint-disable class-methods-use-this */
// eslint-disable-next-line max-classes-per-file
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { type FormatterScope } from "../../charts/highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, twoDimensionalPlotMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
import { DensityOfStatesConfig } from "./DensityOfStatesProperty";

type Schema = PhononDensityOfStatesPropertySchema;

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

type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;

export default class PhononDOSProperty extends (NonScalarProperty as Base) implements Schema {
    readonly chartConfig: Options;

    readonly subtitle: string = "Phonon Density Of States";

    readonly yAxisTitle: string = `Density Of States (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Frequency (${this.xAxis.units})`;

    readonly fermiEnergy = null;

    static readonly propertyName = PropertyName.phonon_dos;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: PhononDOSProperty.propertyName });
        this.chartConfig = new PhononDOSConfig(this).config;
    }
}

twoDimensionalPlotMixin(PhononDOSProperty.prototype);
