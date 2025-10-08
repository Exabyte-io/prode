import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";
export type IonizationPotentialElementalPropertySchemaMixin = Omit<IonizationPotentialElementalPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type IonizationPotentialElementalPropertyInMemoryEntity = InMemoryEntity & IonizationPotentialElementalPropertySchemaMixin;
export declare function ionizationPotentialElementalPropertySchemaMixin(item: InMemoryEntity): void;
