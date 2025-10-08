import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import { type FinalStructurePropertySchemaMixin } from "../../generated/FinalStructurePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FinalStructurePropertySchema;
type Base = typeof Property<Schema> & Constructor<FinalStructurePropertySchemaMixin>;
declare const FinalStructureProperty_base: Base;
export default class FinalStructureProperty extends FinalStructureProperty_base implements Schema {
    static readonly propertyName = PropertyName.final_structure;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
