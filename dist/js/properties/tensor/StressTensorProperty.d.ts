import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import TensorValueProperty from "./base/TensorValueProperty";
type Schema = StressTensorPropertySchema;
export default class StressTensorProperty extends TensorValueProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.stress_tensor;
    constructor(config: Omit<Schema, "name">);
}
export {};
