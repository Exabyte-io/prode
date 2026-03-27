import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEntropyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { TotalEntropyPropertySchemaMixin } from "../../generated/TotalEntropyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = TotalEntropyPropertySchema;
type Base = typeof Property<Schema> & Constructor<TotalEntropyPropertySchemaMixin>;
declare const TotalEntropyProperty_base: Base;
export default class TotalEntropyProperty extends TotalEntropyProperty_base implements Schema {
    static readonly propertyType = PropertyType.scalar;
    static readonly propertyName = PropertyName.total_entropy;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
}
export {};
