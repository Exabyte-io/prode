import { expect } from "chai";

import BoundaryConditionsProperty from "../../src/js/include/primitive/BoundaryConditionsProperty";

describe("BoundaryConditionsProperty", () => {
    it("should create a boundary conditions property with type and offset", () => {
        const config = {
            name: "boundary_conditions",
            type: "pbc",
            offset: 0.0,
        };

        const boundaryConditionsProperty = new BoundaryConditionsProperty(config);

        expect(boundaryConditionsProperty.name).equal("boundary_conditions");
        expect(boundaryConditionsProperty.type).equal("pbc");
        expect(boundaryConditionsProperty.offset).equal(0.0);
    });

    it("should support all boundary condition types", () => {
        const types = ["pbc", "bc1", "bc2", "bc3"];

        types.forEach((boundaryType) => {
            const config = {
                name: "boundary_conditions",
                type: boundaryType,
                offset: 0.0,
            };

            const boundaryConditionsProperty = new BoundaryConditionsProperty(config);
            expect(boundaryConditionsProperty.type).equal(boundaryType);
        });
    });

    it("should handle different offset values", () => {
        const offsets = [0.0, 0.5, 1.0, -0.5, 2.0];

        offsets.forEach((offset) => {
            const config = {
                name: "boundary_conditions",
                type: "pbc",
                offset,
            };

            const boundaryConditionsProperty = new BoundaryConditionsProperty(config);
            expect(boundaryConditionsProperty.offset).equal(offset);
        });
    });

    it("should handle periodic boundary conditions", () => {
        const config = {
            name: "boundary_conditions",
            type: "pbc",
            offset: 0.0,
        };

        const boundaryConditionsProperty = new BoundaryConditionsProperty(config);

        expect(boundaryConditionsProperty.type).equal("pbc");
        expect(boundaryConditionsProperty.offset).equal(0.0);
    });

    it("should handle boundary condition type 1", () => {
        const config = {
            name: "boundary_conditions",
            type: "bc1",
            offset: 0.5,
        };

        const boundaryConditionsProperty = new BoundaryConditionsProperty(config);

        expect(boundaryConditionsProperty.type).equal("bc1");
        expect(boundaryConditionsProperty.offset).equal(0.5);
    });

    it("should handle boundary condition type 2", () => {
        const config = {
            name: "boundary_conditions",
            type: "bc2",
            offset: 1.0,
        };

        const boundaryConditionsProperty = new BoundaryConditionsProperty(config);

        expect(boundaryConditionsProperty.type).equal("bc2");
        expect(boundaryConditionsProperty.offset).equal(1.0);
    });

    it("should handle boundary condition type 3", () => {
        const config = {
            name: "boundary_conditions",
            type: "bc3",
            offset: -0.5,
        };

        const boundaryConditionsProperty = new BoundaryConditionsProperty(config);

        expect(boundaryConditionsProperty.type).equal("bc3");
        expect(boundaryConditionsProperty.offset).equal(-0.5);
    });
});
