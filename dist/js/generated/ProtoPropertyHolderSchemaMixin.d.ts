import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
export type ProtoPropertyHolderSchemaMixin = Omit<ProtoPropertyHolderSchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ProtoPropertyHolderInMemoryEntity = InMemoryEntity & ProtoPropertyHolderSchemaMixin;
export declare function protoPropertyHolderSchemaMixin(item: InMemoryEntity): void;
