/* eslint-disable no-unused-expressions */
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import ProtoPropertyHolder from "../../src/js/holders/ProtoPropertyHolder";
import AtomicConstraintsProperty from "../../src/js/proto_properties/AtomicConstraintsProperty";
import BoundaryConditionsProperty from "../../src/js/proto_properties/BoundaryConditionsProperty";

describe("ProtoPropertyHolder", () => {
    let protoPropertyHolder: ProtoPropertyHolder;
    let mockData: ProtoPropertyHolderSchema;

    beforeEach(() => {
        mockData = {
            data: {
                name: PropertyName.boundary_conditions,
                type: "pbc",
                offset: 0.0,
            },
            source: {
                type: "exabyte",
                info: {
                    materialId: "proto-123",
                },
            },
        };

        protoPropertyHolder = new ProtoPropertyHolder(mockData);
    });

    describe("instantiation", () => {
        it("should create a ProtoPropertyHolder instance", () => {
            expect(protoPropertyHolder).to.be.instanceOf(ProtoPropertyHolder);
        });

        it("should extend InMemoryEntity", () => {
            expect(protoPropertyHolder).to.have.property("prop");
            expect(protoPropertyHolder).to.have.property("requiredProp");
        });
    });

    describe("data property", () => {
        it("should return data property", () => {
            const { data } = protoPropertyHolder;
            expect(data).to.be.an("object");
            expect(data).to.have.property("name", PropertyName.boundary_conditions);
        });

        it("should have correct data structure", () => {
            const { data } = protoPropertyHolder;
            expect(data).to.have.property("type", "pbc");
            expect(data).to.have.property("offset", 0.0);
        });
    });

    describe("source property", () => {
        it("should return source property", () => {
            const { source } = protoPropertyHolder;
            expect(source).to.be.an("object");
            expect(source).to.have.property("type", "exabyte");
        });

        it("should have correct source structure", () => {
            const { source } = protoPropertyHolder;
            expect(source).to.have.property("info");
            expect(source.info).to.have.property("materialId", "proto-123");
        });
    });

    describe("property creation", () => {
        it("should create property via PropertyFactory", () => {
            const { property } = protoPropertyHolder;
            expect(property).to.exist;
            expect(property).to.be.an("object");
        });

        it("should create correct property type", () => {
            const { property } = protoPropertyHolder;
            expect(property.name).to.equal(PropertyName.boundary_conditions);
        });

        it("should have access to property methods", () => {
            const { property } = protoPropertyHolder;
            const boundaryProperty = property as BoundaryConditionsProperty;
            expect(boundaryProperty).to.have.property("type");
            expect(boundaryProperty).to.have.property("offset");
        });

        it("should return correct type", () => {
            const { property } = protoPropertyHolder;
            const boundaryProperty = property as BoundaryConditionsProperty;
            expect(boundaryProperty.type).to.equal("pbc");
        });

        it("should return correct offset", () => {
            const { property } = protoPropertyHolder;
            const boundaryProperty = property as BoundaryConditionsProperty;
            expect(boundaryProperty.offset).to.equal(0.0);
        });
    });

    describe("different proto property types", () => {
        it("should handle boundary conditions with different types", () => {
            const periodicData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "pbc",
                    offset: 0.0,
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "periodic-123",
                    },
                },
            };

            const periodicHolder = new ProtoPropertyHolder(periodicData);
            expect(periodicHolder).to.exist;
            expect(periodicHolder.data.name).to.equal(PropertyName.boundary_conditions);
            expect((periodicHolder.property as BoundaryConditionsProperty).type).to.equal("pbc");
        });

        it("should handle boundary conditions with different offsets", () => {
            const offsetData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "bc1",
                    offset: 0.5,
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "offset-123",
                    },
                },
            };

            const offsetHolder = new ProtoPropertyHolder(offsetData);
            expect(offsetHolder).to.exist;
            expect((offsetHolder.property as BoundaryConditionsProperty).offset).to.equal(0.5);
        });

        it("should handle atomic constraints", () => {
            const constraintsData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.atomic_constraints,
                    values: [
                        { id: 0, value: [true, true, true] as [boolean, boolean, boolean] },
                        { id: 1, value: [false, false, false] as [boolean, boolean, boolean] },
                        { id: 2, value: [true, false, true] as [boolean, boolean, boolean] },
                    ],
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "constraints-123",
                    },
                },
            };

            const constraintsHolder = new ProtoPropertyHolder(constraintsData);
            expect(constraintsHolder).to.exist;
            expect(constraintsHolder.data.name).to.equal(PropertyName.atomic_constraints);
            expect((constraintsHolder.property as AtomicConstraintsProperty).values).to.deep.equal([
                { id: 0, value: [true, true, true] },
                { id: 1, value: [false, false, false] },
                { id: 2, value: [true, false, true] },
            ]);
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle different boundary condition types", () => {
            const bc2Data: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "bc2",
                    offset: 1.0,
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "bc2-123",
                    },
                },
            };

            const bc2Holder = new ProtoPropertyHolder(bc2Data);
            expect(bc2Holder).to.exist;
            expect((bc2Holder.property as BoundaryConditionsProperty).type).to.equal("bc2");
        });

        it("should handle different source types", () => {
            const customSourceData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "pbc",
                    offset: 0.0,
                },
                source: {
                    type: "custom",
                    info: {
                        materialId: "custom-123",
                    },
                },
            };

            const customHolder = new ProtoPropertyHolder(customSourceData);
            expect(customHolder).to.exist;
            expect(customHolder.source.type).to.equal("custom");
            expect(customHolder.source.info).to.have.property("materialId", "custom-123");
        });

        it("should handle complex atomic constraints", () => {
            const complexConstraintsData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.atomic_constraints,
                    values: [
                        { id: 0, value: [true, true, true] as [boolean, boolean, boolean] },
                        { id: 1, value: [false, false, false] as [boolean, boolean, boolean] },
                        { id: 2, value: [true, false, true] as [boolean, boolean, boolean] },
                        { id: 3, value: [false, true, false] as [boolean, boolean, boolean] },
                        { id: 4, value: [true, true, false] as [boolean, boolean, boolean] },
                        { id: 5, value: [false, true, true] as [boolean, boolean, boolean] },
                    ],
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "complex-123",
                    },
                },
            };

            const complexHolder = new ProtoPropertyHolder(complexConstraintsData);
            expect(complexHolder).to.exist;
            expect((complexHolder.property as AtomicConstraintsProperty).values).to.have.length(6);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = protoPropertyHolder.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("data");
            expect(json).to.have.property("source");
        });

        it("should have _json property", () => {
            expect(protoPropertyHolder._json).to.exist;
            expect(protoPropertyHolder._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = protoPropertyHolder.toJSON();
            expect(json.data).to.have.property("name", PropertyName.boundary_conditions);
            expect(json.data).to.have.property("type", "pbc");
            expect(json.data).to.have.property("offset", 0.0);
            expect(json.source).to.have.property("type", "exabyte");
        });
    });

    describe("integration with PropertyFactory", () => {
        it("should work with PropertyFactory.createProtoProperty", () => {
            const { data } = protoPropertyHolder;
            const { property } = protoPropertyHolder;

            expect(property).to.exist;
            expect(property.name).to.equal(data.name);
        });

        it("should handle different proto property names", () => {
            const constraintsData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.atomic_constraints,
                    values: [
                        { id: 0, value: [true, true, true] as [boolean, boolean, boolean] },
                        { id: 1, value: [false, false, false] as [boolean, boolean, boolean] },
                    ],
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "constraints-456",
                    },
                },
            };

            const constraintsHolder = new ProtoPropertyHolder(constraintsData);
            expect(constraintsHolder.property.name).to.equal(PropertyName.atomic_constraints);
        });
    });

    describe("property inheritance", () => {
        it("should inherit from InMemoryEntity", () => {
            expect(protoPropertyHolder).to.have.property("prop");
            expect(protoPropertyHolder).to.have.property("requiredProp");
            expect(typeof protoPropertyHolder.prop).to.equal("function");
            expect(typeof protoPropertyHolder.requiredProp).to.equal("function");
        });

        it("should have mixin properties", () => {
            expect(protoPropertyHolder).to.have.property("data");
            expect(protoPropertyHolder).to.have.property("source");
            expect(protoPropertyHolder).to.have.property("property");
            expect(typeof protoPropertyHolder.data).to.not.equal("function");
            expect(typeof protoPropertyHolder.source).to.not.equal("function");
            expect(typeof protoPropertyHolder.property).to.not.equal("function");
        });
    });

    describe("complex scenarios", () => {
        it("should handle different boundary condition types", () => {
            const bc3Data: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "bc3",
                    offset: -0.5,
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "bc3-123",
                    },
                },
            };

            const bc3Holder = new ProtoPropertyHolder(bc3Data);
            expect(bc3Holder).to.exist;
            expect((bc3Holder.property as BoundaryConditionsProperty).type).to.equal("bc3");
            expect((bc3Holder.property as BoundaryConditionsProperty).offset).to.equal(-0.5);
        });

        it("should handle large atomic constraints arrays", () => {
            const largeConstraintsData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.atomic_constraints,
                    values: Array.from({ length: 100 }, (_, i) => ({
                        id: i,
                        value: [i % 2 === 0, i % 3 === 0, i % 5 === 0] as [
                            boolean,
                            boolean,
                            boolean,
                        ],
                    })),
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "large-123",
                    },
                },
            };

            const largeHolder = new ProtoPropertyHolder(largeConstraintsData);
            expect(largeHolder).to.exist;
            expect((largeHolder.property as AtomicConstraintsProperty).values).to.have.length(100);
            expect((largeHolder.property as AtomicConstraintsProperty).values[0]).to.deep.equal({
                id: 0,
                value: [true, true, true],
            });
            expect((largeHolder.property as AtomicConstraintsProperty).values[1]).to.deep.equal({
                id: 1,
                value: [false, false, false],
            });
        });

        it("should handle different offset values", () => {
            const offsetData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.boundary_conditions,
                    type: "pbc",
                    offset: 2.5,
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "offset-123",
                    },
                },
            };

            const offsetHolder = new ProtoPropertyHolder(offsetData);
            expect(offsetHolder).to.exist;
            expect((offsetHolder.property as BoundaryConditionsProperty).offset).to.equal(2.5);
        });

        it("should handle different constraint values", () => {
            const constraintData: ProtoPropertyHolderSchema = {
                data: {
                    name: PropertyName.atomic_constraints,
                    values: [
                        { id: 0, value: [true, false, true] as [boolean, boolean, boolean] },
                        { id: 1, value: [false, true, false] as [boolean, boolean, boolean] },
                        { id: 2, value: [true, true, false] as [boolean, boolean, boolean] },
                    ],
                },
                source: {
                    type: "exabyte",
                    info: {
                        materialId: "constraint-123",
                    },
                },
            };

            const constraintHolder = new ProtoPropertyHolder(constraintData);
            expect(constraintHolder).to.exist;
            expect((constraintHolder.property as AtomicConstraintsProperty).values).to.deep.equal([
                { id: 0, value: [true, false, true] },
                { id: 1, value: [false, true, false] },
                { id: 2, value: [true, true, false] },
            ]);
        });
    });
});
