import Property from "../../Property";
export declare class ConvergenceElectronicProperty extends Property {
    get data(): number[][];
    get units(): "eV" | "hartree" | "Ry" | undefined;
    get chartConfig(): import("highcharts").Options;
}
