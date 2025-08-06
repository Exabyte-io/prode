/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types.js";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { DensityOfStatesSchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import _ from "underscore";

import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import { Property } from "../../property";
import {
    type TwoDimensionalPlotMixin,
    type YDataSeries,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";

export class DensityOfStatesConfig extends HighChartsConfig {
    readonly yDataSeries: YDataSeries;

    readonly fermiEnergy: number | null;

    readonly xDataArray: DensityOfStatesSchema["xDataArray"];

    readonly legends: DensityOfStatesSchema["legend"];

    get overrideConfig() {
        return {
            colors: [
                "#7cb5ec",
                "#90ed7d",
                "#f7a35c",
                "#8085e9",
                "#f15c80",
                "#e4d354",
                "#2b908f",
                "#f45b5b",
                "#91e8e1",
            ],
            credits: {
                enabled: false,
            },
            chart: {
                type: "spline",
                zoomType: "xy",
                animation: false,
            },
            legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                borderWidth: 0,
            },
        };
    }

    constructor(property: DensityOfStatesProperty) {
        super({
            subtitle: property.subtitle,
            yAxisTitle: property.yAxisTitle,
            xAxisTitle: property.xAxisTitle,
            yAxisType: "linear",
        });

        this.yDataSeries = property.yDataSeries;
        this.legends = property.legend;
        this.fermiEnergy = property.fermiEnergy;
        this.xDataArray = this.cleanXDataArray(property.xDataArray);
    }

    // shifting values wrt fermi energy here
    cleanXDataArray(rawData: DensityOfStatesSchema["xDataArray"]) {
        return _.map(_.flatten(rawData), (x) => {
            const value = this.fermiEnergy ? x - this.fermiEnergy : x;
            return +value.toPrecision(4);
        });
    }

    get series() {
        const series_ = this.yDataSeries.map((item, index) => {
            const legend = this.legends[index];
            const { spin } = legend;
            const spinText = spin ? ` ${spin > 0 ? "↑" : "↓"}` : "";
            const name =
                legend && legend.element
                    ? `${legend.element} ${legend.electronicState}${spinText}`
                    : "Total";

            return {
                data: _.zip(
                    this.xDataArray,
                    item.map((x) => Number(x).toPrecision(4) as unknown as number),
                ) as [number, number][],
                name,
                color: name === "Total" ? "#000000" : undefined,
                animation: false,
            };
        });

        return series_;
    }

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

    xAxis() {
        return {
            ...super.xAxis(),
            plotLines: this.fermiEnergy
                ? this.plotSingleLine({
                      value: 0.0,
                      label: {
                          text: "E_F",
                          style: {
                              color: "red",
                          },
                          y: 15,
                          x: 5,
                          rotation: 0,
                      },
                  })
                : [],
        };
    }
}

type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<DensityOfStatesSchema>>;

export class DensityOfStatesProperty extends (Property as Base) {
    constructor(
        config: object,
        ConfigBuilder: typeof DensityOfStatesConfig = DensityOfStatesConfig,
    ) {
        super(config);
        this.chartConfig = new ConfigBuilder(this).config;
    }

    declare toJSON: () => DensityOfStatesSchema & AnyObject;

    readonly subtitle: string = "Density Of States";

    readonly yAxisTitle: string = `Density Of States (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Energy (${this.xAxis.units})`;

    readonly fermiEnergy: number | null = 0;

    readonly chartConfig: Options;

    get legend() {
        return this.requiredProp<DensityOfStatesSchema["legend"]>("legend");
    }
}

twoDimensionalPlotMixin(DensityOfStatesProperty.prototype);
