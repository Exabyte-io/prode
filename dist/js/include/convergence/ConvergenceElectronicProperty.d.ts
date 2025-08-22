import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = ConvergenceElectronicPropertySchema;
export default class ConvergenceElectronicProperty extends Property implements Schema {
    name: Schema["name"];
    get data(): number[][];
    get units(): "eV" | "hartree" | "Ry" | undefined;
    get chartConfig(): import("highcharts").Options;
}
export {};
