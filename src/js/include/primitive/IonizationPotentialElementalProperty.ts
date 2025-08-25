import type { IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";

import ScalarProperty from "./ScalarProperty";

type Schema = IonizationPotentialElementalPropertySchema;

const Base = ScalarProperty<Schema>;

export default class IonizationPotentialElementalProperty extends Base implements Schema {
    declare readonly name: Schema["name"];

    constructor(config: Omit<Schema, "name">) {
        super(config, "ionization_potential");
    }
}
