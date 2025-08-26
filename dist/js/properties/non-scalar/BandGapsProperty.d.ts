import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = BandGapsPropertySchema;
export default class BandGapsProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.band_gaps;
    toJSON: () => BandGapsPropertySchema & AnyObject;
    constructor(config: Omit<Schema, "name">);
    get eigenvalues(): {
        kpoint?: [number, number, number];
        weight?: number;
        eigenvalues?: {
            spin?: number;
            energies?: unknown[];
            occupations?: unknown[];
        }[];
    }[] | undefined;
    get values(): {
        kpointConduction?: [number, number, number];
        kpointValence?: [number, number, number];
        eigenvalueConduction?: number;
        eigenvalueValence?: number;
        spin?: number;
        type: "direct" | "indirect";
        units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
        value: number;
    }[];
    toRowValues(group: string): {
        data: {
            name: string;
            kpointConduction?: [number, number, number];
            kpointValence?: [number, number, number];
            eigenvalueConduction?: number;
            eigenvalueValence?: number;
            spin?: number;
            type?: "direct" | "indirect" | undefined;
            units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            value?: number | undefined;
        };
        slug: string;
        group: string;
        name: "band_gaps";
        values: {
            kpointConduction?: [number, number, number];
            kpointValence?: [number, number, number];
            eigenvalueConduction?: number;
            eigenvalueValence?: number;
            spin?: number;
            type: "direct" | "indirect";
            units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            value: number;
        }[];
        eigenvalues?: {
            kpoint?: [number, number, number];
            weight?: number;
            eigenvalues?: {
                spin?: number;
                energies?: unknown[];
                occupations?: unknown[];
            }[];
        }[];
    }[];
    flattenProperties(): {
        [x: string]: unknown;
    }[];
    /**
     * @summary Gets specified band gap (direct/indirect) and returns it in simplified form (as pressure).
     * Characteristic name will be `band_gaps:<type>`
     * @param type {String}
     */
    private toJSONByType;
    /**
     * @summary Converts QueryBuilder selector into mongo selector by value.
     * @param name band_gaps:direct/band_gaps:indirect
     * @param selector Mongo selector
     */
    static normalizeSelectorByDataField(name: string, selector: object): {
        name: string;
        values: {
            $elemMatch: {
                type: string;
                value: object;
            };
        };
    };
}
export {};
