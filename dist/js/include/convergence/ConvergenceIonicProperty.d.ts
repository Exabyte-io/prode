import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import Property from "../../Property";
type Schema = ConvergenceIonicPropertySchema;
declare class ConvergenceIonicConfig extends HighChartsConfig {
    constructor(monitor: ConvergenceIonicProperty);
    tooltipFormatter(): (this: FormatterScope) => string;
}
export default class ConvergenceIonicProperty extends Property implements Schema {
    readonly chartConfig: Options;
    name: Schema["name"];
    constructor(config: object, ConfigBuilder?: typeof ConvergenceIonicConfig);
    get tolerance(): {
        [k: string]: unknown;
    } | undefined;
    get data(): {
        energy: number;
        structure?: {};
        electronic?: {
            units?: "eV" | "Ry" | "hartree";
            data?: number[];
        };
    }[];
    get units(): "eV" | undefined;
}
export {};
