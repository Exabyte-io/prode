import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import TensorValuesUnitsProperty from "./base/TensorValuesProperty";
type Schema = AtomicForcesPropertySchema;
declare class AtomicForcesProperty extends TensorValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_forces;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export default AtomicForcesProperty;
