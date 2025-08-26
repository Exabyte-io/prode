import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import ScalarProperty from "./base/ScalarProperty";
type Schema = SurfaceEnergyPropertySchema;
export default class SurfaceEnergyProperty extends ScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.surface_energy;
    constructor(config: Omit<Schema, "name">);
}
export {};
