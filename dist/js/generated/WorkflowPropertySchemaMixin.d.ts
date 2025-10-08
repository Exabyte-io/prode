import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";
export type WorkflowPropertySchemaMixin = Omit<WorkflowPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type WorkflowPropertyInMemoryEntity = InMemoryEntity & WorkflowPropertySchemaMixin;
export declare function workflowPropertySchemaMixin(item: InMemoryEntity): void;
