import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

import ValuesUnitsProperty from "../primitive/ValuesUnitsProperty";

type Schema = HubbardVParametersPropertySchema;

export default class HubbardVProperty extends ValuesUnitsProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "hubbard_v");
    }
}
