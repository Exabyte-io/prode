import type { PressurePropertySchema } from "@mat3ra/esse/dist/js/types";
import ScalarProperty from "./ScalarProperty";
type Schema = PressurePropertySchema;
export default class PressureProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
