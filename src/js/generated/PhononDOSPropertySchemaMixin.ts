import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type PhononDOSPropertySchemaMixin = Omit<
    PhononDensityOfStatesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PhononDOSPropertyInMemoryEntity = InMemoryEntity & PhononDOSPropertySchemaMixin;

export function phononDOSPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PhononDOSPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & PhononDOSPropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<PhononDensityOfStatesPropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: PhononDensityOfStatesPropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<PhononDensityOfStatesPropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: PhononDensityOfStatesPropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<PhononDensityOfStatesPropertySchema["name"]>("name");
        },
        set name(value: PhononDensityOfStatesPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp<PhononDensityOfStatesPropertySchema["xDataArray"]>(
                "xDataArray",
            );
        },
        set xDataArray(value: PhononDensityOfStatesPropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<PhononDensityOfStatesPropertySchema["yDataSeries"]>(
                "yDataSeries",
            );
        },
        set yDataSeries(value: PhononDensityOfStatesPropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
