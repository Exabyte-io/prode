import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import type { FormatterScope } from "src/js/charts/highcharts";
import Property from "../../Property";
import { TwoDimensionalHighChartConfigMixin } from "../mixins/2d_plot";
export declare class DielectricTensorConfig extends TwoDimensionalHighChartConfigMixin {
    get series(): {
        animation: boolean;
        name: string | object;
        data: [number, number][];
    }[];
    tooltipFormatter(): (this: FormatterScope) => string;
    get overrideConfig(): {
        colors: string[];
        credits: {
            enabled: boolean;
        };
        chart: {
            type: string;
            zoomType: string;
            animation: boolean;
        };
        legend: {
            layout: string;
            align: string;
            verticalAlign: string;
            borderWidth: number;
        };
    };
}
export declare class DielectricTensorProperty extends Property {
    toJSON: () => DielectricTensorPropertySchema & AnyObject;
    get values(): {
        part: "real" | "imaginary";
        spin?: number;
        frequencies: number[];
        components: [number, number, number][];
    }[];
    readonly subtitle = "Dielectric Tensor";
    readonly yAxisTitle = "Dielectric Tensor Component";
    readonly xAxisTitle = "Frequency (eV)";
    readonly chartConfig: Options[];
    private rowMajorToColumnMajor;
    private getComplementaryPairs;
    private getAllChartConfigs;
}
