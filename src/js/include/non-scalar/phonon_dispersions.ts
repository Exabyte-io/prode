/* eslint-disable class-methods-use-this */
import type { XDataArrayNested } from "src/js/include/mixins/2d_plot";

import { BandStructureConfig, BandStructureProperty } from "./band_structure";

class PhononDispersionsConfig extends BandStructureConfig {
    tooltipFormatter(xDataArray: XDataArrayNested, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}

export class PhononDispersionsProperty extends BandStructureProperty {
    constructor(config: object) {
        super(config, PhononDispersionsConfig);
    }

    readonly subtitle = "Phonon Dispersions";

    readonly yAxisTitle = `Frequency (${this.yAxis.units})`;

    // unset property
    readonly fermiEnergy = null;
}
