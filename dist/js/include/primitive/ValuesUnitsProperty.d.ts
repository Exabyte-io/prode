import Property from "../../Property";
import type { PropertyName } from "../../settings";
export default class ValuesUnitsProperty<TSchema extends {
    values: unknown;
    units: string;
    name: `${PropertyName}`;
}> extends Property {
    readonly name: TSchema["name"];
    constructor(config: object, propertyName: TSchema["name"]);
    get values(): TSchema["values"];
    get units(): TSchema["units"];
}
