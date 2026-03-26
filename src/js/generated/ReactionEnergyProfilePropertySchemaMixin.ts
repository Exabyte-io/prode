import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";

export type ReactionEnergyProfilePropertySchemaMixin = Omit<
    ReactionEnergyProfilePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ReactionEnergyProfilePropertyInMemoryEntity = InMemoryEntity &
    ReactionEnergyProfilePropertySchemaMixin;

export function reactionEnergyProfilePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ReactionEnergyProfilePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & ReactionEnergyProfilePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp<ReactionEnergyProfilePropertySchema["xAxis"]>("xAxis");
        },
        set xAxis(value: ReactionEnergyProfilePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp<ReactionEnergyProfilePropertySchema["yAxis"]>("yAxis");
        },
        set yAxis(value: ReactionEnergyProfilePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp<ReactionEnergyProfilePropertySchema["name"]>("name");
        },
        set name(value: ReactionEnergyProfilePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp<ReactionEnergyProfilePropertySchema["xDataArray"]>(
                "xDataArray",
            );
        },
        set xDataArray(value: ReactionEnergyProfilePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp<ReactionEnergyProfilePropertySchema["yDataSeries"]>(
                "yDataSeries",
            );
        },
        set yDataSeries(value: ReactionEnergyProfilePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
