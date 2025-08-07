import { PropertyDomain, PropertyName, PropertyType } from "./settings";
export interface PropertyConfig {
    type?: PropertyType;
    domain?: PropertyDomain;
    isRefined?: boolean;
    isAuxiliary?: boolean;
    isConvergence?: boolean;
    isAbleToReturnMultipleResults?: boolean;
    omitInResults?: boolean;
}
/**
 * @description Type for the properties tree configuration
 */
export type PropertiesTree = Record<PropertyName, PropertyConfig>;
/**
 * @description For more details about types and object keys below
 * check the [ESSE repository](https://github.com/Exabyte-io/esse).
 */
declare const propertiesTree: PropertiesTree;
export default propertiesTree;
export declare const REFINED_PROPERTIES_SUBTREE: import("lodash").Dictionary<PropertyConfig>;
