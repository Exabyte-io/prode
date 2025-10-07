import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { SurfaceEnergyPropertySchemaMixin } from "../../generated/SurfaceEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = SurfaceEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<SurfaceEnergyPropertySchemaMixin>;
declare const SurfaceEnergyProperty_base: Base;
export default class SurfaceEnergyProperty extends SurfaceEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.surface_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
