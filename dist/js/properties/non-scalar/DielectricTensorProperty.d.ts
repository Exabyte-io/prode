import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import type { FormatterScope } from "src/js/charts/highcharts";
import { type DielectricTensorPropertySchemaMixin } from "../../generated/DielectricTensorPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
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
type Base = typeof Property<Schema> & Constructor<DielectricTensorPropertySchemaMixin>;
declare const DielectricTensorProperty_base: Base;
export default class DielectricTensorProperty extends DielectricTensorProperty_base implements Schema {
    readonly subtitle = "Dielectric Tensor";
    readonly yAxisTitle = "Dielectric Tensor Component";
    readonly xAxisTitle = "Frequency (eV)";
    readonly chartConfig: Options[];
    static readonly propertyName = PropertyName.dielectric_tensor;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
    private rowMajorToColumnMajor;
    private getComplementaryPairs;
    private getAllChartConfigs;
}
export {};
