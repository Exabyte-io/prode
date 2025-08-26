import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = ValenceBandOffsetPropertySchema;
export default class ValenceBandOffsetProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.valence_band_offset;
    constructor(config: Omit<Schema, "name">);
}
export {};
