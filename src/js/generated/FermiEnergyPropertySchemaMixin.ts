import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FermiEnergyPropertySchemaMixin = Omit<
    FermiEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FermiEnergyPropertyInMemoryEntity = InMemoryEntity & FermiEnergyPropertySchemaMixin;

export function fermiEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FermiEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & FermiEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<FermiEnergyPropertySchema["name"]>("name");
        },
        set name(value: FermiEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<FermiEnergyPropertySchema["units"]>("units");
        },
        set units(value: FermiEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp<FermiEnergyPropertySchema["value"]>("value");
        },
        set value(value: FermiEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
