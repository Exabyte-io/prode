import Property from "../../../Property";
import { type PropertyName, PropertyType } from "../../../settings";
export default abstract class TensorProperty<TSchema extends {
    units: string;
    name: `${PropertyName}`;
}> extends Property {
    static readonly propertyType = PropertyType.tensor;
    name: TSchema["name"];
    get units(): TSchema["units"];
}
