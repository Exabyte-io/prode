import type { IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";

type Schema = IonizationPotentialElementalPropertySchema;

class IonizationPotentialElementalProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.ionization_potential;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: IonizationPotentialElementalProperty.propertyName });
    }
}

export default IonizationPotentialElementalProperty;
