import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";
import { WorkflowPropertySchemaMixin } from "../../generated/WorkflowPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = WorkflowPropertySchema;
type Base = typeof Property<Schema> & Constructor<WorkflowPropertySchemaMixin>;
declare const WorkflowProperty_base: Base;
export default class WorkflowProperty extends WorkflowProperty_base implements Schema {
    static readonly propertyName = PropertyName.workflow_pyml_predict;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
