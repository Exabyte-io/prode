import type { MetaPropertyHolderSchema, PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type MetaProperty from "./meta_properties/MetaProperty";
import type Property from "./Property";
import type ProtoProperty from "./proto_properties/ProtoProperty";
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
    static createProperty(config: AnyProperty | AnyProperty["name"]): Property;
    static createMetaProperty(config: MetaPropertyHolderSchema["data"]): MetaProperty;
    static createProtoProperty(config: ProtoPropertyHolderSchema["data"]): ProtoProperty<{
        name: `${PropertyName}`;
    }>;
}
export {};
