import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { TotalForcePropertySchemaMixin } from "../../generated/TotalForcePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = TotalForcesPropertySchema;
type Base = typeof Property<Schema> & Constructor<TotalForcePropertySchemaMixin>;
declare const TotalForceProperty_base: Base;
export default class TotalForceProperty extends TotalForceProperty_base implements Schema {
    static readonly propertyName = PropertyName.total_force;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
