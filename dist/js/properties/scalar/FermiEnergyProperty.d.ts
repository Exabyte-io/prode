import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = FermiEnergyPropertySchema;
export default class FermiEnergyProperty extends ScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.fermi_energy;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export {};
