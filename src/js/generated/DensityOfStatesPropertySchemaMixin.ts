import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type DensityOfStatesPropertySchemaMixin = Omit<
    DensityOfStatesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type DensityOfStatesPropertyInMemoryEntity = InMemoryEntity &
    DensityOfStatesPropertySchemaMixin;

export function densityOfStatesPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & DensityOfStatesPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & DensityOfStatesPropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<DensityOfStatesPropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: DensityOfStatesPropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<DensityOfStatesPropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: DensityOfStatesPropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<DensityOfStatesPropertySchema["name"]>("name");
        },
        set name(value: DensityOfStatesPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get legend() {
            return this.requiredProp<DensityOfStatesPropertySchema["legend"]>("legend");
        },
        set legend(value: DensityOfStatesPropertySchema["legend"]) {
            this.setProp("legend", value);
        },
        get xDataArray() {
            return this.requiredProp<DensityOfStatesPropertySchema["xDataArray"]>("xDataArray");
        },
        set xDataArray(value: DensityOfStatesPropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<DensityOfStatesPropertySchema["yDataSeries"]>("yDataSeries");
        },
        set yDataSeries(value: DensityOfStatesPropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
