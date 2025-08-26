import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import TensorValuesUnitsProperty from "./base/TensorValuesProperty";

type Schema = AtomicForcesPropertySchema;

class AtomicForcesProperty extends TensorValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_forces;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicForcesProperty.propertyName });
    }
}

export default AtomicForcesProperty;
