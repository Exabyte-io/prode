import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";
import { IonizationPotentialElementalPropertySchemaMixin } from "../../generated/IonizationPotentialElementalPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = IonizationPotentialElementalPropertySchema;
type Base = typeof Property<Schema> & Constructor<IonizationPotentialElementalPropertySchemaMixin>;
declare const IonizationPotentialElementalProperty_base: Base;
declare class IonizationPotentialElementalProperty extends IonizationPotentialElementalProperty_base implements Schema {
    static readonly propertyName = PropertyName.ionization_potential;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export default IonizationPotentialElementalProperty;
