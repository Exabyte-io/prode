"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
const MetaProperty_1 = __importDefault(require("../../MetaProperty"));
var CompatibleExchangeCorrelationKey;
(function (CompatibleExchangeCorrelationKey) {
    CompatibleExchangeCorrelationKey["hse06"] = "hse06";
})(CompatibleExchangeCorrelationKey || (CompatibleExchangeCorrelationKey = {}));
class Pseudopotential extends MetaProperty_1.default {
    get path() {
        return this.requiredProp("path");
    }
    get filename() {
        return this.prop("filename");
    }
    get source() {
        return this.requiredProp("source");
    }
    get element() {
        return this.requiredProp("element");
    }
    get apps() {
        return this.requiredProp("apps");
    }
    get type() {
        return this.requiredProp("type");
    }
    get version() {
        return this.prop("version");
    }
    get exchangeCorrelation() {
        return this.requiredProp("exchangeCorrelation");
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
    static safelyFilterRawDataBySearchText(rawData, searchText = "", separator = ",") {
        if (!searchText)
            return rawData;
        const filteredData = [];
        searchText.split(separator).forEach((txt) => {
            const text = txt.trim(); // remove whitespace and do nothing if empty string
            if (!text)
                return;
            try {
                const regexp = new RegExp(text);
                const filteredData_ = rawData.filter((el) => el.path.match(regexp));
                filteredData.push(...filteredData_);
            }
            catch (e) {
                if (e instanceof Error) {
                    console.error(e.message);
                }
                else {
                    console.error(e);
                }
            }
        });
        return filteredData.length ? filteredData : rawData.splice(0, 1);
    }
    static isCompatibleWithOther(functional) {
        return Object.keys(this.compatibleExchangeCorrelation).includes(functional);
    }
    /**
     * @summary Exclusive filter of raw data by all fields of the passed object
     */
    static filterRawDataByExchangeCorrelation(rawData, exchangeCorrelation) {
        const { functional } = exchangeCorrelation;
        return rawData.filter((item) => {
            var _a, _b;
            return this.isCompatibleWithOther(functional)
                ? this.compatibleExchangeCorrelation[functional].includes(((_a = item.exchangeCorrelation) === null || _a === void 0 ? void 0 : _a.functional) || "")
                : functional === ((_b = item.exchangeCorrelation) === null || _b === void 0 ? void 0 : _b.functional);
        });
    }
    // filter unique (assuming that path is always unique)
    static filterUnique(array) {
        return (0, uniqBy_1.default)(array, (item) => item.path);
    }
    // filter unique by apps (assuming that path is always unique)
    static filterUniqueByAppName(array, appName) {
        return Pseudopotential.filterUnique(this.filterByAppName(array, appName));
    }
    static filterRawDataByPath(rawData, pseudoPath = "") {
        const regexp = new RegExp(pseudoPath);
        return rawData.filter((el) => el.path.match(regexp));
    }
    static filterByAppName(pseudos, appName) {
        return pseudos.filter((pseudo) => pseudo.apps.includes(appName));
    }
    static filterByElements(pseudos, elements) {
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
    static applyPseudoFilters(pseudos, pseudoFilter) {
        let filteredPseudos = [...pseudos];
        Object.entries(pseudoFilter).forEach(([fKey, fValue]) => {
            if (typeof fValue === "string") {
                if (fKey === "searchText") {
                    filteredPseudos = this.safelyFilterRawDataBySearchText(filteredPseudos, fValue);
                }
                else if (fKey === "appName") {
                    filteredPseudos = this.filterByAppName(filteredPseudos, fValue);
                }
                else if (fKey === "type") {
                    filteredPseudos = this.filterByType(filteredPseudos, fValue);
                }
            }
            else if (typeof fValue === "object" &&
                "functional" in fValue &&
                "approximation" in fValue) {
                filteredPseudos = this.filterRawDataByExchangeCorrelation(filteredPseudos, fValue);
            }
            else if (Array.isArray(fValue)) {
                filteredPseudos = this.filterByElements(filteredPseudos, fValue);
            }
            else {
                throw new Error(`Invalid filter value: ${fValue}`);
            }
        });
        return filteredPseudos;
    }
    /**
     * Sorts pseudos by the given pattern.
     * NOTE: This is currently used to prioritize gbrv pseudopotentials over norm-conserving ones for QE.
     */
    static sortPseudosByPattern(pseudos, pattern = "/gbrv/") {
        return pseudos.concat([]).sort((a, b) => {
            return (b.path.includes(pattern) ? 1 : 0) - (a.path.includes(pattern) ? 1 : 0);
        });
    }
    /**
     * Prioritizes pseudos with 'default' and '5.2' (version) in path (VASP)
     */
    static sortByPathVASP(pseudos, version = "5.2") {
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
    static filterByType(pseudos, pseudoType) {
        if (pseudoType === undefined || pseudoType === "any")
            return pseudos;
        return pseudos.filter((pseudo) => pseudo.type.includes(pseudoType));
    }
}
Pseudopotential.compatibleExchangeCorrelation = {
    hse06: ["pbe", "hse06"],
};
exports.default = Pseudopotential;
