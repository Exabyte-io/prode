import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";
import Property from "../../Property";
type Schema = JupyterNotebookEndpointPropertySchema;
export default class JupyterNotebookEndpointProperty extends Property implements Schema {
    readonly name: Schema["name"];
    constructor(config: object);
    get host(): string;
    get port(): number;
    get token(): string;
}
export {};
