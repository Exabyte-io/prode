import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";
import ScalarProperty from "./ScalarProperty";
type Schema = ValenceBandOffsetPropertySchema;
export default class ValenceBandOffsetProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
