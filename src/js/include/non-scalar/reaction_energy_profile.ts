/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyProfileSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import Property from "../../Property";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

export class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "reaction coordinate";

    readonly tooltipYAxisName: string = "energy";
}

type BaseProperty = typeof Property &
    Constructor<TwoDimensionalPlotMixin<ReactionEnergyProfileSchema>>;

export class ReactionEnergyProfileProperty extends (Property as BaseProperty) {
    readonly subtitle: string = "Reaction Energy Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Reaction Coordinate";

    readonly chartConfig: Options = new ReactionEnergyProfileConfig(this).config;

    declare name: ReactionEnergyProfileSchema["name"];
}

twoDimensionalPlotMixin(ReactionEnergyProfileProperty.prototype);
