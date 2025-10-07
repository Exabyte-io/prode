import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyName, PropertyType } from "./settings";
export type PropertySchemaJSON = PropertyHolderSchema["data"] & AnyObject;
export type PropertyRowValue = PropertySchemaJSON & {
    slug?: string;
    group?: string;
};
export default class Property<TSchema extends object = object> extends NamedInMemoryEntity {
    toJSON: (exclude?: string[]) => TSchema & AnyObject;
    _json: TSchema & AnyObject;
    name: `${PropertyName}`;
    readonly prettyName: string;
    static readonly propertyType: PropertyType;
    static readonly propertyName: PropertyName;
    static readonly isRefined: boolean;
    static readonly isConvergence: boolean;
    static readonly isAbleToReturnMultipleResults: boolean;
    toRowValues(group: string | undefined, slug: string | undefined): (TSchema & AnyObject & {
        slug?: string;
        group?: string;
    })[];
    static prettifyName(name: string): string;
}
