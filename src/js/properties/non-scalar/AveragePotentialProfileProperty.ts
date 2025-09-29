/* eslint-disable max-classes-per-file */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import zip from "lodash/zip";

import { PropertyName } from "../../settings";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";

const NAMES = ["planar average", "macroscopic average"];

export class AveragePotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "z coordinate";

    readonly tooltipYAxisName: string = "energy";

    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index],
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

type Schema = AveragePotentialProfilePropertySchema;

type BaseProperty = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;

export default class AveragePotentialProfileProperty extends (NonScalarProperty as BaseProperty) {
    readonly subtitle: string = "Average Potential Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Coordinate (${this.xAxis.units})`;

    readonly chartConfig: Options = new AveragePotentialProfileConfig(this).config;

    declare readonly name: Schema["name"];

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.average_potential_profile;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AveragePotentialProfileProperty.propertyName });
    }
}

twoDimensionalPlotMixin(AveragePotentialProfileProperty.prototype);
