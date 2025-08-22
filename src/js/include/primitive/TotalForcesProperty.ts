import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

import ScalarProperty from "./ScalarProperty";

type Schema = TotalForcesPropertySchema;

export default class TotalForcesProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "total_force");
    }
}
