import type { StressTensorPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = StressTensorPropertySchema;
export default class StressTensorProperty extends Property implements Schema {
    readonly name: Schema["name"];
    constructor(config: object);
    get value(): [[number, number, number], [number, number, number], [number, number, number]];
    get units(): "kbar" | "pa";
}
export {};
