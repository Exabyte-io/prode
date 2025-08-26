import { type PropertyName } from "../../../settings";
import TensorProperty from "./TensorProperty";
export default abstract class TensorValueProperty<TSchema extends {
    value: unknown;
    units: string;
    name: `${PropertyName}`;
}> extends TensorProperty<TSchema> {
    get value(): TSchema["value"];
}
