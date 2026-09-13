/* eslint-disable no-unused-expressions */
import { expect } from "chai";

import Pseudopotential from "../../../src/js/meta_properties/PseudopotentialMetaProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("PseudopotentialMetaProperty", () => {
    const exchangeCorrelation = {
        functional: "pbe" as const,
        approximation: "gga" as const,
    };

    const pseudos = [
        new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash1",
            path: "/path/to/si/pbe/upf",
            apps: ["espresso"],
            source: "test",
            type: "nc" as const,
        }),
        new Pseudopotential({
            exchangeCorrelation,
            element: "C",
            hash: "hash2",
            path: "/path/to/c/gbrv/upf",
            apps: ["vasp"],
            source: "user",
            type: "paw" as const,
        }),
    ];

    it("should create a pseudopotential meta property with correct constructor, propertyType, propertyName, static properties, and custom getter", () => {
        expect(Pseudopotential.propertyType).equal(PropertyType.non_scalar);
        expect(Pseudopotential.propertyName).equal(PropertyName.pseudopotential);
        expect(Pseudopotential.compatibleExchangeCorrelation).to.be.an("object");
        expect(Pseudopotential.compatibleExchangeCorrelation).to.have.property("hse06");
        expect(Pseudopotential.compatibleExchangeCorrelation.hse06).to.be.an("array");

        expect(pseudos[0].isCustom).to.equal(false);
        expect(pseudos[1].isCustom).to.equal(true);
    });

    it("should test all static methods", () => {
        const filters = {
            searchText: "gbrv",
            appName: "vasp",
            type: "paw",
            elements: ["C"],
            exchangeCorrelation: {
                functional: "hse06" as const,
                approximation: "gga",
            },
        };

        const filteredResult = Pseudopotential.applyPseudoFilters(pseudos, filters);
        expect(filteredResult).to.have.length(1);
        expect(filteredResult[0].element).to.equal("C");
        expect(filteredResult[0].path).to.include("gbrv");
        expect(filteredResult[0].apps).to.include("vasp");
        expect(filteredResult[0].type).to.equal("paw");
        expect(filteredResult[0].exchangeCorrelation.functional).to.equal("pbe");
        expect(filteredResult[0].exchangeCorrelation.approximation).to.equal("gga");

        const invalidResult = Pseudopotential.applyPseudoFilters(pseudos, {
            searchText: "invalid[regex", // Invalid regex pattern
            elements: ["C"],
        });
        expect(invalidResult).to.have.length(0);

        const resultWithComma = Pseudopotential.applyPseudoFilters(pseudos, {
            searchText: "gbrv, ",
            elements: ["C"],
        });
        expect(resultWithComma).to.have.length(1);
        expect(resultWithComma[0].path).to.include("gbrv");

        // Test applyPseudoFilters with empty searchText
        const resultWithEmptySearch = Pseudopotential.applyPseudoFilters(pseudos, {
            searchText: "",
            elements: ["C"],
        });
        expect(resultWithEmptySearch).to.have.length(1);
        expect(resultWithEmptySearch[0].element).to.equal("C");

        const patternResult = Pseudopotential.sortPseudosByPattern(pseudos, "gbrv");
        expect(patternResult).to.have.length(2);
        expect(patternResult[0].path).to.include("gbrv");
        expect(patternResult[1].path).to.not.include("gbrv");

        const defaultResult = Pseudopotential.sortPseudosByPattern(pseudos);
        expect(defaultResult).to.have.length(2);
        expect(defaultResult[0].path).to.include("gbrv");

        // Test sortByPathVASP with different paths to cover all conditions
        const vaspPseudos = [
            new Pseudopotential({
                ...pseudos[0]._json,
                path: "/path/to/si/regular/upf",
            }),
            new Pseudopotential({
                ...pseudos[1]._json,
                path: "/path/to/c/default/5.2/upf",
            }),
            new Pseudopotential({
                ...pseudos[1]._json,
                path: "/path/to/o/default/5.1/upf",
            }),
        ];

        const vaspResult = Pseudopotential.sortByPathVASP(vaspPseudos);
        expect(vaspResult).to.have.length(3);
        expect(vaspResult).to.be.an("array");
        // The C pseudopotential with "default" and "5.2" should be first
        expect(vaspResult[0].path).to.include("default");
        expect(vaspResult[0].path).to.include("5.2");

        const vaspAppResult = Pseudopotential.sortByPathApplicationSpecific(vaspPseudos, "vasp");
        expect(vaspAppResult[0].path).to.equal(vaspResult[0].path);

        const espressoAppResult = Pseudopotential.sortByPathApplicationSpecific(
            vaspPseudos,
            "espresso",
        );
        expect(espressoAppResult).to.deep.equal(vaspPseudos);

        const rawData = pseudos.map((pseudo) => pseudo._json);
        const gbrvResults = Pseudopotential.filterRawDataByPath(rawData, "gbrv");
        expect(gbrvResults).to.have.length(1);
        expect(gbrvResults[0].path).to.include("gbrv");

        const uniqueByAppResults = Pseudopotential.filterUniqueByAppName(pseudos, "espresso");
        expect(uniqueByAppResults).to.have.length(1);
        expect(uniqueByAppResults[0].apps).to.include("espresso");

        expect(() => {
            // @ts-expect-error - invalid filter value
            Pseudopotential.applyPseudoFilters(pseudos, { invalidFilter: 123 });
        }).to.throw("Invalid filter value: 123");
    });

    describe("applications reusing other applications' pseudopotentials", () => {
        const espressoUltrasoft = new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash3",
            path: "/export/share/pseudo/si/gga/pbe/gbrv/1.0/us/si_pbe_gbrv_1.0.upf",
            apps: ["espresso"],
            source: "exabyte",
            type: "us" as const,
        });
        const espressoNormConserving = new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash4",
            path: "/export/share/pseudo/si/gga/pbe/dojo-oncv/0.4/nc/si_pbe_dojo-oncv_0.4.upf",
            apps: ["espresso"],
            source: "exabyte",
            type: "nc" as const,
        });
        const espressoProjectorAugmentedWave = new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash5",
            path: "/export/share/pseudo/si/gga/pbe/dojo-jth/1.1/paw/si_pbe_dojo-jth_1.1.upf",
            apps: ["espresso"],
            source: "exabyte",
            type: "paw" as const,
        });
        const vaspProjectorAugmentedWave = new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash6",
            path: "/export/share/pseudo/si/gga/pbe/vasp/5.2/paw/default/POTCAR",
            apps: ["vasp"],
            source: "exabyte",
            type: "paw" as const,
        });
        const q3NativeUltrasoft = new Pseudopotential({
            exchangeCorrelation,
            element: "Si",
            hash: "hash7",
            path: "/export/share/pseudo/si/gga/pbe/q3/1.0/us/si_pbe_q3_1.0.upf",
            apps: ["q3"],
            source: "exabyte",
            type: "us" as const,
        });
        const q3Pseudos = [
            vaspProjectorAugmentedWave,
            espressoNormConserving,
            espressoProjectorAugmentedWave,
            espressoUltrasoft,
            q3NativeUltrasoft,
        ];

        it("keeps native q3 and espresso pseudopotentials for q3, not vasp", () => {
            const filtered = Pseudopotential.filterByAppName(q3Pseudos, "q3");
            expect(filtered).to.have.length(4);
            expect(filtered.every((pseudo) => !pseudo.apps.includes("vasp"))).to.equal(true);
        });

        it("keeps only its own pseudopotentials for an application without compatible ones", () => {
            const filtered = Pseudopotential.filterByAppName(q3Pseudos, "espresso");
            expect(filtered).to.have.length(3);
            expect(filtered.every((pseudo) => pseudo.apps.includes("espresso"))).to.equal(true);
        });

        it("lists only ultrasoft espresso and native q3 pseudopotentials under the us subtype", () => {
            const filtered = Pseudopotential.applyPseudoFilters(q3Pseudos, {
                appName: "q3",
                type: "us",
                elements: ["Si"],
            });
            expect(filtered).to.have.length(2);
            expect(filtered.map((pseudo) => pseudo.apps[0]).sort()).to.deep.equal([
                "espresso",
                "q3",
            ]);
        });

        it("lists espresso paw UPF files for q3 under the paw subtype, not vasp POTCARs", () => {
            const filtered = Pseudopotential.applyPseudoFilters(q3Pseudos, {
                appName: "q3",
                type: "paw",
                elements: ["Si"],
            });
            expect(filtered).to.have.length(1);
            expect(filtered[0].apps).to.include("espresso");
            expect(filtered[0].path).to.include(".upf");
        });

        it("lists native q3 pseudopotentials before espresso ones", () => {
            const sorted = Pseudopotential.sortByPathApplicationSpecific(q3Pseudos, "q3");
            expect(sorted.map((pseudo) => pseudo.apps[0])).to.deep.equal([
                "q3",
                "espresso",
                "espresso",
                "espresso",
                "vasp",
            ]);
        });

        it("preserves the preceding order within espresso, making gbrv the default among reused files", () => {
            const sorted = Pseudopotential.sortByPathApplicationSpecific(
                Pseudopotential.sortPseudosByPattern(
                    q3Pseudos.filter((pseudo) => !pseudo.apps.includes("q3")),
                ),
                "q3",
            );
            expect(sorted[0].path).to.include("/gbrv/");
        });
    });
});
