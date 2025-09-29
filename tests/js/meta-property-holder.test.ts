/* eslint-disable no-unused-expressions */
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import MetaPropertyHolder from "../../src/js/holders/MetaPropertyHolder";
import PseudopotentialProperty from "../../src/js/meta_properties/PseudopotentialProperty";

describe("MetaPropertyHolder", () => {
    let metaPropertyHolder: MetaPropertyHolder;
    let mockData: MetaPropertyHolderSchema;

    beforeEach(() => {
        mockData = {
            data: {
                name: PropertyName.pseudopotential,
                element: "Si",
                hash: "abc123def456",
                path: "/path/to/pseudopotential",
                filename: "Si_ONCV_PBE-1.2.upf",
                type: "nc",
                source: "exabyte",
                version: "1.2",
                apps: ["espresso"],
                exchangeCorrelation: {
                    functional: "pbe",
                    approximation: "gga",
                },
            },
            source: {
                type: "exabyte",
                info: {
                    jobId: "meta-123",
                    unitId: "test-unit",
                },
            },
        };

        metaPropertyHolder = new MetaPropertyHolder(mockData);
    });

    describe("instantiation", () => {
        it("should create a MetaPropertyHolder instance", () => {
            expect(metaPropertyHolder).to.be.instanceOf(MetaPropertyHolder);
        });

        it("should extend InMemoryEntity", () => {
            expect(metaPropertyHolder).to.have.property("prop");
            expect(metaPropertyHolder).to.have.property("requiredProp");
        });
    });

    describe("data property", () => {
        it("should return data property", () => {
            const { data } = metaPropertyHolder;
            expect(data).to.be.an("object");
            expect(data).to.have.property("name", PropertyName.pseudopotential);
        });

        it("should have correct data structure", () => {
            const { data } = metaPropertyHolder;
            expect(data).to.have.property("path", "/path/to/pseudopotential");
            expect(data).to.have.property("hash", "abc123def456");
            expect(data).to.have.property("element", "Si");
            expect(data).to.have.property("filename", "Si_ONCV_PBE-1.2.upf");
            expect(data).to.have.property("type", "nc");
            expect(data).to.have.property("source", "exabyte");
            expect(data).to.have.property("version", "1.2");
            expect(data).to.have.property("apps");
            expect(data).to.have.property("exchangeCorrelation");
        });

        it("should have correct apps structure", () => {
            const { data } = metaPropertyHolder;
            expect(data.apps).to.be.an("array");
            expect(data.apps).to.include("espresso");
        });

        it("should have correct exchangeCorrelation structure", () => {
            const { data } = metaPropertyHolder;
            expect(data.exchangeCorrelation).to.be.an("object");
            expect(data.exchangeCorrelation).to.have.property("functional", "pbe");
            expect(data.exchangeCorrelation).to.have.property("approximation", "gga");
        });
    });

    describe("property creation", () => {
        it("should create property via PropertyFactory", () => {
            const { property } = metaPropertyHolder;
            expect(property).to.exist;
            expect(property).to.be.an("object");
        });

        it("should create correct property type", () => {
            const { property } = metaPropertyHolder;
            expect(property.name).to.equal(PropertyName.pseudopotential);
        });

        it("should have access to property methods", () => {
            const { property } = metaPropertyHolder;
            expect(property).to.have.property("path");
            expect(property).to.have.property("hash");
            expect(property).to.have.property("element");
            expect(property).to.have.property("filename");
            expect(property).to.have.property("type");
            expect(property).to.have.property("source");
            expect(property).to.have.property("apps");
            expect(property).to.have.property("exchangeCorrelation");
        });

        it("should return correct path", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.path).to.equal("/path/to/pseudopotential");
        });

        it("should return correct hash", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.hash).to.equal("abc123def456");
        });

        it("should return correct element", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.element).to.equal("Si");
        });

        it("should return correct filename", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.filename).to.equal("Si_ONCV_PBE-1.2.upf");
        });

        it("should return correct type", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.type).to.equal("nc");
        });

        it("should return correct source", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.source).to.equal("exabyte");
        });

        it("should return correct apps", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.apps).to.deep.equal(["espresso"]);
        });

        it("should return correct exchangeCorrelation", () => {
            const property = metaPropertyHolder.property as PseudopotentialProperty;
            expect(property.exchangeCorrelation).to.deep.equal({
                functional: "pbe",
                approximation: "gga",
            });
        });
    });

    describe("different meta property types", () => {
        it("should handle pseudopotential with minimal data", () => {
            const minimalData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "H",
                    hash: "minimal123",
                    path: "/minimal/path",
                    type: "nc",
                    source: "minimal",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const minimalHolder = new MetaPropertyHolder(minimalData);
            expect(minimalHolder).to.exist;
            expect(minimalHolder.data.name).to.equal(PropertyName.pseudopotential);
            expect((minimalHolder.property as PseudopotentialProperty).path).to.equal(
                "/minimal/path",
            );
        });

        it("should handle pseudopotential with optional fields", () => {
            const optionalData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "O",
                    hash: "optional123",
                    path: "/optional/path",
                    filename: "O_ONCV_PBE-1.2.upf",
                    type: "nc",
                    source: "optional",
                    version: "1.2",
                    apps: ["espresso", "vasp"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const optionalHolder = new MetaPropertyHolder(optionalData);
            expect(optionalHolder).to.exist;
            expect((optionalHolder.property as PseudopotentialProperty).filename).to.equal(
                "O_ONCV_PBE-1.2.upf",
            );
            expect((optionalHolder.property as PseudopotentialProperty).apps).to.deep.equal([
                "espresso",
                "vasp",
            ]);
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle missing optional properties", () => {
            const minimalData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "H",
                    hash: "minimal123",
                    path: "/minimal/path",
                    type: "nc",
                    source: "minimal",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const minimalHolder = new MetaPropertyHolder(minimalData);
            expect((minimalHolder.property as PseudopotentialProperty).filename).to.be.undefined;
            expect((minimalHolder.property as PseudopotentialProperty).version).to.be.undefined;
        });

        it("should handle different source types", () => {
            const customSourceData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Fe",
                    hash: "custom123",
                    path: "/custom/path",
                    type: "paw",
                    source: "custom",
                    apps: ["vasp"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const customHolder = new MetaPropertyHolder(customSourceData);
            expect((customHolder.property as PseudopotentialProperty).source).to.equal("custom");
            expect((customHolder.property as PseudopotentialProperty).type).to.equal("paw");
        });

        it("should handle different pseudopotential types", () => {
            const usData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Si",
                    hash: "us123",
                    path: "/us/path",
                    type: "us",
                    source: "gbrv",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const usHolder = new MetaPropertyHolder(usData);
            expect((usHolder.property as PseudopotentialProperty).type).to.equal("us");
            expect((usHolder.property as PseudopotentialProperty).source).to.equal("gbrv");
        });

        it("should handle multiple apps", () => {
            const multiAppData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Si",
                    hash: "multi123",
                    path: "/multi/path",
                    type: "paw",
                    source: "vasp",
                    apps: ["vasp", "espresso", "abinit"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const multiAppHolder = new MetaPropertyHolder(multiAppData);
            expect((multiAppHolder.property as PseudopotentialProperty).apps).to.deep.equal([
                "vasp",
                "espresso",
                "abinit",
            ]);
        });
    });

    describe("JSON serialization", () => {
        it("should support toJSON method", () => {
            const json = metaPropertyHolder.toJSON();
            expect(json).to.be.an("object");
            expect(json).to.have.property("data");
        });

        it("should have _json property", () => {
            expect(metaPropertyHolder._json).to.exist;
            expect(metaPropertyHolder._json).to.be.an("object");
        });

        it("should preserve data structure in JSON", () => {
            const json = metaPropertyHolder.toJSON();
            expect(json.data).to.have.property("name", PropertyName.pseudopotential);
            expect(json.data).to.have.property("path", "/path/to/pseudopotential");
            expect(json.data).to.have.property("hash", "abc123def456");
        });
    });

    describe("integration with PropertyFactory", () => {
        it("should work with PropertyFactory.createMetaProperty", () => {
            const { data } = metaPropertyHolder;
            const { property } = metaPropertyHolder;

            expect(property).to.exist;
            expect(property.name).to.equal(data.name);
            expect((property as PseudopotentialProperty).path).to.equal(data.path);
            expect((property as PseudopotentialProperty).hash).to.equal(data.hash);
        });

        it("should handle different pseudopotential names", () => {
            const differentData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Fe",
                    hash: "different123",
                    path: "/different/path",
                    filename: "Fe_ONCV_PBE-1.2.upf",
                    type: "nc",
                    source: "exabyte",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const differentHolder = new MetaPropertyHolder(differentData);
            expect((differentHolder.property as PseudopotentialProperty).filename).to.equal(
                "Fe_ONCV_PBE-1.2.upf",
            );
        });
    });

    describe("property inheritance", () => {
        it("should inherit from InMemoryEntity", () => {
            expect(metaPropertyHolder).to.have.property("prop");
            expect(metaPropertyHolder).to.have.property("requiredProp");
            expect(typeof metaPropertyHolder.prop).to.equal("function");
            expect(typeof metaPropertyHolder.requiredProp).to.equal("function");
        });

        it("should have mixin properties", () => {
            expect(metaPropertyHolder).to.have.property("data");
            expect(metaPropertyHolder).to.have.property("property");
            expect(typeof metaPropertyHolder.data).to.not.equal("function");
            expect(typeof metaPropertyHolder.property).to.not.equal("function");
        });
    });

    describe("complex scenarios", () => {
        it("should handle multiple optional fields", () => {
            const complexData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Ti",
                    hash: "complex123",
                    path: "/complex/path",
                    filename: "Ti_ONCV_PBE-1.2.upf",
                    type: "nc",
                    source: "exabyte",
                    version: "1.2",
                    apps: ["espresso", "vasp"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const complexHolder = new MetaPropertyHolder(complexData);
            expect((complexHolder.property as PseudopotentialProperty).path).to.equal(
                "/complex/path",
            );
            expect((complexHolder.property as PseudopotentialProperty).filename).to.equal(
                "Ti_ONCV_PBE-1.2.upf",
            );
            expect((complexHolder.property as PseudopotentialProperty).apps).to.deep.equal([
                "espresso",
                "vasp",
            ]);
        });

        it("should handle edge case filenames", () => {
            const edgeCaseData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "U",
                    hash: "edge123",
                    path: "/edge/case",
                    filename: "very_long_filename_with_special_chars-1.2.3.upf",
                    type: "nc",
                    source: "exabyte",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pbe",
                        approximation: "gga",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const edgeCaseHolder = new MetaPropertyHolder(edgeCaseData);
            expect((edgeCaseHolder.property as PseudopotentialProperty).filename).to.equal(
                "very_long_filename_with_special_chars-1.2.3.upf",
            );
        });

        it("should handle different exchange correlation functionals", () => {
            const ldaData: MetaPropertyHolderSchema = {
                data: {
                    name: PropertyName.pseudopotential,
                    element: "Pb",
                    hash: "lda123",
                    path: "/lda/path",
                    type: "us",
                    source: "gbrv",
                    apps: ["espresso"],
                    exchangeCorrelation: {
                        functional: "pz",
                        approximation: "lda",
                    },
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-unit",
                    },
                },
            };

            const ldaHolder = new MetaPropertyHolder(ldaData);
            expect(
                (ldaHolder.property as PseudopotentialProperty).exchangeCorrelation,
            ).to.deep.equal({
                functional: "pz",
                approximation: "lda",
            });
        });
    });
});
