import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { FermiEnergyPropertySchemaMixin } from "../../generated/FermiEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FermiEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<FermiEnergyPropertySchemaMixin>;
declare const FermiEnergyProperty_base: Base;
export default class FermiEnergyProperty extends FermiEnergyProperty_base implements Schema {
    static readonly propertyName = PropertyName.fermi_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
