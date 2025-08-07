import type { FileDataItem } from "@mat3ra/esse/dist/js/types";
import uniqBy from "lodash/uniqBy";

import MetaProperty from "../../MetaProperty";

type RawDataObject = {
    path: string;
    exchangeCorrelation: {
        functional: string;
        approximation: string;
    };
};

enum CompatibleExchangeCorrelationKey {
    hse06 = "hse06",
}

export class Pseudopotential extends MetaProperty {
    static readonly compatibleExchangeCorrelation = {
        hse06: ["pbe", "hse06"],
    };

    get path() {
        return this.requiredProp<FileDataItem["path"]>("path");
    }

    get filename() {
        return this.prop<FileDataItem["filename"]>("filename");
    }

    get source() {
        return this.requiredProp<FileDataItem["source"]>("source");
    }

    get element() {
        return this.requiredProp<FileDataItem["element"]>("element");
    }

    get apps() {
        return this.requiredProp<FileDataItem["apps"]>("apps");
    }

    get type() {
        return this.requiredProp<FileDataItem["type"]>("type");
    }

    get version() {
        return this.prop<FileDataItem["version"]>("version");
    }

    get exchangeCorrelation() {
        return this.requiredProp<FileDataItem["exchangeCorrelation"]>("exchangeCorrelation");
    }

    get isCustom() {
        return this.source === "user";
    }

    /**
     * @summary Attempts filtering raw data by search text, split by "," into multiple regular expressions,
     *           splitting to multiple regexps allows to control the order of filtered items
     *           if raw data is not empty but filtered data is, returns first element of raw data (assumed to be default)
     * @note Filters by path!
     */
    static safelyFilterRawDataBySearchText(
        rawData: Pseudopotential[],
        searchText = "",
        separator = ",",
    ) {
        if (!searchText) return rawData;
        const filteredData: Pseudopotential[] = [];
        searchText.split(separator).forEach((txt) => {
            const text = txt.trim(); // remove whitespace and do nothing if empty string
            if (!text) return;
            try {
                const regexp = new RegExp(text);
                const filteredData_ = rawData.filter((el) => el.path.match(regexp));
                filteredData.push(...filteredData_);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    console.error(e.message);
                } else {
                    console.error(e);
                }
            }
        });
        return filteredData.length ? filteredData : rawData.splice(0, 1);
    }

    static isCompatibleWithOther(
        functional: string,
    ): functional is CompatibleExchangeCorrelationKey {
        return Object.keys(this.compatibleExchangeCorrelation).includes(functional);
    }

    /**
     * @summary Exclusive filter of raw data by all fields of the passed object
     */
    static filterRawDataByExchangeCorrelation(
        rawData: Pseudopotential[],
        exchangeCorrelation: {
            functional: string;
            approximation: string;
        },
    ) {
        const { functional } = exchangeCorrelation;

        return rawData.filter((item) => {
            return this.isCompatibleWithOther(functional)
                ? this.compatibleExchangeCorrelation[functional].includes(
                      item.exchangeCorrelation?.functional || "",
                  )
                : functional === item.exchangeCorrelation?.functional;
        });
    }

    // filter unique (assuming that path is always unique)
    static filterUnique(array: Pseudopotential[]) {
        return uniqBy(array, (item) => item.path);
    }

    // filter unique by apps (assuming that path is always unique)
    static filterUniqueByAppName(array: Pseudopotential[], appName: string) {
        return Pseudopotential.filterUnique(this.filterByAppName(array, appName));
    }

    static filterRawDataByPath(rawData: RawDataObject[], pseudoPath = "") {
        const regexp = new RegExp(pseudoPath);
        return rawData.filter((el) => el.path.match(regexp));
    }

    static filterByAppName(pseudos: Pseudopotential[], appName: string) {
        return pseudos.filter((pseudo) => pseudo.apps.includes(appName));
    }

    static filterByElements(pseudos: Pseudopotential[], elements: string[]) {
        return pseudos.filter((pseudo) => elements.includes(pseudo.element));
    }

    /** Apply several filters at once.
     * @example
     * // filter object
     * {
     *     exchangeCorrelation: {
     *         approximation: "gga",
     *         functional: "pbe"
     *     },
     *     searchText: "gbrv",
     *     appName: "vasp",
     *     elements: ["Si", "Ne", "Fe"],
     * }
     */
    static applyPseudoFilters(
        pseudos: Pseudopotential[],
        pseudoFilter: {
            searchText: string;
            appName: string;
            type: string;
            exchangeCorrelation: {
                functional: keyof typeof Pseudopotential.compatibleExchangeCorrelation;
                approximation: string;
            };
            elements: string[];
        },
    ) {
        let filteredPseudos = [...pseudos];

        Object.entries(pseudoFilter).forEach(([fKey, fValue]) => {
            if (typeof fValue === "string") {
                if (fKey === "searchText") {
                    filteredPseudos = this.safelyFilterRawDataBySearchText(filteredPseudos, fValue);
                } else if (fKey === "appName") {
                    filteredPseudos = this.filterByAppName(filteredPseudos, fValue);
                } else if (fKey === "type") {
                    filteredPseudos = this.filterByType(filteredPseudos, fValue);
                }
            } else if (
                typeof fValue === "object" &&
                "functional" in fValue &&
                "approximation" in fValue
            ) {
                filteredPseudos = this.filterRawDataByExchangeCorrelation(filteredPseudos, fValue);
            } else if (Array.isArray(fValue)) {
                filteredPseudos = this.filterByElements(filteredPseudos, fValue);
            } else {
                throw new Error(`Invalid filter value: ${fValue}`);
            }
        });

        return filteredPseudos;
    }

    /**
     * Sorts pseudos by the given pattern.
     * NOTE: This is currently used to prioritize gbrv pseudopotentials over norm-conserving ones for QE.
     */
    static sortPseudosByPattern(pseudos: Pseudopotential[], pattern = "/gbrv/") {
        return pseudos.concat([]).sort((a, b) => {
            return (b.path.includes(pattern) ? 1 : 0) - (a.path.includes(pattern) ? 1 : 0);
        });
    }

    /**
     * Prioritizes pseudos with 'default' and '5.2' (version) in path (VASP)
     */
    static sortByPathVASP(pseudos: Pseudopotential[], version = "5.2") {
        return pseudos.concat([]).sort((a, b) => {
            if (a.path.includes("default") && a.path.includes(version)) {
                return -1;
            }
            if (b.path.includes("default") && b.path.includes(version)) {
                return 1;
            }
            return 0;
        });
    }

    static filterByType(pseudos: Pseudopotential[], pseudoType: string) {
        if (pseudoType === undefined || pseudoType === "any") return pseudos;
        return pseudos.filter((pseudo) => pseudo.type.includes(pseudoType));
    }
}
