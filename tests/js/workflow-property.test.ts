/* eslint-disable no-unused-expressions */
import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import WorkflowProperty from "../../src/js/properties/non-scalar/WorkflowProperty";

describe("WorkflowProperty", () => {
    let workflowProperty: WorkflowProperty;
    let mockConfig: WorkflowPropertySchema;

    beforeEach(() => {
        mockConfig = {
            name: "workflow:pyml_predict",
            subworkflows: [
                {
                    units: [
                        {
                            type: "io",
                            subtype: "input",
                            source: "api",
                            input: [
                                {
                                    endpoint: "https://api.example.com/data",
                                    endpoint_options: {},
                                    name: "input_data",
                                },
                            ],
                            flowchartId: "unit-1",
                            name: "data_loader",
                        },
                    ],
                    model: {
                        type: "test_type",
                        subtype: "test_subtype",
                        method: {
                            type: "test_method_type",
                            subtype: "test_method_subtype",
                        },
                    },
                    application: {
                        shortName: "test_app",
                        summary: "Test application",
                        version: "1.0.0",
                    },
                    name: "test_subworkflow",
                },
            ],
            units: [
                {
                    type: "io",
                    subtype: "input",
                    source: "api",
                    input: [
                        {
                            endpoint: "https://api.example.com/data",
                            endpoint_options: {},
                        },
                    ],
                    flowchartId: "workflow-unit-1",
                },
            ],
            properties: ["workflow_type", "model_name"],
            isUsingDataset: true,
            workflows: [
                {
                    name: "preprocessing",
                    status: "completed",
                },
            ],
            isDefault: false,
            metadata: {
                created_at: "2023-01-01T00:00:00Z",
                version: "1.0.0",
            },
        };

        workflowProperty = new WorkflowProperty(mockConfig);
    });

    describe("instantiation", () => {
        it("should create a WorkflowProperty instance", () => {
            expect(workflowProperty).to.be.instanceOf(WorkflowProperty);
        });

        it("should have correct property name", () => {
            expect(WorkflowProperty.propertyName).to.equal("workflow:pyml_predict");
        });

        it("should have correct static property name", () => {
            expect(workflowProperty.constructor.name).to.equal("WorkflowProperty");
        });
    });

    describe("required properties", () => {
        it("should return subworkflows", () => {
            const { subworkflows } = workflowProperty;
            expect(subworkflows).to.be.an("array");
            expect(subworkflows).to.have.length(1);
            expect(subworkflows[0]).to.have.property("units");
        });

        it("should return units", () => {
            const { units } = workflowProperty;
            expect(units).to.be.an("array");
            expect(units).to.have.length(1);
            expect(units[0]).to.have.property("type", "io");
            expect(units[0]).to.have.property("flowchartId", "workflow-unit-1");
        });

        it("should have correct subworkflows structure", () => {
            const { subworkflows } = workflowProperty;
            expect(subworkflows[0].units).to.be.an("array");
            expect(subworkflows[0].units[0]).to.have.property("type", "io");
            expect(subworkflows[0].units[0]).to.have.property("subtype", "input");
            expect(subworkflows[0].units[0]).to.have.property("source", "api");
            expect(subworkflows[0].units[0]).to.have.property("flowchartId", "unit-1");
            expect(subworkflows[0].units[0]).to.have.property("name", "data_loader");
        });

        it("should have correct units structure", () => {
            const { units } = workflowProperty;
            expect(units).to.be.an("array");
            expect(units).to.have.length(1);
            expect(units[0]).to.have.property("type", "io");
            expect(units[0]).to.have.property("flowchartId", "workflow-unit-1");
        });
    });

    describe("optional properties", () => {
        it("should return properties", () => {
            const { properties } = workflowProperty;
            expect(properties).to.be.an("array");
            expect(properties).to.include("workflow_type");
            expect(properties).to.include("model_name");
        });

        it("should return isUsingDataset", () => {
            const { isUsingDataset } = workflowProperty;
            expect(isUsingDataset).to.be.a("boolean");
            expect(isUsingDataset).to.equal(true);
        });

        it("should return workflows", () => {
            const { workflows } = workflowProperty;
            expect(workflows).to.be.an("array");
            expect(workflows).to.have.length(1);
            expect(workflows?.[0]).to.have.property("name", "preprocessing");
            expect(workflows?.[0]).to.have.property("status", "completed");
        });

        it("should return isDefault", () => {
            const { isDefault } = workflowProperty;
            expect(isDefault).to.be.a("boolean");
            expect(isDefault).to.equal(false);
        });

        it("should return metadata", () => {
            const { metadata } = workflowProperty;
            expect(metadata).to.be.an("object");
            expect(metadata).to.have.property("created_at", "2023-01-01T00:00:00Z");
            expect(metadata).to.have.property("version", "1.0.0");
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            expect(workflowProperty.toJSON).to.be.a("function");
        });

        it("should support toJSON with exclude parameter", () => {
            const json = workflowProperty.toJSON(["metadata"]);
            expect(json).to.be.an("object");
            expect(json).to.not.have.property("metadata");
        });

        it("should have _json property", () => {
            expect(workflowProperty._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = workflowProperty.toJSON();
            expect(json).to.have.property("subworkflows");
            expect(json).to.have.property("units");
            expect(json).to.have.property("properties");
            expect(json).to.have.property("isUsingDataset");
            expect(json).to.have.property("workflows");
            expect(json).to.have.property("isDefault");
            expect(json).to.have.property("metadata");
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle minimal required data", () => {
            const minimalConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "input",
                                source: "api",
                                input: [
                                    {
                                        endpoint: "https://api.example.com/data",
                                        endpoint_options: {},
                                    },
                                ],
                                flowchartId: "unit-1",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "basic-unit-1",
                    },
                ],
            };

            const minimalProperty = new WorkflowProperty(minimalConfig);
            expect(minimalProperty.subworkflows).to.have.length(1);
            expect(minimalProperty.units).to.be.an("array");
            expect(minimalProperty.units).to.have.length(1);
        });

        it("should handle missing optional properties", () => {
            const configWithoutOptionals: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "input",
                                source: "api",
                                input: [
                                    {
                                        endpoint: "https://api.example.com/data",
                                        endpoint_options: {},
                                    },
                                ],
                                flowchartId: "unit-1",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "basic-unit-1",
                    },
                ],
            };

            const propertyWithoutOptionals = new WorkflowProperty(configWithoutOptionals);
            expect(propertyWithoutOptionals.properties).to.be.undefined;
            expect(propertyWithoutOptionals.isUsingDataset).to.be.undefined;
            expect(propertyWithoutOptionals.workflows).to.be.undefined;
            expect(propertyWithoutOptionals.isDefault).to.be.undefined;
            expect(propertyWithoutOptionals.metadata).to.be.undefined;
        });

        it("should handle different subworkflow types", () => {
            const differentTypesConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "output",
                                source: "db",
                                input: [
                                    {
                                        ids: ["id1", "id2", "id3"],
                                    },
                                ],
                                flowchartId: "output-unit",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "output",
                        source: "db",
                        input: [
                            {
                                ids: ["id1", "id2", "id3"],
                            },
                        ],
                        flowchartId: "output-workflow-unit",
                    },
                ],
            };

            const differentTypesProperty = new WorkflowProperty(differentTypesConfig);
            expect(differentTypesProperty.subworkflows[0].units[0].subtype).to.equal("output");
            expect(differentTypesProperty.subworkflows[0].units[0].source).to.equal("db");
        });

        it("should handle object storage input", () => {
            const objectStorageConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "dataFrame",
                                source: "object_storage",
                                input: [
                                    {
                                        objectData: {
                                            CONTAINER: "data-container",
                                            NAME: "dataset.csv",
                                            PROVIDER: "aws",
                                            REGION: "us-east-1",
                                            SIZE: 1024,
                                            TIMESTAMP: "2023-01-01T00:00:00Z",
                                        },
                                        pathname: "/data",
                                        basename: "dataset.csv",
                                        filetype: "csv",
                                    },
                                ],
                                flowchartId: "storage-unit",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "dataFrame",
                        source: "object_storage",
                        input: [
                            {
                                objectData: {
                                    CONTAINER: "data-container",
                                    NAME: "dataset.csv",
                                    PROVIDER: "aws",
                                    REGION: "us-east-1",
                                    SIZE: 1024,
                                    TIMESTAMP: "2023-01-01T00:00:00Z",
                                },
                                pathname: "/data",
                                basename: "dataset.csv",
                                filetype: "csv",
                            },
                        ],
                        flowchartId: "storage-workflow-unit",
                    },
                ],
            };

            const objectStorageProperty = new WorkflowProperty(objectStorageConfig);
            expect(objectStorageProperty.subworkflows[0].units[0].subtype).to.equal("dataFrame");
            expect(objectStorageProperty.subworkflows[0].units[0].source).to.equal(
                "object_storage",
            );
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple subworkflows", () => {
            const multipleSubworkflowsConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "input",
                                source: "api",
                                input: [
                                    {
                                        endpoint: "https://api.example.com/data",
                                        endpoint_options: {},
                                    },
                                ],
                                flowchartId: "input-unit",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow_1",
                    },
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "output",
                                source: "db",
                                input: [
                                    {
                                        collection: "results",
                                        draft: false,
                                    },
                                ],
                                flowchartId: "output-unit",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow_2",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "multi-workflow-unit",
                    },
                ],
            };

            const multipleSubworkflowsProperty = new WorkflowProperty(multipleSubworkflowsConfig);
            expect(multipleSubworkflowsProperty.subworkflows).to.have.length(2);
            expect(multipleSubworkflowsProperty.subworkflows[0].units[0].subtype).to.equal("input");
            expect(multipleSubworkflowsProperty.subworkflows[1].units[0].subtype).to.equal(
                "output",
            );
        });

        it("should handle complex workflow properties", () => {
            const complexPropertiesConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "input",
                                source: "api",
                                input: [
                                    {
                                        endpoint: "https://api.example.com/data",
                                        endpoint_options: {},
                                    },
                                ],
                                flowchartId: "unit-1",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "complex-workflow-unit",
                    },
                ],
                properties: ["workflow_type", "model_name", "parameters", "features"],
                isUsingDataset: true,
                workflows: [
                    {
                        name: "preprocessing",
                        status: "completed",
                        duration: 120,
                    },
                    {
                        name: "training",
                        status: "running",
                        progress: 0.75,
                    },
                ],
                isDefault: true,
                metadata: {
                    created_at: "2023-01-01T00:00:00Z",
                    updated_at: "2023-01-02T00:00:00Z",
                    version: "2.0.0",
                    author: "data_scientist",
                    tags: ["ml", "prediction", "production"],
                },
            };

            const complexPropertiesProperty = new WorkflowProperty(complexPropertiesConfig);
            expect(complexPropertiesProperty.properties).to.include("parameters");
            expect(complexPropertiesProperty.properties).to.include("features");
            expect(complexPropertiesProperty.workflows).to.have.length(2);
            expect(complexPropertiesProperty.metadata).to.have.property("tags");
        });

        it("should handle reduce type units", () => {
            const reduceTypeConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "reduce",
                                mapFlowchartId: "map-unit-1",
                                input: [
                                    {
                                        operation: "aggregate",
                                        arguments: ["sum", "mean", "max"],
                                    },
                                ],
                                flowchartId: "reduce-unit",
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "reduce-workflow-unit",
                    },
                ],
            };

            const reduceTypeProperty = new WorkflowProperty(reduceTypeConfig);
            expect(reduceTypeProperty.subworkflows[0].units[0].type).to.equal("reduce");
            expect(reduceTypeProperty.subworkflows[0].units[0]).to.have.property("mapFlowchartId");
        });

        it("should handle units with additional properties", () => {
            const additionalPropertiesConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: [
                            {
                                type: "io",
                                subtype: "input",
                                source: "api",
                                input: [
                                    {
                                        endpoint: "https://api.example.com/data",
                                        endpoint_options: {},
                                    },
                                ],
                                flowchartId: "unit-1",
                                _id: "unit-id-123",
                                isDraft: false,
                                name: "data_processor",
                                status: "active",
                                head: true,
                                next: "unit-2",
                                enableRender: true,
                                context: {
                                    variable1: "value1",
                                    variable2: "value2",
                                },
                                slug: "data-processor",
                                systemName: "production",
                                schemaVersion: "1.0.0",
                                isDefault: true,
                                preProcessors: [{ name: "data_cleaner" }, "data_validator"],
                                postProcessors: [{ name: "result_formatter" }],
                                monitors: [{ name: "performance_monitor" }],
                                results: [{ name: "prediction_result" }],
                                tags: ["ml", "production"],
                                statusTrack: [
                                    {
                                        trackedAt: 1672531200000,
                                        status: "started",
                                        repetition: 1,
                                    },
                                ],
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: [
                    {
                        type: "io",
                        subtype: "input",
                        source: "api",
                        input: [
                            {
                                endpoint: "https://api.example.com/data",
                                endpoint_options: {},
                            },
                        ],
                        flowchartId: "advanced-workflow-unit",
                        _id: "advanced-unit-id",
                        isDraft: false,
                        name: "advanced_processor",
                        status: "active",
                        head: true,
                        next: "next-unit",
                        enableRender: true,
                        context: {
                            variable1: "value1",
                            variable2: "value2",
                        },
                        slug: "advanced-processor",
                        systemName: "production",
                        schemaVersion: "1.0.0",
                        isDefault: true,
                        preProcessors: [{ name: "data_cleaner" }, "data_validator"],
                        postProcessors: [{ name: "result_formatter" }],
                        monitors: [{ name: "performance_monitor" }],
                        results: [{ name: "prediction_result" }],
                        tags: ["ml", "production"],
                        statusTrack: [
                            {
                                trackedAt: 1672531200000,
                                status: "started",
                                repetition: 1,
                            },
                        ],
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                    },
                ],
            };

            const additionalPropertiesProperty = new WorkflowProperty(additionalPropertiesConfig);
            const unit = additionalPropertiesProperty.subworkflows[0].units[0];
            expect(unit).to.have.property("_id", "unit-id-123");
            expect(unit).to.have.property("isDraft", false);
            expect(unit).to.have.property("name", "data_processor");
            expect(unit).to.have.property("status", "active");
            expect(unit).to.have.property("head", true);
            expect(unit).to.have.property("next", "unit-2");
            expect(unit).to.have.property("enableRender", true);
            expect(unit).to.have.property("context");
            expect(unit).to.have.property("preProcessors");
            expect(unit).to.have.property("postProcessors");
            expect(unit).to.have.property("monitors");
            expect(unit).to.have.property("results");
            expect(unit).to.have.property("tags");
            expect(unit).to.have.property("statusTrack");
        });

        it("should handle very long workflow chains", () => {
            const longChainConfig: Omit<WorkflowPropertySchema, "name"> = {
                subworkflows: [
                    {
                        units: Array.from({ length: 100 }, (_, i) => ({
                            type: "io",
                            subtype: "input",
                            source: "api",
                            input: [
                                {
                                    endpoint: `https://api.example.com/data${i}`,
                                    endpoint_options: {},
                                },
                            ],
                            flowchartId: `unit-${i}`,
                            next: i < 99 ? `unit-${i + 1}` : undefined,
                        })),
                        model: {
                            type: "test_type",
                            subtype: "test_subtype",
                            method: {
                                type: "test_method_type",
                                subtype: "test_method_subtype",
                            },
                        },
                        application: {
                            shortName: "test_app",
                            summary: "Test application",
                            version: "1.0.0",
                        },
                        name: "test_subworkflow",
                    },
                ],
                units: Array.from({ length: 10 }, (_, i) => ({
                    type: "io",
                    subtype: "input",
                    source: "api",
                    input: [
                        {
                            endpoint: `https://api.example.com/data${i}`,
                            endpoint_options: {},
                        },
                    ],
                    flowchartId: `workflow-unit-${i}`,
                    next: i < 9 ? `workflow-unit-${i + 1}` : undefined,
                })),
            };

            const longChainProperty = new WorkflowProperty(longChainConfig);
            expect(longChainProperty.subworkflows[0].units).to.have.length(100);
            expect(longChainProperty.units).to.have.length(10);
            expect(longChainProperty.subworkflows[0].units[0].flowchartId).to.equal("unit-0");
            expect(longChainProperty.subworkflows[0].units[99].flowchartId).to.equal("unit-99");
            expect(longChainProperty.units[0].flowchartId).to.equal("workflow-unit-0");
            expect(longChainProperty.units[9].flowchartId).to.equal("workflow-unit-9");
        });
    });
});
