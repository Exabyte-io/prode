/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import Property from "../../Property";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

type Schema = ReactionEnergyProfilePropertySchema;

export class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "reaction coordinate";

    readonly tooltipYAxisName: string = "energy";
}

type Base = typeof Property &
    Constructor<TwoDimensionalPlotMixin<ReactionEnergyProfilePropertySchema>>;

export default class ReactionEnergyProfileProperty extends (Property as Base) implements Schema {
    readonly subtitle: string = "Reaction Energy Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Reaction Coordinate";

    readonly chartConfig: Options = new ReactionEnergyProfileConfig(this).config;

    declare readonly name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "reaction_energy_profile" });
    }
}

twoDimensionalPlotMixin(ReactionEnergyProfileProperty.prototype);
