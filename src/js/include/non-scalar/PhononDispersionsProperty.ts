/* eslint-disable class-methods-use-this */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options } from "highcharts";

import Property from "../../Property";
import {
    type TwoDimensionalPlotMixin,
    type XDataArrayNested,
    twoDimensionalPlotMixin,
} from "../mixins/2d_plot";
import { type SpinDependentMixin, spinDependentMixin } from "../mixins/spin_dependent";
import { BandStructureConfig } from "./BandStructureProperty";

class PhononDispersionsConfig extends BandStructureConfig {
    tooltipFormatter(xDataArray: XDataArrayNested, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}

type Base = typeof Property &
    Constructor<TwoDimensionalPlotMixin<PhononBandStructurePropertySchema>> &
    Constructor<SpinDependentMixin>;

export default class PhononDispersionsProperty extends (Property as Base) {
    constructor(config: object) {
        super({ ...config, name: "phonon_dispersions" });
        this.chartConfig = new PhononDispersionsConfig(this).config;
    }

    readonly subtitle = "Phonon Dispersions";

    readonly yAxisTitle = `Frequency (${this.yAxis.units})`;

    // unset property
    readonly fermiEnergy: number | null = null;

    // TODO: Add as config parameter
    readonly pointsPath: KPointPath | undefined = undefined;

    readonly chartConfig: Options;

    declare readonly name: PhononBandStructurePropertySchema["name"];
}

twoDimensionalPlotMixin(PhononDispersionsProperty.prototype);
spinDependentMixin(PhononDispersionsProperty.prototype);
