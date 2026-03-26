import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

export type PhononDispersionsPropertySchemaMixin = Omit<
    PhononBandStructurePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PhononDispersionsPropertyInMemoryEntity = InMemoryEntity &
    PhononDispersionsPropertySchemaMixin;

export function phononDispersionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PhononDispersionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & PhononDispersionsPropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<PhononBandStructurePropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: PhononBandStructurePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<PhononBandStructurePropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: PhononBandStructurePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<PhononBandStructurePropertySchema["name"]>("name");
        },
        set name(value: PhononBandStructurePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp<PhononBandStructurePropertySchema["xDataArray"]>("xDataArray");
        },
        set xDataArray(value: PhononBandStructurePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<PhononBandStructurePropertySchema["yDataSeries"]>(
                "yDataSeries",
            );
        },
        set yDataSeries(value: PhononBandStructurePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
