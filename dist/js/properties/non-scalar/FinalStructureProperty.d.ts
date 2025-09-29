import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { FinalStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../../settings";
import NonScalarProperty from "./base/NonScalarProperty";
type Schema = FinalStructurePropertySchema;
export default class FinalStructureProperty extends NonScalarProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.final_structure;
    toJSON: (exclude?: string[]) => Schema & AnyObject;
    _json: Schema & AnyObject;
    constructor(config: Omit<Schema, "name">);
    get isRelaxed(): boolean;
    get formula(): string | undefined;
    get unitCellFormula(): string | undefined;
    get basis(): {
        elements: {
            value: (("H" | "He" | "Li" | "Be" | "B" | "C" | "N" | "O" | "F" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "P" | "S" | "Cl" | "Ar" | "K" | "Ca" | "Sc" | "Ti" | "V" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Y" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "I" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "W" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "U" | "Np" | "Pu" | "Am" | "Cm" | "Bk" | "Cf" | "Es" | "Fm" | "Md" | "No" | "Lr" | "Rf" | "Db" | "Sg" | "Bh" | "Hs" | "Mt" | "Ds" | "Rg" | "Cn" | "Nh" | "Fl" | "Mc" | "Lv" | "Ts" | "Og") | ("X" | "Vac")) & string;
            id: number;
        }[];
        coordinates: {
            value: [number, number, number];
            id: number;
        }[];
        units?: "crystal" | "cartesian";
        labels?: {
            value: (number | string) | number;
            id: number;
        }[];
    };
    get lattice(): {
        a: number;
        b: number;
        c: number;
        alpha: number;
        beta: number;
        gamma: number;
        vectors?: {
            a: [number, number, number];
            b: [number, number, number];
            c: [number, number, number];
            alat?: number;
            units?: "angstrom" | "bohr";
        };
        type?: "CUB" | "BCC" | "FCC" | "TET" | "MCL" | "ORC" | "ORCC" | "ORCF" | "ORCI" | "HEX" | "BCT" | "TRI" | "MCLC" | "RHL";
        units?: {
            length?: "angstrom" | "bohr";
            angle?: "degree" | "radian";
        };
    };
    get derivedProperties(): ({
        name?: "volume";
        units?: "angstrom^3";
        value: number;
    } | {
        name?: "density";
        units?: "g/cm^3";
        value: number;
    } | {
        pointGroupSymbol?: string;
        spaceGroupSymbol?: string;
        tolerance?: {
            units?: "angstrom";
            value: number;
        };
        name?: "symmetry";
    } | {
        name?: "elemental_ratio";
        value: number;
        element?: string;
    } | {
        name?: "p-norm";
        degree?: number;
        value: number;
    } | {
        name?: "inchi";
        value: string;
    } | {
        name?: "inchi_key";
        value: string;
    })[] | undefined;
    get external(): {
        id: string | number;
        source: string;
        origin: boolean;
        data?: {};
        doi?: string;
        url?: string;
    } | undefined;
    get src(): {
        extension?: string;
        filename: string;
        text: string;
        hash: string;
    } | undefined;
    get scaledHash(): string | undefined;
    get icsdId(): number | undefined;
    get isNonPeriodic(): boolean | undefined;
    get consistencyChecks(): {
        name: "default" | "atomsTooClose" | "atomsOverlap";
        key: string;
        severity: "info" | "warning" | "error";
        message: string;
    }[] | undefined;
    get isDefault(): boolean | undefined;
    get metadata(): {} | undefined;
}
export {};
