import { DensityOfStatesProperty } from "./density_of_states";
export declare class PhononDOSProperty extends DensityOfStatesProperty {
    constructor(config: object);
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly fermiEnergy: null;
}
