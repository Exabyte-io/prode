import type { MetaPropertyHolderSchema, PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type MetaProperty from "./meta_properties/MetaProperty";
import type Property from "./Property";
import AtomicConstraintsProperty from "./proto_properties/AtomicConstraintsProperty";
import BoundaryConditionsProperty from "./proto_properties/BoundaryConditionsProperty";
import { PropertyName } from "./settings";
type AnyProperty = PropertyHolderSchema["data"];
export default class PropertyFactory {
    static methodsTree: Record<string, () => void>;
    static getRefinedPropertyNames(): PropertyName[];
    static getConvergencePropertyNames(): PropertyName[];
    static getMultipleResultsPropertyNames(): PropertyName[];
    static getScalarPropertyNames(): PropertyName[];
    static getNonScalarPropertyNames(): PropertyName[];
    private static filterPropertyNames;
    static createProperty(config: AnyProperty): Property;
    static createMetaProperty(config: MetaPropertyHolderSchema["data"]): MetaProperty;
    static createProtoProperty(config: ProtoPropertyHolderSchema["data"]): AtomicConstraintsProperty | BoundaryConditionsProperty;
}
export {};
