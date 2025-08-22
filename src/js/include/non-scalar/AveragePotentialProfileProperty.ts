/* eslint-disable max-classes-per-file */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import lodash from "lodash";

import Property from "../../Property";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

const NAMES = ["planar average", "macroscopic average"];

export class AveragePotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "z coordinate";

    readonly tooltipYAxisName: string = "energy";

    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index],
                data: lodash.zip(this.xDataArray, item) as [number, number][],
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

type BaseProperty = typeof Property &
    Constructor<TwoDimensionalPlotMixin<AveragePotentialProfilePropertySchema>>;

export default class AveragePotentialProfileProperty extends (Property as BaseProperty) {
    readonly subtitle: string = "Average Potential Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Coordinate (${this.xAxis.units})`;

    readonly chartConfig: Options = new AveragePotentialProfileConfig(this).config;

    declare readonly name: AveragePotentialProfilePropertySchema["name"];

    constructor(config: object) {
        super({ ...config, name: "average_potential_profile" });
    }
}

twoDimensionalPlotMixin(AveragePotentialProfileProperty.prototype);
