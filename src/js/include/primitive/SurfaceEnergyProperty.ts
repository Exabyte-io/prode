import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import ScalarProperty from "./ScalarProperty";

type Schema = SurfaceEnergyPropertySchema;

export default class SurfaceEnergyProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "surface_energy");
    }
}
