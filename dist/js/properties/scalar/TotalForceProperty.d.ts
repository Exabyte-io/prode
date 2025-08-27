import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = TotalForcesPropertySchema;
export default class TotalForceProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.total_force;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export {};
