import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type { PseudopotentialMetaProperty } from "src/js";
import { type MetaPropertyHolderSchemaMixin } from "../../generated/MetaPropertyHolderSchemaMixin";
export interface MetaPropertySchemaJSON extends MetaPropertyHolderSchema, AnyObject {
}
export type MetaPropertyHolderMixin = {
    property: PseudopotentialMetaProperty;
} & MetaPropertyHolderSchemaMixin;
export type MetaPropertyInMemoryEntity = InMemoryEntity & MetaPropertyHolderMixin;
export declare function metaPropertyHolderMixin(item: InMemoryEntity): void;
