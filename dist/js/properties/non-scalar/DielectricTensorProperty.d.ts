import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import type { FormatterScope } from "src/js/charts/highcharts";
import { PropertyName } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = DielectricTensorPropertySchema;
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
export default class DielectricTensorProperty extends NonScalarProperty<Schema> implements Schema {
    toJSON: () => Schema & AnyObject;
    readonly subtitle = "Dielectric Tensor";
    readonly yAxisTitle = "Dielectric Tensor Component";
    readonly xAxisTitle = "Frequency (eV)";
    readonly chartConfig: Options[];
    static readonly propertyName = PropertyName.dielectric_tensor;
    constructor(config: Omit<Schema, "name">);
    get values(): {
        part: "real" | "imaginary";
        spin?: number;
        frequencies: number[];
        components: [number, number, number][];
    }[];
    private rowMajorToColumnMajor;
    private getComplementaryPairs;
    private getAllChartConfigs;
}
export {};
