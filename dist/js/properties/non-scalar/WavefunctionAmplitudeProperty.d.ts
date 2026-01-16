import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { WavefunctionAmplitudePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { WavefunctionAmplitudePropertySchemaMixin } from "../../generated/WavefunctionAmplitudePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
type Schema = WavefunctionAmplitudePropertySchema;
export declare class WavefunctionAmplitudeConfig extends TwoDimensionalHighChartConfigMixin {
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
type Base = typeof Property<Schema> & Constructor<WavefunctionAmplitudePropertySchemaMixin>;
declare const WavefunctionAmplitudeProperty_base: Base;
declare class WavefunctionAmplitudeProperty extends WavefunctionAmplitudeProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.wavefunction_amplitude;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export default WavefunctionAmplitudeProperty;
