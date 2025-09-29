import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ValenceBandOffsetPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = ValenceBandOffsetPropertySchema;

export default class ValenceBandOffsetProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.valence_band_offset;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ValenceBandOffsetProperty.propertyName });
    }
}
