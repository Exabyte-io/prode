import type { PropertyName } from "../../../settings";
import NonScalarProperty from "./NonScalarProperty";

export default abstract class ValuesUnitsProperty<
    TSchema extends { values: unknown; units: string; name: `${PropertyName}` },
> extends NonScalarProperty<TSchema> {
    get values() {
        return this.requiredProp<TSchema["values"]>("values");
    }

    get units() {
        return this.requiredProp<TSchema["units"]>("units");
    }
}
