import Property from "../../../Property";
import { type PropertyName, PropertyType } from "../../../settings";

export default class NonScalarProperty<
    TSchema extends { name: `${PropertyName}` },
> extends Property {
    static readonly propertyType = PropertyType.non_scalar;

    declare name: TSchema["name"];
}
