import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { BandGapsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { type BandGapsPropertySchemaMixin } from "../../generated/BandGapsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = BandGapsPropertySchema;
type Base = typeof Property<Schema> & Constructor<BandGapsPropertySchemaMixin>;
declare const BandGapsProperty_base: Base;
export default class BandGapsProperty extends BandGapsProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.band_gaps;
    static readonly propertyType = PropertyType.non_scalar;
    constructor(config: Omit<Schema, "name">);
    toRowValues(group?: string): {
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
        group: string | undefined;
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
}
export {};
