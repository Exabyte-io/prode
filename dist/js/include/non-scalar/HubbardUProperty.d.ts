import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
import ValuesUnitsProperty from "../primitive/ValuesUnitsProperty";
type Schema = HubbardUParametersPropertySchema;
export default class HubbardUProperty extends ValuesUnitsProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
