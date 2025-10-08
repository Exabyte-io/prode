import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type HubbardVNNPropertySchemaMixin } from "../../generated/HubbardVNNPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = HubbardVNNParametersPropertySchema;
type Base = typeof Property<Schema> & Constructor<HubbardVNNPropertySchemaMixin>;
declare const HubbardVNNProperty_base: Base;
export default class HubbardVNNProperty extends HubbardVNNProperty_base implements Schema {
    static readonly propertyName = PropertyName.hubbard_v_nn;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
