import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";
type Schema = HubbardUParametersPropertySchema;
export default class HubbardUProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_u;
    constructor(config: Omit<Schema, "name">);
}
export {};
