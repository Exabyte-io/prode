import { expect } from "chai";

import JupyterNotebookEndpointProperty from "../../src/js/include/non-scalar/JupyterNotebookEndpointProperty";

describe("JupyterNotebookEndpointProperty", () => {
    it("should create a jupyter notebook endpoint property with host, port, and token", () => {
        const config = {
            name: "jupyter_notebook_endpoint",
            host: "localhost",
            port: 8888,
            token: "abc123def456",
        };

        const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);

        expect(jupyterNotebookEndpointProperty.name).equal("jupyter_notebook_endpoint");
        expect(jupyterNotebookEndpointProperty.host).equal("localhost");
        expect(jupyterNotebookEndpointProperty.port).equal(8888);
        expect(jupyterNotebookEndpointProperty.token).equal("abc123def456");
    });

    it("should handle different host configurations", () => {
        const hosts = ["localhost", "127.0.0.1", "jupyter.example.com", "192.168.1.100"];

        hosts.forEach((host) => {
            const config = {
                name: "jupyter_notebook_endpoint",
                host,
                port: 8888,
                token: "test-token",
            };

            const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);
            expect(jupyterNotebookEndpointProperty.host).equal(host);
        });
    });

    it("should handle different port numbers", () => {
        const ports = [8888, 9000, 8080, 9999];

        ports.forEach((port) => {
            const config = {
                name: "jupyter_notebook_endpoint",
                host: "localhost",
                port,
                token: "test-token",
            };

            const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);
            expect(jupyterNotebookEndpointProperty.port).equal(port);
        });
    });

    it("should handle different token formats", () => {
        const tokens = [
            "simple-token",
            "abc123def456",
            "very-long-token-with-many-characters",
            "token_with_underscores",
            "token-with-dashes",
        ];

        tokens.forEach((token) => {
            const config = {
                name: "jupyter_notebook_endpoint",
                host: "localhost",
                port: 8888,
                token,
            };

            const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);
            expect(jupyterNotebookEndpointProperty.token).equal(token);
        });
    });

    it("should handle production server configuration", () => {
        const config = {
            name: "jupyter_notebook_endpoint",
            host: "jupyter.production.com",
            port: 443,
            token: "prod-token-xyz789",
        };

        const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);

        expect(jupyterNotebookEndpointProperty.host).equal("jupyter.production.com");
        expect(jupyterNotebookEndpointProperty.port).equal(443);
        expect(jupyterNotebookEndpointProperty.token).equal("prod-token-xyz789");
    });

    it("should handle local development configuration", () => {
        const config = {
            name: "jupyter_notebook_endpoint",
            host: "127.0.0.1",
            port: 8888,
            token: "dev-token-123",
        };

        const jupyterNotebookEndpointProperty = new JupyterNotebookEndpointProperty(config);

        expect(jupyterNotebookEndpointProperty.host).equal("127.0.0.1");
        expect(jupyterNotebookEndpointProperty.port).equal(8888);
        expect(jupyterNotebookEndpointProperty.token).equal("dev-token-123");
    });
});
