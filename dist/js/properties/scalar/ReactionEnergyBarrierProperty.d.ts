import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = ReactionEnergyBarrierPropertySchema;
declare class ReactionEnergyBarrierProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.reaction_energy_barrier;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export default ReactionEnergyBarrierProperty;
