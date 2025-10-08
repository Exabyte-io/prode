import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type AtomicConstraintsPropertySchemaMixin } from "../generated/AtomicConstraintsPropertySchemaMixin";
import ProtoProperty from "../ProtoProperty";
import { PropertyName } from "../settings";
type Schema = AtomicConstraintsPropertySchema;
type Base = typeof ProtoProperty<Schema> & Constructor<AtomicConstraintsPropertySchemaMixin>;
declare const AtomicConstraintsProperty_base: Base;
declare class AtomicConstraintsProperty extends AtomicConstraintsProperty_base implements Schema {
    static readonly propertyName = PropertyName.atomic_constraints;
    constructor(config: Omit<Schema, "name">);
}
export default AtomicConstraintsProperty;
