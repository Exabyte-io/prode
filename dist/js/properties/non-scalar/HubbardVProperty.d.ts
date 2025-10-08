import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type HubbardVPropertySchemaMixin } from "../../generated/HubbardVPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HubbardVParametersPropertySchema;
type Base = typeof Property<Schema> & Constructor<HubbardVPropertySchemaMixin>;
declare const HubbardVProperty_base: Base;
export default class HubbardVProperty extends HubbardVProperty_base implements Schema {
    static readonly propertyName = PropertyName.hubbard_v;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
