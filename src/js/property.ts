import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import _ from "underscore";

import { PropertyType } from "./settings";
import PROPERTIES_TREE, { type PropertyConfig, REFINED_PROPERTIES_SUBTREE } from "./tree";

export class Property extends NamedInMemoryEntity {
    readonly propertyBranch = Property.propertyBranch(this.name);

    readonly prettyName = Property.prettifyName(this.name);

    readonly omitInResults = Property.omitInResults(this.name);

    readonly isScalar = Property.isScalar(this.propertyBranch);

    readonly isTensor = this.propertyBranch.type === PropertyType.tensor;

    readonly isObject = this.propertyBranch.type === PropertyType.object;

    readonly isConvergence = Property.isConvergence(this.propertyBranch);

    readonly isAbleToReturnMultipleResults = this.propertyBranch.isAbleToReturnMultipleResults;

    readonly type: PropertyType | null = this.propertyBranch.type ?? null;

    readonly isRefined = this.name in REFINED_PROPERTIES_SUBTREE;

    toRowValues(group?: string, slug?: string) {
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

    static propertyBranch(propertyName: string): PropertyConfig {
        // safely return empty object in case the tree does not contain the name key
        return _.find(PROPERTIES_TREE, (_v, k) => k === propertyName) || {};
    }

    static omitInResults(propertyName: string) {
        return Boolean(this.propertyBranch(propertyName).omitInResults);
    }

    static isScalar(propertyConfig: PropertyConfig) {
        return propertyConfig.type === PropertyType.scalar;
    }

    static isConvergence(propertyConfig: PropertyConfig) {
        return Boolean(propertyConfig.isConvergence);
    }

    static readonly scalarsSubTree = _.pick(PROPERTIES_TREE, (val) => this.isScalar(val));

    static readonly nonScalarsSubTree = _.pick(PROPERTIES_TREE, (val) => !this.isScalar(val));

    static readonly convergencesSubTree = _.pick(PROPERTIES_TREE, (val) => this.isConvergence(val));
}
