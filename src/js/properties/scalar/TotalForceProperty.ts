import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = TotalForcesPropertySchema;

export default class TotalForceProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.total_force;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: TotalForceProperty.propertyName });
    }
}
