import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../settings";
import ProtoProperty from "./ProtoProperty";

type Schema = AtomicConstraintsPropertySchema;

class AtomicConstraintsProperty extends ProtoProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_constraints;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicConstraintsProperty.propertyName });
    }

    get values() {
        return this.requiredProp<Schema["values"]>("values");
    }
}

export default AtomicConstraintsProperty;
