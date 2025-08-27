import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = PotentialProfilePropertySchema;
export declare class PotentialProfileConfig extends TwoDimensionalHighChartConfigMixin {
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
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;
declare const PotentialProfileProperty_base: Base;
declare class PotentialProfileProperty extends PotentialProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.potential_profile;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export default PotentialProfileProperty;
