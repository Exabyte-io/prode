import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyHolderSchemaMixin } from "../../generated/PropertyHolderSchemaMixin";
import type { PropertyRowValue } from "../../Property";
import PropertyFactory from "../../PropertyFactory";
export type PropertyHolderSourceSchema = PropertyHolderSchema["source"];
export type PropertyHolderMixin = PropertyHolderSchemaMixin & {
    sourceInfo: PropertyHolderSourceSchema["info"];
    property: ReturnType<typeof PropertyFactory.createProperty>;
    flattenProperties(): {
        [x: string]: unknown;
    }[];
    toRowValues(): PropertyRowValue[];
};
export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;
export declare function propertyHolderMixin(item: InMemoryEntity): void;
