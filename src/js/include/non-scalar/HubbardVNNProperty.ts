import type { HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

import ValuesUnitsProperty from "../primitive/ValuesUnitsProperty";

type Schema = HubbardVNNParametersPropertySchema;

export default class HubbardVNNProperty extends ValuesUnitsProperty<Schema> implements Schema {
    constructor(config: object) {
        super(config, "hubbard_v_nn");
    }
}
