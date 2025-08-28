import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
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
    property: ReturnType<typeof PropertyFactory.createProperty>;
    flattenProperties(): {
        [x: string]: unknown;
    }[];
    toRowValues(): PropertyRowValue[];
};
export type PropertyInMemoryEntity = InMemoryEntity & PropertyHolderMixin;
export declare function propertyHolderMixin(item: InMemoryEntity): void;
