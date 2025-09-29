/* eslint-disable no-unused-expressions */
import { expect } from "chai";

import Pseudopotential from "../../src/js/meta_properties/PseudopotentialProperty";

const PSEUDO_CONFIGS = [
    {
        element: "Si",
        hash: "031e731297e9d8d5caaeaacb5bb524fa",
        filename: "si_pbe_dojo-oncv_0.4.upf",
        path: "/export/share/pseudo/si/gga/pbe/dojo-oncv/0.4/nc/si_pbe_dojo-oncv_0.4.upf",
        apps: ["espresso"],
        exchangeCorrelation: {
            functional: "pbe",
            approximation: "gga",
        },
        name: "pseudopotential",
        source: "dojo-oncv",
        type: "nc",
        version: "0.4",
    },
    {
        element: "Si",
        hash: "9d3353ad597f4669d598900a4a25d674",
        filename: "si_pbe_gbrv_1.0.upf",
        path: "/export/share/pseudo/si/gga/pbe/gbrv/1.0/us/si_pbe_gbrv_1.0.upf",
        apps: ["espresso"],
        exchangeCorrelation: {
            functional: "pbe",
            approximation: "gga",
        },
        name: "pseudopotential",
        source: "gbrv",
        type: "us",
        version: "1.0",
    },
    {
        element: "Si",
        hash: "eb5cf1f3d2ace01b2b16e15c7cdbbb22",
        filename: "POTCAR",
        path: "/export/share/pseudo/si/gga/pbe/vasp/5.2/paw/default/POTCAR",
        apps: ["vasp"],
        exchangeCorrelation: {
            functional: "pbe",
            approximation: "gga",
        },
        name: "pseudopotential",
        source: "vasp",
        type: "paw",
        version: "5.2",
    },
    {
        element: "Pb",
        hash: "c464c3afe3f71cdb0fa2da3dd0badea4",
        filename: "pb_pz_gbrv_1.0.upf",
        path: "/export/share/pseudo/pb/lda/pz/gbrv/1.0/us/pb_pz_gbrv_1.0.upf",
        apps: ["espresso"],
        exchangeCorrelation: {
            functional: "pz",
            approximation: "lda",
        },
        name: "pseudopotential",
        source: "gbrv",
        type: "us",
        version: "1.0",
    },
];

describe("Pseudopotential", () => {
    const pp = new Pseudopotential(PSEUDO_CONFIGS[2]);

    it("gets element", () => {
        expect(pp.element).to.be.a("string").that.is.equal("Si");
    });

    it("gets filename", () => {
        expect(pp.filename).to.be.a("string").that.is.equal("POTCAR");
    });

    it("gets applications", () => {
        expect(pp.apps).to.be.an("array").that.includes("vasp");
    });

    it("gets path", () => {
        expect(pp.path)
            .to.be.a("string")
            .that.is.equal("/export/share/pseudo/si/gga/pbe/vasp/5.2/paw/default/POTCAR");
    });

    it("gets exchangeCorrelation", () => {
        expect(pp.exchangeCorrelation)
            .to.be.an("object")
            .that.has.all.keys("functional", "approximation");
        expect(pp.exchangeCorrelation).to.have.property("functional", "pbe");
        expect(pp.exchangeCorrelation).to.have.property("approximation", "gga");
    });

    it("gets source", () => {
        expect(pp.source).to.be.a("string").that.is.equal("vasp");
    });

    it("gets type", () => {
        expect(pp.type).to.be.a("string").that.is.equal("paw");
    });

    it("gets isCustom", () => {
        expect(pp.isCustom).to.be.a("boolean");
    });
});

describe("Pseudopotentials", () => {
    const pseudos = PSEUDO_CONFIGS.map((p) => new Pseudopotential(p));
    const filterObj = {
        exchangeCorrelation: {
            functional: "pbe",
            approximation: "gga",
        },
        searchText: "gbrv",
    };
    const filterObj2 = {
        appName: "espresso",
        elements: ["Pb"],
    };

    it("can be sorted by default pattern: '/gbrv/'", () => {
        const sortedPseudos = Pseudopotential.sortPseudosByPattern(pseudos);
        expect(sortedPseudos[0].source).to.equal("gbrv");
    });
    it("can be sorted by default path for VASP version 5.2", () => {
        const sortedPseudos = Pseudopotential.sortByPathVASP(pseudos);
        expect(sortedPseudos[0].source).to.equal("vasp");
    });
    it("can be filtered by exchangeCorrelation and searchText at once", () => {
        const { functional: func, approximation: appr } = filterObj.exchangeCorrelation;
        // @ts-expect-error
        const filtered = Pseudopotential.applyPseudoFilters(pseudos, filterObj);
        // may need to be adjusted when new pseudos array is modified!
        expect(filtered).to.have.lengthOf(1);
        expect(filtered[0].exchangeCorrelation).to.have.property("functional", func);
        expect(filtered[0].exchangeCorrelation).to.have.property("approximation", appr);
        expect(filtered[0].source).to.be.equal(filterObj.searchText);
    });
    it("can be filtered by appName and elements at once", () => {
        const filtered = Pseudopotential.applyPseudoFilters(pseudos, filterObj2);
        // may need to be adjusted when new pseudos array is modified!
        expect(filtered).to.have.lengthOf(1);
        expect(filtered[0].apps[0]).to.be.equal(filterObj2.appName);
        expect(filtered[0].element).to.be.equal(filterObj2.elements[0]);
    });
    it("can be filtered by compatible functionals", () => {
        const exchangeCorrelation = { approximation: "hybrid", functional: "hse06" };
        const sortedPseudos = Pseudopotential.filterRawDataByExchangeCorrelation(
            pseudos,
            exchangeCorrelation,
        );
        expect(sortedPseudos).to.have.length(3); // there are 3 PBE pseudos above
        expect(sortedPseudos.map((p) => p.exchangeCorrelation.functional)).to.include("pbe");
    });
    it("can be filtered by pseudopotential type", () => {
        const filtered = Pseudopotential.filterByType(pseudos, "paw");
        const filteredWithObject = Pseudopotential.applyPseudoFilters(pseudos, { type: "paw" });
        // may need to be adjusted when new pseudos array is modified!
        expect(filtered).to.have.lengthOf(1);
        expect(filtered[0].type).to.be.equal("paw");
        expect(filtered[0].path).to.be.equal(
            "/export/share/pseudo/si/gga/pbe/vasp/5.2/paw/default/POTCAR",
        );
        expect(filteredWithObject).to.have.deep.members(filtered);
    });
});

describe("PseudopotentialProperty - Additional Tests", () => {
    describe("optional properties", () => {
        const pseudoWithOptionalProps = new Pseudopotential({
            element: "Si",
            hash: "test-hash-123",
            path: "/path/to/pseudo",
            apps: ["espresso"],
            exchangeCorrelation: {
                functional: "pbe",
                approximation: "gga",
            },
            name: "pseudopotential",
            source: "test",
            type: "nc",
            version: "1.0",
            filename: "si_pbe_test.upf",
            valenceConfiguration: "3s2 3p2",
            cutoffs: {
                wfc: 40,
                rho: 160,
            },
        });

        it("should return hash property", () => {
            expect(pseudoWithOptionalProps.hash).to.equal("test-hash-123");
        });

        it("should return valenceConfiguration property", () => {
            expect(pseudoWithOptionalProps.valenceConfiguration).to.equal("3s2 3p2");
        });

        it("should return cutoffs property", () => {
            expect(pseudoWithOptionalProps.cutoffs).to.deep.equal({
                wfc: 40,
                rho: 160,
            });
        });

        it("should return filename property", () => {
            expect(pseudoWithOptionalProps.filename).to.equal("si_pbe_test.upf");
        });

        it("should return version property", () => {
            expect(pseudoWithOptionalProps.version).to.equal("1.0");
        });
    });

    describe("static methods - safelyFilterRawDataBySearchText", () => {
        const testPseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "C",
                hash: "hash2",
                path: "/path/to/c/gbrv/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should return all data when searchText is empty", () => {
            const result = Pseudopotential.safelyFilterRawDataBySearchText(testPseudos, "");
            expect(result).to.have.length(2);
            expect(result).to.deep.equal(testPseudos);
        });

        it("should filter by single search term", () => {
            const result = Pseudopotential.safelyFilterRawDataBySearchText(testPseudos, "gbrv");
            expect(result).to.have.length(1);
            expect(result[0].path).to.include("gbrv");
        });

        it("should filter by multiple search terms with comma separator", () => {
            const result = Pseudopotential.safelyFilterRawDataBySearchText(testPseudos, "pbe,gbrv");
            expect(result).to.have.length(2);
        });

        it("should handle invalid regex gracefully", () => {
            const result = Pseudopotential.safelyFilterRawDataBySearchText(testPseudos, "[invalid");
            expect(result).to.have.length(1); // Should return first element as fallback
        });

        it("should return first element when no matches found", () => {
            const testPseudosCopy = [...testPseudos];
            const result = Pseudopotential.safelyFilterRawDataBySearchText(
                testPseudosCopy,
                "nonexistent",
            );
            expect(result).to.have.length(1);
            expect(result[0].path).to.equal(testPseudos[0].path);
        });

        it("should handle empty search terms in comma-separated list", () => {
            const testPseudosCopy = [...testPseudos];
            const result = Pseudopotential.safelyFilterRawDataBySearchText(
                testPseudosCopy,
                "pbe,,gbrv",
            );
            expect(result).to.have.length(1);
            expect(result[0].path).to.include("gbrv");
        });
    });

    describe("static methods - filterRawDataByPath", () => {
        const rawData = [
            {
                path: "/path/to/si/pbe/upf",
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
            },
            {
                path: "/path/to/c/gbrv/upf",
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
            },
        ];

        it("should filter by path pattern", () => {
            const result = Pseudopotential.filterRawDataByPath(rawData, "gbrv");
            expect(result).to.have.length(1);
            expect(result[0].path).to.include("gbrv");
        });

        it("should return all data when pattern is empty", () => {
            const result = Pseudopotential.filterRawDataByPath(rawData, "");
            expect(result).to.have.length(2);
        });
    });

    describe("static methods - filterUnique", () => {
        const pseudosWithDuplicates = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "Si",
                hash: "hash2",
                path: "/path/to/si/pbe/upf", // Same path
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should filter unique pseudos by path", () => {
            const result = Pseudopotential.filterUnique(pseudosWithDuplicates);
            expect(result).to.have.length(1);
            expect(result[0].path).to.equal("/path/to/si/pbe/upf");
        });
    });

    describe("static methods - filterUniqueByAppName", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso", "vasp"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "Si",
                hash: "hash2",
                path: "/path/to/si/pbe/upf2",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should filter unique pseudos by app name", () => {
            const result = Pseudopotential.filterUniqueByAppName(pseudos, "espresso");
            expect(result).to.have.length(2);
        });

        it("should filter unique pseudos by app name that doesn't exist", () => {
            const result = Pseudopotential.filterUniqueByAppName(pseudos, "nonexistent");
            expect(result).to.have.length(0);
        });
    });

    describe("static methods - filterByAppName", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso", "vasp"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "C",
                hash: "hash2",
                path: "/path/to/c/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should filter by app name", () => {
            const result = Pseudopotential.filterByAppName(pseudos, "vasp");
            expect(result).to.have.length(1);
            expect(result[0].apps).to.include("vasp");
        });

        it("should return empty array when app name doesn't exist", () => {
            const result = Pseudopotential.filterByAppName(pseudos, "nonexistent");
            expect(result).to.have.length(0);
        });
    });

    describe("static methods - filterByElements", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "C",
                hash: "hash2",
                path: "/path/to/c/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should filter by elements", () => {
            const result = Pseudopotential.filterByElements(pseudos, ["Si"]);
            expect(result).to.have.length(1);
            expect(result[0].element).to.equal("Si");
        });

        it("should filter by multiple elements", () => {
            const result = Pseudopotential.filterByElements(pseudos, ["Si", "C"]);
            expect(result).to.have.length(2);
        });

        it("should return empty array when elements don't exist", () => {
            const result = Pseudopotential.filterByElements(pseudos, ["Fe"]);
            expect(result).to.have.length(0);
        });
    });

    describe("static methods - filterByType", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "Si",
                hash: "hash2",
                path: "/path/to/si/pbe/upf2",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "paw",
            }),
        ];

        it("should filter by type", () => {
            const result = Pseudopotential.filterByType(pseudos, "nc");
            expect(result).to.have.length(1);
            expect(result[0].type).to.equal("nc");
        });

        it("should return all pseudos when type is undefined", () => {
            const result = Pseudopotential.filterByType(pseudos, undefined);
            expect(result).to.have.length(2);
        });

        it("should return all pseudos when type is 'any'", () => {
            const result = Pseudopotential.filterByType(pseudos, "any");
            expect(result).to.have.length(2);
        });
    });

    describe("static methods - applyPseudoFilters", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "C",
                hash: "hash2",
                path: "/path/to/c/gbrv/upf",
                apps: ["vasp"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "paw",
            }),
        ];

        it("should apply multiple filters", () => {
            const filters = {
                searchText: "gbrv",
                appName: "vasp",
                type: "paw",
                elements: ["C"],
            };
            const result = Pseudopotential.applyPseudoFilters(pseudos, filters);
            expect(result).to.have.length(1);
            expect(result[0].element).to.equal("C");
        });

        it("should throw error for invalid filter value", () => {
            const filters = {
                searchText: "test",
                invalidFilter: 123,
            };
            expect(() => Pseudopotential.applyPseudoFilters(pseudos, filters)).to.throw(
                "Invalid filter value: 123",
            );
        });
    });

    describe("static methods - sortPseudosByPattern", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
            new Pseudopotential({
                element: "C",
                hash: "hash2",
                path: "/path/to/c/gbrv/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            }),
        ];

        it("should sort by custom pattern", () => {
            const result = Pseudopotential.sortPseudosByPattern(pseudos, "gbrv");
            expect(result[0].path).to.include("gbrv");
        });

        it("should sort by default pattern", () => {
            const result = Pseudopotential.sortPseudosByPattern(pseudos);
            expect(result[0].path).to.include("gbrv");
        });
    });

    describe("static methods - sortByPathVASP", () => {
        const pseudos = [
            new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["vasp"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "paw",
            }),
            new Pseudopotential({
                element: "Si",
                hash: "hash2",
                path: "/path/to/si/pbe/default/5.2/upf",
                apps: ["vasp"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "paw",
            }),
        ];

        it("should sort by VASP path with default and version", () => {
            const result = Pseudopotential.sortByPathVASP(pseudos, "5.2");
            expect(result[0].path).to.include("default");
            expect(result[0].path).to.include("5.2");
        });

        it("should sort by VASP path with default version", () => {
            const result = Pseudopotential.sortByPathVASP(pseudos);
            expect(result[0].path).to.include("default");
        });
    });

    describe("edge cases and error handling", () => {
        it("should handle pseudos with missing optional properties", () => {
            const pseudo = new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            });
            expect(pseudo.valenceConfiguration).to.be.undefined;
            expect(pseudo.cutoffs).to.be.undefined;
            expect(pseudo.filename).to.be.undefined;
            expect(pseudo.version).to.be.undefined;
        });

        it("should handle isCustom property correctly", () => {
            const userPseudo = new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "user",
                type: "nc",
            });
            expect(userPseudo.isCustom).to.be.true;

            const nonUserPseudo = new Pseudopotential({
                element: "Si",
                hash: "hash1",
                path: "/path/to/si/pbe/upf",
                apps: ["espresso"],
                exchangeCorrelation: { functional: "pbe", approximation: "gga" },
                name: "pseudopotential",
                source: "test",
                type: "nc",
            });
            expect(nonUserPseudo.isCustom).to.be.false;
        });
    });
});
