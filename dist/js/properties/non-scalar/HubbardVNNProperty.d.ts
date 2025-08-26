import type { HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";
type Schema = HubbardVNNParametersPropertySchema;
export default class HubbardVNNProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_v_nn;
    constructor(config: Omit<Schema, "name">);
}
export {};
