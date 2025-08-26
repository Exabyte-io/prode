import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";

import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";

type Schema = WorkflowPropertySchema;

export default class WorkflowProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.workflow_pyml_predict;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: WorkflowProperty.propertyName });
    }

    get subworkflows() {
        return this.requiredProp<WorkflowPropertySchema["subworkflows"]>("subworkflows");
    }

    get units() {
        return this.requiredProp<WorkflowPropertySchema["units"]>("units");
    }

    get properties() {
        return this.prop<WorkflowPropertySchema["properties"]>("properties");
    }

    get isUsingDataset() {
        return this.prop<WorkflowPropertySchema["isUsingDataset"]>("isUsingDataset");
    }

    get workflows() {
        return this.prop<WorkflowPropertySchema["workflows"]>("workflows");
    }

    get isDefault() {
        return this.prop<WorkflowPropertySchema["isDefault"]>("isDefault");
    }

    get metadata() {
        return this.prop<WorkflowPropertySchema["metadata"]>("metadata");
    }
}
