import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { HubbardVParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";

type Schema = HubbardVParametersPropertySchema;

export default class HubbardVProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_v;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: HubbardVProperty.propertyName });
    }
}
