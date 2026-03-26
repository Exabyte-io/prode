import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ConvergenceElectronicPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ConvergenceElectronicPropertySchemaMixin = Omit<
    ConvergenceElectronicPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ConvergenceElectronicPropertyInMemoryEntity = InMemoryEntity &
    ConvergenceElectronicPropertySchemaMixin;

export function convergenceElectronicPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ConvergenceElectronicPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ConvergenceElectronicPropertySchemaMixin = {
        get name() {
            return this.requiredProp<ConvergenceElectronicPropertySchema["name"]>("name");
        },
        set name(value: ConvergenceElectronicPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp<ConvergenceElectronicPropertySchema["units"]>("units");
        },
        set units(value: ConvergenceElectronicPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get data() {
            return this.requiredProp<ConvergenceElectronicPropertySchema["data"]>("data");
        },
        set data(value: ConvergenceElectronicPropertySchema["data"]) {
            this.setProp("data", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
