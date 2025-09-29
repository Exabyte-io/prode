import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ZeroPointEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = ZeroPointEnergyPropertySchema;

export default class ZeroPointEnergyProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.zero_point_energy;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ZeroPointEnergyProperty.propertyName });
    }
}
