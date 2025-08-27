import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = SurfaceEnergyPropertySchema;

export default class SurfaceEnergyProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.surface_energy;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: SurfaceEnergyProperty.propertyName });
    }
}
