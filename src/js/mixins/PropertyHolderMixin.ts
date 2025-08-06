import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import { flattenObject } from "@mat3ra/code/dist/js/utils";
import type { NameValueObjectExtended } from "@mat3ra/code/dist/js/utils/object";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyBaseSchema, PropertySourceSchema } from "@mat3ra/esse/dist/js/types";

import type { Property } from "../property";
import PropertyFactory from "../PropertyFactory";

export interface PropertySchemaJSON extends PropertyBaseSchema, AnyObject {}

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
    flattenProperties(): { [x: string]: unknown }[];
    toRowValues(): (PropertyBaseSchema & AnyObject)[];
};

export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;

export type BaseEntity = InMemoryEntity;

export function propertyHolderMixin<T extends BaseEntity = BaseEntity>(item: T) {
    // @ts-expect-error
    const properties: T & PropertyHolderMixin = {
        get data() {
            return this.prop<PropertyBaseSchema["data"]>("data");
        },

        get precision() {
            return this.prop<PropertyBaseSchema["precision"]>("precision", {});
        },

        get schemaVersion() {
            return this.prop<PropertyBaseSchema["schemaVersion"]>("schemaVersion");
        },

        get source() {
            return this.requiredProp<PropertyBaseSchema["source"]>("source");
        },

        get sourceInfo() {
            return this.prop<PropertyBaseSchema["source"]["info"]>("source.info") || {};
        },

        get group() {
            return this.prop<PropertyBaseSchema["group"]>("group");
        },

        // same as element of PROPERTIES
        get slug() {
            return this.prop<PropertyBaseSchema["slug"]>("slug");
        },

        get exabyteId() {
            return this.prop<PropertyBaseSchema["exabyteId"]>("exabyteId");
        },

        get property() {
            return PropertyFactory.create(this.data);
        },

        flattenProperties() {
            try {
                return [flattenObject(this.data as NameValueObjectExtended)];
            } catch (error) {
                return [];
            }
        },

        /**
         * @summary Adds slug & group property to characteristic. They used for forming column name.
         * 'group' property will contain model type/subtype. Band gap characteristic is split before.
         */
        toRowValues() {
            return this.property.toRowValues(this.group, this.slug);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
