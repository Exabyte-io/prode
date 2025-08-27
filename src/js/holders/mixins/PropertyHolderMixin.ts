import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import { flattenObject } from "@mat3ra/code/dist/js/utils";
import type { NameValueObjectExtended } from "@mat3ra/code/dist/js/utils/object";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import type Property from "../../Property";
import type { PropertyRowValue } from "../../Property";
import PropertyFactory from "../../PropertyFactory";

export type PropertyHolderSourceSchema = PropertyHolderSchema["source"];

export type PropertyHolderMixin = {
    data: PropertyHolderSchema["data"];
    precision: PropertyHolderSchema["precision"];
    source: PropertyHolderSourceSchema;
    sourceInfo: PropertyHolderSourceSchema["info"];
    group: PropertyHolderSchema["group"];
    exabyteId: PropertyHolderSchema["exabyteId"];
    repetition: PropertyHolderSchema["repetition"];
    property: Property;
    flattenProperties(): { [x: string]: unknown }[];
    toRowValues(): PropertyRowValue[];
};

export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;

export function propertyHolderMixin(item: InMemoryEntity) {
    // @ts-expect-error - this is a workaround to allow the propertyMixin to be used with any type of entity
    const properties: InMemoryEntity & PropertyHolderMixin = {
        get data() {
            return this.requiredProp<PropertyHolderSchema["data"]>("data");
        },

        get precision() {
            return this.prop<PropertyHolderSchema["precision"]>("precision");
        },

        get source() {
            return this.requiredProp<PropertyHolderSourceSchema>("source");
        },

        get sourceInfo() {
            return this.requiredProp<PropertyHolderSourceSchema["info"]>("source.info");
        },

        get group() {
            return this.prop<PropertyHolderSchema["group"]>("group");
        },

        get exabyteId() {
            return this.prop<PropertyHolderSchema["exabyteId"]>("exabyteId");
        },

        get repetition() {
            return this.requiredProp<PropertyHolderSchema["repetition"]>("repetition");
        },

        get property() {
            return PropertyFactory.createProperty(this.data);
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
