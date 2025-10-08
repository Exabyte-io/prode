import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import { StressTensorPropertySchemaMixin } from "../../generated/StressTensorPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = StressTensorPropertySchema;
type Base = typeof Property<Schema> & Constructor<StressTensorPropertySchemaMixin>;
declare const StressTensorProperty_base: Base;
export default class StressTensorProperty extends StressTensorProperty_base implements Schema {
    static readonly propertyName = PropertyName.stress_tensor;
    static readonly propertyType = PropertyType.tensor;
    constructor(config: Omit<Schema, "name">);
}
export {};
