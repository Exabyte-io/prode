/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { PropertyName } from "../../settings";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";

export class ChargeDensityProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName = "z coordinate";

    readonly tooltipYAxisName = "charge density";
}

type Schema = ChargeDensityProfilePropertySchema;

type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;

class ChargeDensityProfileProperty extends (NonScalarProperty as Base) implements Schema {
    readonly subtitle: string = "Charge Density Profile";

    readonly yAxisTitle: string = `Charge Density (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Z Coordinate";

    readonly chartConfig: Options = new ChargeDensityProfileConfig(this).config;

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.charge_density_profile;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ChargeDensityProfileProperty.propertyName });
    }
}

twoDimensionalPlotMixin(ChargeDensityProfileProperty.prototype);

export default ChargeDensityProfileProperty;
