import type { PressurePropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = PressurePropertySchema;

export default class PressureProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.pressure;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: PressureProperty.propertyName });
    }
}
