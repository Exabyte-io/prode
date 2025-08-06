/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PotentialProfileSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import lodash from "lodash";

import { Property } from "../../property";
import {
    type TwoDimensionalPlotMixin,
    TwoDimensionalHighChartConfigMixin,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

const NAMES = {
    0: "averageVHartree",
    1: "averageVLocal",
    2: "averageVHartreePlusLocal",
};

export class PotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "z coordinate";

    readonly tooltipYAxisName: string = "energy";

    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: NAMES[index as keyof typeof NAMES],
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

type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<PotentialProfileSchema>>;

export class PotentialProfileProperty extends (Property as Base) {
    readonly subtitle: string = "Potential Profile";

    readonly yAxisTitle: string = `Energy (${this.yAxis.units})`;

    readonly xAxisTitle: string = "Z Coordinate";

    readonly chartConfig: Options = new PotentialProfileConfig(this).config;
}

twoDimensionalPlotMixin(PotentialProfileProperty.prototype);
