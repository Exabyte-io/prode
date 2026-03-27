import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEntropyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    TotalEntropyContributionsPropertySchemaMixin,
    totalEntropyContributionsPropertySchemaMixin,
} from "../../generated/TotalEntropyContributionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = TotalEntropyContributionsPropertySchema;

type Base = typeof Property<Schema> & Constructor<TotalEntropyContributionsPropertySchemaMixin>;

export default class TotalEntropyContributionsProperty extends (Property as Base) implements Schema {
    static readonly propertyType = PropertyType.object;

    static readonly propertyName = PropertyName.total_entropy_contributions;

    static readonly isRefined = true;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: TotalEntropyContributionsProperty.propertyName });
    }
}

totalEntropyContributionsPropertySchemaMixin(TotalEntropyContributionsProperty.prototype);
