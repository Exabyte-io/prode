import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = TotalEnergyContributionsPropertySchema;
export default class TotalEnergyContributionsProperty extends Property implements Schema {
    readonly name: Schema["name"];
    constructor(config: object);
    get temperatureEntropy(): {
        name?: "temperature_entropy";
        value: number;
    } | undefined;
    get harrisFoulkes(): {
        name?: "harris_foulkes";
        value: number;
    } | undefined;
    get oneElectron(): {
        name?: "one_electron";
        value: number;
    } | undefined;
    get hartree(): {
        name?: "hartree";
        value: number;
    } | undefined;
    get exchange(): {
        name?: "exchange";
        value: number;
    } | undefined;
    get exchangeCorrelation(): {
        name?: "exchange_correlation";
        value: number;
    } | undefined;
    get ewald(): {
        name?: "ewald";
        value: number;
    } | undefined;
    get alphaZ(): {
        name?: "alphaZ";
        value: number;
    } | undefined;
    get atomicEnergy(): {
        name?: "atomic_energy";
        value: number;
    } | undefined;
    get eigenvalues(): {
        name?: "eigenvalues";
        value: number;
    } | undefined;
    get PAWDoubleCounting2(): {
        name?: "PAW_double-counting_correction_2";
        value: number;
    } | undefined;
    get PAWDoubleCounting3(): {
        name?: "PAW_double-counting_correction_3";
        value: number;
    } | undefined;
    get hartreeFock(): {
        name?: "hartree_fock";
        value: number;
    } | undefined;
    get units(): "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom" | undefined;
}
export {};
