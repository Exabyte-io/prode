import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { KPointPath } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import type { Options } from "highcharts";
import { PhononDispersionsPropertySchemaMixin } from "../../generated/PhononDispersionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = PhononBandStructurePropertySchema;
type Base = typeof Property<Schema> & Constructor<PhononDispersionsPropertySchemaMixin>;
declare const PhononDispersionsProperty_base: Base;
declare class PhononDispersionsProperty extends PhononDispersionsProperty_base implements Schema {
    static readonly propertyName = PropertyName.phonon_dispersions;
    static readonly propertyType = PropertyType.non_scalar;
    readonly subtitle = "Phonon Dispersions";
    readonly yAxisTitle: string;
    readonly chartConfig: Options;
    constructor(config: Omit<Schema, "name"> & {
        pointsPath?: KPointPath;
    });
}
export default PhononDispersionsProperty;
