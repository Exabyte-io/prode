import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";

export type PotentialProfilePropertySchemaMixin = Omit<
    PotentialProfilePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PotentialProfilePropertyInMemoryEntity = InMemoryEntity &
    PotentialProfilePropertySchemaMixin;

export function potentialProfilePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PotentialProfilePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & PotentialProfilePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<PotentialProfilePropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: PotentialProfilePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<PotentialProfilePropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: PotentialProfilePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<PotentialProfilePropertySchema["name"]>("name");
        },
        set name(value: PotentialProfilePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp<PotentialProfilePropertySchema["xDataArray"]>("xDataArray");
        },
        set xDataArray(value: PotentialProfilePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<PotentialProfilePropertySchema["yDataSeries"]>("yDataSeries");
        },
        set yDataSeries(value: PotentialProfilePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
