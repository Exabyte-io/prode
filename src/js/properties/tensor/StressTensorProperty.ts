import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import TensorValueProperty from "./base/TensorValueProperty";

type Schema = StressTensorPropertySchema;

export default class StressTensorProperty extends TensorValueProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.stress_tensor;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: StressTensorProperty.propertyName });
    }
}
