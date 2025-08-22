import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = StressTensorPropertySchema;

export default class StressTensorProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "stress_tensor" });
    }

    get value() {
        return this.requiredProp<Schema["value"]>("value");
    }

    get units() {
        return this.requiredProp<Schema["units"]>("units");
    }
}
