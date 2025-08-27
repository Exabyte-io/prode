import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import TensorValuesProperty from "./base/TensorValuesProperty";
type Schema = MagneticMomentsPropertySchema;
declare class MagneticMomentsProperty extends TensorValuesProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.magnetic_moments;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export default MagneticMomentsProperty;
