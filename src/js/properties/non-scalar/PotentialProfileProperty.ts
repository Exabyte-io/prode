/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import zip from "lodash/zip";

import { PropertyName } from "../../settings";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";

const NAMES = {
    0: "averageVHartree",
    1: "averageVLocal",
    2: "averageVHartreePlusLocal",
};

type Schema = PotentialProfilePropertySchema;

export class PotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "z coordinate";

    readonly tooltipYAxisName: string = "energy";

    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index as keyof typeof NAMES],
                data: zip(this.xDataArray, item) as [number, number][],
            };
        });
    }

    get overrideConfig() {
        return {
            ...super.overrideConfig,
            legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                borderWidth: 0,
            },
        };
    }
}

type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;

class PotentialProfileProperty extends (NonScalarProperty as Base) implements Schema {
    readonly subtitle: string = "Potential Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Z Coordinate";

    readonly chartConfig: Options = new PotentialProfileConfig(this).config;

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.potential_profile;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: PotentialProfileProperty.propertyName });
    }
}

twoDimensionalPlotMixin(PotentialProfileProperty.prototype);

export default PotentialProfileProperty;
