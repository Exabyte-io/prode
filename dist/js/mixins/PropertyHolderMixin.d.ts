import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyBaseSchema, PropertySourceSchema } from "@mat3ra/esse/dist/js/types";
import type Property from "../Property";
export interface PropertySchemaJSON extends PropertyBaseSchema, AnyObject {
}
export type PropertyHolderMixin = {
    data: PropertyBaseSchema["data"];
    precision: PropertyBaseSchema["precision"];
    schemaVersion: PropertyBaseSchema["schemaVersion"];
    source: PropertySourceSchema;
    sourceInfo: PropertySourceSchema["info"];
    group: PropertyBaseSchema["group"];
    slug: PropertyBaseSchema["slug"];
    exabyteId: PropertyBaseSchema["exabyteId"];
    property: Property;
    flattenProperties(): {
        [x: string]: unknown;
    }[];
    toRowValues(): (PropertyBaseSchema & AnyObject)[];
};
export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;
export type BaseEntity = InMemoryEntity;
export declare function propertyHolderMixin<T extends BaseEntity = BaseEntity>(item: T): void;
