import type { ZeroPointEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import ScalarProperty from "./ScalarProperty";

type Schema = ZeroPointEnergyPropertySchema;

export default class ZeroPointEnergyProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "zero_point_energy");
    }
}
