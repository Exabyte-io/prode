import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = ReactionEnergyBarrierPropertySchema;

class ReactionEnergyBarrierProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.reaction_energy_barrier;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ReactionEnergyBarrierProperty.propertyName });
    }
}

export default ReactionEnergyBarrierProperty;
