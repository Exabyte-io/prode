import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = AtomicConstraintsPropertySchema;

export default class AtomicConstraintsProperty extends Property implements Schema {
    declare name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "atomic_constraints" });
    }

    get values() {
        return this.requiredProp<Schema["values"]>("values");
    }
}
