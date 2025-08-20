import Property from "../../Property";
export default class ConvergenceElectronicProperty extends Property {
    get data(): number[][];
    get units(): "eV" | "hartree" | "Ry" | undefined;
    get chartConfig(): import("highcharts").Options;
}
