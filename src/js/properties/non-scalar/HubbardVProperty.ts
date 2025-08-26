import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";

type Schema = HubbardVParametersPropertySchema;

export default class HubbardVProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_v;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: HubbardVProperty.propertyName });
    }
}
