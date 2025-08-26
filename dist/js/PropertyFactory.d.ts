import type { PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type Property from "./Property";
import { PropertyName } from "./settings";
type PropertyClassMap = {
    [key in PropertyName]: typeof Property;
};
export declare const PROPERTY_CLASS_MAP: PropertyClassMap;
export default class PropertyFactory {
    static methodsTree: Record<string, () => void>;
    /**
     * Get all PropertyName values for properties that have isRefined = true
     * @returns Array of PropertyName values for refined properties
     */
    static getRefinedPropertyNames(): PropertyName[];
    /**
     * Get all PropertyName values for properties that have isConvergence = true
     * @returns Array of PropertyName values for convergence properties
     */
    static getConvergencePropertyNames(): PropertyName[];
    /**
     * Get all PropertyName values for properties that have isAbleToReturnMultipleResults = true
     * @returns Array of PropertyName values for properties that can return multiple results
     */
    static getMultipleResultsPropertyNames(): PropertyName[];
    static getScalarPropertyNames(): PropertyName[];
    static getNonScalarPropertyNames(): PropertyName[];
    private static filterPropertyNames;
    static create(config: `${PropertyName}` | PropertyHolderSchema["data"] | ProtoPropertyHolderSchema["data"], methodType?: string): Property;
    static _precisionFunctionByMethodType(methodType?: string): () => void;
}
export {};
