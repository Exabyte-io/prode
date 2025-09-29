import { type PropertyName } from "../../../settings";
import TensorProperty from "./TensorProperty";

export default abstract class TensorValuesProperty<
    TSchema extends { values: unknown; units: string; name: `${PropertyName}` },
> extends TensorProperty<TSchema> {
    get values() {
        return this.requiredProp<TSchema["values"]>("values");
    }
}
