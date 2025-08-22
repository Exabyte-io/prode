import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = AtomicConstraintsPropertySchema;
export default class AtomicConstraintsProperty extends Property implements Schema {
    name: Schema["name"];
    constructor(config: object);
    get values(): {
        value: [boolean, boolean, boolean];
        id: number;
    }[];
}
export {};
