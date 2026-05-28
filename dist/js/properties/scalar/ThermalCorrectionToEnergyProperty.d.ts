import type { ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { ThermalCorrectionToEnergyPropertySchemaMixin } from "../../generated/ThermalCorrectionToEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = ThermalCorrectionToEnergyPropertySchema;
interface ThermalCorrectionToEnergyProperty extends ThermalCorrectionToEnergyPropertySchemaMixin {
}
declare class ThermalCorrectionToEnergyProperty extends Property<Schema> implements Schema {
    static readonly propertyType = PropertyType.scalar;
    static readonly propertyName = PropertyName.thermal_correction_to_energy;
    static readonly isRefined = true;
    name: Schema["name"];
    constructor(config: Omit<Schema, "name">);
}
export default ThermalCorrectionToEnergyProperty;
