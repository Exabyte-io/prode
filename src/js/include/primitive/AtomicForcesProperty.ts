import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

import ValuesUnitsProperty from "./ValuesUnitsProperty";

type Schema = AtomicForcesPropertySchema;

export default class AtomicForcesProperty extends ValuesUnitsProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "atomic_forces");
    }
}
