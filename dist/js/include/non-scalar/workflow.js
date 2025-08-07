"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowProperty = void 0;
const moment_1 = __importDefault(require("moment"));
const Property_1 = __importDefault(require("../../Property"));
class WorkflowProperty extends Property_1.default {
    constructor(config) {
        super(config);
        this.displayName = "";
        this.setDisplayName();
    }
    setDisplayName() {
        const defaultDisplayName = `${"workflow:ml_predict"} ${(0, moment_1.default)(
            new Date(),
        ).format("MMM D, YYYY, HH:mm A")}`;
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
exports.WorkflowProperty = WorkflowProperty;
