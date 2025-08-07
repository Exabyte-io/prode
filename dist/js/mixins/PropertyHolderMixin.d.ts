import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type Property from "../Property";
export type PropertyHolderSourceSchema = PropertyHolderSchema["source"];
export interface PropertySchemaJSON extends PropertyHolderSchema, AnyObject {
}
export type PropertyHolderMixin = {
    data: PropertyHolderSchema["data"];
    precision: PropertyHolderSchema["precision"];
    source: PropertyHolderSourceSchema;
    sourceInfo: PropertyHolderSourceSchema["info"];
    group: PropertyHolderSchema["group"];
    exabyteId: PropertyHolderSchema["exabyteId"];
    property: Property;
    flattenProperties(): {
        [x: string]: unknown;
    }[];
    toRowValues(): (PropertyHolderSchema & AnyObject)[];
};
export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;
export declare function propertyHolderMixin(item: InMemoryEntity): void;
