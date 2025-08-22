import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin } from "../mixins/2d_plot";
type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<PhononDensityOfStatesPropertySchema>>;
declare const PhononDOSProperty_base: Base;
export default class PhononDOSProperty extends PhononDOSProperty_base {
    constructor(config: object);
    readonly chartConfig: Options;
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly fermiEnergy: null;
    readonly name: PhononDensityOfStatesPropertySchema["name"];
}
export {};
