/* eslint-disable class-methods-use-this */
import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options } from "highcharts";

import { PropertyName } from "../../settings";
import {
    type TwoDimensionalPlotMixin,
    type XDataArrayNested,
    twoDimensionalPlotMixin,
} from "../include/mixins/2d_plot";
import { type SpinDependentMixin, spinDependentMixin } from "../include/mixins/spin_dependent";
import { BandStructureConfig } from "./BandStructureProperty";
import NonScalarProperty from "./base/NonScalarProperty";

class PhononDispersionsConfig extends BandStructureConfig {
    tooltipFormatter(xDataArray: XDataArrayNested, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}

type Base = typeof NonScalarProperty<Schema> &
    Constructor<TwoDimensionalPlotMixin<Schema>> &
    Constructor<SpinDependentMixin>;

type Schema = PhononBandStructurePropertySchema;

class PhononDispersionsProperty extends (NonScalarProperty as Base) implements Schema {
    static readonly propertyName = PropertyName.phonon_dispersions;

    readonly subtitle = "Phonon Dispersions";

    readonly yAxisTitle = `Frequency (${this.yAxis.units})`;

    // unset property
    readonly fermiEnergy: number | null = null;

    // TODO: Add as config parameter
    readonly pointsPath: KPointPath | undefined = undefined;

    readonly chartConfig: Options;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: PhononDispersionsProperty.propertyName });
        this.chartConfig = new PhononDispersionsConfig(this).config;
    }
}

twoDimensionalPlotMixin(PhononDispersionsProperty.prototype);
spinDependentMixin(PhononDispersionsProperty.prototype);

export default PhononDispersionsProperty;
