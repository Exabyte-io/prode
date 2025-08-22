import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = BoundaryConditionsPropertySchema;
export default class BoundaryConditionsProperty extends Property implements Schema {
    readonly name: Schema["name"];
    constructor(config: object);
    get type(): "pbc" | "bc1" | "bc2" | "bc3";
    get offset(): number;
}
export {};
