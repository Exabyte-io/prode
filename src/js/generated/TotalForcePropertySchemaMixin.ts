import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type TotalForcePropertySchemaMixin = Omit<
    TotalForcesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type TotalForcePropertyInMemoryEntity = InMemoryEntity & TotalForcePropertySchemaMixin;

export function totalForcePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & TotalForcePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & TotalForcePropertySchemaMixin = {
        get name() {
            return this.requiredProp<TotalForcesPropertySchema["name"]>("name");
        },
        set name(value: TotalForcesPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<TotalForcesPropertySchema["units"]>("units");
        },
        set units(value: TotalForcesPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<TotalForcesPropertySchema["value"]>("value");
        },
        set value(value: TotalForcesPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
