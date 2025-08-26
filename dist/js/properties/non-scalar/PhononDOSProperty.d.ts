import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = PhononDensityOfStatesPropertySchema;
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;
declare const PhononDOSProperty_base: Base;
export default class PhononDOSProperty extends PhononDOSProperty_base implements Schema {
    readonly chartConfig: Options;
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly fermiEnergy: null;
    static readonly propertyName = PropertyName.phonon_dos;
    constructor(config: Omit<Schema, "name">);
}
export {};
