import type { IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = IonizationPotentialElementalPropertySchema;
declare class IonizationPotentialElementalProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.ionization_potential;
    constructor(config: Omit<Schema, "name">);
}
export default IonizationPotentialElementalProperty;
