import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";

export type JupyterNotebookEndpointPropertySchemaMixin = Omit<
    JupyterNotebookEndpointPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type JupyterNotebookEndpointPropertyInMemoryEntity = InMemoryEntity &
    JupyterNotebookEndpointPropertySchemaMixin;

export function jupyterNotebookEndpointPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & JupyterNotebookEndpointPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity & JupyterNotebookEndpointPropertySchemaMixin = {
        get name() {
            return this.requiredProp<JupyterNotebookEndpointPropertySchema["name"]>("name");
        },
        set name(value: JupyterNotebookEndpointPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get host() {
            return this.requiredProp<JupyterNotebookEndpointPropertySchema["host"]>("host");
        },
        set host(value: JupyterNotebookEndpointPropertySchema["host"]) {
            this.setProp("host", value);
        },
        get port() {
            return this.requiredProp<JupyterNotebookEndpointPropertySchema["port"]>("port");
        },
        set port(value: JupyterNotebookEndpointPropertySchema["port"]) {
            this.setProp("port", value);
        },
        get token() {
            return this.requiredProp<JupyterNotebookEndpointPropertySchema["token"]>("token");
        },
        set token(value: JupyterNotebookEndpointPropertySchema["token"]) {
            this.setProp("token", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
