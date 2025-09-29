import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import TensorValuesProperty from "./base/TensorValuesProperty";

type Schema = AtomicForcesPropertySchema;

class AtomicForcesProperty extends TensorValuesProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_forces;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicForcesProperty.propertyName });
    }
}

export default AtomicForcesProperty;
