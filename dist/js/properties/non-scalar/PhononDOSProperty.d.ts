import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";
import { PhononDOSPropertySchemaMixin } from "../../generated/PhononDOSPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = PhononDensityOfStatesPropertySchema;
type Base = typeof Property<Schema> & Constructor<PhononDOSPropertySchemaMixin>;
declare const PhononDOSProperty_base: Base;
export default class PhononDOSProperty extends PhononDOSProperty_base implements Schema {
    readonly chartConfig: Options;
    readonly subtitle: string;
    readonly yAxisTitle: string;
    readonly xAxisTitle: string;
    static readonly propertyName = PropertyName.phonon_dos;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
