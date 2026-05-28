import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FormationEnergyReferencesPropertySchema } from "@mat3ra/esse/dist/js/types";
import { FormationEnergyReferencesPropertySchemaMixin } from "../../generated/FormationEnergyReferencesPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FormationEnergyReferencesPropertySchema;
type Base = typeof Property<Schema> & Constructor<FormationEnergyReferencesPropertySchemaMixin>;
declare const FormationEnergyReferencesProperty_base: Base;
export default class FormationEnergyReferencesProperty extends FormationEnergyReferencesProperty_base implements Schema {
    static readonly propertyName = PropertyName.formation_energy_references;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
