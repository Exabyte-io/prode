import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";
export type JupyterNotebookEndpointPropertySchemaMixin = Omit<JupyterNotebookEndpointPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type JupyterNotebookEndpointPropertyInMemoryEntity = InMemoryEntity & JupyterNotebookEndpointPropertySchemaMixin;
export declare function jupyterNotebookEndpointPropertySchemaMixin(item: InMemoryEntity): void;
