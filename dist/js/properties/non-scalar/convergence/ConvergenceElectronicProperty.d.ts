import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PropertyName } from "../../../settings";
import ConvergenceProperty from "./ConvergenceProperty";
type Schema = ConvergenceElectronicPropertySchema;
declare class ConvergenceElectronicProperty extends ConvergenceProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.convergence_electronic;
    readonly chartConfig: Options;
    constructor(config: Omit<Schema, "name">);
}
export default ConvergenceElectronicProperty;
