import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type BoundaryConditionsPropertySchemaMixin = Omit<
    BoundaryConditionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type BoundaryConditionsPropertyInMemoryEntity = InMemoryEntity &
    BoundaryConditionsPropertySchemaMixin;

export function boundaryConditionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & BoundaryConditionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & BoundaryConditionsPropertySchemaMixin = {
        get name() {
            return this.requiredProp<BoundaryConditionsPropertySchema["name"]>("name");
        },
        set name(value: BoundaryConditionsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get type() {
            return this.requiredProp<BoundaryConditionsPropertySchema["type"]>("type");
        },
        set type(value: BoundaryConditionsPropertySchema["type"]) {
            this.setProp("type", value);
        },
        get offset() {
            return this.requiredProp<BoundaryConditionsPropertySchema["offset"]>("offset");
        },
        set offset(value: BoundaryConditionsPropertySchema["offset"]) {
            this.setProp("offset", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
