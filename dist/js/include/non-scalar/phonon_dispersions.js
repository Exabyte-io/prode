"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhononDispersionsProperty = void 0;
const band_structure_1 = require("./band_structure");
class PhononDispersionsConfig extends band_structure_1.BandStructureConfig {
    tooltipFormatter(xDataArray, yAxisName = "frequency") {
        return super.tooltipFormatter(xDataArray, yAxisName);
    }
}
class PhononDispersionsProperty extends band_structure_1.BandStructureProperty {
    constructor(config) {
        super(config, PhononDispersionsConfig);
        this.subtitle = "Phonon Dispersions";
        this.yAxisTitle = `Frequency (${this.yAxis.units})`;
        // unset property
        this.fermiEnergy = null;
    }
}
exports.PhononDispersionsProperty = PhononDispersionsProperty;
