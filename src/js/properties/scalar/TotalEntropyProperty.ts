import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEntropyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    TotalEntropyPropertySchemaMixin,
    totalEntropyPropertySchemaMixin,
} from "../../generated/TotalEntropyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = TotalEntropyPropertySchema;

type Base = typeof Property<Schema> & Constructor<TotalEntropyPropertySchemaMixin>;

export default class TotalEntropyProperty extends (Property as Base) implements Schema {
    static readonly propertyType = PropertyType.scalar;

    static readonly propertyName = PropertyName.total_entropy;

    static readonly isRefined = true;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: TotalEntropyProperty.propertyName });
    }
}

totalEntropyPropertySchemaMixin(TotalEntropyProperty.prototype);
