import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEntropyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type TotalEntropyPropertySchemaMixin = Omit<
    TotalEntropyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type TotalEntropyPropertyInMemoryEntity = InMemoryEntity & TotalEntropyPropertySchemaMixin;

export function totalEntropyPropertySchemaMixin(item: InMemoryEntity) {
    // @ts-expect-error
    const properties: InMemoryEntity & TotalEntropyPropertySchemaMixin = {
        get name() {
            return this.requiredProp<TotalEntropyPropertySchema["name"]>("name");
        },
        get units() {
            return this.requiredProp<TotalEntropyPropertySchema["units"]>("units");
        },
        get value() {
            return this.requiredProp<TotalEntropyPropertySchema["value"]>("value");
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
