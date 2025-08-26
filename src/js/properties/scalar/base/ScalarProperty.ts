import Property from "../../../Property";
import { type PropertyName, PropertyType } from "../../../settings";

export default abstract class ScalarProperty<
    TSchema extends { value: number; units: string; name: `${PropertyName}` },
> extends Property {
    static readonly propertyType = PropertyType.scalar;

    declare name: TSchema["name"];

    get value() {
        return this.requiredProp<TSchema["value"]>("value");
    }

    get units() {
        return this.requiredProp<TSchema["units"]>("units");
    }
}
