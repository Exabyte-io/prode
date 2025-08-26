import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options } from "highcharts";
import { PropertyName } from "../../settings";
import { type TwoDimensionalPlotMixin } from "../include/mixins/2d_plot";
import { type SpinDependentMixin } from "../include/mixins/spin_dependent";
import NonScalarProperty from "./base/NonScalarProperty";
type Base = typeof NonScalarProperty<Schema> & Constructor<TwoDimensionalPlotMixin<Schema>> & Constructor<SpinDependentMixin>;
type Schema = PhononBandStructurePropertySchema;
declare const PhononDispersionsProperty_base: Base;
declare class PhononDispersionsProperty extends PhononDispersionsProperty_base implements Schema {
    static readonly propertyName = PropertyName.phonon_dispersions;
    readonly subtitle = "Phonon Dispersions";
    readonly yAxisTitle: string;
    readonly fermiEnergy: number | null;
    readonly pointsPath: KPointPath | undefined;
    readonly chartConfig: Options;
    constructor(config: Omit<Schema, "name">);
}
export default PhononDispersionsProperty;
