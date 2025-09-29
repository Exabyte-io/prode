import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import TensorValuesProperty from "./base/TensorValuesProperty";

type Schema = MagneticMomentsPropertySchema;

class MagneticMomentsProperty extends TensorValuesProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.magnetic_moments;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: MagneticMomentsProperty.propertyName });
    }
}

export default MagneticMomentsProperty;
