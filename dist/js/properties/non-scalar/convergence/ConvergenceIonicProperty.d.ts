import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../../settings";
import ConvergenceProperty from "./ConvergenceProperty";
type Schema = ConvergenceIonicPropertySchema;
declare class ConvergenceIonicProperty extends ConvergenceProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.convergence_ionic;
    readonly chartConfig: Options;
    get tolerance(): {
        [k: string]: unknown;
    } | undefined;
    constructor(config: Omit<Schema, "name">);
}
export default ConvergenceIonicProperty;
