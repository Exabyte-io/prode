import { expect } from "chai";

import FileContentProperty from "../../src/js/include/primitive/FileContentProperty";

describe("FileContentProperty", () => {
    it("should create a file content property with text file data", () => {
        const config = {
            name: "file_content",
            filetype: "text",
            objectData: {
                CONTAINER: "materials-data",
                NAME: "output.txt",
                PROVIDER: "aws",
                REGION: "us-east-1",
                SIZE: 1024,
                TIMESTAMP: "2023-12-01T10:30:00Z",
            },
            pathname: "/results/calculation_123",
            basename: "output.txt",
        };

        const fileContentProperty = new FileContentProperty(config);

        expect(fileContentProperty.name).equal("file_content");
        expect(fileContentProperty.filetype).equal("text");
        expect(fileContentProperty.basename).equal("output.txt");
        expect(fileContentProperty.pathname).equal("/results/calculation_123");
        expect(fileContentProperty.objectData.CONTAINER).equal("materials-data");
        expect(fileContentProperty.objectData.PROVIDER).equal("aws");
        expect(fileContentProperty.objectData.SIZE).equal(1024);
    });

    it("should handle image file data", () => {
        const config = {
            name: "file_content",
            filetype: "image",
            objectData: {
                CONTAINER: "images",
                NAME: "band_structure.png",
                PROVIDER: "gcp",
                REGION: "us-central1",
                SIZE: 2048576,
                TIMESTAMP: "2023-12-01T15:45:00Z",
            },
            basename: "band_structure.png",
        };

        const fileContentProperty = new FileContentProperty(config);

        expect(fileContentProperty.filetype).equal("image");
        expect(fileContentProperty.basename).equal("band_structure.png");
        expect(fileContentProperty.objectData.SIZE).equal(2048576);
        expect(fileContentProperty.pathname).equal(undefined);
    });

    it("should handle CSV file data", () => {
        const config = {
            name: "file_content",
            filetype: "csv",
            objectData: {
                CONTAINER: "data-exports",
                NAME: "energy_data.csv",
                PROVIDER: "azure",
                REGION: "eastus",
                SIZE: 51200,
                TIMESTAMP: "2023-12-01T20:15:00Z",
            },
            pathname: "/exports/energy_analysis",
            basename: "energy_data.csv",
        };

        const fileContentProperty = new FileContentProperty(config);

        expect(fileContentProperty.filetype).equal("csv");
        expect(fileContentProperty.basename).equal("energy_data.csv");
        expect(fileContentProperty.objectData.PROVIDER).equal("azure");
        expect(fileContentProperty.objectData.REGION).equal("eastus");
    });

    it("should handle minimal object data", () => {
        const config = {
            name: "file_content",
            filetype: "text",
            objectData: {
                NAME: "minimal.txt",
                SIZE: 100,
            },
            basename: "minimal.txt",
        };

        const fileContentProperty = new FileContentProperty(config);

        expect(fileContentProperty.filetype).equal("text");
        expect(fileContentProperty.basename).equal("minimal.txt");
        expect(fileContentProperty.objectData.NAME).equal("minimal.txt");
        expect(fileContentProperty.objectData.SIZE).equal(100);
        expect(fileContentProperty.objectData.CONTAINER).equal(undefined);
        expect(fileContentProperty.objectData.PROVIDER).equal(undefined);
        expect(fileContentProperty.pathname).equal(undefined);
    });

    it("should support all file types", () => {
        const filetypes = ["image", "text", "csv"];

        filetypes.forEach((filetype) => {
            const config = {
                name: "file_content",
                filetype,
                objectData: {
                    NAME: `test.${filetype}`,
                    SIZE: 1000,
                },
                basename: `test.${filetype}`,
            };

            const fileContentProperty = new FileContentProperty(config);
            expect(fileContentProperty.filetype).equal(filetype);
        });
    });
});
