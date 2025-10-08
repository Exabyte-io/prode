import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type ReactionEnergyProfilePropertySchemaMixin = Omit<ReactionEnergyProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ReactionEnergyProfilePropertyInMemoryEntity = InMemoryEntity & ReactionEnergyProfilePropertySchemaMixin;
export declare function reactionEnergyProfilePropertySchemaMixin(item: InMemoryEntity): void;
