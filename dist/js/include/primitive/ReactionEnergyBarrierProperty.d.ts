import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";
import ScalarProperty from "./ScalarProperty";
type Schema = ReactionEnergyBarrierPropertySchema;
declare class ReactionEnergyBarrierProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object);
}
export default ReactionEnergyBarrierProperty;
