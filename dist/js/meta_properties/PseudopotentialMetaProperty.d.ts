import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FileDataItem as Schema } from "@mat3ra/esse/dist/js/types";
import { type PseudopotentialMetaPropertySchemaMixin } from "../generated/PseudopotentialMetaPropertySchemaMixin";
import MetaProperty from "../MetaProperty";
import { PropertyName, PropertyType } from "../settings";
type RawDataObject = {
    path: string;
};
declare enum CompatibleExchangeCorrelationKey {
    hse06 = "hse06"
}
type Base = typeof MetaProperty & Constructor<PseudopotentialMetaPropertySchemaMixin>;
declare const PseudopotentialMetaProperty_base: Base;
export default class PseudopotentialMetaProperty extends PseudopotentialMetaProperty_base implements Schema {
    static readonly propertyName = PropertyName.pseudopotential;
    static readonly propertyType = PropertyType.non_scalar;
    static readonly compatibleExchangeCorrelation: {
        hse06: string[];
    };
    _json: Omit<Schema, "name">;
    toJSON: () => Omit<Schema, "name">;
    constructor(config: Omit<Schema, "name">);
    get isCustom(): boolean;
    /**
     * @summary Attempts filtering raw data by search text, split by "," into multiple regular expressions,
     *           splitting to multiple regexps allows to control the order of filtered items
     *           if raw data is not empty but filtered data is, returns first element of raw data (assumed to be default)
     * @note Filters by path!
     */
    static safelyFilterRawDataBySearchText(rawData: PseudopotentialMetaProperty[], searchText: string, separator?: string): PseudopotentialMetaProperty[];
    static isCompatibleWithOther(functional: string): functional is CompatibleExchangeCorrelationKey;
    /**
     * @summary Exclusive filter of raw data by all fields of the passed object
     */
    static filterRawDataByExchangeCorrelation(rawData: PseudopotentialMetaProperty[], exchangeCorrelation: {
        functional: string;
        approximation: string;
    }): PseudopotentialMetaProperty[];
    static filterUnique(array: PseudopotentialMetaProperty[]): PseudopotentialMetaProperty[];
    static filterUniqueByAppName(array: PseudopotentialMetaProperty[], appName: string): PseudopotentialMetaProperty[];
    static filterRawDataByPath(rawData: RawDataObject[], pseudoPath?: string): RawDataObject[];
    static filterByAppName(pseudos: PseudopotentialMetaProperty[], appName: string): PseudopotentialMetaProperty[];
    static filterByElements(pseudos: PseudopotentialMetaProperty[], elements: string[]): PseudopotentialMetaProperty[];
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
    static applyPseudoFilters(pseudos: PseudopotentialMetaProperty[], pseudoFilter: {
        searchText?: string;
        appName?: string;
        type?: string;
        exchangeCorrelation?: {
            functional: keyof typeof PseudopotentialMetaProperty.compatibleExchangeCorrelation;
            approximation: string;
        };
        elements?: string[];
    }): PseudopotentialMetaProperty[];
    /**
     * Sorts pseudos by the given pattern.
     * NOTE: This is currently used to prioritize gbrv pseudopotentials over norm-conserving ones for QE.
     */
    static sortPseudosByPattern(pseudos: PseudopotentialMetaProperty[], pattern?: string): PseudopotentialMetaProperty[];
    /**
     * Prioritizes pseudos with 'default' and '5.2' (version) in path (VASP)
     */
    static sortByPathVASP(pseudos: PseudopotentialMetaProperty[], version?: string): PseudopotentialMetaProperty[];
    static filterByType(pseudos: PseudopotentialMetaProperty[], pseudoType?: string): PseudopotentialMetaProperty[];
}
export {};
