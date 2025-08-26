import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = FinalStructurePropertySchema;

export default class FinalStructureProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.final_structure;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: FinalStructureProperty.propertyName });
    }

    get isRelaxed() {
        return this.requiredProp<Schema["isRelaxed"]>("isRelaxed");
    }

    get formula() {
        return this.prop<Schema["formula"]>("formula");
    }

    get unitCellFormula() {
        return this.prop<Schema["unitCellFormula"]>("unitCellFormula");
    }

    get basis() {
        return this.requiredProp<Schema["basis"]>("basis");
    }

    get lattice() {
        return this.requiredProp<Schema["lattice"]>("lattice");
    }

    get derivedProperties() {
        return this.prop<Schema["derivedProperties"]>("derivedProperties");
    }

    get external() {
        return this.prop<Schema["external"]>("external");
    }

    get src() {
        return this.prop<Schema["src"]>("src");
    }

    get scaledHash() {
        return this.prop<Schema["scaledHash"]>("scaledHash");
    }

    get icsdId() {
        return this.prop<Schema["icsdId"]>("icsdId");
    }

    get isNonPeriodic() {
        return this.prop<Schema["isNonPeriodic"]>("isNonPeriodic");
    }

    get consistencyChecks() {
        return this.prop<Schema["consistencyChecks"]>("consistencyChecks");
    }

    get isDefault() {
        return this.prop<Schema["isDefault"]>("isDefault");
    }

    get metadata() {
        return this.prop<Schema["metadata"]>("metadata");
    }
}
