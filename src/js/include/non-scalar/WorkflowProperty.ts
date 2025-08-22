import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";

import Property from "../../Property";

export default class WorkflowProperty extends Property implements WorkflowPropertySchema {
    declare readonly name: WorkflowPropertySchema["name"];

    constructor(config: object) {
        super({ ...config, name: "workflow:pyml_predict" });
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
