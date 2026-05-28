import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HubbardVNNPropertySchemaMixin = Omit<
    HubbardVNNParametersPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HubbardVNNPropertyInMemoryEntity = InMemoryEntity & HubbardVNNPropertySchemaMixin;

export function hubbardVNNPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & HubbardVNNPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & HubbardVNNPropertySchemaMixin = {
        get name() {
            return this.requiredProp<HubbardVNNParametersPropertySchema["name"]>("name");
        },
        set name(value: HubbardVNNParametersPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<HubbardVNNParametersPropertySchema["units"]>("units");
        },
        set units(value: HubbardVNNParametersPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get values() {
            return this.requiredProp<HubbardVNNParametersPropertySchema["values"]>("values");
        },
        set values(value: HubbardVNNParametersPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
