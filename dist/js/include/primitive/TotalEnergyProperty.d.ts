import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import ScalarProperty from "./ScalarProperty";
type Schema = TotalEnergyPropertySchema;
export default class TotalEnergyProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
