import { PropertyName, PropertyType } from "./settings";
/**
 * @description Type for property class constructor
 */
type PropertyClassConstructor = new (...args: any[]) => any;
/**
 * @description Type for the property class map
 */
type PropertyClassMap = Record<PropertyName, PropertyClassConstructor | null>;
/**
 * @desc Used in property factory to map property names to property classes.
 */
export declare const PROPERTY_CLASS_MAP: PropertyClassMap;
export declare const PROPERTY_BRANCH_MAP: {
    [key in PropertyType]: PropertyClassConstructor;
};
export {};
