import Property from "../../Property";
interface DataPoint {
    index: number;
    value: number;
}
export declare class ConvergenceElectronicProperty extends Property {
    get data(): number[][];
    get units(): "eV" | "hartree" | "Ry" | undefined;
    get chartConfig(): import("highcharts").Options;
    /**
     * Data is transferred in a flat way from Rupy but it is stored in a nested array format on webapp.
     * This function is a converter (see example).
     *
     * @example
     * _convertData(
     *   [{index: 0, value: 0},
     *    {index: 0, value: 1},
     *    {index: 1, value: 2}]
     * );
     * // returns [[0,1], [2]]
     */
    _convertData(currentData?: number[][], newData?: DataPoint[]): number[][];
}
export {};
