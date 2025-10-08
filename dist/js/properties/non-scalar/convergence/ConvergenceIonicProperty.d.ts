import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { ConvergenceIonicPropertySchemaMixin } from "../../../generated/ConvergenceIonicPropertySchemaMixin";
import Property from "../../../Property";
import { PropertyName, PropertyType } from "../../../settings";
type Schema = ConvergenceIonicPropertySchema;
type Base = typeof Property<Schema> & Constructor<ConvergenceIonicPropertySchemaMixin>;
declare const ConvergenceIonicProperty_base: Base;
declare class ConvergenceIonicProperty extends ConvergenceIonicProperty_base implements Schema {
    static readonly propertyName = PropertyName.convergence_ionic;
    static readonly propertyType = PropertyType.non_scalar;
    static readonly isConvergence = true;
    readonly chartConfig: Options;
    constructor(config: Omit<Schema, "name">);
}
export default ConvergenceIonicProperty;
