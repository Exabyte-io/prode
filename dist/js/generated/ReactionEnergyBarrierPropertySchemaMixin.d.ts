import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ReactionEnergyBarrierPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ReactionEnergyBarrierPropertySchemaMixin = Omit<ReactionEnergyBarrierPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ReactionEnergyBarrierPropertyInMemoryEntity = InMemoryEntity & ReactionEnergyBarrierPropertySchemaMixin;
export declare function reactionEnergyBarrierPropertySchemaMixin(item: InMemoryEntity): void;
