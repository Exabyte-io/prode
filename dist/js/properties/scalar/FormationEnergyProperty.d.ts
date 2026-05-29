import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { FormationEnergyPropertySchemaMixin } from "../../generated/FormationEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FormationEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<FormationEnergyPropertySchemaMixin>;
declare const FormationEnergyProperty_base: Base;
export default class FormationEnergyProperty extends FormationEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.formation_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
