/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import zip from "lodash/zip";
import type { FormatterScope } from "src/js/charts/highcharts";

import Property from "../../Property";
import { TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";

export class DielectricTensorConfig extends TwoDimensionalHighChartConfigMixin {
    get series() {
        return this.yDataSeries.map((item, index) => {
            return {
                animation: false,
                name: Array.isArray(this.legend) ? this.legend[index] : "",
                data: zip(this.xDataArray, item) as [number, number][],
            };
        });
    }

    tooltipFormatter() {
        // eslint-disable-next-line func-names
        return function (this: FormatterScope) {
            return (
                "<b>part:</b> " +
                this.series.name +
                "<br>" +
                "<b>frequency:</b> " +
                this.key.toFixed(4) +
                "<br>" +
                "<b>epsilon: </b>  " +
                this.y.toFixed(4)
            );
        };
    }

    get overrideConfig() {
        return {
            ...super.overrideConfig,
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
}

export default class DielectricTensorProperty extends Property {
    declare toJSON: () => DielectricTensorPropertySchema & AnyObject;

    declare name: DielectricTensorPropertySchema["name"];

    get values() {
        return this.requiredProp<DielectricTensorPropertySchema["values"]>("values");
    }

    readonly subtitle = "Dielectric Tensor";

    readonly yAxisTitle = "Dielectric Tensor Component";

    readonly xAxisTitle = "Frequency (eV)";

    readonly chartConfig: Options[] = this.getAllChartConfigs().map((chartConfig) => {
        const cfg = new DielectricTensorConfig(chartConfig);
        return cfg.config;
    });

    private rowMajorToColumnMajor(matrix: number[][]) {
        return matrix.reduce<[number[], number[], number[]]>(
            (accumulator, item) => {
                const [x, y, z] = item;
                accumulator[0].push(x);
                accumulator[1].push(y);
                accumulator[2].push(z);
                return accumulator;
            },
            [[], [], []],
        );
    }

    private getComplementaryPairs(precision = 3) {
        const groupedBySpin: Record<string, DielectricTensorPropertySchema["values"]> = {};

        this.values.forEach((item) => {
            // Round the spin value to mitigate floating-point precision issues
            const spinValue = item.spin !== undefined ? item.spin.toFixed(precision) : "undefined";
            groupedBySpin[spinValue] = groupedBySpin[spinValue] || [];
            groupedBySpin[spinValue].push(item);
        });

        return Object.values(groupedBySpin).filter(
            (group) =>
                group.length === 2 &&
                group.find((item) => item.part === "real") &&
                group.find((item) => item.part === "imaginary"),
        );
    }

    private getAllChartConfigs() {
        const complementaryPairs = this.getComplementaryPairs();

        return complementaryPairs.map((pair) => {
            const xDataArray = pair[0].frequencies;
            const spinChannel = pair[0].spin ? ` - spin(${pair[0].spin})` : "";
            return {
                subtitle: `${this.subtitle}${spinChannel}`,
                xAxisTitle: this.xAxisTitle,
                yAxisTitle: this.yAxisTitle,
                yAxisType: "linear",
                xDataArray,
                yDataSeries: pair.flatMap((p) => this.rowMajorToColumnMajor(p.components)) as [
                    number,
                    ...number[],
                ][],
                legend: pair.flatMap((p) => [..."xyz"].map((char) => `eps_${char} (${p.part})`)),
            };
        });
    }
}
