import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { PropertyName } from "../settings";
import ProtoProperty from "./ProtoProperty";
type Schema = AtomicConstraintsPropertySchema;
declare class AtomicConstraintsProperty extends ProtoProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_constraints;
    constructor(config: Omit<Schema, "name">);
    get values(): {
        value: [boolean, boolean, boolean];
        id: number;
    }[];
}
export default AtomicConstraintsProperty;
