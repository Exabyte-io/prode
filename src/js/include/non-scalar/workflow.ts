import moment from "moment";

import { Property } from "../../property";

export class WorkflowProperty extends Property {
    displayName = "";

    constructor(config: object) {
        super(config);

        this.setDisplayName();
    }

    setDisplayName() {
        const defaultDisplayName = `${"workflow:ml_predict"} ${moment(new Date()).format(
            "MMM D, YYYY, HH:mm A",
        )}`;

        // Try/catch here because when we look at the workflow on the results tab or the workflow explorer,
        // this_json.data doesn't actually exist, which errors out makes the rest of the page not render.
        try {
            // TODO: ignore this
            this.displayName =
                // @ts-expect-error
                this._json.data.displayName === "workflow:ml_predict"
                    ? defaultDisplayName
                    : // @ts-expect-error
                      this._json.data.displayName;
        } catch (error) {
            console.error(
                "WorkflowProperty.setDisplayName: displayname extraction resulted in error. Using default.",
            );
            this.displayName = defaultDisplayName;
        }
    }
}
