import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = TotalEnergyPropertySchema;
export default class TotalEnergyProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.total_energy;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
}
export {};
