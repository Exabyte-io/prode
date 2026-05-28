import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type BandGapsPropertySchemaMixin = Omit<
    BandGapsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type BandGapsPropertyInMemoryEntity = InMemoryEntity & BandGapsPropertySchemaMixin;

export function bandGapsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & BandGapsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & BandGapsPropertySchemaMixin = {
        get name() {
            return this.requiredProp<BandGapsPropertySchema["name"]>("name");
        },
        set name(value: BandGapsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp<BandGapsPropertySchema["values"]>("values");
        },
        set values(value: BandGapsPropertySchema["values"]) {
            this.setProp("values", value);
        },
        get eigenvalues() {
            return this.prop<BandGapsPropertySchema["eigenvalues"]>("eigenvalues");
        },
        set eigenvalues(value: BandGapsPropertySchema["eigenvalues"]) {
            this.setProp("eigenvalues", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
