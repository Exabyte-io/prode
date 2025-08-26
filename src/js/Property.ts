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
    declare toJSON: (exclude?: string[]) => PropertySchemaJSON;

    declare _json: PropertySchemaJSON;

    declare name: `${PropertyName}`;

    readonly prettyName = Property.prettifyName(this.name);

    static readonly propertyType: PropertyType;

    static readonly propertyName: PropertyName;

    static readonly isRefined: boolean = false;

    static readonly isConvergence: boolean = false;

    static readonly isAbleToReturnMultipleResults: boolean = false;

    static get isScalar(): boolean {
        return this.propertyType === PropertyType.scalar;
    }

    static get isNonScalar(): boolean {
        return this.propertyType === PropertyType.non_scalar;
    }

    static get isTensor(): boolean {
        return this.propertyType === PropertyType.tensor;
    }

    static get isObject(): boolean {
        return this.propertyType === PropertyType.object;
    }

    get propertyClass(): typeof Property {
        return this.constructor as typeof Property;
    }

    toRowValues(group?: string, slug?: string): PropertyRowValue[] {
        return [
            {
                ...this.toJSON(),
                slug,
                group,
            },
        ];
    }

    static prettifyName(name: string) {
        return (name.charAt(0).toUpperCase() + name.slice(1)).replace("_", " ");
    }

    // static propertyBranch(propertyName: `${PropertyName}`): PropertyConfig {
    //     // safely return empty object in case the tree does not contain the name key
    //     return PROPERTIES_TREE[propertyName] || {};
    // }

    // static omitInResults(propertyName: `${PropertyName}`) {
    //     return Boolean(this.propertyBranch(propertyName).omitInResults);
    // }

    // static isScalar(propertyConfig: PropertyConfig) {
    //     return propertyConfig.type === PropertyType.scalar;
    // }

    // static isConvergence(propertyConfig: PropertyConfig) {
    //     return Boolean(propertyConfig.isConvergence);
    // }
}
