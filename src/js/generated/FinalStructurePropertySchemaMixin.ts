import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

export type FinalStructurePropertySchemaMixin = Omit<
    FinalStructurePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FinalStructurePropertyInMemoryEntity = InMemoryEntity &
    FinalStructurePropertySchemaMixin;

export function finalStructurePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FinalStructurePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & FinalStructurePropertySchemaMixin = {
        get name() {
            return this.requiredProp<FinalStructurePropertySchema["name"]>("name");
        },
        set name(value: FinalStructurePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get isRelaxed() {
            return this.requiredProp<FinalStructurePropertySchema["isRelaxed"]>("isRelaxed");
        },
        set isRelaxed(value: FinalStructurePropertySchema["isRelaxed"]) {
            this.setProp("isRelaxed", value);
        },
        get materialId() {
            return this.requiredProp<FinalStructurePropertySchema["materialId"]>("materialId");
        },
        set materialId(value: FinalStructurePropertySchema["materialId"]) {
            this.setProp("materialId", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
