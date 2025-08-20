import type { DensityOfStatesSchema } from "@mat3ra/esse/dist/js/types";
import { DensityOfStatesProperty } from "./density_of_states";
export declare class PhononDOSProperty extends DensityOfStatesProperty {
    constructor(config: object);
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    readonly fermiEnergy: null;
    name: DensityOfStatesSchema["name"];
}
