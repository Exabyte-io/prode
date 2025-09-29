import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ValuesUnitsProperty from "./base/ValuesUnitsProperty";

type Schema = HubbardUParametersPropertySchema;

export default class HubbardUProperty extends ValuesUnitsProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.hubbard_u;

    declare toJSON: (exclude?: string[]) => Schema & AnyObject;

    declare _json: Schema & AnyObject;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: HubbardUProperty.propertyName });
    }
}
