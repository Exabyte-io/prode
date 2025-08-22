import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";

import ScalarProperty from "./ScalarProperty";

type Schema = ReactionEnergyBarrierPropertySchema;

class ReactionEnergyBarrierProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "reaction_energy_barrier");
    }
}

export default ReactionEnergyBarrierProperty;
