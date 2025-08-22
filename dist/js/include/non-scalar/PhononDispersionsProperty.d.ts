import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options } from "highcharts";
import Property from "../../Property";
import { type TwoDimensionalPlotMixin } from "../mixins/2d_plot";
import { type SpinDependentMixin } from "../mixins/spin_dependent";
type Base = typeof Property & Constructor<TwoDimensionalPlotMixin<PhononBandStructurePropertySchema>> & Constructor<SpinDependentMixin>;
declare const PhononDispersionsProperty_base: Base;
export default class PhononDispersionsProperty extends PhononDispersionsProperty_base {
    constructor(config: object);
    readonly subtitle = "Phonon Dispersions";
    readonly yAxisTitle: string;
    readonly fermiEnergy: number | null;
    readonly pointsPath: KPointPath | undefined;
    readonly chartConfig: Options;
    readonly name: PhononBandStructurePropertySchema["name"];
}
export {};
