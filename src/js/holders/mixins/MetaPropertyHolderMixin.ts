import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import Pseudopotential from "../../include/meta_properties/Pseudopotential";

export interface MetaPropertySchemaJSON extends MetaPropertyHolderSchema, AnyObject {}

export type MetaPropertyHolderMixin = {
    data: MetaPropertyHolderSchema["data"];
    property: Pseudopotential;
};

export type MetaPropertyInMemoryEntity = InMemoryEntity & MetaPropertyHolderMixin;

export function metaPropertyHolderMixin(item: InMemoryEntity) {
    // @ts-expect-error - this is a workaround to allow the metaPropertyMixin to be used with any type of entity
    const properties: InMemoryEntity & MetaPropertyHolderMixin = {
        get data() {
            return this.requiredProp<MetaPropertyHolderSchema["data"]>("data");
        },

        get property() {
            return new Pseudopotential(this.data);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
