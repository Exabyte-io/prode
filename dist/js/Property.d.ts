import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import { PropertyType } from "./settings";
import { type PropertyConfig } from "./tree";
export default class Property extends NamedInMemoryEntity {
    readonly propertyBranch: PropertyConfig;
    readonly prettyName: string;
    readonly omitInResults: boolean;
    readonly isScalar: boolean;
    readonly isTensor: boolean;
    readonly isObject: boolean;
    readonly isConvergence: boolean;
    readonly isAbleToReturnMultipleResults: boolean | undefined;
    readonly type: PropertyType | null;
    readonly isRefined: boolean;
    toRowValues(group?: string, slug?: string): {
        slug: string | undefined;
        group: string | undefined;
    }[];
    static prettifyName(name: string): string;
    static propertyBranch(propertyName: string): PropertyConfig;
    static omitInResults(propertyName: string): boolean;
    static isScalar(propertyConfig: PropertyConfig): boolean;
    static isConvergence(propertyConfig: PropertyConfig): boolean;
    static readonly scalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly nonScalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly convergencesSubTree: import("lodash").Dictionary<PropertyConfig>;
}
