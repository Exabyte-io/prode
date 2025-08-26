import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyName, PropertyType } from "./settings";
export type PropertySchemaJSON = PropertyHolderSchema["data"] & AnyObject;
export type PropertyRowValue = PropertySchemaJSON & {
    slug?: string;
    group?: string;
};
export default class Property extends NamedInMemoryEntity {
    toJSON: (exclude?: string[]) => PropertySchemaJSON;
    _json: PropertySchemaJSON;
    name: `${PropertyName}`;
    readonly prettyName: string;
    static readonly propertyType: PropertyType;
    static readonly propertyName: PropertyName;
    static readonly isRefined: boolean;
    static readonly isConvergence: boolean;
    static readonly isAbleToReturnMultipleResults: boolean;
    static get isScalar(): boolean;
    static get isNonScalar(): boolean;
    static get isTensor(): boolean;
    static get isObject(): boolean;
    toRowValues(group?: string, slug?: string): PropertyRowValue[];
    static prettifyName(name: string): string;
}
