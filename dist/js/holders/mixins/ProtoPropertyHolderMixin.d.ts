import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type ProtoPropertyHolderSchemaMixin } from "../../generated/ProtoPropertyHolderSchemaMixin";
import type Property from "../../Property";
export interface ProtoPropertySchemaJSON extends ProtoPropertyHolderSchema, AnyObject {
}
export type ProtoPropertyHolderMixin = ProtoPropertyHolderSchemaMixin & {
    property: Property;
};
export type ProtoPropertyInMemoryEntity = InMemoryEntity & ProtoPropertyHolderMixin;
export declare function protoPropertyHolderMixin(item: InMemoryEntity): void;
