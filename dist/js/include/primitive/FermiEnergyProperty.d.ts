import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import ScalarProperty from "./ScalarProperty";
type Schema = FermiEnergyPropertySchema;
export default class FermiEnergyProperty extends ScalarProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
