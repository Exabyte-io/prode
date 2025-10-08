import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";
import { ReactionEnergyBarrierPropertySchemaMixin } from "../../generated/ReactionEnergyBarrierPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = ReactionEnergyBarrierPropertySchema;
type Base = typeof Property<Schema> & Constructor<ReactionEnergyBarrierPropertySchemaMixin>;
declare const ReactionEnergyBarrierProperty_base: Base;
declare class ReactionEnergyBarrierProperty extends ReactionEnergyBarrierProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.reaction_energy_barrier;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export default ReactionEnergyBarrierProperty;
