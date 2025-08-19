import Property from "../../Property";

export class WorkflowProperty extends Property {
    displayName = "";

    constructor(config: object) {
        super(config);
        this.name = "workflow:pyml_predict";
    }
}
