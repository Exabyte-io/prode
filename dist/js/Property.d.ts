import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyName, PropertyType } from "./settings";
import { type PropertyConfig } from "./tree";
export type PropertySchemaJSON = PropertyHolderSchema["data"] & AnyObject;
export type PropertyRowValue = PropertySchemaJSON & {
    slug?: string;
    group?: string;
};
export default class Property extends NamedInMemoryEntity {
    toJSON: (exclude?: string[]) => PropertySchemaJSON;
    _json: PropertySchemaJSON;
    name: `${PropertyName}`;
    readonly propertyBranch: PropertyConfig;
    readonly prettyName: string;
    readonly omitInResults: boolean;
    readonly isScalar: boolean;
    readonly isTensor: boolean;
    readonly isObject: boolean;
    readonly isConvergence: boolean;
    readonly isAbleToReturnMultipleResults: boolean | undefined;
    readonly propertyType: PropertyType | null;
    readonly isRefined: boolean;
    toRowValues(group?: string, slug?: string): PropertyRowValue[];
    static prettifyName(name: string): string;
    static propertyBranch(propertyName: `${PropertyName}`): PropertyConfig;
    static omitInResults(propertyName: `${PropertyName}`): boolean;
    static isScalar(propertyConfig: PropertyConfig): boolean;
    static isConvergence(propertyConfig: PropertyConfig): boolean;
    static readonly scalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly nonScalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly convergencesSubTree: import("lodash").Dictionary<PropertyConfig>;
}
