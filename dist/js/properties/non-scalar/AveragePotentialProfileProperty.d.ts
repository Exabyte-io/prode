import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { type AveragePotentialProfilePropertySchemaMixin } from "../../generated/AveragePotentialProfilePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
export declare class AveragePotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
    get series(): {
        animation: boolean;
        name: string;
        data: [number, number][];
    }[];
    get overrideConfig(): {
        legend: {
            layout: string;
            align: string;
            verticalAlign: string;
            borderWidth: number;
        };
    };
}
type Schema = AveragePotentialProfilePropertySchema;
type Base = typeof Property<Schema> & Constructor<AveragePotentialProfilePropertySchemaMixin>;
declare const AveragePotentialProfileProperty_base: Base;
export default class AveragePotentialProfileProperty extends AveragePotentialProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.average_potential_profile;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
