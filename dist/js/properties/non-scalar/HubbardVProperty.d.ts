import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";
type Schema = HubbardVParametersPropertySchema;
export default class HubbardVProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_v;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export {};
