import { expect } from "chai";

import PropertyClass from "../../src/js/Property";
import { PropertyName } from "../../src/js/settings";

describe("Property", () => {
    const obj = { name: PropertyName.pressure };

    it("can be created", () => {
        const property = new PropertyClass(obj);
        expect(property).to.be.instanceOf(PropertyClass);
    });

    it("has a name", () => {
        const property = new PropertyClass(obj);
        expect(property.name).to.equal(PropertyName.pressure);
    });
});
