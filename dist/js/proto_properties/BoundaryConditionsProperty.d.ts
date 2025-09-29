import type { BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../settings";
import ProtoProperty from "./ProtoProperty";
type Schema = BoundaryConditionsPropertySchema;
declare class BoundaryConditionsProperty extends ProtoProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.boundary_conditions;
    constructor(config: Omit<Schema, "name">);
    get type(): "pbc" | "bc1" | "bc2" | "bc3";
    get offset(): number;
}
export default BoundaryConditionsProperty;
