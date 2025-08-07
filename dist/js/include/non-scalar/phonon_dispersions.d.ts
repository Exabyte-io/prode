import { BandStructureProperty } from "./band_structure";
export declare class PhononDispersionsProperty extends BandStructureProperty {
    constructor(config: object);
    readonly subtitle = "Phonon Dispersions";
    readonly yAxisTitle: string;
    readonly fermiEnergy: null;
}
