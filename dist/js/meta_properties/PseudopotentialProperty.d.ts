import type { FileDataItem } from "@mat3ra/esse/dist/js/types";
import { PropertyName, PropertyType } from "../settings";
import MetaProperty from "./MetaProperty";
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
export default class PseudopotentialProperty extends MetaProperty implements FileDataItem {
    readonly name: FileDataItem["name"];
    static readonly propertyName = PropertyName.pseudopotential;
    static readonly propertyType = PropertyType.non_scalar;
    static readonly compatibleExchangeCorrelation: {
        hse06: string[];
    };
    get path(): string;
    get hash(): string;
    get valenceConfiguration(): {
        orbitalName?: string;
        orbitalIndex?: number;
        principalNumber?: number;
        angularMomentum?: number;
        occupation?: number;
    }[] | undefined;
    get cutoffs(): {
        wavefunction?: {
            unit: "Ry";
            accuracy_level: "standard" | "low" | "high";
            value: number;
        }[];
        density?: {
            unit: "Ry";
            accuracy_level: "standard" | "low" | "high";
            value: number;
        }[];
    } | undefined;
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
    static safelyFilterRawDataBySearchText(rawData: PseudopotentialProperty[], searchText?: string, separator?: string): PseudopotentialProperty[];
    static isCompatibleWithOther(functional: string): functional is CompatibleExchangeCorrelationKey;
    /**
     * @summary Exclusive filter of raw data by all fields of the passed object
     */
    static filterRawDataByExchangeCorrelation(rawData: PseudopotentialProperty[], exchangeCorrelation: {
        functional: string;
        approximation: string;
    }): PseudopotentialProperty[];
    static filterUnique(array: PseudopotentialProperty[]): PseudopotentialProperty[];
    static filterUniqueByAppName(array: PseudopotentialProperty[], appName: string): PseudopotentialProperty[];
    static filterRawDataByPath(rawData: RawDataObject[], pseudoPath?: string): RawDataObject[];
    static filterByAppName(pseudos: PseudopotentialProperty[], appName: string): PseudopotentialProperty[];
    static filterByElements(pseudos: PseudopotentialProperty[], elements: string[]): PseudopotentialProperty[];
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
    static applyPseudoFilters(pseudos: PseudopotentialProperty[], pseudoFilter: {
        searchText: string;
        appName: string;
        type: string;
        exchangeCorrelation: {
            functional: keyof typeof PseudopotentialProperty.compatibleExchangeCorrelation;
            approximation: string;
        };
        elements: string[];
    }): PseudopotentialProperty[];
    /**
     * Sorts pseudos by the given pattern.
     * NOTE: This is currently used to prioritize gbrv pseudopotentials over norm-conserving ones for QE.
     */
    static sortPseudosByPattern(pseudos: PseudopotentialProperty[], pattern?: string): PseudopotentialProperty[];
    /**
     * Prioritizes pseudos with 'default' and '5.2' (version) in path (VASP)
     */
    static sortByPathVASP(pseudos: PseudopotentialProperty[], version?: string): PseudopotentialProperty[];
    static filterByType(pseudos: PseudopotentialProperty[], pseudoType: string): PseudopotentialProperty[];
}
export {};
