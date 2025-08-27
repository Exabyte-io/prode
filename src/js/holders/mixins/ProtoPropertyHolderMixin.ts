import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import type Property from "../../Property";
import PropertyFactory from "../../PropertyFactory";

export interface ProtoPropertySchemaJSON extends ProtoPropertyHolderSchema, AnyObject {}

export type ProtoPropertyHolderMixin = {
    data: ProtoPropertyHolderSchema["data"];
    source: ProtoPropertyHolderSchema["source"];
    property: Property;
};

export type ProtoPropertyInMemoryEntity = InMemoryEntity & ProtoPropertyHolderMixin;

export function protoPropertyHolderMixin(item: InMemoryEntity) {
    // @ts-expect-error - this is a workaround to allow the protoPropertyMixin to be used with any type of entity
    const properties: InMemoryEntity & ProtoPropertyHolderMixin = {
        get data() {
            return this.requiredProp<ProtoPropertyHolderSchema["data"]>("data");
        },

        get source() {
            return this.requiredProp<ProtoPropertyHolderSchema["source"]>("source");
        },

        get property() {
            return PropertyFactory.createProtoProperty(this.data);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
