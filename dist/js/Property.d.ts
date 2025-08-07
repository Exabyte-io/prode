import { NamedInMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { PropertyType } from "./settings";
import { type PropertyConfig } from "./tree";
export default class Property extends NamedInMemoryEntity {
    toJSON: () => PropertyHolderSchema & AnyObject;
    readonly propertyBranch: PropertyConfig;
    readonly prettyName: string;
    readonly omitInResults: boolean;
    readonly isScalar: boolean;
    readonly isTensor: boolean;
    readonly isObject: boolean;
    readonly isConvergence: boolean;
    readonly isAbleToReturnMultipleResults: boolean | undefined;
    readonly type: PropertyType | null;
    readonly isRefined: boolean;
    toRowValues(group?: string, slug?: string): {
        slug: string | undefined;
        group: string | undefined;
        data: {
            name: "ionization_potential";
            units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            value: number;
        } | {
            name: "valence_band_offset";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "zero_point_energy";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "pressure";
            units?: "kbar" | "pa";
            value: number;
        } | {
            name: "reaction_energy_barrier";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "surface_energy";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "total_energy";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "total_force";
            units?: "eV/bohr" | "eV/angstrom" | "Ry/a.u." | "newton" | "kg*m/s^2" | "eV/a.u.";
            value: number;
        } | {
            name: "electron_affinity";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "fermi_energy";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "formation_energy";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            name: "ionization_potential";
            units: ("kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom") | "eV/A^2";
            value: number;
        } | {
            value?: [[number, number, number], [number, number, number], [number, number, number]];
            name: "stress_tensor";
            units?: "kbar" | "pa";
        } | {
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
        } | {
            xAxis: {
                label: "kpoints";
                units?: "crystal" | "cartesian";
            };
            yAxis: {
                label: "energy";
                units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            };
            name: "band_structure";
            spin?: (0.5 | -0.5)[];
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "qpoints";
                units?: "crystal" | "cartesian";
            };
            yAxis: {
                label: "frequency";
                units?: "cm-1" | "THz" | "meV";
            };
            name: "phonon_dispersions";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            temperatureEntropy?: {
                name?: "temperature_entropy";
                value: number;
            };
            harrisFoulkes?: {
                name?: "harris_foulkes";
                value: number;
            };
            oneElectron?: {
                name?: "one_electron";
                value: number;
            };
            hartree?: {
                name?: "hartree";
                value: number;
            };
            exchange?: {
                name?: "exchange";
                value: number;
            };
            exchangeCorrelation?: {
                name?: "exchange_correlation";
                value: number;
            };
            ewald?: {
                name?: "ewald";
                value: number;
            };
            alphaZ?: {
                name?: "alphaZ";
                value: number;
            };
            atomicEnergy?: {
                name?: "atomic_energy";
                value: number;
            };
            eigenvalues?: {
                name?: "eigenvalues";
                value: number;
            };
            PAWDoubleCounting2?: {
                name?: "PAW_double-counting_correction_2";
                value: number;
            };
            PAWDoubleCounting3?: {
                name?: "PAW_double-counting_correction_3";
                value: number;
            };
            hartreeFock?: {
                name?: "hartree_fock";
                value: number;
            };
            name: "total_energy_contributions";
            units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
        } | {
            xAxis: {
                label: "frequency" | "wavenumber";
                units?: "cm-1" | "THz" | "meV";
            };
            yAxis: {
                label: "Intensity" | "Absorbance" | "Absorption coefficient";
                units?: "(debye/angstrom)^2" | "km/mol" | "m/mol" | "a.u.";
            };
            name: "vibrational_spectrum";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "frequency";
                units?: "cm-1" | "THz" | "meV";
            };
            yAxis: {
                label: "Phonon DOS";
                units?: "states/cm-1" | "states/THz" | "states/meV";
            };
            name: "phonon_dos";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "z coordinate";
                units?: string;
            };
            yAxis: {
                label: "energy";
                units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            };
            name: "potential_profile";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "reaction coordinate";
                units?: string;
            };
            yAxis: {
                label: "energy";
                units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            };
            name: "reaction_energy_profile";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "energy";
                units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            };
            yAxis: {
                label: "density of states";
                units?: "states/unitcell";
            };
            name: "density_of_states";
            legend: {
                element?: string;
                index?: number;
                electronicState?: string;
                spin?: 0.5 | -0.5;
            }[];
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            name: "dielectric_tensor";
            values: {
                part: "real" | "imaginary";
                spin?: number;
                frequencies: number[];
                components: [number, number, number][];
            }[];
        } | {
            name: "file_content";
            filetype?: "image" | "text" | "csv";
            objectData: {
                CONTAINER?: string;
                NAME?: string;
                PROVIDER?: string;
                REGION?: string;
                SIZE?: number;
                TIMESTAMP?: string;
            };
            pathname?: string;
            basename?: string;
        } | {
            name: "hubbard_u";
            units?: "eV";
            values?: {
                id: number;
                atomicSpecies: string;
                orbitalName: string;
                value: number;
            }[];
        } | {
            name: "hubbard_v" | "hubbard_v_nn";
            units?: "eV";
            values?: {
                id: number;
                id2: number;
                atomicSpecies: string;
                atomicSpecies2: string;
                orbitalName?: string;
                orbitalName2?: string;
                distance?: number;
                value: number;
            }[];
        } | {
            xAxis: {
                label: "z coordinate";
                units?: "km" | "m" | "cm" | "mm" | "um" | "nm" | "angstrom" | "a.u." | "bohr" | "pm";
            };
            yAxis: {
                label: "energy";
                units?: "kJ/mol" | "eV" | "J/mol" | "hartree" | "cm-1" | "Ry" | "eV/atom";
            };
            name: "average_potential_profile";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            xAxis: {
                label: "z coordinate";
                units?: string;
            };
            yAxis: {
                label: "charge density";
                units?: "e/A";
            };
            name: "charge_density_profile";
            xDataArray: (number | number[])[];
            yDataSeries: [string | number, ...number[]][];
        } | {
            name: "magnetic_moments";
            values?: {
                value: [number, number, number];
                id: number;
            }[];
            units?: "uB";
        } | {
            name: "atomic_forces";
            values?: {
                value: [number, number, number];
                id: number;
            }[];
            units?: "eV/bohr" | "eV/angstrom" | "Ry/a.u." | "newton" | "kg*m/s^2" | "eV/a.u.";
        } | {
            name: "atomic_constraints";
            values?: {
                value: [boolean, boolean, boolean];
                id: number;
            }[];
        } | {
            name: "functional_group";
            atoms?: {
                isConnector?: boolean;
                id: number;
            }[];
            SMARTS?: string;
        } | {
            name: "ring";
            atoms?: {
                isConnector?: boolean;
                id: number;
            }[];
            isAromatic?: boolean;
        } | {
            name: "special_bond";
            atoms?: {
                isConnector?: boolean;
                id: number;
            }[];
        } | {
            name?: "convergence_electronic";
            units?: "eV" | "Ry" | "hartree";
            data: number[][];
        } | {
            name?: "convergence_ionic";
            tolerance?: {
                [k: string]: unknown;
            };
            units?: "eV";
            data: {
                energy: number;
                structure?: {};
                electronic?: {
                    units?: "eV" | "Ry" | "hartree";
                    data?: number[];
                };
            }[];
        };
        source: {
            type: string;
            info: {
                jobId: string;
                unitId: string;
            };
        };
        exabyteId?: string[];
        precision?: {};
        systemTags?: ("isRefined" | "isBest")[];
        _id?: string;
        systemName?: string;
        schemaVersion?: string;
    }[];
    static prettifyName(name: string): string;
    static propertyBranch(propertyName: string): PropertyConfig;
    static omitInResults(propertyName: string): boolean;
    static isScalar(propertyConfig: PropertyConfig): boolean;
    static isConvergence(propertyConfig: PropertyConfig): boolean;
    static readonly scalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly nonScalarsSubTree: import("lodash").Dictionary<PropertyConfig>;
    static readonly convergencesSubTree: import("lodash").Dictionary<PropertyConfig>;
}
