import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { AtomicForcesPropertySchemaMixin } from "../../generated/AtomicForcesPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = AtomicForcesPropertySchema;
type Base = typeof Property<Schema> & Constructor<AtomicForcesPropertySchemaMixin>;
declare const AtomicForcesProperty_base: Base;
declare class AtomicForcesProperty extends AtomicForcesProperty_base implements Schema {
    static readonly propertyName = PropertyName.atomic_forces;
    static readonly propertyType = PropertyType.tensor;
    constructor(config: Omit<Schema, "name">);
}
export default AtomicForcesProperty;
