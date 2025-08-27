import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = ValenceBandOffsetPropertySchema;
export default class ValenceBandOffsetProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.valence_band_offset;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export {};
