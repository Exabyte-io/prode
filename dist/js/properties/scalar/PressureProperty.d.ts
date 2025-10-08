import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PressurePropertySchema } from "@mat3ra/esse/dist/js/types";
import { PressurePropertySchemaMixin } from "../../generated/PressurePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = PressurePropertySchema;
type Base = typeof Property<Schema> & Constructor<PressurePropertySchemaMixin>;
declare const PressureProperty_base: Base;
export default class PressureProperty extends PressureProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.pressure;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
