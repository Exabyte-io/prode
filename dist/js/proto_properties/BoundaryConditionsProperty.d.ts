import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type BoundaryConditionsPropertySchemaMixin } from "../generated/BoundaryConditionsPropertySchemaMixin";
import ProtoProperty from "../ProtoProperty";
import { PropertyName } from "../settings";
type Schema = BoundaryConditionsPropertySchema;
type Base = typeof ProtoProperty<Schema> & Constructor<BoundaryConditionsPropertySchemaMixin>;
declare const BoundaryConditionsProperty_base: Base;
declare class BoundaryConditionsProperty extends BoundaryConditionsProperty_base implements Schema {
    static readonly propertyName = PropertyName.boundary_conditions;
    constructor(config: Omit<Schema, "name">);
}
export default BoundaryConditionsProperty;
