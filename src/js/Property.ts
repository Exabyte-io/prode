import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import pickBy from "lodash/pickBy";

import { type PropertyName, PropertyType } from "./settings";
import PROPERTIES_TREE, { type PropertyConfig, REFINED_PROPERTIES_SUBTREE } from "./tree";

export type PropertySchemaJSON = PropertyHolderSchema["data"] & AnyObject;

export type PropertyRowValue = PropertySchemaJSON & {
    slug?: string;
    group?: string;
};

export default class Property extends NamedInMemoryEntity {
    declare toJSON: (exclude?: string[]) => PropertySchemaJSON;

    declare _json: PropertySchemaJSON;

    declare name: `${PropertyName}`;

    readonly propertyBranch = Property.propertyBranch(this.name);

    readonly prettyName = Property.prettifyName(this.name);

    readonly omitInResults = Property.omitInResults(this.name);

    readonly isScalar = Property.isScalar(this.propertyBranch);

    readonly isTensor = this.propertyBranch.type === PropertyType.tensor;

    readonly isObject = this.propertyBranch.type === PropertyType.object;

    readonly isConvergence = Property.isConvergence(this.propertyBranch);

    readonly isAbleToReturnMultipleResults = this.propertyBranch.isAbleToReturnMultipleResults;

    readonly propertyType: PropertyType | null = this.propertyBranch.type ?? null;

    readonly isRefined = this.name in REFINED_PROPERTIES_SUBTREE;

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

    static propertyBranch(propertyName: `${PropertyName}`): PropertyConfig {
        // safely return empty object in case the tree does not contain the name key
        return PROPERTIES_TREE[propertyName] || {};
    }

    static omitInResults(propertyName: `${PropertyName}`) {
        return Boolean(this.propertyBranch(propertyName).omitInResults);
    }

    static isScalar(propertyConfig: PropertyConfig) {
        return propertyConfig.type === PropertyType.scalar;
    }

    static isConvergence(propertyConfig: PropertyConfig) {
        return Boolean(propertyConfig.isConvergence);
    }

    static readonly scalarsSubTree = pickBy(PROPERTIES_TREE, (val) => this.isScalar(val));

    static readonly nonScalarsSubTree = pickBy(PROPERTIES_TREE, (val) => !this.isScalar(val));

    static readonly convergencesSubTree = pickBy(PROPERTIES_TREE, (val) => this.isConvergence(val));
}
