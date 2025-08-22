import Property from "../../Property";
import type { PropertyName } from "../../settings";

export default class ValuesUnitsProperty<
    TSchema extends { values: unknown; units: string; name: `${PropertyName}` },
> extends Property {
    declare readonly name: TSchema["name"];

    constructor(config: object, propertyName: TSchema["name"]) {
        super({ ...config, name: propertyName });
    }

    get values() {
        return this.requiredProp<TSchema["values"]>("values");
    }

    get units() {
        return this.requiredProp<TSchema["units"]>("units");
    }
}
