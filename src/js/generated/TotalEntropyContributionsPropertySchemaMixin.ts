import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEntropyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type TotalEntropyContributionsPropertySchemaMixin = Omit<
    TotalEntropyContributionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type TotalEntropyContributionsPropertyInMemoryEntity = InMemoryEntity &
    TotalEntropyContributionsPropertySchemaMixin;

export function totalEntropyContributionsPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & TotalEntropyContributionsPropertySchemaMixin = {
        get translational() {
            return this.prop<TotalEntropyContributionsPropertySchema["translational"]>(
                "translational",
            );
        },
        get rotational() {
            return this.prop<TotalEntropyContributionsPropertySchema["rotational"]>("rotational");
        },
        get vibrational() {
            return this.prop<TotalEntropyContributionsPropertySchema["vibrational"]>("vibrational");
        },
        get name() {
            return this.requiredProp<TotalEntropyContributionsPropertySchema["name"]>("name");
        },
        get units() {
            return this.prop<TotalEntropyContributionsPropertySchema["units"]>("units");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
