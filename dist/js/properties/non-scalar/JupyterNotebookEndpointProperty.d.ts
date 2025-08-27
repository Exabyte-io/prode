import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = JupyterNotebookEndpointPropertySchema;
declare class JupyterNotebookEndpointProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.jupyter_notebook_endpoint;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
    get host(): string;
    get port(): number;
    get token(): string;
}
export default JupyterNotebookEndpointProperty;
