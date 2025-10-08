import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { ConvergenceElectronicPropertySchemaMixin } from "../../../generated/ConvergenceElectronicPropertySchemaMixin";
import Property from "../../../Property";
import { PropertyName, PropertyType } from "../../../settings";
type Schema = ConvergenceElectronicPropertySchema;
type Base = typeof Property<Schema> & Constructor<ConvergenceElectronicPropertySchemaMixin>;
declare const ConvergenceElectronicProperty_base: Base;
declare class ConvergenceElectronicProperty extends ConvergenceElectronicProperty_base implements Schema {
    static readonly propertyName = PropertyName.convergence_electronic;
    static readonly propertyType = PropertyType.non_scalar;
    static readonly isConvergence = true;
    readonly chartConfig: Options;
    constructor(config: Omit<Schema, "name">);
}
export default ConvergenceElectronicProperty;
