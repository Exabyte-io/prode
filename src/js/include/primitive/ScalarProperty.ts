import type { PropertyName } from "src/js/settings";

import Property from "../../Property";

export default class ScalarProperty<
    TSchema extends { value: number; units: string; name: `${PropertyName}` },
> extends Property {
    declare readonly name: TSchema["name"];

    constructor(config: object, propertyName: TSchema["name"]) {
        super({ ...config, name: propertyName });
    }

    get value() {
        return this.requiredProp<TSchema["value"]>("value");
    }

    get units() {
        return this.requiredProp<TSchema["units"]>("units");
    }
}
