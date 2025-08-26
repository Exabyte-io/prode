import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
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
type BaseProperty = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;
declare const AveragePotentialProfileProperty_base: BaseProperty;
export default class AveragePotentialProfileProperty extends AveragePotentialProfileProperty_base {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    readonly name: Schema["name"];
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.average_potential_profile;
    constructor(config: Omit<Schema, "name">);
}
export {};
