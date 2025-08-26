import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../settings";
import ProtoProperty from "./ProtoProperty";

type Schema = BoundaryConditionsPropertySchema;

class BoundaryConditionsProperty extends ProtoProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.boundary_conditions;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: BoundaryConditionsProperty.propertyName });
    }

    get type() {
        return this.requiredProp<Schema["type"]>("type");
    }

    get offset() {
        return this.requiredProp<Schema["offset"]>("offset");
    }
}

export default BoundaryConditionsProperty;
