import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { TotalEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { TotalEnergyContributionsPropertySchemaMixin } from "../../generated/TotalEnergyContributionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = TotalEnergyContributionsPropertySchema;
type Base = typeof Property<Schema> & Constructor<TotalEnergyContributionsPropertySchemaMixin>;
declare const TotalEnergyContributionsProperty_base: Base;
export default class TotalEnergyContributionsProperty extends TotalEnergyContributionsProperty_base implements Schema {
    static readonly propertyType = PropertyType.object;
    static readonly propertyName = PropertyName.total_energy_contributions;
    constructor(config: Omit<Schema, "name">);
    get exchangeCorrelation(): {
        name?: "exchange_correlation";
        value: number;
    } | undefined;
}
export {};
