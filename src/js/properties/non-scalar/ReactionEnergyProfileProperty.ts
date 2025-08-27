/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import { PropertyName } from "../../settings";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = ReactionEnergyProfilePropertySchema;

export class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "reaction coordinate";

    readonly tooltipYAxisName: string = "energy";
}

type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;

class ReactionEnergyProfileProperty extends (NonScalarProperty as Base) implements Schema {
    readonly subtitle: string = "Reaction Energy Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Reaction Coordinate";

    readonly chartConfig: Options = new ReactionEnergyProfileConfig(this).config;

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.reaction_energy_profile;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ReactionEnergyProfileProperty.propertyName });
    }
}

twoDimensionalPlotMixin(ReactionEnergyProfileProperty.prototype);

export default ReactionEnergyProfileProperty;
