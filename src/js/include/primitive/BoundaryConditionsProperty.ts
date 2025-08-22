import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = BoundaryConditionsPropertySchema;

export default class BoundaryConditionsProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "boundary_conditions" });
    }

    get type() {
        return this.requiredProp<Schema["type"]>("type");
    }

    get offset() {
        return this.requiredProp<Schema["offset"]>("offset");
    }
}
