import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type HubbardUPropertySchemaMixin } from "../../generated/HubbardUPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HubbardUParametersPropertySchema;
type Base = typeof Property<Schema> & Constructor<HubbardUPropertySchemaMixin>;
declare const HubbardUProperty_base: Base;
export default class HubbardUProperty extends HubbardUProperty_base implements Schema {
    static readonly propertyName = PropertyName.hubbard_u;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
