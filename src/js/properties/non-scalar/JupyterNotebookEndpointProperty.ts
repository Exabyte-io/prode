import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = JupyterNotebookEndpointPropertySchema;

class JupyterNotebookEndpointProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.jupyter_notebook_endpoint;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: JupyterNotebookEndpointProperty.propertyName });
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

export default JupyterNotebookEndpointProperty;
