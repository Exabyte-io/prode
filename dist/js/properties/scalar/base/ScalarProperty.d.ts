import Property from "../../../Property";
import { type PropertyName, PropertyType } from "../../../settings";
export default abstract class ScalarProperty<TSchema extends {
    value: number;
    units: string;
    name: `${PropertyName}`;
}> extends Property {
    static readonly propertyType = PropertyType.scalar;
    name: TSchema["name"];
    get value(): TSchema["value"];
    get units(): TSchema["units"];
}
