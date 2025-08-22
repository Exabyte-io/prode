import type { PropertyName } from "src/js/settings";
import Property from "../../Property";
export default class ScalarProperty<TSchema extends {
    value: number;
    units: string;
    name: `${PropertyName}`;
}> extends Property {
    readonly name: TSchema["name"];
    constructor(config: object, propertyName: TSchema["name"]);
    get value(): TSchema["value"];
    get units(): TSchema["units"];
}
