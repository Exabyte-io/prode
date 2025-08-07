import type { Options } from "highcharts";
import { type FormatterScope, HighChartsConfig } from "../../charts/highcharts";
import Property from "../../Property";
declare class ConvergenceIonicConfig extends HighChartsConfig {
    constructor(monitor: ConvergenceIonicProperty);
    tooltipFormatter(): (this: FormatterScope) => string;
}
export declare class ConvergenceIonicProperty extends Property {
    readonly chartConfig: Options;
    constructor(config: object, ConfigBuilder?: typeof ConvergenceIonicConfig);
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
