import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { IsRelaxedPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type IsRelaxedPropertySchemaMixin } from "../../generated/IsRelaxedPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = IsRelaxedPropertySchema;
type Base = typeof Property<Schema> & Constructor<IsRelaxedPropertySchemaMixin>;
declare const IsRelaxedProperty_base: Base;
export default class IsRelaxedProperty extends IsRelaxedProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.is_relaxed;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
