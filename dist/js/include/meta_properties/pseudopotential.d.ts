import MetaProperty from "../../MetaProperty";
type RawDataObject = {
    path: string;
    exchangeCorrelation: {
        functional: string;
        approximation: string;
    };
};
declare enum CompatibleExchangeCorrelationKey {
    hse06 = "hse06"
}
export default class Pseudopotential extends MetaProperty {
    static readonly compatibleExchangeCorrelation: {
        hse06: string[];
    };
    get path(): string;
    get filename(): string | undefined;
    get source(): string;
    get element(): string;
    get apps(): string[];
    get type(): "us" | "nc" | "nc-fr" | "paw" | "coulomb";
    get version(): string | undefined;
    get exchangeCorrelation(): {
        approximation?: string;
        functional?: string;
        path?: string;
    };
    get isCustom(): boolean;
    /**
     * @summary Attempts filtering raw data by search text, split by "," into multiple regular expressions,
     *           splitting to multiple regexps allows to control the order of filtered items
     *           if raw data is not empty but filtered data is, returns first element of raw data (assumed to be default)
     * @note Filters by path!
     */
    static safelyFilterRawDataBySearchText(rawData: Pseudopotential[], searchText?: string, separator?: string): Pseudopotential[];
    static isCompatibleWithOther(functional: string): functional is CompatibleExchangeCorrelationKey;
    /**
     * @summary Exclusive filter of raw data by all fields of the passed object
     */
    static filterRawDataByExchangeCorrelation(rawData: Pseudopotential[], exchangeCorrelation: {
        functional: string;
        approximation: string;
    }): Pseudopotential[];
    static filterUnique(array: Pseudopotential[]): Pseudopotential[];
    static filterUniqueByAppName(array: Pseudopotential[], appName: string): Pseudopotential[];
    static filterRawDataByPath(rawData: RawDataObject[], pseudoPath?: string): RawDataObject[];
    static filterByAppName(pseudos: Pseudopotential[], appName: string): Pseudopotential[];
    static filterByElements(pseudos: Pseudopotential[], elements: string[]): Pseudopotential[];
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
    static applyPseudoFilters(pseudos: Pseudopotential[], pseudoFilter: {
        searchText: string;
        appName: string;
        type: string;
        exchangeCorrelation: {
            functional: keyof typeof Pseudopotential.compatibleExchangeCorrelation;
            approximation: string;
        };
        elements: string[];
    }): Pseudopotential[];
    /**
     * Sorts pseudos by the given pattern.
     * NOTE: This is currently used to prioritize gbrv pseudopotentials over norm-conserving ones for QE.
     */
    static sortPseudosByPattern(pseudos: Pseudopotential[], pattern?: string): Pseudopotential[];
    /**
     * Prioritizes pseudos with 'default' and '5.2' (version) in path (VASP)
     */
    static sortByPathVASP(pseudos: Pseudopotential[], version?: string): Pseudopotential[];
    static filterByType(pseudos: Pseudopotential[], pseudoType: string): Pseudopotential[];
}
export {};
