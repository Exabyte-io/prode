import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

export type BandStructurePropertySchemaMixin = Omit<
    BandStructurePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type BandStructurePropertyInMemoryEntity = InMemoryEntity & BandStructurePropertySchemaMixin;

export function bandStructurePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & BandStructurePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & BandStructurePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<BandStructurePropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: BandStructurePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<BandStructurePropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: BandStructurePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<BandStructurePropertySchema["name"]>("name");
        },
        set name(value: BandStructurePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get spin() {
            return this.requiredProp<BandStructurePropertySchema["spin"]>("spin");
        },
        set spin(value: BandStructurePropertySchema["spin"]) {
            this.setProp("spin", value);
        },
        get xDataArray() {
            return this.requiredProp<BandStructurePropertySchema["xDataArray"]>("xDataArray");
        },
        set xDataArray(value: BandStructurePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<BandStructurePropertySchema["yDataSeries"]>("yDataSeries");
        },
        set yDataSeries(value: BandStructurePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
