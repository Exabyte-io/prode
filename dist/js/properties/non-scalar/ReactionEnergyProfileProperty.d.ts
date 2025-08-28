import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin, TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = ReactionEnergyProfilePropertySchema;
export declare class ReactionEnergyProfileConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string;
    readonly tooltipYAxisName: string;
}
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>>;
declare const ReactionEnergyProfileProperty_base: Base;
declare class ReactionEnergyProfileProperty extends ReactionEnergyProfileProperty_base implements Schema {
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly chartConfig: Options;
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.reaction_energy_profile;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export default ReactionEnergyProfileProperty;
