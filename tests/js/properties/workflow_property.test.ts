import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import WorkflowProperty from "../../../src/js/properties/non-scalar/WorkflowProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("WorkflowProperty", () => {
    it("should create a workflow property with correct constructor, propertyType, and propertyName", () => {
        const config: Omit<WorkflowPropertySchema, "name"> = {
            workflows: [],
            subworkflows: [
                {
                    properties: [],
                    units: [
                        {
                            type: "io",
                            subtype: "input",
                            source: "api",
                            input: [
                                {
                                    type: "api",
                                    endpoint: "https://api.example.com/data",
                                    endpoint_options: {},
                                    name: "test_input",
                                },
                            ],
                            flowchartId: "unit-1",
                            name: "test_input",
                            preProcessors: [],
                            postProcessors: [],
                            monitors: [],
                            results: [],
                        },
                    ],
                    model: {
                        type: "dft",
                        subtype: "lda",
                        functional: "pz",
                        method: {
                            type: "pyml",
                            subtype: "predict",
                        },
                    },
                    application: {
                        shortName: "pyml",
                        summary: "Pyml application",
                        version: "1.0.0",
                        name: "pyml",
                        build: "1.0.0",
                    },
                    name: "test_subworkflow",
                },
            ],
            units: [
                {
                    type: "map",
                    name: "test_map",
                    flowchartId: "workflow-unit-1",
                    workflowId: "workflow-1",
                    input: {
                        target: "test_input",
                    },
                    results: [],
                    preProcessors: [],
                    postProcessors: [],
                    monitors: [],
                },
            ],
            properties: [],
        };

        const workflowProperty = new WorkflowProperty(config);

        expect(workflowProperty).to.be.instanceOf(WorkflowProperty);
        expect(WorkflowProperty.propertyType).equal(PropertyType.non_scalar);
        expect(WorkflowProperty.propertyName).equal(PropertyName.workflow_pyml_predict);
    });
});
