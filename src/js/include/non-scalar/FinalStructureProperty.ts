import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = FinalStructurePropertySchema;

export default class FinalStructureProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "final_structure" });
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
