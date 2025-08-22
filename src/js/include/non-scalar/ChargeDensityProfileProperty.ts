/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import Property from "../../Property";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

export class ChargeDensityProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName = "z coordinate";

    readonly tooltipYAxisName = "charge density";
}

type BaseProperty = typeof Property &
    Constructor<TwoDimensionalPlotMixin<ChargeDensityProfilePropertySchema>>;

export default class ChargeDensityProfileProperty extends (Property as BaseProperty) {
    readonly subtitle: string = "Charge Density Profile";

    readonly yAxisTitle: string = `Charge Density (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Z Coordinate";

    readonly chartConfig: Options = new ChargeDensityProfileConfig(this).config;

    declare readonly name: ChargeDensityProfilePropertySchema["name"];

    constructor(config: object) {
        super({ ...config, name: "charge_density_profile" });
    }
}

twoDimensionalPlotMixin(ChargeDensityProfileProperty.prototype);
