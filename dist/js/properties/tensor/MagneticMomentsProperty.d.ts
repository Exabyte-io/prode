import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { MagneticMomentsPropertySchemaMixin } from "../../generated/MagneticMomentsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = MagneticMomentsPropertySchema;
type Base = typeof Property<Schema> & Constructor<MagneticMomentsPropertySchemaMixin>;
declare const MagneticMomentsProperty_base: Base;
declare class MagneticMomentsProperty extends MagneticMomentsProperty_base implements Schema {
    static readonly propertyName = PropertyName.magnetic_moments;
    static readonly propertyType = PropertyType.tensor;
    constructor(config: Omit<Schema, "name">);
}
export default MagneticMomentsProperty;
