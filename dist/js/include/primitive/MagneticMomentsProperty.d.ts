import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
import ValuesUnitsProperty from "./ValuesUnitsProperty";
type Schema = MagneticMomentsPropertySchema;
export default class MagneticMomentsProperty extends ValuesUnitsProperty<Schema> implements Schema {
    constructor(config: object);
}
export {};
