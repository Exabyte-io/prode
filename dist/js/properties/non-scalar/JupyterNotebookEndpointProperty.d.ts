import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";
import { JupyterNotebookEndpointPropertySchemaMixin } from "../../generated/JupyterNotebookEndpointPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = JupyterNotebookEndpointPropertySchema;
type Base = typeof Property<Schema> & Constructor<JupyterNotebookEndpointPropertySchemaMixin>;
declare const JupyterNotebookEndpointProperty_base: Base;
declare class JupyterNotebookEndpointProperty extends JupyterNotebookEndpointProperty_base implements Schema {
    static readonly propertyName = PropertyName.jupyter_notebook_endpoint;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export default JupyterNotebookEndpointProperty;
