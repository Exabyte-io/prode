import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEntropyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { TotalEntropyContributionsPropertySchemaMixin } from "../../generated/TotalEntropyContributionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = TotalEntropyContributionsPropertySchema;
type Base = typeof Property<Schema> & Constructor<TotalEntropyContributionsPropertySchemaMixin>;
declare const TotalEntropyContributionsProperty_base: Base;
export default class TotalEntropyContributionsProperty extends TotalEntropyContributionsProperty_base implements Schema {
    static readonly propertyType = PropertyType.object;
    static readonly propertyName = PropertyName.total_entropy_contributions;
    static readonly isRefined = true;
    constructor(config: Omit<Schema, "name">);
}
export {};
