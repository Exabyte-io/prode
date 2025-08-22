import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

type Schema = JupyterNotebookEndpointPropertySchema;

export default class JupyterNotebookEndpointProperty extends Property implements Schema {
    declare readonly name: Schema["name"];

    constructor(config: object) {
        super({ ...config, name: "jupyter_notebook_endpoint" });
    }

    get host() {
        return this.requiredProp<Schema["host"]>("host");
    }

    get port() {
        return this.requiredProp<Schema["port"]>("port");
    }

    get token() {
        return this.requiredProp<Schema["token"]>("token");
    }
}
